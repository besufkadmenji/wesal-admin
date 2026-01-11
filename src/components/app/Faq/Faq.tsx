"use client";
import { FaqList } from "@/components/app/Faq/FaqList";
import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import {
  AddButton,
  AddButtonType,
} from "@/components/app/shared/button/AddButton";
import { useDict } from "@/hooks/useDict";
import { usePathname, useRouter } from "next/navigation";
import { Gap } from "@/components/app/shared/Gap";
import { Button } from "@heroui/react";
import ChangeOrderIcon from "@/assets/icons/app/arrows-sort.svg";
import { ChangeOrder } from "@/components/app/Faq/manage/ChangeOrder";
import { useQueryState } from "nuqs";

export const FaqManager = () => {
  const dict = useDict();
  const router = useRouter();
  const pathname = usePathname();
  const [changeOrder, setChangeOrder] = useQueryState("changeOrder");

  return (
    <PageWrapper>
      <PageBar
        title={dict.faq_page.title}
        className="grid grid-cols-1 gap-2 md:flex"
      >
        <AddButton
          type={AddButtonType.Faq}
          onPress={() => {
            router.push(`${pathname}/add`);
          }}
        />
        <Button
          startContent={<ChangeOrderIcon className="size-5" />}
          variant="bordered"
          className="border-app-primary text-app-primary font-medium"
          onPress={() => {
            setChangeOrder("true");
          }}
        >
          {dict.faq_page.change_order_button}
        </Button>
      </PageBar>
      <Gap className="h-8" />
      <FaqList />
      <ChangeOrder />
    </PageWrapper>
  );
};
