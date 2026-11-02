import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

const isConfigured = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

const transporter = isConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: (Number(process.env.SMTP_PORT) || 465) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : null;

// Simple in-memory rate limit: max 5 messages per IP per 15 minutes
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const requests = new Map();

const isRateLimited = (ip) => {
  const now = Date.now();
  const recent = (requests.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  requests.set(ip, recent);
  return recent.length > MAX_REQUESTS;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

router.post("/", async (req, res) => {
  const { name = "", email = "", organisation = "", topic = "", message = "", website = "" } = req.body || {};

  // Honeypot filled in: pretend success so bots don't retry
  if (website) {
    return res.json({ message: "Message sent" });
  }

  if (isRateLimited(req.ip)) {
    return res.status(429).json({ message: "Too many messages. Please try again later." });
  }

  const fields = {
    name: String(name).trim().slice(0, 200),
    email: String(email).trim().slice(0, 200),
    organisation: String(organisation).trim().slice(0, 200),
    topic: String(topic).trim().slice(0, 100),
    message: String(message).trim().slice(0, 5000),
  };

  if (!fields.name || !fields.message || !EMAIL_PATTERN.test(fields.email)) {
    return res.status(400).json({ message: "Please fill in your name, a valid email address and a message." });
  }

  if (!transporter) {
    if (process.env.NODE_ENV === "production") {
      console.error("Contact form received but SMTP is not configured");
      return res.status(500).json({ message: "The contact form is not available right now. Please email directly." });
    }
    console.log("SMTP not configured — message received:", fields);
    return res.json({ message: "Message sent" });
  }

  const subject = `${fields.topic ? `[${fields.topic}] ` : ""}New message from ${fields.name}${fields.organisation ? ` (${fields.organisation})` : ""}`;
  const text = `Name: ${fields.name}\nEmail: ${fields.email}\nOrganisation: ${fields.organisation || "-"}\nTopic: ${fields.topic || "-"}\n\n${fields.message}`;

  try {
    await transporter.sendMail({
      from: `"Website contact form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: fields.email,
      subject,
      text,
      html: `<p><strong>Name:</strong> ${escapeHtml(fields.name)}<br>
        <strong>Email:</strong> ${escapeHtml(fields.email)}<br>
        <strong>Organisation:</strong> ${escapeHtml(fields.organisation || "-")}<br>
        <strong>Topic:</strong> ${escapeHtml(fields.topic || "-")}</p>
        <p>${escapeHtml(fields.message).replace(/\n/g, "<br>")}</p>`,
    });

    res.json({ message: "Message sent" });
  } catch (error) {
    console.error("Error sending contact email:", error);
    res.status(500).json({ message: "Your message could not be sent. Please try again or email directly." });
  }
});

export default router;
