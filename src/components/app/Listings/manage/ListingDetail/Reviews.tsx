import { RatingStatistics } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { AdminRating } from "@/services/rating.service";
import { DateTimeHelpers } from "@/utils/date.time.helpers";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Ratings } from "./MainInfo";

export const Reviews = ({
  ratings,
  ratingStatistics,
  isLoading,
}: {
  ratings: AdminRating[];
  ratingStatistics?: RatingStatistics | null;
  isLoading: boolean;
}) => {
  const dict = useDict();
  const lang = useLang();
  return (
    <div className="grid grid-cols-1 gap-6 rounded-[20px] p-0">
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
          <p className="text-subTitle dark:text-dark-subTitle text-sm leading-6">
            {dict.common.actions.search}...
          </p>
        ) : ratings.length === 0 ? (
          <p className="text-subTitle dark:text-dark-subTitle text-sm leading-6">
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

const ReviewCard = ({ review }: { review: AdminRating }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 border-b border-[#22283a]/[0.07] pb-6 dark:border-white/8">
      <div className="relative size-14 rounded-full">
        <Image src={"/images/reviewer.png"} alt="reviewer" fill />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <div className="grid grid-cols-[1fr_auto] gap-2.5">
          <div className="grid grid-cols-1 gap-2">
            <p className="text-primary text-lg font-medium dark:text-white">
              {review.user?.name ?? "-"}
            </p>
            <p className="text-subTitle dark:text-dark-subTitle text-sm">
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
          <p className="text-subTitle dark:text-dark-subTitle text-sm leading-6 font-medium">
            {review.comment}
          </p>
        ) : null}
      </div>
    </div>
  );
};
