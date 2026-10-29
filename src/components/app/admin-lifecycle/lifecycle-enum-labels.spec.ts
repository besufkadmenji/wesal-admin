import { describe, expect, it } from "vitest";
import { lifecycleEnumLabel } from "./lifecycle-enum-labels";
import { statusTone } from "./statusTone";

/** ClickUp 869fn07mu: the Pending payment filter listed "Accepted" badges. */
describe("Accepted contract status", () => {
  it("reads as pending payment, like the filter and the website", () => {
    expect(lifecycleEnumLabel("ACCEPTED", "en")).toBe(
      lifecycleEnumLabel("PENDING_PAYMENT", "en"),
    );
    expect(lifecycleEnumLabel("ACCEPTED", "ar")).toBe("بانتظار الدفع");
    expect(statusTone("ACCEPTED")).toBe(statusTone("PENDING_PAYMENT"));
  });
});
