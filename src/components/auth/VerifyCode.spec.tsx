import en from "@/config/i18n/locales/en.json";
import { renderPage } from "@/test/renderPage";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { VerifyCode } from "./VerifyCode";

const verifyResetCode = vi.fn();
vi.mock("@/components/auth/useForgotPassword", () => ({
  useForgotPassword: () => ({
    verifyResetCode,
    busy: false,
    resendCode: vi.fn(),
    startTimer: vi.fn(),
    resetSeconds: 30,
  }),
}));

const copy = en.admin_verify_code_form;

// HeroUI's InputOtp asks for the element under the caret; jsdom has none.
beforeAll(() => {
  document.elementFromPoint ??= () => null;
});

/** ClickUp 869fmnh8j: confirming an empty code did nothing and said nothing. */
describe("Admin verify reset code", () => {
  it("explains an incomplete code instead of ignoring it", async () => {
    const user = userEvent.setup();
    const { container } = renderPage(<VerifyCode />);
    const confirm = screen.getByRole("button", { name: copy.buttons.confirm });

    await user.click(confirm);
    expect(
      screen.getByText(copy.inputs.code.error_message),
    ).toBeInTheDocument();
    expect(verifyResetCode).not.toHaveBeenCalled();

    await user.type(container.querySelector("input")!, "1234");
    expect(
      screen.queryByText(copy.inputs.code.error_message),
    ).not.toBeInTheDocument();
    await user.click(confirm);
    expect(verifyResetCode).toHaveBeenCalledWith("1234");
  });
});
