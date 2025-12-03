// src/components/RecipeInput.tsx
import React from "react";

export interface RecipeInputProps {
  value: string;
  onChange: (val: string) => void;
}

export default function RecipeInput({ value, onChange }: RecipeInputProps) {
  return (
    <textarea
      style={{ width: "100%", height: "120px", padding: "10px" }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="skriv ingredienser her…"
    />
  );
}
