import { Shuffle } from "lucide-react";

interface RandomButtonProps {
  onClick: () => void;
}

export const RandomButton = ({ onClick }: RandomButtonProps) => (
  <button onClick={onClick} className="random-btn inline-flex items-center gap-3">
    <Shuffle className="w-5 h-5" />
    Jouer une pièce aléatoire
  </button>
);
