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

    // 🔥 NY SUPERSTRIKT PROMPT – 2 RETTER + NAVN ER PÅBUDT
    const prompt = `
You MUST reply ONLY with valid JSON.

Generate EXACTLY two recipes. 
Each recipe MUST include ALL of these fields:

{
  "recipes": [
    {
      "name": "Dish name (mandatory!)",
      "time": 20,
      "ingredients": [
        { "item": "text", "quantity": "text", "notes": "text" }
      ],
      "steps": ["text step 1", "text step 2"]
    },
    {
      "name": "Dish name (mandatory!)",
      "time": 20,
      "ingredients": [
        { "item": "text", "quantity": "text", "notes": "text" }
      ],
      "steps": ["text step 1", "text step 2"]
    }
  ]
}

STRICT RULES:
- BOTH recipes MUST include a "name".
- Names must be real dish names, not generic text.
- NO markdown.
- NO code blocks.
- NO explanations.
- NO text outside the JSON.
- ONLY raw JSON.

User preferences: ${preferences.join(", ")}
Selected ingredients: ${ingredients.join(", ")}
`;

    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      console.error("❌ GOOGLE_API_KEY mangler i .env");
      return res.status(500).json({ error: "Server mangler API-nøkkel" });
    }

    // 🔥 GEMINI API – REST KALL
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

    // 🔥 EKSTRAKSJON AV JSON
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

    // 🔥 VALIDERING – MÅ HA 2 RETTER + NAVN
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

    // ALT OK
    return res.json(json);

  } catch (error) {
    console.error("❌ SERVER AI ERROR:", error);
    res.status(500).json({ error: "AI request failed" });
  }
});

// 🚀 START SERVER
app.listen(3001, () =>
  console.log("✅ Backend kjører på http://localhost:3001")
);
