import { activeHref } from "./activePath";
import { navHrefs, type NavSection } from "./useNavSections";

export type Crumb = { label: string; href?: string };

/**
 * UI-4: Home › [group] › menu item › Details / Add / Edit, from the URL and
 * the sidebar config. The last crumb has no href (it is the current page).
 * Empty on the dashboard and on pages the menu doesn't know.
 */
export const breadcrumbTrail = (
  pathname: string,
  lang: string,
  sections: NavSection[],
  labels: { home: string; details: string; add: string; edit: string },
): Crumb[] => {
  const prefix = `/${lang}`;
  const path = pathname.startsWith(prefix)
    ? pathname.slice(prefix.length) || "/"
    : pathname;
  if (path === "/dashboard" || path === "/") return [];

  const current = activeHref(pathname, lang, navHrefs(sections));
  if (!current || current === "/dashboard") return [];

  const crumbs: Crumb[] = [{ label: labels.home, href: "/dashboard" }];
  for (const section of sections) {
    for (const item of section.items) {
      if (item.kind === "link" && item.href === current) {
        crumbs.push({ label: item.label, href: item.href });
      }
      if (item.kind === "group") {
        const option = item.options.find((o) => o.href === current);
        if (option) {
          if (option.label !== item.label) crumbs.push({ label: item.label });
          crumbs.push({ label: option.label, href: option.href });
        }
      }
    }
  }

  let href = current;
  for (const segment of path.slice(current.length).split("/").filter(Boolean)) {
    href = `${href}/${segment}`;
    crumbs.push({
      label:
        segment === "add"
          ? labels.add
          : segment === "edit"
            ? labels.edit
            : labels.details,
      href,
    });
  }

  const last = crumbs[crumbs.length - 1];
  crumbs[crumbs.length - 1] = { label: last.label };
  return crumbs;
};
