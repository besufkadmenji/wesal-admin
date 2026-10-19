import { AdminPermissionType } from "@/gql/graphql";
import {
  type PermissionEntry,
  useAdminPermissionStore,
} from "@/store/adminPermissionStore";
import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { NuqsTestingAdapter } from "nuqs/adapters/testing";
import type { ReactElement } from "react";
import { testNavigation } from "./testNavigation";

/**
 * Renders an admin page the way the app does (HeroUI, React Query, nuqs) in
 * the given language, for an admin with the given permissions. Defaults to a
 * super admin, who can do everything.
 */
export const renderPage = (
  page: ReactElement,
  {
    lang = "en",
    permissionType = AdminPermissionType.SuperAdmin,
    permissions = [],
    searchParams = {},
  }: {
    lang?: "en" | "ar";
    permissionType?: AdminPermissionType | null;
    permissions?: PermissionEntry[];
    searchParams?: Record<string, string>;
  } = {},
) => {
  testNavigation.lang = lang;
  useAdminPermissionStore.setState({ permissionType, permissions });
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
  });
  return render(
    <QueryClientProvider client={client}>
      <HeroUIProvider>
        <NuqsTestingAdapter searchParams={searchParams}>
          {page}
        </NuqsTestingAdapter>
      </HeroUIProvider>
    </QueryClientProvider>,
  );
};
