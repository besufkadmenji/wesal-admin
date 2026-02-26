"use client";
import { AdminsList } from "@/components/app/Admins/AdminsList";
import { Gap } from "@/components/app/shared/Gap";
import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import {
  SummaryCard,
  SummaryCardType,
} from "@/components/app/shared/summary/SummaryCard";
import { SummaryCardSkeleton } from "@/components/app/shared/summary/SummaryCardSkeleton";
import { useDict } from "@/hooks/useDict";
import { useCanAccess } from "@/hooks/useCanAccess";
import { usePathname, useRouter } from "next/navigation";
import { AddButton, AddButtonType } from "../shared/button/AddButton";
import { AdminsFilter } from "./AdminsFilter";
import { useUsers } from "./useAdmins";
export const Admins = () => {
  const dict = useDict();
  const router = useRouter();
  const pathname = usePathname();
  const { admins, pagination, isLoading } = useUsers();
  const canCreate = useCanAccess("admin", "create");

  return (
    <PageWrapper>
      <PageBar title={dict.system_managers_page.title}>
        {canCreate && (
          <AddButton
            type={AddButtonType.Admin}
            onPress={() => {
              router.push(`${pathname}/add`);
            }}
          />
        )}
      </PageBar>
      <Gap className="h-8" />
      {isLoading ? (
        <SummaryCardSkeleton />
      ) : (
        <SummaryCard
          type={SummaryCardType.ADMINS}
          value={pagination?.total || 0}
        />
      )}

      <Gap className="h-6" />
      <div className="grid grid-cols-1 gap-4">
        <AdminsFilter />
        <AdminsList />
      </div>
    </PageWrapper>
  );
};
