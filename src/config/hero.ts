import { heroui } from "@heroui/react";

// UI-1: HeroUI's primary is the Wesal brand navy (lighter navy in dark mode).
export default heroui({
  themes: {
    light: {
      colors: {
        primary: { DEFAULT: "#22283a", foreground: "#ffffff" },
        focus: "#22283a",
      },
    },
    dark: {
      colors: {
        primary: { DEFAULT: "#6474a6", foreground: "#ffffff" },
        focus: "#6474a6",
      },
    },
  },
});
