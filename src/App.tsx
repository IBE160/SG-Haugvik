// src/App.tsx
//*****************************************************************************************************
// Hovedkomponent for KidChef.
// Holder applikasjonstilstand og koordinerer samspill mellom UI-komponenter og backend (AI-generering).
//******************************************************************************************************

import { useState } from "react";
import IngredientSelector from "./components/IngredientSelector";
import AiButton from "./components/AiButton";
import RecipeResults from "./components/RecipeResults";

export type Ingredient = {
  item: string;
  quantity: string;
  notes: string;
};

export type SingleRecipe = {
  name: string;
  time: number;
  ingredients: Ingredient[];
  steps: string[];
};

export type RecipesResponse = {
  recipes: SingleRecipe[];
};

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Lagrer vi en LISTE av oppskrifter
  const [recipes, setRecipes] = useState<SingleRecipe[]>([]);

  const generateRecipes = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:3001/api/ai-suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          preferences: [],
          ingredients,
        }),
      });

      const data: RecipesResponse = await response.json();

      if (data.recipes) {
        setRecipes(data.recipes);
      } else {
        setRecipes([]);
      }
    } catch (error) {
      console.error("AI fetch error:", error);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">
        KidChef 🍳👩‍🍳
      </h1>

      <IngredientSelector
        selected={ingredients}
        onChange={setIngredients}
      />

      <AiButton onGenerate={generateRecipes} loading={loading} />

      {/* VIS LISTE AV OPPSKRIFTER */}
      {recipes.length > 0 && <RecipeResults recipes={recipes} />}
    </div>
  );
}

export default App;
