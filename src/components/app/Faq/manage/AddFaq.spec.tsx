import en from "@/config/i18n/locales/en.json";
import { renderPage } from "@/test/renderPage";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { AddFaq } from "./AddFaq";

const createFaq = vi.fn();
vi.mock("./useManageFaq", () => ({
  useManageFaq: () => ({ busy: false, createFaq }),
}));

const copy = en.add_new_faq_form;

/** ClickUp 869fmp1t4: too-short fields blocked Save without saying why. */
describe("Add FAQ", () => {
  it("shows each field's length message instead of saving", async () => {
    const user = userEvent.setup();
    renderPage(<AddFaq />);
    for (const placeholder of Object.values(copy.placeholders)) {
      await user.type(screen.getByPlaceholderText(placeholder), "a");
    }
    await user.click(screen.getByRole("button", { name: copy.buttons.save }));

    for (const message of [
      copy.validation.questionArMinLength,
      copy.validation.questionEnMinLength,
      copy.validation.answerArMinLength,
      copy.validation.answerEnMinLength,
    ]) {
      expect(screen.getByText(message)).toBeInTheDocument();
    }
    expect(createFaq).not.toHaveBeenCalled();
  });
});
