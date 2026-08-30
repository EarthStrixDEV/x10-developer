import type { Shortcut } from "./shortcuts";
import type { Language } from "../i18n/languages";
import { en } from "./shortcut-translations/en";
import { th } from "./shortcut-translations/th";
import { zh } from "./shortcut-translations/zh";
import { ko } from "./shortcut-translations/ko";
import { ja } from "./shortcut-translations/ja";
import { es } from "./shortcut-translations/es";
import { fr } from "./shortcut-translations/fr";

const TRANSLATIONS_BY_LANGUAGE = { en, th, zh, ko, ja, es, fr };

export function getLocalizedShortcut(
  shortcut: Shortcut,
  language: Language
): { description: string; note?: string } {
  const translated = TRANSLATIONS_BY_LANGUAGE[language]?.[shortcut.id];
  if (translated) {
    return translated;
  }
  return { description: shortcut.description, note: shortcut.note };
}
