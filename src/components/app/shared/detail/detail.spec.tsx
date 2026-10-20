import {
  SIGNED_CONTRACT_TONES,
  signedContractStatusLabels,
} from "@/components/app/SignedContracts/signedContractStatus";
import en from "@/config/i18n/locales/en.json";
import { SignedContractStatus } from "@/gql/graphql";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DetailCard } from "./DetailCard";
import { DetailField } from "./DetailField";

describe("Detail surfaces (UI-5)", () => {
  it("renders a titled card with its content", () => {
    render(
      <DetailCard title="Dates" subtitle="Contract timeline">
        <p>body</p>
      </DetailCard>,
    );
    expect(screen.getByRole("heading", { name: "Dates" })).toBeInTheDocument();
    expect(screen.getByText("Contract timeline")).toBeInTheDocument();
    expect(screen.getByText("body").closest("section")).toHaveClass(
      "rounded-2xl",
      "dark:bg-dark-black",
    );
  });

  it("renders a field, boxed or plain, with its direction", () => {
    const { container } = render(
      <>
        <DetailField label="Phone" value="+966500000000" dir="ltr" boxed />
        <DetailField label="Name" value="Local Provider" />
      </>,
    );
    expect(screen.getByText("+966500000000")).toHaveAttribute("dir", "ltr");
    expect(container.firstChild).toHaveClass("bg-accent-soft");
    expect(screen.getByText("Name").parentElement).not.toHaveClass(
      "bg-accent-soft",
    );
  });

  it("labels and colours every e-contract status", () => {
    const labels = signedContractStatusLabels(en as never);
    for (const status of Object.values(SignedContractStatus)) {
      expect(labels[status]).toBeTruthy();
      expect(SIGNED_CONTRACT_TONES[status]).toBeTruthy();
    }
  });
});
