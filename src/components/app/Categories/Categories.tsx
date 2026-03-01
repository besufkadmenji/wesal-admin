"use client";
import { CategoriesList } from "@/components/app/Categories/CategoriesList";
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
import { CategoriesFilter } from "./CategoriesFilter";
import { useCategories } from "./useCategories";
import { useAppRouter } from "@/hooks/useAppRouter";
export const Categories = () => {
  const dict = useDict();
  const pathname = usePathname();
  const { categories, pagination, isLoading } = useCategories();
  const canCreate = useCanAccess("category", "create");
  const router = useAppRouter();

  return (
    <PageWrapper>
      <PageBar title={dict.categories_page.title}>
        {canCreate && (
          <AddButton
            type={AddButtonType.Category}
            onPress={() => {
              router.push(`${pathname}/add`);
            }}
          />
        )}
        <ExportButton model={ExportModel.Categories} />
      </PageBar>
      <Gap className="h-8" />
      {isLoading ? (
        <SummaryCardSkeleton />
      ) : (
        <SummaryCard
          type={SummaryCardType.CATEGORIES}
          value={pagination?.total || 0}
        />
      )}

      <Gap className="h-6" />
      <div className="grid grid-cols-1 gap-4">
        <CategoriesFilter />
        <CategoriesList />
      </div>
    </PageWrapper>
  );
};
