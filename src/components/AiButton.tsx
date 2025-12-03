interface Props {
  onGenerate: () => void;
  loading: boolean;
}

export default function AiButton({ onGenerate, loading }: Props) {
  return (
    <button
      onClick={onGenerate}
      disabled={loading}
      className="mt-4 w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 disabled:opacity-60"
    >
      {loading ? "Laster… 🤖" : "Generer middager med KI 🍳✨"}
    </button>
  );
}
