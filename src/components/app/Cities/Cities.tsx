"use client";
import { CitiesList } from "@/components/app/Cities/CitiesList";
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
import { usePathname } from "next/navigation";
import { AddButton, AddButtonType } from "../shared/button/AddButton";
import { CitiesFilter } from "./CitiesFilter";
import { useCities } from "./useCities";
import { useAppRouter } from "@/hooks/useAppRouter";
export const Cities = () => {
  const dict = useDict();
  const router = useAppRouter();
  const pathname = usePathname();
  const { cities, pagination, isLoading } = useCities();
  const canCreate = useCanAccess("city", "create");

  return (
    <PageWrapper>
      <PageBar title={dict.cities_page.title}>
        {canCreate && (
          <AddButton
            type={AddButtonType.City}
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
          type={SummaryCardType.CITIES}
          value={pagination?.total || 0}
        />
      )}

      <Gap className="h-6" />
      <div className="grid grid-cols-1 gap-4">
        <CitiesFilter />
        <CitiesList />
      </div>
    </PageWrapper>
  );
};
