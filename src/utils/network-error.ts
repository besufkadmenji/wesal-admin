import { getDictionary } from "@/config/i18n/dictionaries";
import { fallbackLng, languages } from "@/config/i18n/settings";
import Cookies from "js-cookie";

// Texts browsers give a request that never reached the server (offline,
// server restarting, dropped connection): Chrome, Safari, Firefox, Node.
const NETWORK_ERROR_PATTERN =
  /failed to fetch|load failed|networkerror when attempting to fetch resource|network request failed|fetch failed/i;

/** The page's language: the URL segment, then the `lang` cookie. */
const pageLanguage = (): string => {
  if (typeof window === "undefined") return fallbackLng;
  const segment = window.location.pathname.split("/")[1];
  if (languages.includes(segment)) return segment;
  const cookie = Cookies.get("lang");
  return cookie && languages.includes(cookie) ? cookie : fallbackLng;
};

/** True for the browser's own "couldn't connect" error text. */
export const isNetworkErrorMessage = (message: unknown): boolean =>
  typeof message === "string" && NETWORK_ERROR_PATTERN.test(message);

/** "Couldn't reach the server…" in the page's language. */
export const networkErrorText = (): string =>
  getDictionary(pageLanguage()).common.networkError;

/** Swaps a raw browser network error for the localized message. */
export const localizeNetworkError = (message: string): string =>
  isNetworkErrorMessage(message) ? networkErrorText() : message;
