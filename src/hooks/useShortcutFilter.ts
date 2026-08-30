import { useMemo } from "react";
import type { Category } from "../data/shortcuts";

/**
 * Filters `categories` by `query` across ALL categories simultaneously.
 *
 * Match rule: a shortcut matches if the lowercased query is a substring of
 * either its `description` (case-insensitive) or the joined key tokens for
 * the currently-active `os` — never the inactive OS's keys, since those
 * aren't what's rendered on screen.
 *
 * An empty/whitespace-only query short-circuits to the original categories
 * unfiltered. Otherwise, each category keeps only its matching shortcuts and
 * is dropped from the result entirely if none match (never rendered empty).
 * Returns new arrays/objects — `categories` and its nested `shortcuts` are
 * never mutated.
 */
export function useShortcutFilter(
  categories: Category[],
  query: string,
  os: "windows" | "mac"
): Category[] {
  return useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    if (trimmed === "") {
      return categories;
    }

    const filtered: Category[] = [];

    for (const category of categories) {
      const matchingShortcuts = category.shortcuts.filter((shortcut) => {
        const descriptionMatch = shortcut.description
          .toLowerCase()
          .includes(trimmed);

        const keys = os === "windows" ? shortcut.windows : shortcut.mac;
        const keysMatch = keys.join(" ").toLowerCase().includes(trimmed);

        return descriptionMatch || keysMatch;
      });

      if (matchingShortcuts.length > 0) {
        filtered.push({ ...category, shortcuts: matchingShortcuts });
      }
    }

    return filtered;
  }, [categories, query, os]);
}
