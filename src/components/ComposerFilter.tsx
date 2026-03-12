interface ComposerFilterProps {
  composers: [string, number][];
  selected: string | null;
  onSelect: (c: string | null) => void;
}

export const ComposerFilter = ({ composers, selected, onSelect }: ComposerFilterProps) => (
  <div className="flex flex-wrap gap-2">
    <button
      onClick={() => onSelect(null)}
      className={`filter-chip ${!selected ? "filter-chip-active" : "filter-chip-inactive"}`}
    >
      Tous
    </button>
    {composers.map(([name, count]) => (
      <button
        key={name}
        onClick={() => onSelect(selected === name ? null : name)}
        className={`filter-chip ${selected === name ? "filter-chip-active" : "filter-chip-inactive"}`}
      >
        {name} ({count})
      </button>
    ))}
  </div>
);
