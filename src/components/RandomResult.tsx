import type { Piece } from "@/data/pieces";
import { Music2 } from "lucide-react";

interface RandomResultProps {
  piece: Piece;
}

export const RandomResult = ({ piece }: RandomResultProps) => (
  <div className="result-card animate-pop-in">
    <Music2 className="w-8 h-8 text-primary mx-auto mb-3" />
    <p className="text-2xl font-display text-foreground mb-1">{piece.title}</p>
    <p className="text-muted-foreground">{piece.composer}</p>
  </div>
);
