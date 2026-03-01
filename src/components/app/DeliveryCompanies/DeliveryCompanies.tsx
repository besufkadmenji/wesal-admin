"use client";
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
import { DeliveryCompaniesFilter } from "./DeliveryCompaniesFilter";
import { DeliveryCompaniesList } from "./DeliveryCompaniesList";
import { useDeliveryCompanies } from "./useDeliveryCompanies";
import { useAppRouter } from "@/hooks/useAppRouter";
export const DeliveryCompanies = () => {
  const dict = useDict();
  const router = useAppRouter();
  const pathname = usePathname();
  const { deliveryCompanies, pagination, isLoading } = useDeliveryCompanies();
  const canCreate = useCanAccess("delivery_company", "create");

  return (
    <PageWrapper>
      <PageBar title={dict.delivery_companies_page.title}>
        {canCreate && (
          <AddButton
            type={AddButtonType.DeliveryCompany}
            onPress={() => {
              router.push(`${pathname}/add`);
            }}
          />
        )}
        <ExportButton model={ExportModel.DeliveryCompanies} />
      </PageBar>
      <Gap className="h-8" />
      {isLoading ? (
        <SummaryCardSkeleton />
      ) : (
        <SummaryCard
          type={SummaryCardType.DELIVERY_COMPANIES}
          value={pagination?.total || 0}
        />
      )}

      <Gap className="h-6" />
      <div className="grid grid-cols-1 gap-4">
        <DeliveryCompaniesFilter />
        <DeliveryCompaniesList />
      </div>
    </PageWrapper>
  );
};
