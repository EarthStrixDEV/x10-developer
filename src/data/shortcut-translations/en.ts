import type { ShortcutTranslations } from "./types";

export const en: ShortcutTranslations = {
  // window-management
  "snap-left-right": {
    description: "Snap the active window to the left or right half",
    note: "macOS 15 Sequoia added native tiling on this shortcut; on older macOS, use a drag-to-edge gesture or a third-party tool like Rectangle.",
  },
  "snap-top-bottom": {
    description: "Snap the active window to a top or bottom quarter",
    note: "Quarter-snap via keyboard is native from macOS 15 Sequoia onward.",
  },
  "close-window-permanently": {
    description: "Close the app completely (not just the current window)",
    note: "⌘W only closes the current window/tab on Mac — ⌘Q quits the whole app, which is the true equivalent of Alt+F4.",
  },
  "switch-virtual-desktop": {
    description: "Switch to the next or previous virtual desktop",
  },
  "new-virtual-desktop": {
    description: "Create a new virtual desktop",
    note: "Mac has no single keystroke to create a desktop — ⌃↑ opens Mission Control, then a new desktop is added from there.",
  },
  "move-window-monitor": {
    description: "Move the active window to another monitor",
    note: "macOS has no default keyboard shortcut to move a window between displays — this is a genuine gap, not an oversight.",
  },
  "minimize-window": {
    description: "Minimize the active window",
  },
  "maximize-restore-toggle": {
    description: "Maximize the active window, or restore it back down",
    note: "macOS has no default keyboard shortcut to maximize a window to fill the screen — the green button only 'zooms' to fit content, and double-clicking the title bar is the closest native equivalent.",
  },
  "show-desktop": {
    description: "Show the desktop by minimizing all windows",
    note: "On Mac this triggers Mission Control's desktop view rather than literally minimizing every window — some keyboards need Fn+⌘+F3.",
  },

  // tab-navigation
  "switch-windows": {
    description: "Switch between open apps/windows",
  },
  "switch-tabs-next": {
    description: "Switch to the next tab",
  },
  "switch-tabs-prev": {
    description: "Switch to the previous tab",
  },
  "detach-tab": {
    description: "Detach the current tab into its own window",
    note: "No mainstream browser ships a keyboard-only shortcut for this — it's a drag gesture on both platforms.",
  },
  "jump-to-tab": {
    description: "Jump directly to tab 1–8, or jump to the last tab",
    note: "On both OSes, 1–8 jump to that exact tab position — 9 always jumps to the last tab, not a literal 9th tab.",
  },
  "reopen-closed-tab": {
    description: "Reopen the most recently closed tab",
  },
  "open-new-tab": {
    description: "Open a new tab",
  },
  "close-current-tab": {
    description: "Close the current tab",
  },

  // navigation
  "go-back": {
    description: "Go back (browser history or folder history)",
  },
  "go-forward": {
    description: "Go forward (browser history or folder history)",
  },
  "focus-address-bar": {
    description: "Focus the address/location bar",
  },
  "up-one-folder": {
    description: "Go up one folder level (File Explorer / Finder)",
  },
  "refresh-page": {
    description: "Refresh the current page or folder view",
  },
  "hard-refresh": {
    description: "Hard refresh a page, bypassing the cache",
  },
  "new-explorer-finder-window": {
    description: "Open a new File Explorer / Finder window",
    note: "⌘N in Finder opens a new Finder window only when Finder is the active app — from another app it creates a new window for that app instead.",
  },
  "rename-item": {
    description: "Rename the selected file or folder",
    note: "Windows uses a dedicated Rename key (F2); macOS has no separate rename key — Return/Enter renames a selected Finder item instead of opening it.",
  },

  // text-editing
  "jump-word": {
    description: "Jump the cursor one word left or right",
  },
  "select-word": {
    description: "Select one word at a time",
  },
  "select-line": {
    description: "Select from cursor to the start or end of the line",
  },
  "delete-word": {
    description: "Delete one word at a time (backspace)",
  },
  undo: {
    description: "Undo the last action",
  },
  redo: {
    description: "Redo the last undone action",
    note: "Windows commonly uses Ctrl+Y for redo, though some apps (mostly Adobe/design tools) use Ctrl+Shift+Z instead — macOS standardizes on ⌘Shift+Z.",
  },
  "select-all": {
    description: "Select all text or items in the current context",
  },
  "find-in-page": {
    description: "Open find/search within the current document or page",
  },

  // context-menu
  "open-context-menu": {
    description: "Open the right-click context menu from the keyboard",
    note: "Mac has no dedicated Menu key — Control+click (or a two-finger tap on trackpad) is the real equivalent.",
  },
  "open-context-menu-alt": {
    description: "Alternative: open context menu via the Menu key",
    note: "Only present on keyboards that have a physical Menu key; not all do.",
  },
  "properties-get-info": {
    description: "Open the Properties / Get Info panel for the selected item",
    note: "This is the keyboard-only alternative to the right-click menu's 'Properties' (Windows) or 'Get Info' (Mac) entry.",
  },
  "delete-item": {
    description: "Delete the selected item (same as right-click → Delete)",
    note: "Mac has no bare Delete-to-trash key on most keyboards — ⌘Delete moves the selected Finder item to the Trash.",
  },
  "permanent-delete": {
    description: "Permanently delete the selected item, bypassing Recycle Bin/Trash",
    note: "Both trigger a confirmation prompt before permanently removing the item — this is the keyboard alternative to the right-click menu's delete-without-recovery option.",
  },

  // system-utilities
  "clipboard-history": {
    description: "Open clipboard history",
  },
  "task-manager": {
    description: "Open Task Manager / Force Quit Applications",
  },
  "emoji-picker": {
    description: "Open the emoji picker",
  },
  "screenshot-area": {
    description: "Capture a selected area of the screen",
  },
  "screenshot-full": {
    description: "Capture the entire screen",
  },
  "lock-screen": {
    description: "Lock the screen",
  },
  "system-zoom-toggle": {
    description:
      "Toggle system-level screen magnification (accessibility zoom, not browser zoom)",
    note: "Both are OS-level Magnifier/Zoom accessibility features that scale the whole screen — distinct from a browser's Ctrl/⌘ +/- page zoom. On Mac this requires 'Use keyboard shortcuts to zoom' to be enabled first in Accessibility settings.",
  },
  "copy-item": {
    description: "Copy the selection to the clipboard",
  },
  "paste-item": {
    description: "Paste from the clipboard",
  },

  // browser
  "open-private-window": {
    description: "Open a new private/incognito window",
  },
  "bookmark-page": {
    description: "Bookmark the current page",
  },
  "zoom-in": {
    description: "Zoom in on the current page",
  },
  "zoom-reset": {
    description: "Reset page zoom to 100%",
  },
  "open-history": {
    description: "Open browsing history",
    note: "Chrome/Edge use ⌘Y for history on Mac (⌘H is reserved by macOS to hide the app) — a genuine divergence, not a typo of Ctrl+H.",
  },
  "view-page-source": {
    description: "View the current page's HTML source",
  },
  "open-devtools": {
    description: "Open browser DevTools",
    note: "F12 also opens DevTools on Windows — Mac keyboards don't reliably map a bare F12 the same way, so ⌥⌘I is the standard Mac shortcut.",
  },

  // vs-code
  "command-palette": {
    description: "Open the Command Palette",
  },
  "quick-open-file": {
    description: "Quickly open a file by name",
  },
  "toggle-integrated-terminal": {
    description: "Show or hide the integrated terminal",
  },
  "add-cursor-below": {
    description: "Add a new cursor on the line below",
  },
  "select-next-occurrence": {
    description: "Select the next occurrence of the current selection",
  },
  "go-to-definition": {
    description: "Go to the definition of the symbol under the cursor",
  },
  "toggle-sidebar": {
    description: "Show or hide the sidebar",
  },
  "open-settings": {
    description: "Open Settings",
  },

  // vim
  "enter-insert-mode": {
    description: "Enter insert mode",
  },
  "return-to-normal-mode": {
    description: "Return to normal mode",
  },
  "save-file": {
    description: "Save the current file",
    note: "The `:w` is typed literally as a command-line sequence after Esc, not pressed as a simultaneous key chord.",
  },
  "save-and-quit": {
    description: "Save the file and quit Vim",
    note: "The `:wq` is typed literally as a command-line sequence after Esc, not pressed as a simultaneous key chord.",
  },
  "quit-without-saving": {
    description: "Quit Vim without saving changes",
    note: "The `:q!` is typed literally as a command-line sequence after Esc, not pressed as a simultaneous key chord.",
  },
  "delete-line": {
    description: "Delete the current line",
  },
  "vim-undo": {
    description: "Undo the last change",
  },
  "search-forward": {
    description: "Search forward for a pattern",
  },

  // terminal
  "interrupt-process": {
    description: "Interrupt (kill) the currently running process",
  },
  "clear-screen": {
    description: "Clear the terminal screen",
  },
  "tab-completion": {
    description: "Autocomplete the current command or path",
  },
  "reverse-search-history": {
    description: "Search backward through command history",
    note: "A bash/zsh readline default that PowerShell's PSReadLine module also honors out of the box — a genuine cross-shell coincidence, not an assumption.",
  },
  "clear-line": {
    description: "Clear the current input line",
  },
  "jump-to-line-start": {
    description: "Jump the cursor to the start of the line",
  },
  "jump-to-line-end": {
    description: "Jump the cursor to the end of the line",
  },
  "move-to-background": {
    description: "Suspend the current process and move it to the background",
  },
};
