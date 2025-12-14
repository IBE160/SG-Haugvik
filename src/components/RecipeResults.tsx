// src/components/RecipeResult.tsx

//****************************************************************
// Presentasjonskomponent for KI-genererte oppskrifter
//****************************************************************

import type { SingleRecipe } from "../App";

type Props = {
  recipes: SingleRecipe[];
};

export default function RecipeResults({ recipes }: Props) {
  return (
    <div className="mt-6 space-y-6">
      <h2 className="text-2xl font-bold">Forslag fra KI 🍽️✨</h2>

      {recipes.map((recipe, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg shadow-sm bg-white space-y-3"
        >
          {/* NAVN PÅ RETTEN */}
          <h3 className="text-xl font-bold text-purple-700">{recipe.name}</h3>

          <p className="text-sm text-gray-600">
            ⏱️ Ca. {recipe.time} minutter
          </p>

          <div>
            <h4 className="font-semibold">Ingredienser:</h4>
            <ul className="list-disc ml-5">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>
                  <span className="font-medium">{ing.item}</span>
                  {ing.quantity && ` – ${ing.quantity}`}
                  {ing.notes && ` (${ing.notes})`}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Steg:</h4>
            <ol className="list-decimal ml-5 space-y-1">
              {recipe.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
}
