type OS = "windows" | "mac";

interface OSToggleProps {
  value: OS;
  onChange: (value: OS) => void;
  /** Presentational component — no i18n hook of its own. Parent (NavBar)
   *  sources these from useTranslation(). */
  ariaLabel: string;
  windowsLabel: string;
  macLabel: string;
  className?: string;
}

/**
 * Windows / Mac capsule switch: a recessed clay track holding two label
 * zones, with a raised clay thumb that slides to cover whichever side is
 * active. Purely controlled — no internal state, the parent owns `value`.
 */
export function OSToggle({
  value,
  onChange,
  ariaLabel,
  windowsLabel,
  macLabel,
  className = "",
}: OSToggleProps) {
  const isMac = value === "mac";

  return (
    <div
      role="switch"
      aria-checked={isMac}
      aria-label={ariaLabel}
      className={`relative grid h-11 w-52 grid-cols-2 rounded-clay-full bg-cream shadow-clay-pressed p-1 ${className}`}
    >
      <div
        className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-clay-full bg-orange shadow-clay-raised-sm transition-transform duration-200 ${
          isMac ? "translate-x-[calc(100%+8px)]" : "translate-x-0"
        }`}
      />

      <button
        type="button"
        onClick={() => onChange("windows")}
        className={`relative z-10 rounded-clay-full text-sm font-medium transition-colors duration-200 ${
          isMac ? "text-charcoal-light" : "text-cream-light"
        }`}
      >
        {windowsLabel}
      </button>

      <button
        type="button"
        onClick={() => onChange("mac")}
        className={`relative z-10 rounded-clay-full text-sm font-medium transition-colors duration-200 ${
          isMac ? "text-cream-light" : "text-charcoal-light"
        }`}
      >
        {macLabel}
      </button>
    </div>
  );
}
