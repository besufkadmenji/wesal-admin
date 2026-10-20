import { CombinedGraphQLErrors } from "@apollo/client";
import { NoData, NoDataType } from "@/components/app/shared/NoData";
import ar from "@/config/i18n/locales/ar.json";
import en from "@/config/i18n/locales/en.json";
import { renderPage } from "@/test/renderPage";
import { testNavigation } from "@/test/testNavigation";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Inbox } from "lucide-react";
import { describe, expect, it, vi } from "vitest";
import { DetailGate } from "./DetailGate";
import { EmptyState } from "./EmptyState";

const copy = en.common.states;

describe("Admin states (UI-10)", () => {
  it("shows a skeleton while loading", () => {
    const { container } = renderPage(
      <DetailGate isLoading data={undefined}>
        {() => <p>page</p>}
      </DetailGate>,
    );
    expect(container.querySelector('[aria-busy="true"]')).toBeInTheDocument();
    expect(screen.queryByText("page")).not.toBeInTheDocument();
  });

  it("explains a missing record and offers retry and back", async () => {
    const user = userEvent.setup();
    const onRetry = vi.fn();
    renderPage(
      <DetailGate
        isLoading={false}
        data={null}
        onRetry={onRetry}
        backHref="/cities"
      >
        {() => <p>page</p>}
      </DetailGate>,
    );
    expect(screen.getByText(copy.not_found_title)).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: copy.retry }));
    expect(onRetry).toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: copy.back_to_list }));
    expect(testNavigation.router.push).toHaveBeenCalledWith("/cities");
  });

  it("tells a failed load from a missing record and offers retry (H-33)", async () => {
    const user = userEvent.setup();
    const onRetry = vi.fn();
    renderPage(
      <DetailGate
        isLoading={false}
        data={undefined}
        error={new TypeError("Failed to fetch")}
        onRetry={onRetry}
      >
        {() => <p>page</p>}
      </DetailGate>,
    );
    expect(screen.getByText(copy.failed_title)).toBeInTheDocument();
    expect(screen.queryByText(copy.not_found_title)).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: copy.retry }));
    expect(onRetry).toHaveBeenCalled();
  });

  it("explains missing permission without a pointless retry (H-33)", () => {
    renderPage(
      <DetailGate
        isLoading={false}
        data={undefined}
        error={
          new CombinedGraphQLErrors({
            errors: [
              { message: "Forbidden", extensions: { code: "FORBIDDEN" } },
            ],
          })
        }
        onRetry={vi.fn()}
        backHref="/cities"
      >
        {() => <p>page</p>}
      </DetailGate>,
    );
    expect(screen.getByText(copy.forbidden_title)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: copy.retry }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: copy.back_to_list }),
    ).toBeInTheDocument();
  });

  it("renders the page with the loaded data", () => {
    renderPage(
      <DetailGate isLoading={false} data={{ name: "Jeddah" }}>
        {(city) => <p>{city.name}</p>}
      </DetailGate>,
    );
    expect(screen.getByText("Jeddah")).toBeInTheDocument();
  });

  it("renders empty states, including NoData's message in Arabic", () => {
    renderPage(
      <>
        <EmptyState
          size="inline"
          icon={Inbox}
          title="No records"
          message="Try another filter"
        />
        <NoData type={NoDataType.Cities} />
      </>,
      { lang: "ar" },
    );
    expect(screen.getByText("No records")).toBeInTheDocument();
    expect(screen.getByText("Try another filter")).toBeInTheDocument();
    expect(screen.getByText(ar.noData.cities)).toBeInTheDocument();
  });
});
