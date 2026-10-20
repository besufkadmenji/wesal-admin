import { Star as RatingIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const CommentStars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} / 5`}>
    {[1, 2, 3, 4, 5].map((star) => (
      <RatingIcon
        key={star}
        className={twMerge(
          "size-4 fill-current stroke-0 text-[#d9d9d9] dark:text-white/20",
          star <= rating && "text-[#FB8A00] dark:text-[#FB8A00]",
        )}
      />
    ))}
  </div>
);
