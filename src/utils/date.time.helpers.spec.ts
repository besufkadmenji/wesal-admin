import { describe, expect, it } from "vitest";
import { DateTimeHelpers, formatDate } from "./date.time.helpers";

const day = "2026-10-15T09:30:00Z";

describe("formatDate (UI-12)", () => {
  it("formats English as a short US date", () => {
    expect(formatDate(day, "en")).toBe("Oct 15, 2026");
  });

  it("formats Arabic in the Gregorian calendar with Latin digits", () => {
    const value = formatDate(day, "ar");
    expect(value).toContain("أكتوبر");
    expect(value).toContain("15");
    expect(value).toContain("2026");
    expect(value).not.toMatch(/[٠-٩]/);
    expect(value).not.toContain("هـ");
  });

  it("adds the time when asked and rejects bad input", () => {
    expect(formatDate(day, "en", { withTime: true })).toMatch(/\d{1,2}:\d{2}/);
    expect(formatDate("not a date", "en")).toBe("—");
    expect(formatDate(null, "ar")).toBe("—");
  });

  it("keeps the old helper working in the page language", () => {
    document.documentElement.lang = "ar";
    expect(DateTimeHelpers.formatDate(day)).toContain("أكتوبر");
    document.documentElement.lang = "en";
    expect(DateTimeHelpers.formatDate(day)).toBe("Oct 15, 2026");
  });
});
