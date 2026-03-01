"use client";

import { Gap } from "@/components/app/shared/Gap";
import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import {
  SummaryCard,
  SummaryCardType,
} from "@/components/app/shared/summary/SummaryCard";
import { useDict } from "@/hooks/useDict";
import { usePathname } from "next/navigation";

import { ExportButton } from "@/components/app/shared/button/ExportButton";
import { ExportModel } from "@/types/export.models";
import { SummaryCardSkeleton } from "../shared/summary/SummaryCardSkeleton";
import { UsersFilter } from "./UsersFilter";
import { UsersList } from "./UsersList";
import { useUsers } from "./useUser";
import { useAppRouter } from "@/hooks/useAppRouter";

export const Users = () => {
  const dict = useDict();
  const router = useAppRouter();
  const pathname = usePathname();
  const { data, isLoading } = useUsers();

  return (
    <PageWrapper>
      <PageBar
        title={dict.users_page.title}
        className="grid grid-cols-1 gap-2 md:flex"
      >
        <ExportButton model={ExportModel.Users} />
      </PageBar>
      <Gap className="h-8" />
      {isLoading ? (
        <SummaryCardSkeleton />
      ) : (
        <SummaryCard
          type={SummaryCardType.USERS}
          value={data?.meta.total ?? 0}
        />
      )}

      <Gap className="h-6" />
      <div className="grid grid-cols-1 gap-4">
        <UsersFilter />
        <UsersList />
      </div>
    </PageWrapper>
  );
};
