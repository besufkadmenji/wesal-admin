import { create } from "zustand";

const KEY = "admin.sidebar.collapsed";

type SidebarState = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  /** Reads the saved choice after mount (SSR renders expanded). */
  hydrate: () => void;
};

/** UI-4: the desktop sidebar's collapsed (icon rail) state, per browser. */
export const useSidebarStore = create<SidebarState>((set) => ({
  collapsed: false,
  setCollapsed: (collapsed) => {
    set({ collapsed });
    try {
      window.localStorage.setItem(KEY, collapsed ? "1" : "0");
    } catch {
      // Storage can be unavailable (private mode); the choice just won't stick.
    }
  },
  hydrate: () => {
    try {
      set({ collapsed: window.localStorage.getItem(KEY) === "1" });
    } catch {
      // Keep the default.
    }
  },
}));
