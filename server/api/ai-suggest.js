export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { preferences, ingredients } = req.body;

  const prompt = `
Lag 3 korte, barnevennlige middagstips basert på:
- Preferanser: ${preferences.join(", ")}
- Ingredienser: ${ingredients}

Svar i dette formatet:
{
  "recipes": [
    {
      "title": "string",
      "timeMin": number,
      "ingredients": ["string"],
      "steps": ["string"]
    }
  ]
}
  `;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();

    const json = JSON.parse(data.choices[0].message.content);

    return res.status(200).json(json);

  } catch (err) {
    console.error("AI error:", err);
    return res.status(500).json({ error: "AI request failed" });
  }
}
