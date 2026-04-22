import { useState, useMemo } from "react";
import { learningPieces, pieces } from "@/data/pieces";
import { RandomButton } from "@/components/RandomButton";
import { RandomResult } from "@/components/RandomResult";
import { SearchBar } from "@/components/SearchBar";
import { PieceListByComposer } from "@/components/PieceListByComposer";
import { Music } from "lucide-react";
import type { Piece } from "@/data/pieces";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);
  const [search, setSearch] = useState("");
  const [includeMorceaux, setIncludeMorceaux] = useState(true);
  const [includeChansons, setIncludeChansons] = useState(false);
  const [listIncludeMorceaux, setListIncludeMorceaux] = useState(true);
  const [listIncludeChansons, setListIncludeChansons] = useState(true);
  const [learningIncludeMorceaux, setLearningIncludeMorceaux] = useState(true);
  const [learningIncludeChansons, setLearningIncludeChansons] = useState(true);

  const searchedPieces = useMemo(() => {
    return pieces.filter((p) => {
      return (
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.composer.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search]);

  const filteredPieces = useMemo(() => {
    return searchedPieces.filter(
      (p) =>
        (p.type === "morceau" && listIncludeMorceaux) ||
        (p.type === "chanson" && listIncludeChansons),
    );
  }, [searchedPieces, listIncludeMorceaux, listIncludeChansons]);

  const groupedByComposer = useMemo(() => {
    const map = new Map<string, Piece[]>();
    filteredPieces.forEach((p) => {
      if (!map.has(p.composer)) map.set(p.composer, []);
      map.get(p.composer)!.push(p);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filteredPieces]);

  const filteredLearningPieces = useMemo(() => {
    return learningPieces.filter(
      (p) =>
        (p.type === "morceau" && learningIncludeMorceaux) ||
        (p.type === "chanson" && learningIncludeChansons),
    );
  }, [learningIncludeMorceaux, learningIncludeChansons]);

  const learningGroupedByComposer = useMemo(() => {
    const map = new Map<string, Piece[]>();
    filteredLearningPieces.forEach((p) => {
      if (!map.has(p.composer)) map.set(p.composer, []);
      map.get(p.composer)!.push(p);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filteredLearningPieces]);

  const pickRandom = () => {
    const matchesType = (piece: Piece) =>
      (piece.type === "morceau" && includeMorceaux) || (piece.type === "chanson" && includeChansons);

    const filteredPool = searchedPieces.filter(matchesType);
    const fallbackPool = pieces.filter(matchesType);
    const pool = filteredPool.length > 0 ? filteredPool : fallbackPool;

    if (pool.length === 0) {
      setSelectedPiece(null);
      return;
    }

    const idx = Math.floor(Math.random() * pool.length);
    setSelectedPiece(pool[idx]);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="pt-8 pb-4 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Music className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-display text-foreground">Mon Répertoire piano</h1>
        </div>
      </header>

      <main className="container max-w-lg mx-auto px-4 pb-12 space-y-6">
        <section className="rounded-lg border bg-card p-4 space-y-3">
          <h2 className="text-lg font-semibold text-center text-muted-foreground">Génération aléatoire</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="random-morceau"
                  checked={includeMorceaux}
                  onCheckedChange={(checked) => setIncludeMorceaux(checked === true)}
                />
                <Label htmlFor="random-morceau">Morceau</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="random-chanson"
                  checked={includeChansons}
                  onCheckedChange={(checked) => setIncludeChansons(checked === true)}
                />
                <Label htmlFor="random-chanson">Chanson</Label>
              </div>
            </div>

            <div className="text-center">
              <RandomButton onClick={pickRandom} />
            </div>

            {selectedPiece && <RandomResult piece={selectedPiece} />}
          </div>
        </section>

        <section className="rounded-lg border bg-card p-4 space-y-4">
          <h2 className="text-lg font-semibold text-center text-muted-foreground">Recherche et filtres</h2>

          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox
                id="list-morceau"
                checked={listIncludeMorceaux}
                onCheckedChange={(checked) => setListIncludeMorceaux(checked === true)}
              />
              <Label htmlFor="list-morceau">Morceau</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="list-chanson"
                checked={listIncludeChansons}
                onCheckedChange={(checked) => setListIncludeChansons(checked === true)}
              />
              <Label htmlFor="list-chanson">Chanson</Label>
            </div>
          </div>

          <SearchBar value={search} onChange={setSearch} />

          <PieceListByComposer
            groups={groupedByComposer}
            total={filteredPieces.length}
            composerCount={groupedByComposer.length}
          />
        </section>

        <section className="rounded-lg border bg-card p-4 space-y-4">
          <h2 className="text-lg font-semibold text-center text-muted-foreground">
            Pièces à apprendre
          </h2>

          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox
                id="learning-morceau"
                checked={learningIncludeMorceaux}
                onCheckedChange={(checked) => setLearningIncludeMorceaux(checked === true)}
              />
              <Label htmlFor="learning-morceau">Morceau</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="learning-chanson"
                checked={learningIncludeChansons}
                onCheckedChange={(checked) => setLearningIncludeChansons(checked === true)}
              />
              <Label htmlFor="learning-chanson">Chanson</Label>
            </div>
          </div>

          <PieceListByComposer
            groups={learningGroupedByComposer}
            total={filteredLearningPieces.length}
            composerCount={learningGroupedByComposer.length}
          />
        </section>
      </main>
    </div>
  );
};

export default Index;
