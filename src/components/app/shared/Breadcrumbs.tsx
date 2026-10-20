"use client";

import { AppLink } from "@/components/app/shared/NoPrefetchLink";
import { breadcrumbTrail } from "@/components/app/shared/sidebar/breadcrumbTrail";
import { useNavSections } from "@/components/app/shared/sidebar/useNavSections";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

/** UI-4: where the admin is, with links back up (hidden on the dashboard). */
export const Breadcrumbs = () => {
  const dict = useDict();
  const lang = useLang();
  const pathname = usePathname();
  const sections = useNavSections();
  const copy = dict.navigation.breadcrumb;
  const crumbs = breadcrumbTrail(pathname, lang, sections, {
    home: dict.navigation.home,
    details: copy.details,
    add: copy.add,
    edit: copy.edit,
  });
  if (crumbs.length === 0) return null;
  const Separator = lang === "ar" ? ChevronLeft : ChevronRight;

  return (
    <nav aria-label={copy.label} className="mb-4 min-w-0">
      <ol className="text-subTitle dark:text-dark-subTitle flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 text-sm">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          return (
            <Fragment key={`${index}-${crumb.label}`}>
              {index > 0 && (
                <Separator
                  aria-hidden
                  className="size-3.5 shrink-0 opacity-60"
                  strokeWidth={1.75}
                />
              )}
              <li className="max-w-[16rem] min-w-0 truncate">
                {last ? (
                  <span
                    aria-current="page"
                    className="text-primary font-medium dark:text-white"
                  >
                    {crumb.label}
                  </span>
                ) : crumb.href ? (
                  <AppLink
                    href={crumb.href}
                    className="hover:text-app-link rounded transition-colors duration-150 hover:underline"
                  >
                    {crumb.label}
                  </AppLink>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
