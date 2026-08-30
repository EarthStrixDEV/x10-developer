interface LogoProps {
  className?: string;
}

/**
 * Wordmark + icon lockup. The icon is a tiny clay keycap (rounded square,
 * same embossed shadow language as KeyBadge) with a caret glyph standing in
 * for "press this key" — paired with the "X10" wordmark set in the display
 * serif so the brandmark reads as considered, not a stock icon + system font.
 * "Developer" trails in the body sans at a quieter weight/size, completing
 * the full product name without competing with "X10" for attention.
 */
export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1.5"
          y="1.5"
          width="31"
          height="31"
          rx="10"
          fill="var(--color-orange)"
        />
        <path
          d="M11 21L15.5 12M23 21L18.5 12"
          stroke="var(--color-cream-light)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>

      <span className="flex items-baseline gap-1.5">
        <span
          className="text-charcoal text-2xl leading-none font-semibold italic"
          style={{ fontFamily: "var(--font-display)" }}
        >
          X10
        </span>
        <span className="text-charcoal-light text-sm font-medium tracking-wide">
          Developer
        </span>
      </span>
    </div>
  );
}
