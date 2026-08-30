import { Logo } from "./Logo";
import { useTranslation } from "../i18n/useTranslation";

/**
 * Quiet closing note, not a link farm — this is a static, backend-less
 * reference site with nothing else to link to. Logo repeats for brand
 * recall at the point a reader has scrolled all the way through the
 * shortcut list, plus a one-line tagline and copyright.
 */
export function Footer() {
  const year = 2026;
  const { t } = useTranslation();

  return (
    <footer className="border-cream-dark/70 mt-8 border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6 lg:px-8">
        <Logo />
        <p className="text-charcoal-light max-w-sm text-sm">
          {t.footerTagline}
        </p>
        <p className="text-charcoal-light/70 text-xs">
          © {year} X10 Developer. {t.footerCopyright}
        </p>
      </div>
    </footer>
  );
}
