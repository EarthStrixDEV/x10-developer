export interface ShortcutTranslationEntry {
  description: string;
  note?: string;
}

export type ShortcutTranslations = Record<string, ShortcutTranslationEntry>; // keyed by Shortcut.id
