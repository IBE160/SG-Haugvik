// src/components/RecipeInput.tsx

//****************************************************************
// Tekstfelt for manuell input av ingredienser (kommaseparert)
//****************************************************************


interface Props {
  value: string[];
  onChange: (v: string[]) => void;
}

export default function RecipeInput({ value, onChange }: Props) {
  return (
    <div className="my-4">
      <textarea
        className="w-full p-3 border rounded-lg"
        placeholder="skriv ingredienser her…"
        value={value.join(", ")}   // ← vis array som tekst
        onChange={(e) =>
          onChange(
            e.target.value
              .split(",")        // ← gjør om til array
              .map((x) => x.trim())
              .filter(Boolean)
          )
        }
        rows={4}
      />
    </div>
  );
}
