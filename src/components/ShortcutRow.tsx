import { KeyBadge } from "./clay/KeyBadge";
import { ClickSpark } from "./reactbits/ClickSpark";
import type { Shortcut } from "../data/shortcuts";

interface ShortcutRowProps {
  shortcut: Shortcut;
  os: "windows" | "mac";
}

/**
 * One shortcut entry: description (+ optional note) on one side, its key
 * sequence on the other. Keys are rendered as tactile KeyBadges alternating
 * orange/cream by press order, wrapped in ClickSpark so tapping the badge
 * sequence fires a click-burst. No card/border of its own — lives inside
 * CategorySection's clay surface.
 */
export function ShortcutRow({ shortcut, os }: ShortcutRowProps) {
  const keys = os === "windows" ? shortcut.windows : shortcut.mac;

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
      <div className="min-w-0 flex-1">
        <p className="text-charcoal">{shortcut.description}</p>
        {shortcut.note && (
          <p className="text-charcoal-light text-sm">{shortcut.note}</p>
        )}
      </div>

      <ClickSpark className="inline-flex shrink-0 items-center gap-1.5">
        {keys.map((key, index) => (
          <KeyBadge
            key={index}
            label={key}
            tone={index % 2 === 0 ? "orange" : "cream"}
          />
        ))}
      </ClickSpark>
    </div>
  );
}
