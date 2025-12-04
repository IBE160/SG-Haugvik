import { useState } from "react";
import PreferenceSelector from "./components/PreferenceSelector";
import RecipeInput from "./components/RecipeInput";
import AiButton from "./components/AiButton";
import RecipeResults from "./components/RecipeResults";

// 💡 Samme type som backend svarer med (server.js)
export type Ingredient = {
  item: string;
  quantity: string;
  notes: string;
};

export type RecipeResultData = {
  time: number;
  ingredients: Ingredient[];
  steps: string[];
};

function App() {
  const [preferences, setPreferences] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // 👉 ÉN oppskrift om gangen (ikke liste ennå)
  const [recipe, setRecipe] = useState<RecipeResultData | null>(null);

  const generateRecipes = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:3001/api/ai-suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          preferences,
          ingredients,
        }),
      });

      if (!response.ok) {
        console.error("Feil fra server:", response.statusText);
        setRecipe(null);
        return;
      }

      const data = await response.json();
      // 🔥 Forventer { time, ingredients: [...], steps: [...] }
      setRecipe(data);
    } catch (error) {
      console.error("AI fetch error:", error);
      setRecipe(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">
        KidChef 🍳👩‍🍳
      </h1>

      <PreferenceSelector
        selected={preferences}
        onChange={setPreferences}
      />

      <RecipeInput
        value={ingredients}
        onChange={setIngredients}
      />

      <AiButton onGenerate={generateRecipes} loading={loading} />

      {/* Vis kun hvis vi faktisk har en oppskrift */}
      {recipe && <RecipeResults result={recipe} />}
    </div>
  );
}

export default App;
