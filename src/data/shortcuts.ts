import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  SquareStack,
  Compass,
  Type,
  MousePointerClick,
  ClipboardList,
  Globe,
  CodeXml,
  PenTool,
  SquareTerminal,
} from "lucide-react";

export interface Shortcut {
  id: string;
  description: string;
  /** Key tokens in press order, e.g. ["Win", "←"] */
  windows: string[];
  mac: string[];
  /** Optional caveat shown under the entry — used only where OS behavior
   *  genuinely differs or isn't a native 1:1 match. Never used to paper
   *  over a shortcut that doesn't exist. */
  note?: string;
}

export interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  shortcuts: Shortcut[];
}

export const categories: Category[] = [
  {
    id: "window-management",
    title: "Window Management",
    icon: AppWindow,
    shortcuts: [
      {
        id: "snap-left-right",
        description: "Snap the active window to the left or right half",
        windows: ["Win", "← / →"],
        mac: ["⌃", "⌥", "← / →"],
        note: "macOS 15 Sequoia added native tiling on this shortcut; on older macOS, use a drag-to-edge gesture or a third-party tool like Rectangle.",
      },
      {
        id: "snap-top-bottom",
        description: "Snap the active window to a top or bottom quarter",
        windows: ["Win", "↑ / ↓"],
        mac: ["⌃", "⌥", "↑ / ↓"],
        note: "Quarter-snap via keyboard is native from macOS 15 Sequoia onward.",
      },
      {
        id: "close-window-permanently",
        description: "Close the app completely (not just the current window)",
        windows: ["Alt", "F4"],
        mac: ["⌘", "Q"],
        note: "⌘W only closes the current window/tab on Mac — ⌘Q quits the whole app, which is the true equivalent of Alt+F4.",
      },
      {
        id: "switch-virtual-desktop",
        description: "Switch to the next or previous virtual desktop",
        windows: ["Win", "⌃", "← / →"],
        mac: ["⌃", "← / →"],
      },
      {
        id: "new-virtual-desktop",
        description: "Create a new virtual desktop",
        windows: ["Win", "⌃", "D"],
        mac: ["⌃", "↑", "then click +"],
        note: "Mac has no single keystroke to create a desktop — ⌃↑ opens Mission Control, then a new desktop is added from there.",
      },
      {
        id: "move-window-monitor",
        description: "Move the active window to another monitor",
        windows: ["Win", "Shift", "← / →"],
        mac: ["drag only"],
        note: "macOS has no default keyboard shortcut to move a window between displays — this is a genuine gap, not an oversight.",
      },
      {
        id: "minimize-window",
        description: "Minimize the active window",
        windows: ["Win", "↓"],
        mac: ["⌘", "M"],
      },
      {
        id: "maximize-restore-toggle",
        description: "Maximize the active window, or restore it back down",
        windows: ["Win", "↑"],
        mac: ["double-click title bar"],
        note: "macOS has no default keyboard shortcut to maximize a window to fill the screen — the green button only 'zooms' to fit content, and double-clicking the title bar is the closest native equivalent.",
      },
      {
        id: "show-desktop",
        description: "Show the desktop by minimizing all windows",
        windows: ["Win", "D"],
        mac: ["⌘", "F3"],
        note: "On Mac this triggers Mission Control's desktop view rather than literally minimizing every window — some keyboards need Fn+⌘+F3.",
      },
    ],
  },
  {
    id: "tab-navigation",
    title: "Tab Navigation",
    icon: SquareStack,
    shortcuts: [
      {
        id: "switch-windows",
        description: "Switch between open apps/windows",
        windows: ["Alt", "Tab"],
        mac: ["⌘", "Tab"],
      },
      {
        id: "switch-tabs-next",
        description: "Switch to the next tab",
        windows: ["Ctrl", "Tab"],
        mac: ["⌃", "Tab"],
      },
      {
        id: "switch-tabs-prev",
        description: "Switch to the previous tab",
        windows: ["Ctrl", "Shift", "Tab"],
        mac: ["⌃", "Shift", "Tab"],
      },
      {
        id: "detach-tab",
        description: "Detach the current tab into its own window",
        windows: ["drag tab out"],
        mac: ["drag tab out"],
        note: "No mainstream browser ships a keyboard-only shortcut for this — it's a drag gesture on both platforms.",
      },
      {
        id: "jump-to-tab",
        description: "Jump directly to tab 1–8, or jump to the last tab",
        windows: ["Ctrl", "1–9"],
        mac: ["⌘", "1–9"],
        note: "On both OSes, 1–8 jump to that exact tab position — 9 always jumps to the last tab, not a literal 9th tab.",
      },
      {
        id: "reopen-closed-tab",
        description: "Reopen the most recently closed tab",
        windows: ["Ctrl", "Shift", "T"],
        mac: ["⌘", "Shift", "T"],
      },
      {
        id: "open-new-tab",
        description: "Open a new tab",
        windows: ["Ctrl", "T"],
        mac: ["⌘", "T"],
      },
      {
        id: "close-current-tab",
        description: "Close the current tab",
        windows: ["Ctrl", "W"],
        mac: ["⌘", "W"],
      },
    ],
  },
  {
    id: "navigation",
    title: "Browser & File Explorer Navigation",
    icon: Compass,
    shortcuts: [
      {
        id: "go-back",
        description: "Go back (browser history or folder history)",
        windows: ["Alt", "←"],
        mac: ["⌘", "["],
      },
      {
        id: "go-forward",
        description: "Go forward (browser history or folder history)",
        windows: ["Alt", "→"],
        mac: ["⌘", "]"],
      },
      {
        id: "focus-address-bar",
        description: "Focus the address/location bar",
        windows: ["Ctrl", "L"],
        mac: ["⌘", "L"],
      },
      {
        id: "up-one-folder",
        description: "Go up one folder level (File Explorer / Finder)",
        windows: ["Alt", "↑"],
        mac: ["⌘", "↑"],
      },
      {
        id: "refresh-page",
        description: "Refresh the current page or folder view",
        windows: ["F5"],
        mac: ["⌘", "R"],
      },
      {
        id: "hard-refresh",
        description: "Hard refresh a page, bypassing the cache",
        windows: ["Ctrl", "F5"],
        mac: ["⌘", "Shift", "R"],
      },
      {
        id: "new-explorer-finder-window",
        description: "Open a new File Explorer / Finder window",
        windows: ["Win", "E"],
        mac: ["⌘", "N"],
        note: "⌘N in Finder opens a new Finder window only when Finder is the active app — from another app it creates a new window for that app instead.",
      },
      {
        id: "rename-item",
        description: "Rename the selected file or folder",
        windows: ["F2"],
        mac: ["Return"],
        note: "Windows uses a dedicated Rename key (F2); macOS has no separate rename key — Return/Enter renames a selected Finder item instead of opening it.",
      },
    ],
  },
  {
    id: "text-editing",
    title: "Text Editing",
    icon: Type,
    shortcuts: [
      {
        id: "jump-word",
        description: "Jump the cursor one word left or right",
        windows: ["Ctrl", "← / →"],
        mac: ["⌥", "← / →"],
      },
      {
        id: "select-word",
        description: "Select one word at a time",
        windows: ["Ctrl", "Shift", "← / →"],
        mac: ["⌥", "Shift", "← / →"],
      },
      {
        id: "select-line",
        description: "Select from cursor to the start or end of the line",
        windows: ["Shift", "Home / End"],
        mac: ["⌘", "Shift", "← / →"],
      },
      {
        id: "delete-word",
        description: "Delete one word at a time (backspace)",
        windows: ["Ctrl", "Backspace"],
        mac: ["⌥", "Delete"],
      },
      {
        id: "undo",
        description: "Undo the last action",
        windows: ["Ctrl", "Z"],
        mac: ["⌘", "Z"],
      },
      {
        id: "redo",
        description: "Redo the last undone action",
        windows: ["Ctrl", "Y"],
        mac: ["⌘", "Shift", "Z"],
        note: "Windows commonly uses Ctrl+Y for redo, though some apps (mostly Adobe/design tools) use Ctrl+Shift+Z instead — macOS standardizes on ⌘Shift+Z.",
      },
      {
        id: "select-all",
        description: "Select all text or items in the current context",
        windows: ["Ctrl", "A"],
        mac: ["⌘", "A"],
      },
      {
        id: "find-in-page",
        description: "Open find/search within the current document or page",
        windows: ["Ctrl", "F"],
        mac: ["⌘", "F"],
      },
    ],
  },
  {
    id: "context-menu",
    title: "Context Menu & Right-click Alternatives",
    icon: MousePointerClick,
    shortcuts: [
      {
        id: "open-context-menu",
        description: "Open the right-click context menu from the keyboard",
        windows: ["Shift", "F10"],
        mac: ["⌃", "click"],
        note: "Mac has no dedicated Menu key — Control+click (or a two-finger tap on trackpad) is the real equivalent.",
      },
      {
        id: "open-context-menu-alt",
        description: "Alternative: open context menu via the Menu key",
        windows: ["Menu key"],
        mac: ["n/a"],
        note: "Only present on keyboards that have a physical Menu key; not all do.",
      },
      {
        id: "properties-get-info",
        description: "Open the Properties / Get Info panel for the selected item",
        windows: ["Alt", "Enter"],
        mac: ["⌘", "I"],
        note: "This is the keyboard-only alternative to the right-click menu's 'Properties' (Windows) or 'Get Info' (Mac) entry.",
      },
      {
        id: "delete-item",
        description: "Delete the selected item (same as right-click → Delete)",
        windows: ["Delete"],
        mac: ["⌘", "Delete"],
        note: "Mac has no bare Delete-to-trash key on most keyboards — ⌘Delete moves the selected Finder item to the Trash.",
      },
      {
        id: "permanent-delete",
        description: "Permanently delete the selected item, bypassing Recycle Bin/Trash",
        windows: ["Shift", "Delete"],
        mac: ["⌥", "⌘", "Delete"],
        note: "Both trigger a confirmation prompt before permanently removing the item — this is the keyboard alternative to the right-click menu's delete-without-recovery option.",
      },
    ],
  },
  {
    id: "system-utilities",
    title: "Clipboard & System Utilities",
    icon: ClipboardList,
    shortcuts: [
      {
        id: "clipboard-history",
        description: "Open clipboard history",
        windows: ["Win", "V"],
        mac: ["⌃", "⌘", "V"],
      },
      {
        id: "task-manager",
        description: "Open Task Manager / Force Quit Applications",
        windows: ["Ctrl", "Shift", "Esc"],
        mac: ["⌘", "⌥", "Esc"],
      },
      {
        id: "emoji-picker",
        description: "Open the emoji picker",
        windows: ["Win", "."],
        mac: ["⌃", "⌘", "Space"],
      },
      {
        id: "screenshot-area",
        description: "Capture a selected area of the screen",
        windows: ["Win", "Shift", "S"],
        mac: ["⌘", "Shift", "4"],
      },
      {
        id: "screenshot-full",
        description: "Capture the entire screen",
        windows: ["Win", "PrtScn"],
        mac: ["⌘", "Shift", "3"],
      },
      {
        id: "lock-screen",
        description: "Lock the screen",
        windows: ["Win", "L"],
        mac: ["⌃", "⌘", "Q"],
      },
      {
        id: "system-zoom-toggle",
        description: "Toggle system-level screen magnification (accessibility zoom, not browser zoom)",
        windows: ["Win", "+ / -"],
        mac: ["⌥", "⌘", "8"],
        note: "Both are OS-level Magnifier/Zoom accessibility features that scale the whole screen — distinct from a browser's Ctrl/⌘ +/- page zoom. On Mac this requires 'Use keyboard shortcuts to zoom' to be enabled first in Accessibility settings.",
      },
      {
        id: "copy-item",
        description: "Copy the selection to the clipboard",
        windows: ["Ctrl", "C"],
        mac: ["⌘", "C"],
      },
      {
        id: "paste-item",
        description: "Paste from the clipboard",
        windows: ["Ctrl", "V"],
        mac: ["⌘", "V"],
      },
    ],
  },
  {
    id: "browser",
    title: "Browser",
    icon: Globe,
    shortcuts: [
      {
        id: "open-private-window",
        description: "Open a new private/incognito window",
        windows: ["Ctrl", "Shift", "N"],
        mac: ["⌘", "Shift", "N"],
      },
      {
        id: "bookmark-page",
        description: "Bookmark the current page",
        windows: ["Ctrl", "D"],
        mac: ["⌘", "D"],
      },
      {
        id: "zoom-in",
        description: "Zoom in on the current page",
        windows: ["Ctrl", "+"],
        mac: ["⌘", "+"],
      },
      {
        id: "zoom-reset",
        description: "Reset page zoom to 100%",
        windows: ["Ctrl", "0"],
        mac: ["⌘", "0"],
      },
      {
        id: "open-history",
        description: "Open browsing history",
        windows: ["Ctrl", "H"],
        mac: ["⌘", "Y"],
        note: "Chrome/Edge use ⌘Y for history on Mac (⌘H is reserved by macOS to hide the app) — a genuine divergence, not a typo of Ctrl+H.",
      },
      {
        id: "view-page-source",
        description: "View the current page's HTML source",
        windows: ["Ctrl", "U"],
        mac: ["⌥", "⌘", "U"],
      },
      {
        id: "open-devtools",
        description: "Open browser DevTools",
        windows: ["Ctrl", "Shift", "I"],
        mac: ["⌥", "⌘", "I"],
        note: "F12 also opens DevTools on Windows — Mac keyboards don't reliably map a bare F12 the same way, so ⌥⌘I is the standard Mac shortcut.",
      },
    ],
  },
  {
    id: "vs-code",
    title: "VS Code",
    icon: CodeXml,
    shortcuts: [
      {
        id: "command-palette",
        description: "Open the Command Palette",
        windows: ["Ctrl", "Shift", "P"],
        mac: ["⌘", "Shift", "P"],
      },
      {
        id: "quick-open-file",
        description: "Quickly open a file by name",
        windows: ["Ctrl", "P"],
        mac: ["⌘", "P"],
      },
      {
        id: "toggle-integrated-terminal",
        description: "Show or hide the integrated terminal",
        windows: ["Ctrl", "`"],
        mac: ["⌃", "`"],
      },
      {
        id: "add-cursor-below",
        description: "Add a new cursor on the line below",
        windows: ["Ctrl", "Alt", "↓"],
        mac: ["⌘", "⌥", "↓"],
      },
      {
        id: "select-next-occurrence",
        description: "Select the next occurrence of the current selection",
        windows: ["Ctrl", "D"],
        mac: ["⌘", "D"],
      },
      {
        id: "go-to-definition",
        description: "Go to the definition of the symbol under the cursor",
        windows: ["F12"],
        mac: ["F12"],
      },
      {
        id: "toggle-sidebar",
        description: "Show or hide the sidebar",
        windows: ["Ctrl", "B"],
        mac: ["⌘", "B"],
      },
      {
        id: "open-settings",
        description: "Open Settings",
        windows: ["Ctrl", ","],
        mac: ["⌘", ","],
      },
    ],
  },
  {
    id: "vim",
    title: "Vim",
    icon: PenTool,
    shortcuts: [
      {
        id: "enter-insert-mode",
        description: "Enter insert mode",
        windows: ["i"],
        mac: ["i"],
      },
      {
        id: "return-to-normal-mode",
        description: "Return to normal mode",
        windows: ["Esc"],
        mac: ["Esc"],
      },
      {
        id: "save-file",
        description: "Save the current file",
        windows: ["Esc", ":", "w", "Enter"],
        mac: ["Esc", ":", "w", "Enter"],
        note: "The `:w` is typed literally as a command-line sequence after Esc, not pressed as a simultaneous key chord.",
      },
      {
        id: "save-and-quit",
        description: "Save the file and quit Vim",
        windows: ["Esc", ":", "wq", "Enter"],
        mac: ["Esc", ":", "wq", "Enter"],
        note: "The `:wq` is typed literally as a command-line sequence after Esc, not pressed as a simultaneous key chord.",
      },
      {
        id: "quit-without-saving",
        description: "Quit Vim without saving changes",
        windows: ["Esc", ":", "q!", "Enter"],
        mac: ["Esc", ":", "q!", "Enter"],
        note: "The `:q!` is typed literally as a command-line sequence after Esc, not pressed as a simultaneous key chord.",
      },
      {
        id: "delete-line",
        description: "Delete the current line",
        windows: ["Esc", "d", "d"],
        mac: ["Esc", "d", "d"],
      },
      {
        id: "vim-undo",
        description: "Undo the last change",
        windows: ["Esc", "u"],
        mac: ["Esc", "u"],
      },
      {
        id: "search-forward",
        description: "Search forward for a pattern",
        windows: ["/", "pattern", "Enter"],
        mac: ["/", "pattern", "Enter"],
      },
    ],
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: SquareTerminal,
    shortcuts: [
      {
        id: "interrupt-process",
        description: "Interrupt (kill) the currently running process",
        windows: ["Ctrl", "C"],
        mac: ["Ctrl", "C"],
      },
      {
        id: "clear-screen",
        description: "Clear the terminal screen",
        windows: ["Ctrl", "L"],
        mac: ["Ctrl", "L"],
      },
      {
        id: "tab-completion",
        description: "Autocomplete the current command or path",
        windows: ["Tab"],
        mac: ["Tab"],
      },
      {
        id: "reverse-search-history",
        description: "Search backward through command history",
        windows: ["Ctrl", "R"],
        mac: ["Ctrl", "R"],
        note: "A bash/zsh readline default that PowerShell's PSReadLine module also honors out of the box — a genuine cross-shell coincidence, not an assumption.",
      },
      {
        id: "clear-line",
        description: "Clear the current input line",
        windows: ["Ctrl", "U"],
        mac: ["Ctrl", "U"],
      },
      {
        id: "jump-to-line-start",
        description: "Jump the cursor to the start of the line",
        windows: ["Ctrl", "A"],
        mac: ["Ctrl", "A"],
      },
      {
        id: "jump-to-line-end",
        description: "Jump the cursor to the end of the line",
        windows: ["Ctrl", "E"],
        mac: ["Ctrl", "E"],
      },
      {
        id: "move-to-background",
        description: "Suspend the current process and move it to the background",
        windows: ["Ctrl", "Z"],
        mac: ["Ctrl", "Z"],
      },
    ],
  },
];
