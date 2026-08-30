import { useLanguage } from "./useLanguage";
import { UI_STRINGS } from "./ui-strings";

/**
 * Returns the fully-typed UIStrings object for the currently selected
 * language, plus the language code itself. `t.emptyState` is a
 * compile-time-checked property access, not a stringly-typed `t("key")`
 * lookup — no i18n library needed for ~20 UI-chrome keys.
 *
 * The `?? UI_STRINGS.en` fallback is cheap insurance against a future
 * typo — every language key is already populated (real or English
 * placeholder) so this should never actually be needed.
 */
export function useTranslation() {
  const [language] = useLanguage();
  const strings = UI_STRINGS[language] ?? UI_STRINGS.en;
  return { t: strings, language };
}
