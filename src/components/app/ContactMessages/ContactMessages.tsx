"use client";
import { ContactMessagesList } from "@/components/app/ContactMessages/ContactMessagesList";
import { ExportButton } from "@/components/app/shared/button/ExportButton";
import { Gap } from "@/components/app/shared/Gap";
import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import { useDict } from "@/hooks/useDict";
import { ExportModel } from "@/types/export.models";
import { usePathname } from "next/navigation";
import { SendReply } from "@/components/app/ContactMessages/SendReply";
import { useAppRouter } from "@/hooks/useAppRouter";

export const ContactMessages = () => {
  const dict = useDict();
  const router = useAppRouter();
  const pathname = usePathname();

  return (
    <PageWrapper>
      <PageBar
        title={dict.contact_messages_page.title}
        className="grid grid-cols-1 gap-2 md:flex"
      >
        <ExportButton model={ExportModel.ContactMessages} />
      </PageBar>
      <Gap className="h-8" />
      <ContactMessagesList />
      <SendReply />
    </PageWrapper>
  );
};
