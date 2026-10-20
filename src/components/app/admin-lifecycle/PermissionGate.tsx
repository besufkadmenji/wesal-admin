"use client";
import { DetailSkeleton } from "@/components/app/shared/states/DetailSkeleton";

import { useAppRouter } from "@/hooks/useAppRouter";
import { useCanAccess } from "@/hooks/useCanAccess";
import { useMe } from "@/hooks/useMe";
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
  const { isLoading } = useMe();
  const allowed = useCanAccess(resource, action);
  useEffect(() => {
    if (!isLoading && !allowed) router.replace("/dashboard");
  }, [allowed, isLoading, router]);
  if (isLoading || !allowed) {
    return <DetailSkeleton />;
  }
  return children;
};
