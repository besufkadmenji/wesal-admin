import { Sidebar } from "@/components/app/shared/Sidebar";
import en from "@/config/i18n/locales/en.json";
import { AdminPermissionType } from "@/gql/graphql";
import { renderPage } from "@/test/renderPage";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const meState = vi.hoisted(() => ({
  me: null as unknown,
  isLoading: true,
}));
vi.mock("@/hooks/useMe", () => ({
  useMe: () => ({ ...meState, isError: false, logout: vi.fn() }),
}));
vi.mock("@/assets/icons/main.logo.svg", () => ({
  default: (props: object) => <svg {...props} />,
}));

const nav = en.navigation;

describe("Sidebar while permissions load (UI-4)", () => {
  it("shows skeletons for gated links and keeps Home", () => {
    meState.isLoading = true;
    const { container } = renderPage(<Sidebar className="grid" />, {
      permissionType: null,
    });
    expect(screen.getByRole("link", { name: nav.home })).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: nav.categories }),
    ).not.toBeInTheDocument();
    expect(
      container.querySelectorAll('[aria-hidden="true"].flex').length,
    ).toBeGreaterThan(10);
  });

  it("replaces the skeletons with the allowed links once loaded", () => {
    meState.isLoading = false;
    meState.me = { permissionType: AdminPermissionType.SuperAdmin };
    const { container } = renderPage(<Sidebar className="grid" />, {
      permissionType: AdminPermissionType.SuperAdmin,
    });
    expect(
      screen.getByRole("link", { name: nav.categories }),
    ).toBeInTheDocument();
    expect(
      container.querySelectorAll('[aria-hidden="true"].flex'),
    ).toHaveLength(0);
  });

  it("does not spin forever when there is no admin", () => {
    meState.isLoading = false;
    meState.me = null;
    const { container } = renderPage(<Sidebar className="grid" />, {
      permissionType: null,
    });
    expect(
      container.querySelectorAll('[aria-hidden="true"].flex'),
    ).toHaveLength(0);
  });
});
