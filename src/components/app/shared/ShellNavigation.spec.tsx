import { Breadcrumbs } from "@/components/app/shared/Breadcrumbs";
import { Sidebar } from "@/components/app/shared/Sidebar";
import ar from "@/config/i18n/locales/ar.json";
import en from "@/config/i18n/locales/en.json";
import { AdminPermissionType } from "@/gql/graphql";
import { useSidebarStore } from "@/store/sidebarStore";
import { renderPage } from "@/test/renderPage";
import { testNavigation } from "@/test/testNavigation";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/hooks/useMe", () => ({
  useMe: () => ({
    me: { permissionType: "SUPER_ADMIN" },
    isLoading: false,
    isError: false,
    logout: vi.fn(),
  }),
}));
vi.mock("@/assets/icons/main.logo.svg", () => ({
  default: (props: object) => <svg {...props} />,
}));

const nav = en.navigation;

// This jsdom build has no localStorage; a small in-memory one stands in.
const memoryStorage = () => {
  const data = new Map<string, string>();
  return {
    getItem: (key: string) => data.get(key) ?? null,
    setItem: (key: string, value: string) => void data.set(key, value),
    removeItem: (key: string) => void data.delete(key),
    clear: () => data.clear(),
  };
};
vi.stubGlobal("localStorage", memoryStorage());

describe("Admin shell navigation (UI-4)", () => {
  beforeEach(() => {
    window.localStorage.clear();
    useSidebarStore.setState({ collapsed: false });
  });

  it("shows breadcrumbs with the current page marked", () => {
    testNavigation.pathname = "/ar/cities/c1/edit";
    renderPage(<Breadcrumbs />, { lang: "ar" });
    const trail = screen.getByRole("navigation", {
      name: ar.navigation.breadcrumb.label,
    });
    expect(trail).toHaveTextContent(ar.navigation.cities);
    expect(
      screen.getByRole("link", { name: ar.navigation.breadcrumb.details }),
    ).toHaveAttribute("href", "/cities/c1");
    expect(screen.getByText(ar.navigation.breadcrumb.edit)).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("hides breadcrumbs on the dashboard", () => {
    testNavigation.pathname = "/en/dashboard";
    renderPage(<Breadcrumbs />);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("collapses to a named icon rail and remembers it", async () => {
    const user = userEvent.setup();
    testNavigation.pathname = "/en/cities";
    renderPage(<Sidebar className="grid" />, {
      permissionType: AdminPermissionType.SuperAdmin,
    });
    expect(screen.getByText(nav.cities)).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: nav.sidebar_collapse }),
    );
    expect(useSidebarStore.getState().collapsed).toBe(true);
    expect(window.localStorage.getItem("admin.sidebar.collapsed")).toBe("1");
    expect(screen.queryByText(nav.cities)).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: nav.cities })).toHaveAttribute(
      "aria-current",
      "page",
    );

    await user.click(screen.getByRole("button", { name: nav.reports }));
    expect(
      await screen.findByRole("link", { name: nav.contract_financial_report }),
    ).toBeInTheDocument();
  });

  it("keeps the phone drawer expanded", () => {
    useSidebarStore.setState({ collapsed: true });
    renderPage(<Sidebar className="grid" collapsible={false} />, {
      permissionType: AdminPermissionType.SuperAdmin,
    });
    expect(screen.getByText(nav.cities)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: nav.sidebar_expand }),
    ).not.toBeInTheDocument();
  });
});
