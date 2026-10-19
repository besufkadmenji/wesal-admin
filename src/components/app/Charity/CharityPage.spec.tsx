import { CharityPage } from "@/components/app/Charity/CharityPage";
import ar from "@/config/i18n/locales/ar.json";
import en from "@/config/i18n/locales/en.json";
import { ContractStatus } from "@/gql/graphql";
import CategoryService from "@/services/category.service";
import CharityService from "@/services/charity.service";
import { renderPage } from "@/test/renderPage";
import { testNavigation } from "@/test/testNavigation";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/services/charity.service", () => ({
  default: { contracts: vi.fn(), summary: vi.fn() },
}));
vi.mock("@/services/category.service", () => ({
  default: { categories: vi.fn() },
}));

const contract = {
  id: "contract-1184",
  publicId: 1184,
  status: ContractStatus.Completed,
  charityAmount: 6,
  createdAt: "2026-10-15T10:00:00.000Z",
  client: { name: "Local Customer", phone: "+966511110001" },
  provider: { commercialName: "Local Plumbing Co", phone: "+966522220001" },
  conversation: {
    listing: { category: { nameAr: "السباكة", nameEn: "Plumbing" } },
  },
};

describe("CharityPage (S4-34 Wesal Al-Khair list)", () => {
  beforeEach(() => {
    vi.mocked(CharityService.contracts).mockResolvedValue({
      items: [contract],
      meta: { total: 1, page: 1, totalPages: 1 },
    } as never);
    vi.mocked(CharityService.summary).mockResolvedValue({
      contracts: 11,
      completedContracts: 1,
      totalAmount: 6,
    } as never);
    vi.mocked(CategoryService.categories).mockResolvedValue({
      items: [],
    } as never);
  });

  it.each([
    ["en", en, "Plumbing", "Completed", "6.00 SAR"],
    ["ar", ar, "السباكة", "مكتمل", "٦٫٠٠ ر.س"],
  ] as const)(
    "shows totals and charity contracts in %s",
    async (lang, dict, category, status, amount) => {
      renderPage(<CharityPage />, { lang });
      const copy = dict.charity_page;

      const row = (await screen.findByText("#1184")).closest("tr")!;
      expect(screen.getAllByText(copy.title).length).toBeGreaterThan(0);
      expect(screen.getByText(copy.summary.contracts)).toBeInTheDocument();
      expect(screen.getByText("11")).toBeInTheDocument();
      expect(within(row).getByText("Local Plumbing Co")).toBeInTheDocument();
      expect(within(row).getByText(category)).toBeInTheDocument();
      expect(within(row).getByText(status)).toBeInTheDocument();
      expect(within(row).getByText(amount)).toBeInTheDocument();
    },
  );

  it("opens the contract when a row is clicked", async () => {
    renderPage(<CharityPage />);

    await userEvent.click(await screen.findByText("#1184"));
    expect(testNavigation.router.push).toHaveBeenCalledWith(
      "/en/contracts/contract-1184",
    );
  });

  it("shows the empty state and zero totals", async () => {
    vi.mocked(CharityService.contracts).mockResolvedValue({
      items: [],
      meta: { total: 0, page: 1, totalPages: 1 },
    } as never);
    vi.mocked(CharityService.summary).mockResolvedValue(null);
    renderPage(<CharityPage />);

    expect(await screen.findByText(en.charity_page.empty)).toBeInTheDocument();
    expect(screen.getByText("0.00 SAR")).toBeInTheDocument();
  });
});
