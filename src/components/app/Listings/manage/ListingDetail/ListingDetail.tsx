"use client";

import { useDict } from "@/hooks/useDict";
import { usePathname, useRouter } from "next/navigation";
import { DetailSkeleton } from "./DetailSkeleton";
import { ListingImages } from "./ListingImages";
import { MainInfo } from "./MainInfo";
import { ProviderData } from "./ProviderData";
import { Reviews } from "./Reviews";
import { StoryVideo } from "./StoryVideo";
import { useListing } from "./useListing";

export const ListingDetail = () => {
  const { listing, isLoading } = useListing();
  const router = useRouter();
  const pathname = usePathname();
  const dict = useDict();
  return isLoading || !listing ? (
    <DetailSkeleton />
  ) : (
    <div className="grid auto-rows-max grid-cols-1 items-start gap-20">
      <div className="grid grid-cols-2 items-start gap-10">
        <ListingImages listing={listing} />
        <MainInfo listing={listing} />
      </div>
      <div className="grid grid-cols-2 items-start gap-10">
        <Reviews />
        <div className="grid grid-cols-1 gap-10">
          <StoryVideo listing={listing} />
          <ProviderData provider={listing.provider!} />
        </div>
      </div>
    </div>
  );
};
