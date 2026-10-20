import { useLang } from "@/hooks/useLang";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { chartPalette } from "./chartTheme";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

const subscribeReducedMotion = (onChange: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

/** UI-14: colours, direction and motion shared by the dashboard charts. */
export const useChartTheme = () => {
  const lang = useLang();
  // The app sets the theme explicitly (enableSystem is off), so follow
  // `theme`, not the OS preference behind `resolvedTheme`.
  const { theme } = useTheme();
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => true,
  );
  const rtl = lang === "ar";
  return {
    lang,
    rtl,
    palette: chartPalette(theme === "dark"),
    animation: reduceMotion
      ? (false as const)
      : { duration: 400, easing: "easeOutQuart" as const },
    font: {
      family:
        typeof document === "undefined"
          ? undefined
          : getComputedStyle(document.body).fontFamily,
      size: 12,
    },
  };
};
