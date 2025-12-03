// src/App.tsx
import { useState } from "react";
import PreferenceSelector from "./components/PreferenceSelector";
import RecipeInput from "./components/RecipeInput";
import RecipeResults from "./components/RecipeResults";

export default function App() {
  const [preferences, setPreferences] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string>("");
  const [result, setResult] = useState<any>(null);

  const generate = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/ai-suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preferences, ingredients }),
      });

      const data = await res.json();
      console.log("FRONTEND RESULT:", data);
      setResult(data);
    } catch (err) {
      console.error("FEIL I FRONTEND:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>KidChef 👩‍🍳🔍</h1>

      <PreferenceSelector selected={preferences} onChange={setPreferences} />

      <RecipeInput value={ingredients} onChange={setIngredients} />

      <button
        onClick={generate}
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#9330ff",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Generer middager med KI 🔍✨
      </button>

      <div style={{ marginTop: "20px" }}>
        {result ? <RecipeResults result={result} /> : <p>Ingen data</p>}
      </div>
    </div>
  );
}
