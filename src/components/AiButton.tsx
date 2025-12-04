// src/components/AiButton.tsx
interface Props {
  onGenerate: () => void;
  loading: boolean;
  disabled?: boolean;
}

export default function AiButton({ onGenerate, loading, disabled }: Props) {
  const isDisabled = loading || disabled;

  return (
    <button
      type="button"
      onClick={onGenerate}
      disabled={isDisabled}
      className={`mt-4 w-full py-3 rounded-lg text-lg font-semibold
        ${isDisabled
          ? "bg-purple-300 text-white cursor-not-allowed"
          : "bg-purple-600 text-white hover:bg-purple-700"
        }
        disabled:opacity-60
      `}
    >
      {loading ? "Laster… 🤖" : "Generer middager med KI 🍳✨"}
    </button>
  );
}
