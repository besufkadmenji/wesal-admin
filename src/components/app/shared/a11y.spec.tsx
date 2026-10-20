import { ThemeSwitcher } from "@/components/app/shared/ThemeSwitcher";
import { PasswordInput } from "@/components/app/shared/forms/FormInput";
import { ActionsCell } from "@/components/app/shared/tables/ActionsCell";
import ar from "@/config/i18n/locales/ar.json";
import en from "@/config/i18n/locales/en.json";
import { renderPage } from "@/test/renderPage";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/assets/fonts/norsal", () => ({ norsal: { className: "" } }));
vi.mock("@/assets/fonts/sar", () => ({ sar: { className: "" } }));
const theme = vi.hoisted(() => ({ value: "light", setTheme: vi.fn() }));
vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: theme.value, setTheme: theme.setTheme }),
}));

describe("Admin accessibility (UI-13)", () => {
  it("names every table action and runs it", async () => {
    const user = userEvent.setup();
    const onDelete = vi.fn();
    renderPage(
      <ActionsCell onView={vi.fn()} onEdit={vi.fn()} onDelete={onDelete} />,
      { lang: "ar" },
    );
    expect(
      screen.getByRole("button", { name: ar.common.actions.view }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: ar.common.actions.edit }),
    ).toBeInTheDocument();
    await user.click(
      screen.getByRole("button", { name: ar.common.actions.delete }),
    );
    expect(onDelete).toHaveBeenCalled();
  });

  it("names the password toggle and flips it", async () => {
    const user = userEvent.setup();
    renderPage(
      <PasswordInput
        label="Password"
        placeholder="********"
        value=""
        onChange={vi.fn()}
      />,
    );
    await user.click(
      screen.getByRole("button", { name: en.common.a11y.show_password }),
    );
    expect(
      screen.getByRole("button", { name: en.common.a11y.hide_password }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("names both theme buttons and marks the active one", () => {
    renderPage(<ThemeSwitcher />);
    expect(
      screen.getByRole("button", { name: en.common.a11y.light_mode }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("button", { name: en.common.a11y.dark_mode }),
    ).toHaveAttribute("aria-pressed", "false");
  });

  it("no longer hides screen-reader-only text from screen readers", () => {
    const css = readFileSync(
      join(process.cwd(), "src/app/globals.css"),
      "utf8",
    );
    expect(css).not.toMatch(/\.sr-only\s*\{\s*display:\s*none/);
  });
});
