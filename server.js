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

    const prompt = `
You MUST reply ONLY with valid JSON in this exact structure:

{
  "time": 20,
  "ingredients": [
    { "item": "text", "quantity": "text", "notes": "text" }
  ],
  "steps": [
    "text step 1",
    "text step 2"
  ]
}

STRICT RULES:
- NO code blocks.
- NO markdown.
- NO explanations.
- NO text outside the JSON.
- Only valid JSON.

User preferences: ${preferences.join(", ")}
Selected ingredients: ${ingredients.join(", ")}
`;

    // --- SEND REQUEST TO GEMINI ---
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
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

    // Extract AI text safely
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return res.status(500).json({ error: "AI returned no text" });
    }

    // --- CLEAN JSON EXTRACTION ---
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");

    if (start === -1 || end === -1) {
      throw new Error("AI did NOT return JSON");
    }

    const jsonString = text.substring(start, end + 1);

    let json;
    try {
      json = JSON.parse(jsonString);
    } catch (parseErr) {
      console.error("JSON PARSE ERROR:", parseErr);
      console.log("BROKEN JSON:", jsonString);
      return res.status(500).json({ error: "AI returned invalid JSON" });
    }

    return res.json(json);

  } catch (error) {
    console.error("❌ SERVER AI ERROR:", error);
    res.status(500).json({ error: "AI request failed" });
  }
});

// --- START SERVER ---
app.listen(3001, () =>
  console.log("✅ Backend kjører på http://localhost:3001")
);
