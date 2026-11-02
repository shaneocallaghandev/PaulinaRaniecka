import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import Wave from "../components/Wave";
import { contact, site } from "../content";
import { sendContactMessage } from "../api";
import "../styles/sections/contact.css";

const emptyForm = { name: "", email: "", organisation: "", topic: "", message: "", website: "" };

const Contact = ({ topic }) => {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  // Preselect the service chosen via "Inquire about this service"
  useEffect(() => {
    if (topic) setForm((current) => ({ ...current, topic }));
  }, [topic]);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      await sendContactMessage(form);
      setStatus("sent");
      setForm(emptyForm);
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact">
        <Reveal as="aside" className="contact__details">
          <p className="eyebrow">Contact</p>
          <h2 className="h2">{contact.title}<em>.</em></h2>
          <p className="lead">{contact.text}</p>
          <Wave className="contact__wave" />
          <dl>
            <dt>Email</dt>
            <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
            <dt>LinkedIn</dt>
            <dd><a href={site.linkedin} target="_blank" rel="noopener noreferrer">paulina-raniecka</a></dd>
            <dt>Based in</dt>
            <dd>{site.location}</dd>
          </dl>
        </Reveal>

        <Reveal delay={120} className="contact__form">
          {status === "sent" ? (
            <div className="contact__thanks" role="status">
              <h3>Thank you<em>.</em></h3>
              <p>Your message has been sent. Paulina will be in touch soon.</p>
              <button className="link-arrow" onClick={() => setStatus("idle")}>Send another message</button>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__row">
                <label className="field">
                  <span>Name</span>
                  <input name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" />
                </label>
              </div>
              <div className="form__row">
                <label className="field">
                  <span>Organisation <small>(optional)</small></span>
                  <input name="organisation" value={form.organisation} onChange={handleChange} autoComplete="organization" />
                </label>
                <label className="field">
                  <span>Topic</span>
                  <select name="topic" value={form.topic} onChange={handleChange}>
                    <option value="">Choose…</option>
                    {contact.topics.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="field">
                <span>Message</span>
                <textarea name="message" rows="6" value={form.message} onChange={handleChange} required />
              </label>

              {/* Honeypot: hidden from people, bots tend to fill it in */}
              <label className="form__trap" aria-hidden="true">
                Website
                <input name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </label>

              {status === "error" && <p className="form__error" role="alert">{error}</p>}

              <button className="btn" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
