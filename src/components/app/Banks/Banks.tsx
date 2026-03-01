"use client";
import { BanksList } from "@/components/app/Banks/BanksList";
import { ExportButton } from "@/components/app/shared/button/ExportButton";
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
import { ExportModel } from "@/types/export.models";
import { usePathname } from "next/navigation";
import { AddButton, AddButtonType } from "../shared/button/AddButton";
import { BanksFilter } from "./BanksFilter";
import { useBanks } from "./useBanks";
import { useAppRouter } from "@/hooks/useAppRouter";
export const Banks = () => {
  const dict = useDict();
  const router = useAppRouter();
  const pathname = usePathname();
  const { banks, pagination, isLoading } = useBanks();
  const canCreate = useCanAccess("bank", "create");

  return (
    <PageWrapper>
      <PageBar title={dict.banks_page.title}>
        {canCreate && (
          <AddButton
            type={AddButtonType.Bank}
            onPress={() => {
              router.push(`${pathname}/add`);
            }}
          />
        )}
        <ExportButton model={ExportModel.Banks} />
      </PageBar>
      <Gap className="h-8" />
      {isLoading ? (
        <SummaryCardSkeleton />
      ) : (
        <SummaryCard
          type={SummaryCardType.BANKS}
          value={pagination?.total || 0}
        />
      )}

      <Gap className="h-6" />
      <div className="grid grid-cols-1 gap-4">
        <BanksFilter />
        <BanksList />
      </div>
    </PageWrapper>
  );
};
