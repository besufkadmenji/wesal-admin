import en from "@/config/i18n/locales/en.json";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useFormValidation } from "./useFormValidation";

vi.mock("@/hooks/useDict", () => ({ useDict: () => en }));

const copy = en.add_new_admin_form.validation;
const phoneError = (phoneNumber: string) => {
  const form = {
    fullName: "QA Admin",
    email: "qa@example.com",
    phoneNumber,
  } as Parameters<typeof useFormValidation>[0];
  const { result } = renderHook(() => useFormValidation(form, "edit"));
  act(() => {
    result.current.validateForm();
  });
  return result.current.errors.phoneNumber;
};

/** ClickUp 869fmnnb3: the form let 33333333 through to the API. */
describe("Admin form phone number", () => {
  it.each(["33333333", "512345678", "05123", "05 1234 5678"])(
    "rejects %s with the Saudi mobile message",
    (value) => {
      expect(phoneError(value)).toBe(copy.phoneNumberInvalidSaudi);
    },
  );

  it("accepts 05 followed by 8 digits", () => {
    expect(phoneError("0512345678")).toBeUndefined();
  });

  it("still asks for a missing phone", () => {
    expect(phoneError("")).toBe(copy.phoneNumberRequired);
  });
});
