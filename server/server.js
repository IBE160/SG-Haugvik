//   server/server.js

//**********************************************************************
// server/server.js
//
// Express-backend for KidChef.
// Ansvar:
// - Eksponerer API-endepunktet POST /api/ai-suggest
// - Bygger og sender prompt til Google Gemini via REST API
// - Validerer og normaliserer KI-respons
// - Returnerer strukturert JSON til frontend
//
// Inneholder bevisste begrensninger for MVP:
// - Genererer nøyaktig 2 enkle, barnevennlige oppskrifter
// - Bruker kun 1–3 av brukerens valgte ingredienser per oppskrift
// - Ingen persistens eller autentisering
//**********************************************************************

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.post("/api/ai-suggest", async (req, res) => {
  try {
    const { preferences, ingredients } = req.body;

    // 🌟 NY SUPER-PROMPT – BARNESPRÅK, ENKLE RETTER, TO FORSLAG, ALLE MÅ HA NAVN
    const prompt = `
You MUST reply ONLY with valid JSON.

Generate EXACTLY two very simple, kid-friendly recipes.

INGREDIENT RULES:
- You may use ONLY ingredients from this list: ${ingredients.join(", ")}.
- Each recipe should use between 1 and 3 of the selected ingredients (NOT all of them).
- If an extra ingredient is absolutely needed (like salt, pepper, butter), include it under "notes" and mark it as OPTIONAL.
- NEVER add new main ingredients that the user did not select.

STYLE RULES:
- NO fancy dishes.
- NO pasta unless user explicitly selected pasta.
- Make super simple dishes suitable for children (ex: "Eggerøre", "Omelett", "Ostesmørbrød", "Melke-pannekake").
- Keep steps very short and easy.

JSON STRUCTURE (MANDATORY):

{
  "recipes": [
    {
      "name": "Dish name",
      "time": 10,
      "ingredients": [
        { "item": "text", "quantity": "text", "notes": "text" }
      ],
      "steps": ["text step 1", "text step 2"]
    },
    {
      "name": "Dish name",
      "time": 10,
      "ingredients": [
        { "item": "text", "quantity": "text", "notes": "text" }
      ],
      "steps": ["text step 1", "text step 2"]
    }
  ]
}

STRICT OUTPUT RULES:
- MUST include "name" for each recipe.
- MUST NOT output markdown or code blocks.
- MUST NOT output any text outside the JSON object.
- ONLY raw JSON.
`;


    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      console.error("❌ GOOGLE_API_KEY mangler i .env");
      return res.status(500).json({ error: "Server mangler API-nøkkel" });
    }

    // GEMINI API VIA REST
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const result = await response.json();
    console.log("GEMINI RAW:", result);

    if (result.error) {
      console.error("❌ GEMINI ERROR:", result.error);
      return res.status(500).json({ error: result.error.message });
    }

    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return res.status(500).json({ error: "AI returned no text" });
    }

    // JSON EKSTRAKSJON
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");

    if (start === -1 || end === -1) {
      console.error("❌ AI did NOT return JSON:", text);
      return res.status(500).json({ error: "AI returned invalid format" });
    }

    const jsonString = text.substring(start, end + 1);

    let json;
    try {
      json = JSON.parse(jsonString);
    } catch (err) {
      console.error("❌ JSON PARSE ERROR:", err);
      console.log("BROKEN JSON:", jsonString);
      return res.status(500).json({ error: "AI returned invalid JSON" });
    }

    // VALIDATION
    if (!json.recipes || json.recipes.length !== 2) {
      return res.status(500).json({ error: "AI returned wrong recipe count" });
    }

    for (const recipe of json.recipes) {
      if (!recipe.name || recipe.name.trim() === "") {
        return res.status(500).json({ error: "AI returned recipe without name" });
      }
      if (!recipe.ingredients || !recipe.steps) {
        return res.status(500).json({ error: "Incomplete recipe" });
      }
    }

    return res.json(json);

  } catch (error) {
    console.error("❌ SERVER AI ERROR:", error);
    res.status(500).json({ error: "AI request failed" });
  }
});

// START SERVER
app.listen(3001, () =>
  console.log("✅ Backend kjører på http://localhost:3001")
);
