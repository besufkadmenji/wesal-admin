"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/app/shared/Sidebar";
import { Header } from "./Header";
import { norsal } from "@/assets/fonts/norsal";
import { twMerge } from "tailwind-merge";

export const AppLayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={twMerge(
        `${norsal.className} bg-app-background dark:bg-dark-app-background grid h-screen w-screen grid-cols-1 overflow-hidden lg:grid-cols-[288px_minmax(0,1fr)]`,
      )}
    >
      <Sidebar />
      <div className="grid h-full min-w-0 grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr] overflow-y-auto">
        <Header />
        <div className="grid h-full min-w-0 auto-rows-max grid-cols-[minmax(0,1fr)] items-start overflow-x-hidden overflow-y-auto p-4 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};
