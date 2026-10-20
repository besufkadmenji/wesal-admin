import { InstallmentLimitsSection } from "@/components/app/Settings/InstallmentLimitsSection";
import ar from "@/config/i18n/locales/ar.json";
import en from "@/config/i18n/locales/en.json";
import { SettingService } from "@/services/setting.service";
import { renderPage } from "@/test/renderPage";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/font/local", () => ({ default: () => ({ className: "" }) }));
vi.mock("@/services/setting.service", () => ({
  SettingService: { getSetting: vi.fn(), setSetting: vi.fn() },
}));

describe("InstallmentLimitsSection (S4-10 Tabby/Tamara bounds)", () => {
  beforeEach(() => {
    vi.mocked(SettingService.getSetting).mockResolvedValue({
      tabbyMinAmount: null,
      tabbyMaxAmount: 5000,
      tamaraMinAmount: null,
      tamaraMaxAmount: null,
    } as never);
    vi.mocked(SettingService.setSetting).mockReset();
    vi.mocked(SettingService.setSetting).mockResolvedValue({} as never);
  });

  it.each([
    ["en", en],
    ["ar", ar],
  ] as const)("shows the saved bounds in %s", async (lang, dict) => {
    renderPage(<InstallmentLimitsSection />, { lang });
    const copy = dict.installment_limits;
    expect(await screen.findByLabelText(copy.tabby_max)).toHaveValue(5000);
    expect(screen.getByText(copy.title)).toBeInTheDocument();
    expect(screen.getByLabelText(copy.tamara_min)).toHaveValue(null);
  });

  it("saves numbers, and empty fields as no limit", async () => {
    renderPage(<InstallmentLimitsSection />, { lang: "en" });
    const copy = en.installment_limits;
    await userEvent.type(
      await screen.findByLabelText(copy.tamara_min),
      "100",
    );
    await userEvent.clear(screen.getByLabelText(copy.tabby_max));
    await userEvent.click(screen.getByRole("button", { name: copy.save }));
    await waitFor(() =>
      expect(SettingService.setSetting).toHaveBeenCalledWith({
        tabbyMinAmount: null,
        tabbyMaxAmount: null,
        tamaraMinAmount: 100,
        tamaraMaxAmount: null,
      }),
    );
  });

  it("blocks a minimum above the maximum", async () => {
    renderPage(<InstallmentLimitsSection />, { lang: "en" });
    const copy = en.installment_limits;
    await userEvent.type(
      await screen.findByLabelText(copy.tabby_min),
      "6000",
    );
    expect(screen.getByText(copy.min_above_max)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: copy.save })).toBeDisabled();
  });
});
