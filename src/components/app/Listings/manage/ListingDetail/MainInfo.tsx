import { sar } from "@/assets/fonts/sar";
import { Star as RatingIcon } from "lucide-react";
import { RatingStatistics } from "@/gql/graphql";
import type { ListingDetails } from "@/graphql/listing/types";
import { useDict } from "@/hooks/useDict";
import { moneyFormatter } from "@/utils/formatter";
import { twMerge } from "tailwind-merge";
export const MainInfo = ({
  listing,
  ratingStatistics,
}: {
  listing: ListingDetails;
  ratingStatistics?: RatingStatistics | null;
}) => {
  const dict = useDict();
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 gap-4 border-b border-[#22283a]/[0.07] pb-6 dark:border-white/8">
        <h2 className="text-primary text-3xl font-semibold dark:text-white">
          {moneyFormatter(listing.price)}{" "}
          <span className={twMerge("text-app-green", sar.className)}>A</span>
        </h2>
        <div className="grid grid-cols-1 gap-3">
          <h1 className="text-primary text-2xl font-semibold dark:text-white">
            {listing.name}
          </h1>
          <Ratings
            rating={ratingStatistics?.averageRating ?? 0}
            total={ratingStatistics?.totalRatings ?? 0}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-1">
        <p className="text-primary leading-8 font-medium dark:text-white">
          {dict.listingDetail.about}
        </p>
        <p className="text-subTitle dark:text-dark-subTitle leading-7">
          {listing.description}
        </p>
      </div>
    </div>
  );
};

export const Ratings = ({
  rating,
  total,
  hideInfo,
  classNames,
}: {
  rating: number;
  total?: number;
  hideInfo?: boolean;
  classNames?: {
    rating?: string;
    info?: string;
  };
}) => {
  const dict = useDict();
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <RatingIcon
            key={index}
            className={twMerge(
              "size-5 fill-current stroke-0 text-[#999999] dark:text-white/25",
              Math.floor(rating) > index &&
                "text-[#FB8A00] dark:text-[#FB8A00]",
              classNames?.rating,
            )}
          />
        ))}
      </div>

      {!hideInfo && total !== undefined ? (
        <div className="flex items-center gap-1">
          <p>{rating}</p>
          <p className="text-subTitle dark:text-dark-subTitle text-sm leading-6">
            ({total} {dict.listingDetail.reviews.comments})
          </p>
        </div>
      ) : !hideInfo ? (
        <p className={twMerge("", classNames?.info)}>({rating})</p>
      ) : (
        <></>
      )}
    </div>
  );
};
