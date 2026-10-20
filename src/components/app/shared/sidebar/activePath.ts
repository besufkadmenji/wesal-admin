/**
 * UI-4: a menu item is active on its own page and on pages under it
 * (/contracts and /contracts/123); /dashboard only matches exactly. When
 * several items match (/providers and /providers/requests), the longest wins.
 */
export const matchesPath = (pathname: string, lang: string, href: string) => {
  const target = `/${lang}${href}`;
  if (href === "/dashboard") return pathname === target;
  return pathname === target || pathname.startsWith(`${target}/`);
};

export const activeHref = (
  pathname: string,
  lang: string,
  hrefs: string[],
): string | undefined =>
  hrefs
    .filter((href) => matchesPath(pathname, lang, href))
    .sort((a, b) => b.length - a.length)[0];
