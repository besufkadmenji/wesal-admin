/**
 * UI-12: dates follow the page language. Arabic uses the Gregorian calendar
 * and Latin digits (plain "ar-SA" would switch to the Hijri calendar), the
 * same convention as the dashboard charts.
 */
export const formatDate = (
  value: string | number | Date | null | undefined,
  lang: string,
  { withTime = false }: { withTime?: boolean } = {},
): string => {
  if (value === null || value === undefined || value === "") return "—";
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat(
    lang === "ar" ? "ar-SA-u-ca-gregory-nu-latn" : "en-US",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
      ...(withTime ? { hour: "numeric", minute: "2-digit" } : {}),
    },
  ).format(date);
};

const pageLang = () =>
  typeof document !== "undefined" && document.documentElement.lang === "ar"
    ? "ar"
    : "en";

export class DateTimeHelpers {
  /** Formats in the current page language (`<html lang>`). */
  static formatDate(dateString: string, lang: string = pageLang()): string {
    return formatDate(dateString, lang);
  }
}
