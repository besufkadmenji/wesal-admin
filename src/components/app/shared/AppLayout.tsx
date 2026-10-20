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
        `${norsal.className} bg-app-background dark:bg-dark-app-background grid h-screen w-screen grid-cols-1 lg:grid-cols-[minmax(19vw,auto)_1fr]`,
      )}
    >
      <Sidebar />
      <div className="grid h-full w-full grid-cols-1 grid-rows-[auto_1fr] overflow-y-auto">
        <Header />
        <div className="grid h-full auto-rows-max grid-cols-1 items-start overflow-y-auto p-4 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};
