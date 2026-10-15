import RatingIcon from "@/assets/icons/rating.svg";
import { twMerge } from "tailwind-merge";

export const CommentStars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} / 5`}>
    {[1, 2, 3, 4, 5].map((star) => (
      <RatingIcon
        key={star}
        className={twMerge(
          "size-4 text-[#d9d9d9]",
          star <= rating && "text-[#FB8A00]",
        )}
      />
    ))}
  </div>
);
