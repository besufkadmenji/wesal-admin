"use client";

import { ReactNode, useEffect } from "react";
import { useSidebarStore } from "@/store/sidebarStore";
import { Sidebar } from "@/components/app/shared/Sidebar";
import { Breadcrumbs } from "./Breadcrumbs";
import { Header } from "./Header";
import { norsal } from "@/assets/fonts/norsal";
import { twMerge } from "tailwind-merge";

export const AppLayoutWrapper = ({ children }: { children: ReactNode }) => {
  const collapsed = useSidebarStore((s) => s.collapsed);
  const hydrate = useSidebarStore((s) => s.hydrate);
  useEffect(() => hydrate(), [hydrate]);
  return (
    <div
      className={twMerge(
        `${norsal.className} bg-app-background dark:bg-dark-app-background grid h-screen w-screen grid-cols-1 overflow-hidden transition-[grid-template-columns] duration-200 ease-out motion-reduce:transition-none`,
        collapsed
          ? "lg:grid-cols-[80px_minmax(0,1fr)]"
          : "lg:grid-cols-[288px_minmax(0,1fr)]",
      )}
    >
      <Sidebar />
      <div className="grid h-full min-w-0 grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr] overflow-y-auto">
        <Header />
        <div className="grid h-full min-w-0 auto-rows-max grid-cols-[minmax(0,1fr)] items-start overflow-x-hidden overflow-y-auto p-4 lg:p-8">
          <Breadcrumbs />
          {children}
        </div>
      </div>
    </div>
  );
};
