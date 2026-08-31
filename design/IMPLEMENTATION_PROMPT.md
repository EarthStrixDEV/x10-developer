# Implementation instruction: X10 Developer — Vibrant Playful Clay redesign

Paste everything below this line as your task to the coding agent working in the `x10-developer` repo.

---

## Context

`x10-developer` is a Vite + React 19 + TypeScript + Tailwind v4 static site: a keyboard-shortcut reference for Windows/macOS. It already uses a **Claymorphism** design system (soft embossed shadows, high border radii, cream/orange/charcoal palette) defined entirely as design tokens in `src/index.css` (`@theme` block + `shadow-clay-*` / `shadow-key*` utilities). Components live in `src/components/` (`clay/` holds the base primitives: `ClayCard`, `ClayButton`, `ClayDropdown`, `KeyBadge`, `CategoryIcon`). Content lives in `src/data/shortcuts.ts`: a `categories: Category[]` array, 10 categories, 88 shortcuts total, each with `windows: string[]` / `mac: string[]` key tokens and an optional `note`. The app supports 7 languages via `src/i18n/` (`useTranslation()` for UI chrome strings, `getLocalizedShortcut()` for per-shortcut description/note translation) and persists theme/OS/language choices to `localStorage` — do not break any of this.

Today the app is a **single page**: `App.tsx` renders `NavBar` → `Hero` (with search) → all 10 `CategorySection` cards stacked in a responsive grid → `Footer`, with the nav linking to `#category-id` anchors on the same page.

## What changed: two design decisions already made and approved

1. **Visual direction — "Vibrant Playful Clay".** Keep every existing clay token (radii, shadow utilities, Fraunces + Figtree fonts, cream/orange/charcoal base) but **add three new accent color families** — violet, mint, pink — and use them to color-code category cards instead of every card looking identical. Full palette below.
2. **Information architecture — multi-page.** Split the single scrolling page into a **Home page** (hero + a grid of category *index* cards, one per category, each linking out) and **one Category detail page per category** (breadcrumb, full shortcut list for that category, local search/filter, prev/next category navigation). Add `react-router-dom` for this — the project has no router today.

Two full-fidelity static HTML mockups already exist at `design/mockups/home.html` and `design/mockups/category-window-management.html` in this repo. **Open and read both files before writing any component** — they are the pixel-accurate source of truth for spacing, copy, layout, and the exact inline styles/colors to port into Tailwind classes. Treat every visual detail in those two files (blob positions, badge shapes, grid structure, breadcrumb, prev/next row) as the spec, translated into the project's existing component patterns rather than copy-pasted inline styles.

## Design tokens to add

Add these to the `@theme` block in `src/index.css`, alongside the existing `--color-cream-*` / `--color-orange-*` / `--color-charcoal-*` tokens (same naming convention, same light-mode values below — you must also add sensible dark-mode overrides in the existing `:root[data-theme="dark"]` block, following the same pattern already used for cream/charcoal):

```css
/* Violet accent family (new) */
--color-violet-light: #cdbdfb;
--color-violet: #8b6ef2;
--color-violet-dark: #6c4de0;

/* Mint accent family (new) */
--color-mint-light: #b7f0d6;
--color-mint: #4fceA0;
--color-mint-dark: #2fa87f;

/* Pink accent family (new) */
--color-pink-light: #ffc9d9;
--color-pink: #ff7fa3;
--color-pink-dark: #e85585;
```

Like the existing orange family, treat these three as fixed accents — do not flip them between light/dark mode; only adjust if a specific contrast check fails against the new dark cream/charcoal surfaces. Follow the mockups for exactly which category gets which accent (the assignment rotates: orange → mint → violet → pink → charcoal → orange → mint → charcoal(feature) → violet → pink — see `home.html`'s 10 cards in order for the authoritative mapping).

## Scope of implementation (full — all 10 categories)

### 1. Routing
- Add `react-router-dom` as a dependency.
- Wrap the app in a `BrowserRouter` (or `HashRouter` if this will be deployed as a static site without server-side rewrite support — check `vite.config.ts` / any deploy target first, default to `BrowserRouter` if unclear and note the assumption).
- Routes: `/` → Home page, `/category/:categoryId` → Category detail page. Keep it simple, no nested layouts needed beyond a shared `NavBar` + `Footer` shell.

### 2. Home page (`/`)
Rework `App.tsx` (or extract to a new `src/pages/HomePage.tsx` and make `App.tsx` the router shell — your call, prefer whichever keeps `NavBar`/`Footer` de-duplicated across routes) to:
- Keep the existing `Hero` search bar behavior, but the search now needs to make sense as a *global* search across categories even though categories no longer render inline below it. Two acceptable approaches — pick one and state your choice: (a) typing in the hero search live-filters the category index cards down to categories containing a match, reusing `useShortcutFilter`; or (b) hero search is a "jump to first matching category" affordance. Prefer (a): it's the smaller, more consistent change against the existing `useShortcutFilter` hook.
- Replace the stacked `CategorySection` list with a grid of **category index cards** — one per category, in the existing `categories` array order. Each card shows: `CategoryIcon`, category title, a shortcut count (`category.shortcuts.length`), and a "view all →" affordance. Wrap the whole card in a React Router `<Link to={`/category/${category.id}`}>`.
- Give each card its accent color per the mapping in `home.html`. Extract this as a small typed lookup (e.g. `src/data/categoryAccents.ts` exporting `Record<string, { bg: string; iconBg: string; ... }>` or similar) rather than hardcoding a switch statement inline — keep it colocated with `categories` so adding an 11th category later doesn't silently fall through unstyled.
- Match `home.html`'s grid structure (3-column on desktop, responsive collapse — follow the existing project convention of `sm:` / `lg:` / `xl:` Tailwind breakpoints already used in `App.tsx`'s current grid).
- Keep the decorative hero blobs (violet/mint circles, pink/orange corner shapes) — port them as the same absolutely-positioned `aria-hidden` divs pattern `Hero.tsx` already uses, just recolored per the mockup.

