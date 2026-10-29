import { describe, expect, it } from "vitest";
import { formatPhone } from "./phone";

/** Admin showed "+966 +9665…" and "null+9665…" for stored numbers. */
describe("formatPhone", () => {
  it("shows a complete number as stored", () => {
    expect(formatPhone("+966", "+966566666666")).toBe("+966566666666");
    expect(formatPhone(null, "+966500001234")).toBe("+966500001234");
  });

  it("adds the dial code to a bare local number", () => {
    expect(formatPhone("+966", "566666666")).toBe("+966566666666");
  });

  it("shows nothing for a missing number", () => {
    expect(formatPhone("+966", null)).toBe("");
  });
});
