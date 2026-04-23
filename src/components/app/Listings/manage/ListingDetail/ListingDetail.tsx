"use client";

import { DetailSkeleton } from "./DetailSkeleton";
import { ListingImages } from "./ListingImages";
import { MainInfo } from "./MainInfo";
import { ProviderData } from "./ProviderData";
import { Reviews } from "./Reviews";
import { StoryVideo } from "./StoryVideo";
import { useListing } from "./useListing";
import { useListingRatings } from "./useListingRatings";

export const ListingDetail = () => {
  const { listing, isLoading } = useListing();
  const {
    ratings,
    statistics,
    isLoading: isRatingsLoading,
  } = useListingRatings(listing?.id ?? "");
  return isLoading || !listing ? (
    <DetailSkeleton />
  ) : (
    <div className="grid auto-rows-max grid-cols-1 items-start gap-20">
      <div className="grid grid-cols-2 items-start gap-10">
        <ListingImages listing={listing} />
        <MainInfo listing={listing} ratingStatistics={statistics} />
      </div>
      <div className="grid grid-cols-2 items-start gap-10">
        <Reviews
          ratings={ratings}
          ratingStatistics={statistics}
          isLoading={isRatingsLoading}
        />
        <div className="grid grid-cols-1 gap-10">
          <StoryVideo listing={listing} />
          <ProviderData
            provider={listing.provider!}
            ratingStatistics={statistics}
          />
        </div>
      </div>
    </div>
  );
};
