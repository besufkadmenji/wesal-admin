import { AdminPermissionType } from "@/gql/graphql";
import { renderPage } from "@/test/renderPage";
import { testNavigation } from "@/test/testNavigation";
import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { PermissionGate } from "./PermissionGate";

const meState = vi.hoisted(() => ({
  me: null as unknown,
  isLoading: false,
}));
vi.mock("@/hooks/useMe", () => ({
  useMe: () => ({ ...meState, isError: false, logout: vi.fn() }),
}));

describe("PermissionGate (H-17)", () => {
  beforeEach(() => {
    meState.me = { permissionType: AdminPermissionType.SuperAdmin };
    meState.isLoading = false;
  });

  it("waits, without redirecting, while permissions reach the store", () => {
    renderPage(
      <PermissionGate resource="contract">
        <p>contracts</p>
      </PermissionGate>,
      { permissionType: null },
    );
    expect(screen.queryByText("contracts")).not.toBeInTheDocument();
    expect(testNavigation.router.replace).not.toHaveBeenCalled();
  });

  it("renders the page once the permissions allow it", () => {
    renderPage(
      <PermissionGate resource="contract">
        <p>contracts</p>
      </PermissionGate>,
      { permissionType: AdminPermissionType.SuperAdmin },
    );
    expect(screen.getByText("contracts")).toBeInTheDocument();
    expect(testNavigation.router.replace).not.toHaveBeenCalled();
  });

  it("still sends an admin without the permission to the dashboard", () => {
    meState.me = { permissionType: AdminPermissionType.Custom };
    renderPage(
      <PermissionGate resource="contract">
        <p>contracts</p>
      </PermissionGate>,
      { permissionType: AdminPermissionType.Custom, permissions: [] },
    );
    expect(screen.queryByText("contracts")).not.toBeInTheDocument();
    expect(testNavigation.router.replace).toHaveBeenCalledWith("/dashboard");
  });
});
