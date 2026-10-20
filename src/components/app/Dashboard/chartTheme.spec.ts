import { describe, expect, it } from "vitest";
import {
  chartPalette,
  formatBucket,
  formatCompact,
  formatNumber,
  withAlpha,
} from "./chartTheme";

describe("chartTheme (UI-14)", () => {
  it("labels daily and monthly buckets in the Gregorian calendar", () => {
    expect(formatBucket("2026-10-05", false, "en")).toBe("Oct 5");
    expect(formatBucket("2026-10-01", true, "en")).toBe("Oct 26");
    const arabic = formatBucket("2026-10-05", false, "ar");
    // Latin digits and the Gregorian day, never the Hijri date.
    expect(arabic).toContain("5");
    expect(arabic).toContain("أكتوبر");
  });

  it("formats numbers with Latin digits in both languages", () => {
    expect(formatNumber(1250)).toBe("1,250");
    expect(formatNumber(35.555, 2)).toBe("35.56");
    expect(formatCompact(12500)).toBe("12.5K");
  });

  it("has a palette per theme and alpha fills", () => {
    expect(chartPalette(false).series.contracts).toBe("#22283a");
    expect(chartPalette(true).series.contracts).not.toBe("#22283a");
    expect(withAlpha("#22283a", 0.1)).toBe("#22283a1a");
  });
});
