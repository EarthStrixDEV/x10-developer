import { Outlet } from "react-router-dom";
import { useOS } from "../hooks/useOS";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { categories } from "../data/shortcuts";

export interface LayoutContext {
  os: "windows" | "mac";
  setOs: (os: "windows" | "mac") => void;
}

/**
 * Route-independent shell: NavBar + Footer render once here and survive
 * every in-app navigation via the nested-route <Outlet/>, so `os` (owned
 * here) never resets when the user moves between Home and a category page.
 */
export function Layout() {
  const [os, setOs] = useOS();

  return (
    <div className="flex min-h-full flex-col">
      <NavBar categories={categories} os={os} onOsChange={setOs} />
      <Outlet context={{ os, setOs } satisfies LayoutContext} />
      <Footer />
    </div>
  );
}
