import { Check, ChevronDown } from "lucide-react";
import { ClayDropdown } from "./clay/ClayDropdown";
import { LANGUAGES } from "../i18n/languages";
import { useLanguage } from "../i18n/useLanguage";

/**
 * Compact language picker: a circular trigger showing the current
 * language's 2-letter code (native scripts vary too much in width for a
 * clean trigger), opening a `ClayDropdown` panel listing all 7 languages by
 * native name so a non-English reader recognizes their own language
 * without needing English literacy first.
 */
export function LanguageSwitcher() {
  const [language, setLanguage] = useLanguage();

  return (
    <ClayDropdown
      triggerLabel="Change language"
      triggerClassName="bg-cream shadow-clay-raised rounded-clay-full transition-all duration-200 hover:shadow-clay-pressed hover:translate-y-0.5 active:shadow-clay-pressed active:translate-y-0.5 flex h-10 w-10 items-center justify-center gap-0.5 p-0"
      trigger={
        <>
          <span className="text-charcoal text-xs font-semibold">
            {language.toUpperCase()}
          </span>
          <ChevronDown className="text-charcoal h-3 w-3" />
        </>
      }
      panelClassName="w-40 overflow-hidden py-1"
    >
      {LANGUAGES.map(({ code, nativeLabel }) => {
        const isActive = code === language;
        return (
          <button
            key={code}
            type="button"
            role="menuitem"
            onClick={() => setLanguage(code)}
            className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors duration-150 hover:bg-orange/10 ${
              isActive ? "bg-orange/10 text-charcoal font-semibold" : "text-charcoal"
            }`}
          >
            {nativeLabel}
            {isActive && <Check className="text-orange h-4 w-4" />}
          </button>
        );
      })}
    </ClayDropdown>
  );
}
