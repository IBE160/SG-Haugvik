// src/components/IngredientSelector.tsx

//****************************************************************
// Viser og håndterer valg av ingredienser gruppert etter kategori
//****************************************************************

type Ingredient = {
  id: string;
  label: string;
  emoji: string;
  category: string;
};

const INGREDIENTS: Ingredient[] = [
  // 🥦 Grønnsaker
  { id: "gulrot", label: "Gulrot", emoji: "🥕", category: "Grønnsaker" },
  { id: "brokkoli", label: "Brokkoli", emoji: "🥦", category: "Grønnsaker" },
  { id: "paprika", label: "Paprika", emoji: "🫑", category: "Grønnsaker" },
  { id: "tomat", label: "Tomat", emoji: "🍅", category: "Grønnsaker" },
  { id: "mais", label: "Mais", emoji: "🌽", category: "Grønnsaker" },
  { id: "løk", label: "Løk", emoji: "🧅", category: "Grønnsaker" },
  { id: "agurk", label: "Agurk", emoji: "🥒", category: "Grønnsaker" },

  // 🥩 Proteiner
  { id: "kylling", label: "Kylling", emoji: "🍗", category: "Proteiner" },
  { id: "kjøttdeig", label: "Kjøttdeig", emoji: "🥩", category: "Proteiner" },
  { id: "pølser", label: "Pølser", emoji: "🌭", category: "Proteiner" },
  { id: "fisk", label: "Fisk", emoji: "🐟", category: "Proteiner" },
  { id: "egg", label: "Egg", emoji: "🥚", category: "Proteiner" },
  { id: "bønner", label: "Bønner", emoji: "🫘", category: "Proteiner" },

  // 🍚 Karbohydrater
  { id: "ris", label: "Ris", emoji: "🍚", category: "Karbohydrater" },
  { id: "pasta", label: "Pasta", emoji: "🍝", category: "Karbohydrater" },
  { id: "potet", label: "Potet", emoji: "🥔", category: "Karbohydrater" },
  { id: "tortilla", label: "Tortilla / lomper", emoji: "🌯", category: "Karbohydrater" },
  { id: "brød", label: "Brød", emoji: "🍞", category: "Karbohydrater" },

  // 🧀 Meieri
  { id: "ost", label: "Ost", emoji: "🧀", category: "Meieri" },
  { id: "melk", label: "Melk", emoji: "🥛", category: "Meieri" },
  { id: "rømme", label: "Rømme", emoji: "🥣", category: "Meieri" },
  { id: "yoghurt", label: "Yoghurt", emoji: "🧉", category: "Meieri" },

  // 🥫 Hermetikk / saus
  { id: "tomatsaus", label: "Tomatsaus", emoji: "🍅", category: "Saus & hermetikk" },
  { id: "knuste_tomater", label: "Knuste tomater", emoji: "🥫", category: "Saus & hermetikk" },
  { id: "maisboks", label: "Mais på boks", emoji: "🥫", category: "Saus & hermetikk" },
  { id: "bønneboks", label: "Bønner på boks", emoji: "🥫", category: "Saus & hermetikk" },

  // 🧂 Ekstra
  { id: "hvitløk", label: "Hvitløk", emoji: "🧄", category: "Ekstra" },
  { id: "spinat", label: "Spinat", emoji: "🥬", category: "Ekstra" },
  { id: "erter", label: "Erter", emoji: "🟢", category: "Ekstra" },
];

type Props = {
  selected: string[];
  onChange: (values: string[]) => void;
};

export default function IngredientSelector({ selected, onChange }: Props) {
  const grouped = INGREDIENTS.reduce<Record<string, Ingredient[]>>((acc, ing) => {
    if (!acc[ing.category]) acc[ing.category] = [];
    acc[ing.category].push(ing);
    return acc;
  }, {});

  const toggle = (id: string) => {
    // Fjern hvis valgt
    if (selected.includes(id)) {
      onChange(selected.filter((x) => x !== id));
      return;
    }

    // Maks 10 ingredienser
    if (selected.length >= 10) {
      alert("Du kan maks velge 10 ingredienser 👀");
      return;
    }

    onChange([...selected, id]);
  };

  const count = selected.length;
  const tooFew = count < 2;
  const tooMany = count > 10;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Hva har dere på kjøkkenet? 🧁</h2>
      <p className="text-sm text-gray-600 mb-3">
        Trykk på ingrediensene dere har hjemme. Velg mellom <b>2 og 10</b> ting.
      </p>

      <p
        className={`text-sm mb-4 ${
          tooFew || tooMany ? "text-red-600" : "text-green-700"
        }`}
      >
        Valgt: {count} / 10
        {tooFew && " – velg litt flere 🙏"}
        {tooMany && " – du har valgt for mange"}
      </p>

      <div className="space-y-4">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((ing) => {
                const isActive = selected.includes(ing.id);
                return (
                  <button
                    key={ing.id}
                    type="button"
                    onClick={() => toggle(ing.id)}
                    className={[
                      "px-3 py-2 rounded-full border text-sm flex items-center gap-1",
                      "transition",
                      isActive
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-800 border-gray-300 hover:bg-gray-50",
                    ].join(" ")}
                  >
                    <span>{ing.emoji}</span>
                    <span>{ing.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
