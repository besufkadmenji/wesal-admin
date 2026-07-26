"use client";

import { useAppRouter } from "@/hooks/useAppRouter";
import { useCanAccess } from "@/hooks/useCanAccess";
import { useMe } from "@/hooks/useMe";
import { Spinner } from "@heroui/react";
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
    return (
      <div className="grid min-h-96 place-content-center">
        <Spinner />
      </div>
    );
  }
  return children;
};
