import { useState, useMemo } from "react";
import { pieces } from "@/data/pieces";
import { RandomButton } from "@/components/RandomButton";
import { RandomResult } from "@/components/RandomResult";
import { SearchBar } from "@/components/SearchBar";
import { ComposerFilter } from "@/components/ComposerFilter";
import { PieceList } from "@/components/PieceList";
import { Stats } from "@/components/Stats";
import { Music } from "lucide-react";
import type { Piece } from "@/data/pieces";

const Index = () => {
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);
  const [search, setSearch] = useState("");
  const [selectedComposer, setSelectedComposer] = useState<string | null>(null);

  const composers = useMemo(() => {
    const map = new Map<string, number>();
    pieces.forEach((p) => map.set(p.composer, (map.get(p.composer) || 0) + 1));
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  const filteredPieces = useMemo(() => {
    return pieces.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.composer.toLowerCase().includes(search.toLowerCase());
      const matchesComposer = !selectedComposer || p.composer === selectedComposer;
      return matchesSearch && matchesComposer;
    });
  }, [search, selectedComposer]);

  const pickRandom = () => {
    const pool = filteredPieces.length > 0 ? filteredPieces : pieces;
    const idx = Math.floor(Math.random() * pool.length);
    setSelectedPiece(pool[idx]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-8 pb-4 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Music className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-display text-foreground">Mon Répertoire</h1>
        </div>
        <p className="text-muted-foreground text-sm">Mes morceaux de piano</p>
      </header>

      <main className="container max-w-lg mx-auto px-4 pb-12 space-y-6">
        {/* Random button */}
        <div className="text-center">
          <RandomButton onClick={pickRandom} />
        </div>

        {/* Result */}
        {selectedPiece && <RandomResult piece={selectedPiece} />}

        {/* Stats */}
        <Stats total={pieces.length} composers={composers} />

        {/* Search */}
        <SearchBar value={search} onChange={setSearch} />

        {/* Composer filter */}
        <ComposerFilter
          composers={composers}
          selected={selectedComposer}
          onSelect={setSelectedComposer}
        />

        {/* Piece list */}
        <PieceList pieces={filteredPieces} />
      </main>
    </div>
  );
};

export default Index;
