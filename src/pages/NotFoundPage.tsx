import { Link } from "react-router-dom";
import { ClayCard } from "../components/clay/ClayCard";
import { useTranslation } from "../i18n/useTranslation";

/**
 * On-brand not-found state, reused for both the router's top-level `*`
 * catch-all and CategoryPage's inline bad-`categoryId` case — one UI to
 * design/maintain for "there's nothing here".
 */
export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <ClayCard className="flex flex-col items-center gap-3 p-10 text-center">
        <h1
          className="text-charcoal text-2xl font-semibold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.categoryNotFoundTitle}
        </h1>
        <p className="text-charcoal-light max-w-sm text-sm">{t.categoryNotFoundBody}</p>
        <Link
          to="/"
          className="text-orange-dark mt-2 text-sm font-semibold hover:underline"
        >
          {t.backToHome}
        </Link>
      </ClayCard>
    </main>
  );
}
