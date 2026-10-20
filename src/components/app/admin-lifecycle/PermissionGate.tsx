"use client";
import { DetailSkeleton } from "@/components/app/shared/states/DetailSkeleton";

import { useAppRouter } from "@/hooks/useAppRouter";
import { useCanAccess } from "@/hooks/useCanAccess";
import { useMe } from "@/hooks/useMe";
import { useAdminPermissionStore } from "@/store/adminPermissionStore";
import { ReactNode, useEffect } from "react";

export const PermissionGate = ({
  resource,
  action = "read",
  children,
}: {
  resource: string;
  action?: string;
  children: ReactNode;
}) => {
  const router = useAppRouter();
  const { me, isLoading } = useMe();
  const permissionType = useAdminPermissionStore((s) => s.permissionType);
  const allowed = useCanAccess(resource, action);
  // H-17: on a direct load or refresh, `me` arrives one render before
  // useMe's effect copies the permissions into the store; until then the
  // admin isn't "not allowed", they're still loading.
  const pending =
    isLoading || (!!me?.permissionType && permissionType === null);
  useEffect(() => {
    if (!pending && !allowed) router.replace("/dashboard");
  }, [allowed, pending, router]);
  if (pending || !allowed) {
    return <DetailSkeleton />;
  }
  return children;
};
