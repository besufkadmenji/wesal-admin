import en from "@/config/i18n/locales/en.json";
import ProviderService from "@/services/provider.service";
import { renderPage } from "@/test/renderPage";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { TerminationRequestCard } from "./TerminationRequestCard";

vi.mock("@/services/provider.service", () => ({
  default: {
    approveContractTermination: vi.fn(),
    rejectContractTermination: vi.fn(),
  },
}));
vi.mock("@/utils/show.message", () => ({
  showErrorMessage: vi.fn(),
  showSuccessMessage: vi.fn(),
}));

const copy = en.contract.terminationRequest;
const renderCard = () =>
  renderPage(
    <TerminationRequestCard
      providerId="p1"
      requestedAt="2026-10-20T10:00:00Z"
      reason="Closing the business"
    />,
  );

describe("TerminationRequestCard (S4-58)", () => {
  beforeEach(() => {
    vi.mocked(ProviderService.approveContractTermination).mockReset();
    vi.mocked(ProviderService.rejectContractTermination).mockReset();
  });

  it("shows the provider's request", () => {
    renderCard();
    expect(screen.getByText(copy.title)).toBeInTheDocument();
    expect(screen.getByText("Closing the business")).toBeInTheDocument();
    expect(screen.getByText(/October 20, 2026/)).toBeInTheDocument();
  });

  it("approves after confirmation", async () => {
    const user = userEvent.setup();
    vi.mocked(ProviderService.approveContractTermination).mockResolvedValue(
      {} as never,
    );
    renderCard();

    await user.click(screen.getByRole("button", { name: copy.approve }));
    expect(await screen.findByText(copy.approveTitle)).toBeInTheDocument();
    const dialog = screen.getByRole("dialog");
    await user.click(
      Array.from(dialog.querySelectorAll("button")).find(
        (b) => b.textContent === copy.approve,
      )!,
    );
    await waitFor(() =>
      expect(ProviderService.approveContractTermination).toHaveBeenCalledWith(
        "p1",
      ),
    );
  });

  it("keeps the reject dialog open when the API refuses", async () => {
    const user = userEvent.setup();
    vi.mocked(ProviderService.rejectContractTermination).mockRejectedValue(
      new Error("refused"),
    );
    renderCard();

    await user.click(screen.getByRole("button", { name: copy.reject }));
    await user.type(
      await screen.findByLabelText(copy.rejectTitle),
      "Finish your open work first",
    );
    const dialog = screen.getByRole("dialog");
    await user.click(
      Array.from(dialog.querySelectorAll("button")).find(
        (b) => b.textContent === copy.reject,
      )!,
    );
    await waitFor(() =>
      expect(ProviderService.rejectContractTermination).toHaveBeenCalledWith(
        "p1",
        "Finish your open work first",
      ),
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
