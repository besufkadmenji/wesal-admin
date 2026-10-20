import ar from "@/config/i18n/locales/ar.json";
import en from "@/config/i18n/locales/en.json";
import { renderPage } from "@/test/renderPage";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { FormAreaInput } from "./FormAreaInput";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";

// next/font loaders only run inside Next.
vi.mock("@/assets/fonts/norsal", () => ({ norsal: { className: "" } }));
vi.mock("@/assets/fonts/sar", () => ({ sar: { className: "" } }));

describe("Shared form inputs (UI-8)", () => {
  it.each([
    ["en", en],
    ["ar", ar],
  ] as const)("shows the optional suffix in %s", (lang, dict) => {
    renderPage(
      <>
        <FormInput
          label="Website"
          placeholder="https://"
          value=""
          onChange={vi.fn()}
          isOptional
        />
        <FormAreaInput
          label="Notes"
          placeholder="…"
          value=""
          onChange={vi.fn()}
          isOptional
        />
      </>,
      { lang },
    );
    expect(screen.getAllByText(dict.common.optional)).toHaveLength(2);
  });

  it("names the select by its visible label", () => {
    renderPage(
      <FormSelect
        label="City"
        placeholder="Choose a city"
        value=""
        onChange={vi.fn()}
        options={[{ key: "jeddah", label: "Jeddah" }]}
      />,
    );
    expect(screen.getAllByLabelText("City").length).toBeGreaterThan(0);
  });
});
