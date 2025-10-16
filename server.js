// server.js (ESModules-Version)
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 💬 Dein Discord Webhook:
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

// 💌 Route für Angular-Requests
app.post("/api/discord", async (req, res) => {
  try {
    if (!DISCORD_WEBHOOK_URL) {
      throw new Error("Webhook-URL nicht gesetzt!");
    }

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    let text = await response.text(); // immer Text lesen
    let data;

    try {
      data = text ? JSON.parse(text) : {}; // nur parsen, wenn nicht leer
    } catch (err) {
      console.warn("Discord antwortete kein gültiges JSON:", text);
      data = { message: text };
    }

    if (!response.ok) {
      console.error("Discord Fehler:", response.status, text);
      return res.status(response.status).json(data);
    }

    res.json({ success: true, data });
  } catch (err) {
    console.error("Fehler beim Senden an Discord:", err);
    res.status(500).json({ error: err.message });
  }
});


app.listen(3000, () => console.log("✅ Proxy-Server läuft auf http://localhost:3000"));
