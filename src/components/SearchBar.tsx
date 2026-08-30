import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  /** Presentational component — no i18n hook of its own. Callers pass the
   *  localized placeholder text in (Hero.tsx sources it from useTranslation). */
  placeholder: string;
  className?: string;
}

/**
 * Capsule-shaped search input. Fully controlled — no internal state.
 * Recessed clay shadow reads as "cut into the surface", matching how a
 * search field behaves elsewhere in the Claymorphism aesthetic; the
 * input pops back out to a raised shadow on focus to signal activity.
 */
export function SearchBar({
  value,
  onChange,
  placeholder,
  className = "",
}: SearchBarProps) {
  return (
    <div
      className={`flex items-center gap-3 bg-cream rounded-clay-full shadow-clay-pressed px-5 py-3 focus-within:shadow-clay-raised ${className}`}
    >
      <Search className="shrink-0 text-charcoal-light" size={20} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none border-none text-charcoal placeholder:text-charcoal-light"
      />
    </div>
  );
}
