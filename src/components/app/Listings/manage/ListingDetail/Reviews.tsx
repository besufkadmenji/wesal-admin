import { RatingStatistics } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { ListingRating } from "@/services/rating.service";
import { DateTimeHelpers } from "@/utils/date.time.helpers";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Ratings } from "./MainInfo";

export const Reviews = ({
  ratings,
  ratingStatistics,
  isLoading,
}: {
  ratings: ListingRating[];
  ratingStatistics?: RatingStatistics | null;
  isLoading: boolean;
}) => {
  const dict = useDict();
  const lang = useLang();
  return (
    <div className="grid grid-cols-1 gap-6 rounded-[20px] bg-white p-5">
      <div className={twMerge("grid grid-cols-1 items-center")}>
        <div className="grid grid-cols-1 gap-1">
          <p>{dict.listingDetail.reviews.title}</p>
          <Ratings
            rating={ratingStatistics?.averageRating ?? 0}
            total={ratingStatistics?.totalRatings ?? 0}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {isLoading ? (
          <p className="text-gray text-sm leading-6">
            {dict.common.actions.search}...
          </p>
        ) : ratings.length === 0 ? (
          <p className="text-gray text-sm leading-6">
            {lang === "ar" ? "لا توجد تعليقات" : "No comments found"}
          </p>
        ) : (
          ratings.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        )}
      </div>
    </div>
  );
};

const ReviewCard = ({ review }: { review: ListingRating }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 border-b border-b-[#F2F2F2] pb-6">
      <div className="relative size-14 rounded-full">
        <Image src={"/images/reviewer.png"} alt="reviewer" fill />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <div className="grid grid-cols-[1fr_auto] gap-2.5">
          <div className="grid grid-cols-1 gap-2">
            <p className="text-lg font-medium text-[#1A1A1A]">
              {review.user?.name ?? "-"}
            </p>
            <p className="text-gray text-sm">
              {DateTimeHelpers.formatDate(review.createdAt)}
            </p>
          </div>
          <Ratings
            rating={review.rating}
            hideInfo
            classNames={{
              rating: "size-4",
            }}
          />
        </div>
        {review.comment ? (
          <p className="text-gray text-sm leading-6 font-medium">
            {review.comment}
          </p>
        ) : null}
      </div>
    </div>
  );
};
