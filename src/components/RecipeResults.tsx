import type { RecipeResultData } from "../App";

type Props = {
  result: RecipeResultData;
};

export default function RecipeResults({ result }: Props) {
  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-2xl font-bold mb-2">Forslag fra KI 🍽️✨</h2>

      <div className="p-4 border rounded-lg shadow-sm bg-white">
        <p className="text-sm text-gray-600 mb-2">
          ⏱️ Ca. {result.time} minutter
        </p>

        <h3 className="font-semibold mt-2">Ingredienser:</h3>
        <ul className="list-disc ml-5 text-gray-700">
          {result.ingredients.map((ing, idx) => (
            <li key={idx}>
              <span className="font-medium">{ing.item}</span>
              {ing.quantity && ` – ${ing.quantity}`}
              {ing.notes && ` (${ing.notes})`}
            </li>
          ))}
        </ul>

        <h3 className="font-semibold mt-4">Steg:</h3>
        <ol className="list-decimal ml-5 text-gray-700 space-y-1">
          {result.steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
