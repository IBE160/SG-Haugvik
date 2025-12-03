// src/components/RecipeResults.tsx
import React from "react";

interface Ingredient {
  item: string;
  quantity?: string;
  notes?: string;
}

interface RecipeResultData {
  time?: string;
  ingredients?: Ingredient[];
  steps?: string[];
}

export default function RecipeResults({ result }: { result: RecipeResultData }) {
  if (!result || Object.keys(result).length === 0) {
    return <p>Ingen data</p>;
  }

  return (
    <div style={{ marginTop: "30px", padding: "20px", border: "1px solid #ddd" }}>
      <h3>Forslag fra KI 👩‍🍳✨</h3>

      {result.time && <p>{result.time} min</p>}

      <h4>Ingredienser:</h4>
      {result.ingredients && result.ingredients.length > 0 ? (
        <ul>
          {result.ingredients.map((ing: Ingredient, idx: number) => (
            <li key={idx}>
              <strong>{ing.item}</strong> {ing.quantity || ""}
              {ing.notes ? ` (${ing.notes})` : ""}
            </li>
          ))}
        </ul>
      ) : (
        <p>Ingen ingredienser</p>
      )}

      <h4>Steg:</h4>
      {result.steps && result.steps.length > 0 ? (
        <ol>
          {result.steps.map((s: string, idx: number) => (
            <li key={idx}>{s}</li>
          ))}
        </ol>
      ) : (
        <p>Ingen steg</p>
      )}
    </div>
  );
}
