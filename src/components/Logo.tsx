interface LogoProps {
  className?: string;
}

/**
 * Wordmark + icon lockup. The icon is the X10 Developer app mark: a clay
 * keycap with a code-bracket motif, paired with the "X10" wordmark set in the display
 * serif so the brandmark reads as considered, not a stock icon + system font.
 * "Developer" trails in the body sans at a quieter weight/size, completing
 * the full product name without competing with "X10" for attention.
 */
export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/images/x10-developer-logo.png"
        alt=""
        width="34"
        height="34"
        className="shrink-0"
      />

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
