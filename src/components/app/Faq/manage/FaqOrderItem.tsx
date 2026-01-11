import { Faq } from "@/gql/graphql";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { GripVertical } from "lucide-react";
import { useLang } from "@/hooks/useLang";

interface FaqOrderItemProps {
  faq: Faq;
  index: number;
}

export const FaqOrderItem = ({ faq, index }: FaqOrderItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: faq.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };
  const lng = useLang();
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-4 rounded-lg border border-border p-4 ${
        isDragging
          ? "dark:bg-dark-gray-100 bg-gray-100"
          : "dark:bg-dark-card bg-white"
      } cursor-grab active:cursor-grabbing`}
      {...attributes}
      {...listeners}
    >
      <button className="dark:hover:text-dark-light-gray flex cursor-grabbing items-center justify-center text-gray-400 hover:text-gray-600">
        <GripVertical size={20} />
      </button>

      <div className="flex-1">
        <div className="mb-1 text-sm font-semibold text-black">
          {lng === "ar" ? faq.questionAr : faq.questionEn}
        </div>
        <div className="dark:text-dark-light-gray text-gray line-clamp-1 text-xs">
          {lng === "ar" ? faq.answerAr : faq.answerEn}
        </div>
      </div>

      <div className="dark:text-dark-light-gray dark:bg-dark-gray-100 text-app-primary shrink-0 rounded px-3 py-1 text-sm font-medium">
        #{index + 1}
      </div>
    </div>
  );
};
