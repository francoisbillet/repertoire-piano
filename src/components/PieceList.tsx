import type { Piece } from "@/data/pieces";

interface PieceListProps {
  pieces: Piece[];
}

export const PieceList = ({ pieces }: PieceListProps) => (
  <div className="space-y-2">
    <h2 className="text-lg font-display text-foreground">
      Morceaux ({pieces.length})
    </h2>
    {pieces.length === 0 ? (
      <p className="text-muted-foreground text-sm text-center py-6">Aucun morceau trouvé.</p>
    ) : (
      <div className="space-y-1.5">
        {pieces.map((p, i) => (
          <div key={`${p.title}-${i}`} className="piece-card flex justify-between items-baseline gap-3">
            <span className="font-medium text-foreground">{p.title}</span>
            <span className="text-sm text-muted-foreground whitespace-nowrap">{p.composer}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);
