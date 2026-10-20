"use client";

import { DETAIL_CARD_SURFACE } from "@/components/app/shared/detail/DetailCard";

import { ListingDetail } from "@/components/app/Listings/manage/ListingDetail/ListingDetail";
import { AppForm, FormType } from "@/components/app/shared/forms/AppForm";
import { useDict } from "@/hooks/useDict";
import { DetailGate } from "@/components/app/shared/states/DetailGate";
import { useListingById } from "../useListings";

export const ViewListing = ({ id }: { id: string }) => {
  const { listing, isLoading, refetch } = useListingById(id);
  const dict = useDict();

  return (
    <DetailGate
      isLoading={isLoading}
      data={listing}
      onRetry={() => void refetch()}
      backHref="/listings"
    >
      {() => (
        <div className={`${DETAIL_CARD_SURFACE} grid grid-cols-1 p-6`}>
          <AppForm type={FormType.Listings} action="view">
            <ListingDetail />
          </AppForm>
        </div>
      )}
    </DetailGate>
  );
};
