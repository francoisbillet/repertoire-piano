import type { Piece } from "@/data/pieces";
import { User } from "lucide-react";

interface PieceListByComposerProps {
  groups: [string, Piece[]][];
  total: number;
}

export const PieceListByComposer = ({ groups, total }: PieceListByComposerProps) => (
  <div className="space-y-5">
    <h2 className="text-lg font-display text-foreground">
      Morceaux ({total})
    </h2>
    {groups.length === 0 ? (
      <p className="text-muted-foreground text-sm text-center py-6">Aucun morceau trouvé.</p>
    ) : (
      groups.map(([composer, pieces]) => (
        <div key={composer} className="space-y-1.5">
          <div className="flex items-center gap-2 text-sm font-semibold text-accent-foreground">
            <User className="w-3.5 h-3.5" />
            {composer} ({pieces.length})
          </div>
          <div className="space-y-1 pl-5">
            {pieces.map((p, i) => (
              <div key={`${p.title}-${i}`} className="piece-card">
                <span className="font-medium text-foreground">{p.title}</span>
              </div>
            ))}
          </div>
        </div>
      ))
    )}
  </div>
);
