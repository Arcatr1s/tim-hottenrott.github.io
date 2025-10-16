// server.js (ESModules-Version)
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 💬 Dein Discord Webhook:
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/DEINE_ID/DEIN_TOKEN";

// 💌 Route für Angular-Requests
app.post("/api/discord", async (req, res) => {
  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error("Fehler beim Senden an Discord:", err);
    res.status(500).json({ error: "Serverfehler" });
  }
});

app.listen(3000, () => console.log("✅ Proxy-Server läuft auf http://localhost:3000"));
