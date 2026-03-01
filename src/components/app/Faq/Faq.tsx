"use client";
import { FaqList } from "@/components/app/Faq/FaqList";
import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import {
  AddButton,
  AddButtonType,
} from "@/components/app/shared/button/AddButton";
import { useDict } from "@/hooks/useDict";
import { useCanAccess } from "@/hooks/useCanAccess";
import { Gap } from "@/components/app/shared/Gap";
import { Button } from "@heroui/react";
import ChangeOrderIcon from "@/assets/icons/app/arrows-sort.svg";
import { ChangeOrder } from "@/components/app/Faq/manage/ChangeOrder";
import { useQueryState } from "nuqs";
import { ExportButton } from "@/components/app/shared/button/ExportButton";
import { ExportModel } from "@/types/export.models";
import { Admins } from "@/components/app/Admins/Admins";
import { useAppRouter } from "@/hooks/useAppRouter";
import { usePathname } from "next/navigation";

export const FaqManager = () => {
  const dict = useDict();
  const router = useAppRouter();
  const pathname = usePathname();
  const [changeOrder, setChangeOrder] = useQueryState("changeOrder");
  const canCreate = useCanAccess("faq", "create");

  return (
    <PageWrapper>
      <PageBar
        title={dict.faq_page.title}
        className="grid grid-cols-1 gap-2 md:flex"
      >
        {canCreate && (
          <AddButton
            type={AddButtonType.Faq}
            onPress={() => {
              router.push(`${pathname}/add`);
            }}
          />
        )}
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
        <ExportButton model={ExportModel.FAQs} />
      </PageBar>
      <Gap className="h-8" />
      <FaqList />
      <ChangeOrder />
    </PageWrapper>
  );
};
