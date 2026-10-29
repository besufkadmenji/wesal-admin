import en from "@/config/i18n/locales/en.json";
import { ProviderStatus } from "@/gql/graphql";
import { renderPage } from "@/test/renderPage";
import { cleanup, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { RequestDetail } from "./RequestDetail";

const state = vi.hoisted(() => ({ provider: {} as Record<string, unknown> }));
vi.mock("../useProvider", () => ({
  useProvider: () => ({
    data: state.provider,
    isPending: false,
    error: null,
    refetch: vi.fn(),
  }),
}));
vi.mock("@/components/app/Providers/Detail/ProviderLocationMap", () => ({
  ProviderLocationMap: ({ latitude }: { latitude: number }) => (
    <div data-testid="map">{latitude}</div>
  ),
}));
vi.mock("./RequestAction", () => ({ RequestAction: () => null }));
vi.mock("./SuccessModal", () => ({ SuccessModal: () => null }));
vi.mock("./RejectReasonModal", () => ({ RejectReasonModal: () => null }));
vi.mock("./DocumentDisplay", () => ({ DocumentDisplay: () => null }));
vi.mock("@/assets/fonts/norsal", () => ({ norsal: { className: "" } }));
vi.mock("@/assets/fonts/sar", () => ({ sar: { className: "" } }));

const request = {
  id: "p1",
  name: "Owner",
  commercialName: "qq",
  email: "qq@example.com",
  phone: "+966551515151",
  status: ProviderStatus.PendingApproval,
  categories: [],
};
const labels = en.view_provider_form.labels;

/** ClickUp 869c9e0m0: bank name, IBAN and location were missing. */
describe("Join request details", () => {
  afterEach(cleanup);

  it("shows bank name, IBAN and the location map", () => {
    state.provider = {
      ...request,
      bankName: "Al Rajhi",
      ibanNumber: "SA0380000000608010167519",
      latitude: 21.5,
      longitude: 39.2,
    };
    renderPage(<RequestDetail id="p1" />);
    expect(screen.getByDisplayValue("Al Rajhi")).toBeInTheDocument();
    expect(
      screen.getByDisplayValue("SA0380000000608010167519"),
    ).toBeInTheDocument();
    expect(screen.getByText(en.contract.locationOnMap)).toBeInTheDocument();
    expect(screen.getByTestId("map")).toHaveTextContent("21.5");
  });

  it("keeps the rows with a dash when they are empty", () => {
    state.provider = { ...request };
    renderPage(<RequestDetail id="p1" />);
    expect(screen.getAllByText(labels.bank_name).length).toBeGreaterThan(0);
    expect(screen.getAllByText(labels.iban_number).length).toBeGreaterThan(0);
    expect(screen.getByText(en.contract.locationOnMap)).toBeInTheDocument();
    expect(screen.queryByTestId("map")).not.toBeInTheDocument();
  });
});
