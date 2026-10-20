import ar from "@/config/i18n/locales/ar.json";
import en from "@/config/i18n/locales/en.json";
import { renderPage } from "@/test/renderPage";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Trash2 } from "lucide-react";
import { describe, expect, it, vi } from "vitest";
import { ConfirmDialog } from "./ConfirmDialog";
import { ReasonDialog } from "./ReasonDialog";
import { SuccessDialog } from "./SuccessDialog";

describe("Admin dialogs (UI-8)", () => {
  it("confirm closes on success and puts confirm before cancel", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    const onConfirm = vi.fn().mockResolvedValue(true);
    renderPage(
      <ConfirmDialog
        isOpen
        onClose={onClose}
        onConfirm={onConfirm}
        tone="danger"
        icon={Trash2}
        title="Delete city?"
        description="This can't be undone."
      />,
    );

    const buttons = screen.getAllByRole("button").filter((b) => b.textContent);
    expect(buttons.map((b) => b.textContent)).toEqual([
      en.common.actions.confirm,
      en.common.actions.cancel,
    ]);
    await user.click(
      screen.getByRole("button", { name: en.common.actions.confirm }),
    );
    expect(onConfirm).toHaveBeenCalled();
    await waitFor(() => expect(onClose).toHaveBeenCalled());
  });

  it("stays open when the action fails or returns false", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    const onConfirm = vi
      .fn()
      .mockResolvedValueOnce(false)
      .mockRejectedValueOnce(new Error("refused"));
    renderPage(
      <ConfirmDialog
        isOpen
        onClose={onClose}
        onConfirm={onConfirm}
        title="Approve?"
      />,
    );
    const confirm = screen.getByRole("button", {
      name: en.common.actions.confirm,
    });
    await user.click(confirm);
    await user.click(confirm);
    await waitFor(() => expect(onConfirm).toHaveBeenCalledTimes(2));
    expect(onClose).not.toHaveBeenCalled();
  });

  it("disables both buttons while busy", () => {
    renderPage(
      <ConfirmDialog
        isOpen
        busy
        onClose={vi.fn()}
        onConfirm={vi.fn()}
        title="Deactivate?"
      />,
    );
    expect(
      screen.getByRole("button", { name: en.common.actions.cancel }),
    ).toBeDisabled();
  });

  it("requires a reason inline and passes it trimmed", async () => {
    const user = userEvent.setup();
    const onConfirm = vi.fn().mockResolvedValue(true);
    renderPage(
      <ReasonDialog
        isOpen
        onClose={vi.fn()}
        onConfirm={onConfirm}
        title="Reject the request"
        reasonLabel="Reason"
        reasonPlaceholder="Enter the reason"
      />,
    );

    await user.click(
      screen.getByRole("button", { name: en.common.actions.confirm }),
    );
    expect(
      await screen.findByText(en.common.validation.reason_required),
    ).toBeInTheDocument();
    expect(onConfirm).not.toHaveBeenCalled();

    await user.type(
      screen.getByPlaceholderText("Enter the reason"),
      "  Missing documents  ",
    );
    await user.click(
      screen.getByRole("button", { name: en.common.actions.confirm }),
    );
    await waitFor(() =>
      expect(onConfirm).toHaveBeenCalledWith("Missing documents"),
    );
  });

  it("shows the success action", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    renderPage(
      <SuccessDialog
        isOpen
        onClose={onClose}
        title="Bank created"
        actionLabel="OK"
      />,
      { lang: "ar" },
    );
    expect(screen.getByText("Bank created")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "OK" }));
    expect(onClose).toHaveBeenCalled();
    expect(ar.common.dialogs.reason).toBeTruthy();
  });
});
