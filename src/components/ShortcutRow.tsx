import { KeyBadge } from "./clay/KeyBadge";
import { ClickSpark } from "./reactbits/ClickSpark";
import type { Shortcut } from "../data/shortcuts";
import type { Language } from "../i18n/languages";
import { getLocalizedShortcut } from "../data/getLocalizedShortcut";
import { REAL_KEY_TOKENS } from "../i18n/key-tokens";
import { KEY_TOKEN_TRANSLATIONS } from "../i18n/key-token-translations";

interface ShortcutRowProps {
  shortcut: Shortcut;
  os: "windows" | "mac";
  language: Language;
  /** Renders a bottom divider — used when this row lives in a single wide
   *  list (CategoryPage) rather than a card grid spaced by `gap`. */
  showDivider?: boolean;
}

/**
 * One shortcut entry: description (+ optional note) on one side, its key
 * sequence on the other. Keys are rendered as tactile KeyBadges alternating
 * orange/cream by press order, wrapped in ClickSpark so tapping the badge
 * sequence fires a click-burst. No border of its own by default — lives
 * inside a ClayCard surface; `showDivider` opts into a bottom border for
 * single wide-list layouts (CategoryPage) instead of grid-gap spacing.
 */
export function ShortcutRow({ shortcut, os, language, showDivider = false }: ShortcutRowProps) {
  const keys = os === "windows" ? shortcut.windows : shortcut.mac;
  const { description, note } = getLocalizedShortcut(shortcut, language);

  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-2 ${
        showDivider ? "border-cream-dark border-b py-5" : ""
      }`}
    >
      <div className="min-w-0 flex-1">
        <p className="text-charcoal">{description}</p>
        {note && (
          <p className="text-charcoal-light text-sm">{note}</p>
        )}
      </div>

      <ClickSpark className="inline-flex shrink-0 items-center gap-1.5">
        {keys.map((key, index) => {
          const label = REAL_KEY_TOKENS.has(key)
            ? key
            : (KEY_TOKEN_TRANSLATIONS[language][key] ?? key);
          return (
            <KeyBadge
              key={index}
              label={label}
              tone={index % 2 === 0 ? "orange" : "cream"}
            />
          );
        })}
      </ClickSpark>
    </div>
  );
}
