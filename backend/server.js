import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRouter from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Comma-separated list of allowed frontend origins, e.g. https://paulinaraniecka.com
const allowedOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

// Hostinger runs the app behind a proxy; needed for the real client IP
app.set("trust proxy", 1);

app.use(cors({ origin: allowedOrigins.length ? allowedOrigins : true }));
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
