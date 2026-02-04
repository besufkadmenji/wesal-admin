"use client";
import { ListingsList } from "@/components/app/Listings/ListingsList";
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
import { ExportModel } from "@/types/export.models";
import { ListingsFilter } from "./ListingsFilter";
import { useListings } from "./useListings";
export const Listings = () => {
  const dict = useDict();
  const { listings, pagination, isLoading } = useListings();

  return (
    <PageWrapper>
      <PageBar title={dict.listings_page.title}>
        <ExportButton model={ExportModel.Listings} />
      </PageBar>
      <Gap className="h-8" />
      {isLoading ? (
        <SummaryCardSkeleton />
      ) : (
        <SummaryCard
          type={SummaryCardType.LISTINGS}
          value={pagination?.total || 0}
        />
      )}

      <Gap className="h-6" />
      <div className="grid grid-cols-1 gap-4">
        <ListingsFilter />
        <ListingsList />
      </div>
    </PageWrapper>
  );
};
