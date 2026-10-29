"use client";

import { DETAIL_CARD_SURFACE } from "@/components/app/shared/detail/DetailCard";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useDict } from "@/hooks/useDict";
import { Button } from "@heroui/react";
import { Unlink } from "lucide-react";
import { EmptyState } from "./EmptyState";

/**
 * An admin URL that matches no page: shown inside the app with a way back,
 * instead of Next's bare black 404 (ClickUp 869fmny3z).
 */
export const PageNotFound = () => {
  const copy = useDict().common.states;
  const router = useAppRouter();
  return (
    <div className={DETAIL_CARD_SURFACE}>
      <EmptyState
        icon={Unlink}
        title={copy.page_not_found_title}
        message={copy.page_not_found_message}
        action={
          <Button
            className="bg-primary h-11 rounded-xl px-5 text-sm font-semibold text-white dark:bg-[#6474a6]"
            onPress={() => router.push("/dashboard")}
          >
            {copy.back_to_dashboard}
          </Button>
        }
      />
    </div>
  );
};
