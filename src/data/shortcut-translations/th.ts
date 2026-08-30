import type { ShortcutTranslations } from "./types";

export const th: ShortcutTranslations = {
  // window-management
  "snap-left-right": {
    description: "จัดหน้าต่างที่ใช้งานอยู่ให้ชิดซ้ายหรือชิดขวาครึ่งจอ",
    note: "macOS 15 Sequoia เพิ่มการจัดหน้าต่างแบบ native ด้วยคีย์ลัดนี้แล้ว ส่วน macOS รุ่นเก่ากว่านั้นให้ลากหน้าต่างไปชิดขอบจอ หรือใช้โปรแกรมเสริมอย่าง Rectangle",
  },
  "snap-top-bottom": {
    description: "จัดหน้าต่างที่ใช้งานอยู่ให้ชิดมุมบนหรือล่างแบบ 1 ใน 4 ของจอ",
    note: "การจัด quarter-snap ด้วยคีย์บอร์ดรองรับแบบ native ตั้งแต่ macOS 15 Sequoia เป็นต้นไป",
  },
  "close-window-permanently": {
    description: "ปิดแอปทั้งหมด (ไม่ใช่แค่หน้าต่างปัจจุบัน)",
    note: "บน Mac, ⌘W จะปิดแค่หน้าต่าง/แท็บปัจจุบันเท่านั้น — ⌘Q คือคำสั่งปิดแอปทั้งหมด ซึ่งเทียบเท่ากับ Alt+F4 อย่างแท้จริง",
  },
  "switch-virtual-desktop": {
    description: "สลับไปยัง virtual desktop ถัดไปหรือก่อนหน้า",
  },
  "new-virtual-desktop": {
    description: "สร้าง virtual desktop ใหม่",
    note: "Mac ไม่มีคีย์ลัดเดียวสำหรับสร้าง desktop ใหม่โดยตรง — ⌃↑ จะเปิด Mission Control ก่อน แล้วค่อยกดเพิ่ม desktop ใหม่จากตรงนั้น",
  },
  "move-window-monitor": {
    description: "ย้ายหน้าต่างที่ใช้งานอยู่ไปยังอีกจอหนึ่ง",
    note: "macOS ไม่มีคีย์ลัดมาตรฐานสำหรับย้ายหน้าต่างข้ามจอ — เป็นข้อจำกัดจริงของระบบ ไม่ใช่การตกหล่นจากคู่มือนี้",
  },
  "minimize-window": {
    description: "ย่อหน้าต่างที่ใช้งานอยู่",
  },
  "maximize-restore-toggle": {
    description: "ขยายหน้าต่างที่ใช้งานอยู่ให้เต็มจอ หรือคืนกลับขนาดเดิม",
    note: "macOS ไม่มีคีย์ลัดสำหรับขยายหน้าต่างให้เต็มจอโดยตรง — ปุ่มสีเขียวจะแค่ 'zoom' ให้พอดีกับเนื้อหาเท่านั้น ส่วนการดับเบิลคลิกที่แถบชื่อหน้าต่างเป็นวิธีที่ใกล้เคียงที่สุด",
  },
  "show-desktop": {
    description: "แสดงเดสก์ท็อปโดยย่อหน้าต่างทั้งหมด",
    note: "บน Mac คำสั่งนี้จะเปิดมุมมองเดสก์ท็อปของ Mission Control แทนการย่อหน้าต่างทุกบานจริง ๆ — คีย์บอร์ดบางรุ่นต้องกด Fn+⌘+F3",
  },

  // tab-navigation
  "switch-windows": {
    description: "สลับระหว่างแอป/หน้าต่างที่เปิดอยู่",
  },
  "switch-tabs-next": {
    description: "สลับไปยังแท็บถัดไป",
  },
  "switch-tabs-prev": {
    description: "สลับไปยังแท็บก่อนหน้า",
  },
  "detach-tab": {
    description: "แยกแท็บปัจจุบันออกมาเป็นหน้าต่างใหม่",
    note: "ไม่มีเบราว์เซอร์หลักตัวไหนมีคีย์ลัดสำหรับสิ่งนี้โดยเฉพาะ — ทั้งสองระบบต้องใช้วิธีลากแท็บออกมา",
  },
  "jump-to-tab": {
    description: "กระโดดไปยังแท็บที่ 1–8 โดยตรง หรือไปยังแท็บสุดท้าย",
    note: "ทั้งสองระบบปฏิบัติการ เลข 1–8 จะกระโดดไปยังตำแหน่งแท็บนั้นตรง ๆ — ส่วนเลข 9 จะกระโดดไปแท็บสุดท้ายเสมอ ไม่ใช่แท็บที่ 9 จริง ๆ",
  },
  "reopen-closed-tab": {
    description: "เปิดแท็บที่เพิ่งปิดไปล่าสุดขึ้นมาใหม่",
  },
  "open-new-tab": {
    description: "เปิดแท็บใหม่",
  },
  "close-current-tab": {
    description: "ปิดแท็บปัจจุบัน",
  },

  // navigation
  "go-back": {
    description: "ย้อนกลับ (ประวัติเบราว์เซอร์หรือประวัติโฟลเดอร์)",
  },
  "go-forward": {
    description: "ไปข้างหน้า (ประวัติเบราว์เซอร์หรือประวัติโฟลเดอร์)",
  },
  "focus-address-bar": {
    description: "โฟกัสไปที่แถบที่อยู่/URL",
  },
  "up-one-folder": {
    description: "ขึ้นไปหนึ่งระดับโฟลเดอร์ (File Explorer / Finder)",
  },
  "refresh-page": {
    description: "รีเฟรชหน้าเว็บหรือมุมมองโฟลเดอร์ปัจจุบัน",
  },
  "hard-refresh": {
    description: "รีเฟรชหน้าเว็บแบบ hard refresh โดยข้าม cache",
  },
  "new-explorer-finder-window": {
    description: "เปิดหน้าต่าง File Explorer / Finder ใหม่",
    note: "⌘N ใน Finder จะเปิดหน้าต่าง Finder ใหม่ก็ต่อเมื่อ Finder เป็นแอปที่กำลังใช้งานอยู่เท่านั้น — ถ้าใช้จากแอปอื่นจะเปิดหน้าต่างใหม่ของแอปนั้นแทน",
  },
  "rename-item": {
    description: "เปลี่ยนชื่อไฟล์หรือโฟลเดอร์ที่เลือกไว้",
    note: "Windows มีปุ่มเปลี่ยนชื่อโดยเฉพาะ (F2) ส่วน macOS ไม่มีปุ่มเปลี่ยนชื่อแยกต่างหาก — Return/Enter จะใช้เปลี่ยนชื่อรายการที่เลือกใน Finder แทนการเปิดไฟล์นั้น",
  },

  // text-editing
  "jump-word": {
    description: "ย้ายเคอร์เซอร์ข้ามคำไปทางซ้ายหรือขวาทีละคำ",
  },
  "select-word": {
    description: "เลือกข้อความทีละคำ",
  },
  "select-line": {
    description: "เลือกข้อความจากตำแหน่งเคอร์เซอร์ไปจนถึงต้นบรรทัดหรือท้ายบรรทัด",
  },
  "delete-word": {
    description: "ลบข้อความทีละคำ (แบบ backspace)",
  },
  undo: {
    description: "เลิกทำการกระทำล่าสุด (Undo)",
  },
  redo: {
    description: "ทำซ้ำการกระทำที่เพิ่ง Undo ไป (Redo)",
    note: "Windows มักใช้ Ctrl+Y สำหรับ Redo แต่บางแอป (ส่วนใหญ่เป็นเครื่องมือของ Adobe/งานออกแบบ) ใช้ Ctrl+Shift+Z แทน — ส่วน macOS ใช้ ⌘Shift+Z เป็นมาตรฐานเดียว",
  },
  "select-all": {
    description: "เลือกข้อความหรือรายการทั้งหมดในบริบทปัจจุบัน",
  },
  "find-in-page": {
    description: "เปิดช่องค้นหาภายในเอกสารหรือหน้าเว็บปัจจุบัน",
  },

  // context-menu
  "open-context-menu": {
    description: "เปิดเมนูคลิกขวาด้วยคีย์บอร์ด",
    note: "Mac ไม่มีปุ่ม Menu โดยเฉพาะ — การกด Control ค้างแล้วคลิก (หรือแตะสองนิ้วบน trackpad) คือวิธีที่เทียบเท่ากันจริง ๆ",
  },
  "open-context-menu-alt": {
    description: "อีกวิธีหนึ่ง: เปิดเมนูคลิกขวาผ่านปุ่ม Menu",
    note: "มีเฉพาะในคีย์บอร์ดที่มีปุ่ม Menu จริงเท่านั้น ไม่ใช่ทุกรุ่นที่มี",
  },
  "properties-get-info": {
    description: "เปิดแผง Properties / Get Info ของรายการที่เลือก",
    note: "นี่คือคีย์ลัดแทนการคลิกขวาแล้วเลือก 'Properties' (Windows) หรือ 'Get Info' (Mac)",
  },
  "delete-item": {
    description: "ลบรายการที่เลือก (เหมือนคลิกขวา → Delete)",
    note: "คีย์บอร์ด Mac ส่วนใหญ่ไม่มีปุ่ม Delete แบบลบทิ้งลง Trash ตรง ๆ — ⌘Delete จะย้ายรายการที่เลือกใน Finder ไปที่ Trash",
  },
  "permanent-delete": {
    description: "ลบรายการที่เลือกแบบถาวร โดยข้าม Recycle Bin/Trash",
    note: "ทั้งสองระบบจะขึ้นข้อความยืนยันก่อนลบถาวรเสมอ — นี่คือคีย์ลัดแทนตัวเลือก 'ลบแบบกู้คืนไม่ได้' ในเมนูคลิกขวา",
  },

  // system-utilities
  "clipboard-history": {
    description: "เปิดประวัติคลิปบอร์ด",
  },
  "task-manager": {
    description: "เปิด Task Manager / Force Quit Applications",
  },
  "emoji-picker": {
    description: "เปิดตัวเลือกอิโมจิ",
  },
  "screenshot-area": {
    description: "แคปหน้าจอเฉพาะบริเวณที่เลือก",
  },
  "screenshot-full": {
    description: "แคปหน้าจอทั้งหมด",
  },
  "lock-screen": {
    description: "ล็อกหน้าจอ",
  },
  "system-zoom-toggle": {
    description: "สลับการซูมขยายหน้าจอระดับระบบ (accessibility zoom ไม่ใช่การซูมของเบราว์เซอร์)",
    note: "ทั้งสองคำสั่งเป็นฟีเจอร์ Magnifier/Zoom ด้าน accessibility ระดับ OS ที่ขยายทั้งหน้าจอ — คนละส่วนกับการซูมหน้าเว็บด้วย Ctrl/⌘ +/- บน Mac ต้องเปิด 'Use keyboard shortcuts to zoom' ในการตั้งค่า Accessibility ก่อนจึงจะใช้ได้",
  },
  "copy-item": {
    description: "คัดลอกสิ่งที่เลือกไปยังคลิปบอร์ด",
  },
  "paste-item": {
    description: "วางข้อมูลจากคลิปบอร์ด",
  },

  // browser
  "open-private-window": {
    description: "เปิดหน้าต่างส่วนตัว/ไม่ระบุตัวตน (Incognito) ใหม่",
  },
  "bookmark-page": {
    description: "เพิ่มบุ๊กมาร์กหน้าเว็บปัจจุบัน",
  },
  "zoom-in": {
    description: "ซูมเข้าหน้าเว็บปัจจุบัน",
  },
  "zoom-reset": {
    description: "รีเซ็ตการซูมหน้าเว็บกลับเป็น 100%",
  },
  "open-history": {
    description: "เปิดประวัติการเข้าชมเว็บ",
    note: "Chrome/Edge บน Mac ใช้ ⌘Y สำหรับประวัติ (เพราะ ⌘H ถูก macOS จองไว้สำหรับซ่อนแอป) — ความต่างนี้เป็นเรื่องจริง ไม่ใช่การพิมพ์ Ctrl+H ผิด",
  },
  "view-page-source": {
    description: "ดูซอร์สโค้ด HTML ของหน้าเว็บปัจจุบัน",
  },
  "open-devtools": {
    description: "เปิด DevTools ของเบราว์เซอร์",
    note: "F12 ก็เปิด DevTools ได้บน Windows เช่นกัน — ส่วนคีย์บอร์ด Mac ไม่รองรับการกด F12 เดี่ยว ๆ ได้แน่นอนเท่ากัน ดังนั้น ⌥⌘I จึงเป็นคีย์ลัดมาตรฐานบน Mac",
  },

  // vs-code
  "command-palette": {
    description: "เปิด Command Palette",
  },
  "quick-open-file": {
    description: "เปิดไฟล์อย่างรวดเร็วโดยพิมพ์ชื่อไฟล์",
  },
  "toggle-integrated-terminal": {
    description: "แสดงหรือซ่อน integrated terminal",
  },
  "add-cursor-below": {
    description: "เพิ่มเคอร์เซอร์ใหม่ที่บรรทัดถัดไปด้านล่าง",
  },
  "select-next-occurrence": {
    description: "เลือกคำที่ตรงกับข้อความที่เลือกอยู่ในตำแหน่งถัดไป",
  },
  "go-to-definition": {
    description: "ไปยังตำแหน่งที่ประกาศ (definition) ของ symbol ตรงเคอร์เซอร์",
  },
  "toggle-sidebar": {
    description: "แสดงหรือซ่อนแถบด้านข้าง (Sidebar)",
  },
  "open-settings": {
    description: "เปิดหน้า Settings",
  },

  // vim
  "enter-insert-mode": {
    description: "เข้าสู่ Insert mode",
  },
  "return-to-normal-mode": {
    description: "กลับไปยัง Normal mode",
  },
  "save-file": {
    description: "บันทึกไฟล์ปัจจุบัน",
    note: "คำสั่ง `:w` ต้องพิมพ์เป็นลำดับคำสั่งจริง ๆ หลังจากกด Esc ไม่ใช่การกดคีย์พร้อมกันทีเดียว",
  },
  "save-and-quit": {
    description: "บันทึกไฟล์แล้วออกจาก Vim",
    note: "คำสั่ง `:wq` ต้องพิมพ์เป็นลำดับคำสั่งจริง ๆ หลังจากกด Esc ไม่ใช่การกดคีย์พร้อมกันทีเดียว",
  },
  "quit-without-saving": {
    description: "ออกจาก Vim โดยไม่บันทึกการเปลี่ยนแปลง",
    note: "คำสั่ง `:q!` ต้องพิมพ์เป็นลำดับคำสั่งจริง ๆ หลังจากกด Esc ไม่ใช่การกดคีย์พร้อมกันทีเดียว",
  },
  "delete-line": {
    description: "ลบบรรทัดปัจจุบัน",
  },
  "vim-undo": {
    description: "เลิกทำการเปลี่ยนแปลงล่าสุด",
  },
  "search-forward": {
    description: "ค้นหารูปแบบ (pattern) ไปข้างหน้า",
  },

  // terminal
  "interrupt-process": {
    description: "ยกเลิก (kill) โปรเซสที่กำลังทำงานอยู่",
  },
  "clear-screen": {
    description: "ล้างหน้าจอ terminal",
  },
  "tab-completion": {
    description: "เติมคำสั่งหรือ path ปัจจุบันให้อัตโนมัติ",
  },
  "reverse-search-history": {
    description: "ค้นหาย้อนกลับในประวัติคำสั่ง",
    note: "เป็นค่าเริ่มต้นของ readline ใน bash/zsh ที่โมดูล PSReadLine ของ PowerShell ก็รองรับให้ใช้ได้เหมือนกันโดยไม่ต้องตั้งค่าเพิ่ม — เป็นความบังเอิญข้ามเชลล์จริง ไม่ใช่การเดา",
  },
  "clear-line": {
    description: "ล้างบรรทัดคำสั่งที่กำลังพิมพ์อยู่",
  },
  "jump-to-line-start": {
    description: "ย้ายเคอร์เซอร์ไปต้นบรรทัด",
  },
  "jump-to-line-end": {
    description: "ย้ายเคอร์เซอร์ไปท้ายบรรทัด",
  },
  "move-to-background": {
    description: "พักโปรเซสปัจจุบันแล้วย้ายไปทำงานเบื้องหลัง (background)",
  },
};
