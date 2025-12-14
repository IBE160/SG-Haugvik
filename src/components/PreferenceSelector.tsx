// src/components/PreferenceSelector.tsx
//
// Komponent for valg av preferanser (ikke aktiv i MVP).
// Beholdt for mulig videreutvikling. 

export interface PreferenceSelectorProps {
  selected: string[];
  onChange: (prefs: string[]) => void;
}

const options = ["quick", "pasta", "chicken", "vegetarian", "something new"];

export default function PreferenceSelector({ selected, onChange }: PreferenceSelectorProps) {
  function toggle(pref: string) {
    if (selected.includes(pref)) {
      onChange(selected.filter((p) => p !== pref));
    } else {
      onChange([...selected, pref]);
    }
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => toggle(opt)}
          style={{
            marginRight: "10px",
            padding: "8px 12px",
            background: selected.includes(opt) ? "#4c6ef5" : "#ddd",
            color: selected.includes(opt) ? "white" : "black",
            borderRadius: "6px"
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
