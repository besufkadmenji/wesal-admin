"use client";
import LogoIcon from "@/assets/icons/main.logo.svg";
import { SelectLanguage } from "@/components/app/shared/SelectLanguage";
import { ThemeSwitcher } from "@/components/app/shared/ThemeSwitcher";
import { AuthBrandPanel } from "@/components/auth/AuthBrandPanel";
import type { ReactNode } from "react";

/**
 * UI-3 (2026-10-20): split layout for login, forgot password, verify code
 * and reset password — the Wesal brand panel beside a focused form card.
 */
export const AuthLayout = ({
  title,
  subtitle,
  footer,
  children,
}: {
  title: string;
  subtitle?: string;
  footer?: ReactNode;
  children: ReactNode;
}) => (
  <main className="bg-app-background dark:bg-dark-black grid h-dvh grid-cols-1 overflow-y-auto lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
    <AuthBrandPanel />
    <section className="flex min-h-dvh flex-col">
      {/* On phones this row is the brand bar: logo plus the controls. */}
      <div className="bg-primary flex items-center justify-between gap-4 px-6 py-4 lg:justify-end lg:bg-transparent lg:pt-6 lg:pb-0">
        <LogoIcon className="h-10 w-auto text-white lg:hidden" />
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <SelectLanguage />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center px-6 py-10">
        <div className="dark:bg-dark-app-background w-full max-w-[440px] rounded-2xl bg-white p-8 shadow-[0_24px_60px_-28px_rgba(34,40,58,0.35)] ring-1 ring-[#22283a]/6 sm:p-10 dark:ring-white/10">
          <header className="mb-8 grid gap-2">
            <h1 className="text-primary text-2xl font-semibold dark:text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="text-subTitle text-sm leading-relaxed dark:text-white/70">
                {subtitle}
              </p>
            )}
          </header>
          {children}
          {footer && <div className="mt-6 text-center">{footer}</div>}
        </div>
      </div>
    </section>
  </main>
);