### 3. Category detail page (`/category/:categoryId`)
Create `src/pages/CategoryPage.tsx`:
- Read `categoryId` from the route param, look up the matching entry in `categories`; render a not-found state (simple, on-brand, with a link back to `/`) if no match — don't crash on a bad URL.
- Header: breadcrumb (`Home` link with a back-arrow icon → current category name, not a link), category icon + title (`text-3xl`/display font) + shortcut count, matching `category-window-management.html`.
- A local filter input (reuse `SearchBar` component) that filters *this category's* shortcuts only — reuse `useShortcutFilter` with a single-category array, or extract the per-category filter predicate already inside that hook into a small reusable function so you're not duplicating the match logic.
- The shortcut list itself: reuse `ShortcutRow` and `KeyBadge` as they exist today (do not rebuild them — the row layout in `category-window-management.html` is the same one-row-per-shortcut pattern already implemented, just no longer nested inside a `ClayCard` grid item — instead it's one wide list inside a single large clay surface with row dividers, per the mockup). If the current `ShortcutRow` has no divider between rows, add one (`border-b border-cream-dark`, last-child excluded) to match.
- OS toggle stays available on this page too (reuse `OSToggle`, same as `NavBar`).
- Prev/next category navigation row at the bottom: links to the previous/next category in the `categories` array order (wrap around at the ends, i.e. last category's "next" goes to the first), each showing the target category's name, matching the two-button row at the bottom of `category-window-management.html`.

### 4. Shared shell
- `NavBar`: the category anchor links (`#category-id`) become route links (`<Link to="/category/${id}">`) instead of same-page hash anchors. Logo continues to link to `/` (home).
- Keep `OSToggle`, `ThemeToggle`, `LanguageSwitcher` behavior exactly as-is — these are global, cross-page state (already persisted via `useOS`/`useTheme`/`useLanguage`) and must keep working identically on both Home and every Category page.
- `Footer` renders on both page types, unchanged.

### 5. i18n
- Do not hardcode English strings where a `useTranslation()` key already exists for that purpose (e.g. `t.emptyState`, `t.searchPlaceholder`). For **new** UI chrome text this redesign introduces (breadcrumb "Home" label, "view all" card affordance, "Previous"/"Next" labels, category shortcut-count phrasing), add new keys to every language object in `src/i18n/ui-strings.ts` — English content for all 7 languages is fine for non-English locales if you don't have real translations (matching the existing graceful-degradation pattern already used for `NAV_LABELS` in `NavBar.tsx`), but the *keys* must exist for every `Language` so TypeScript stays fully typed with no `?? fallback` string literals scattered through new components.

### 6. What NOT to change
- Don't touch `src/data/shortcuts.ts` content (categories/shortcuts/translations) — only add the new `categoryAccents.ts` lookup alongside it.
- Don't change `useOS`, `useTheme`, `useLanguage`, `useShortcutFilter` behavior/contracts — extend, don't rewrite, and keep them framework-agnostic of routing.
- Don't introduce a CSS-in-JS or styling approach other than Tailwind utility classes + the existing `@theme` tokens — no inline `style={{ ... }}` beyond what's already idiomatic in this codebase (e.g. `style={{ fontFamily: "var(--font-display)" }}` is fine, matching existing usage).
- Don't remove or restyle `ClayButton`, `ClayCard`, `ClayDropdown`, `KeyBadge`, `CategoryIcon` — reuse them; only extend variants if a genuinely new visual need arises (e.g. `ClayCard` may need a `background` prop if it currently hardcodes `bg-cream` and category cards need different accent backgrounds — check its current implementation before assuming).

## Acceptance checklist (verify before calling this done)

- [ ] `npm run build` (`tsc -b && vite build`) passes with zero type errors.
- [ ] `npm run lint` (oxlint) passes clean.
- [ ] All 10 categories are reachable from Home and each renders its full shortcut list correctly on both `windows` and `mac` OS toggle states.
- [ ] Prev/next navigation on the category page correctly wraps around at both ends of the 10-category list.
- [ ] Theme toggle (light/dark), OS toggle, and language switcher all still work identically on Home and every category page, and state persists across a route navigation (it's global state, so this should be automatic — just confirm no regression).
- [ ] Local category-page search actually filters that category's shortcuts (test with a query that matches and one that matches nothing — confirm the empty state reads sensibly, doesn't crash).
- [ ] Global hero search on Home filters the category index grid as decided in step 2.
- [ ] New violet/mint/pink tokens have working dark-mode values (check both themes visually, or at minimum confirm the dark overrides exist and use plausible contrast-safe values following the existing cream/charcoal dark-mode pattern).
- [ ] No console errors/warnings introduced (router warnings included).
- [ ] Visually cross-check both new page types against `design/mockups/home.html` and `design/mockups/category-window-management.html` side by side (screenshot comparison is fine) before considering this complete — small deviations in spacing/copy are acceptable, but layout structure, color-per-category mapping, and the overall "Vibrant Playful Clay" feel should match.

## Deliverable

A working multi-page app with all 10 category routes built out, matching the two approved mockups, with the build/lint checklist above passing. Summarize at the end: any deviations you made from the mockups or this instruction, and why.
