import type { Piece } from "@/data/pieces";
import { Library, User } from "lucide-react";

interface PieceListByComposerProps {
  groups: [string, Piece[]][];
  total: number;
  composerCount: number;
}

export const PieceListByComposer = ({ groups, total, composerCount }: PieceListByComposerProps) => (
  <div className="space-y-5">
    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
      <Library className="w-4 h-4" />
      <span>{total} pièce(s) · {composerCount} compositeur(s)</span>
    </div>
    {groups.length === 0 ? (
      <p className="text-muted-foreground text-sm text-center py-6">Aucune pièce trouvée.</p>
    ) : (
      groups.map(([composer, pieces]) => (
        <div key={composer} className="space-y-1.5">
          <div className="flex items-center gap-2 text-sm font-semibold text-accent-foreground">
            <User className="w-3.5 h-3.5" />
            {composer} ({pieces.length})
          </div>
          <div className="space-y-1 pl-5">
            {pieces.map((p, i) => (
              <div key={`${p.title}-${i}`} className="piece-card flex items-center justify-between gap-2">
                <span className="font-medium text-foreground">{p.title}</span>
                <span className="text-[10px] uppercase tracking-wide text-primary">{p.type}</span>
              </div>
            ))}
          </div>
        </div>
      ))
    )}
  </div>
);
