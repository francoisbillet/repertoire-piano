import { Library } from "lucide-react";

interface StatsProps {
  total: number;
  composers: [string, number][];
}

export const Stats = ({ total, composers }: StatsProps) => (
  <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
    <Library className="w-4 h-4" />
    <span>{total} morceaux · {composers.length} compositeurs</span>
  </div>
);
