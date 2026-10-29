import { notFound } from "next/navigation";

/**
 * Unknown admin URLs land here so `(app)/not-found.tsx` shows them inside
 * the app shell; without it Next renders its bare root 404 (ClickUp 869fmny3z).
 */
const MissingPage = () => notFound();

export default MissingPage;
