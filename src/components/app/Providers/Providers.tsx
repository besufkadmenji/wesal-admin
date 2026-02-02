"use client";

import { Gap } from "@/components/app/shared/Gap";
import { PageBar } from "@/components/app/shared/PageBar";
import { PageWrapper } from "@/components/app/shared/PageWrapper";
import {
  SummaryCard,
  SummaryCardType,
} from "@/components/app/shared/summary/SummaryCard";
import { useDict } from "@/hooks/useDict";
import { usePathname, useRouter } from "next/navigation";

import { ExportButton } from "@/components/app/shared/button/ExportButton";
import { SummaryCardSkeleton } from "../shared/summary/SummaryCardSkeleton";
import { ProvidersFilter } from "./ProvidersFilter";
import { ProvidersList } from "./ProvidersList";
import { useProviders } from "./useProvider";

export const Providers = () => {
  const dict = useDict();
  const router = useRouter();
  const pathname = usePathname();
  const { data, isLoading } = useProviders();

  return (
    <PageWrapper>
      <PageBar
        title={dict.providers_page.title}
        className="grid grid-cols-1 gap-2 md:flex"
      >
        <ExportButton model={""} />
      </PageBar>
      <Gap className="h-8" />
      {isLoading ? (
        <SummaryCardSkeleton />
      ) : (
        <SummaryCard
          type={SummaryCardType.PROVIDERS}
          value={data?.meta.total ?? 0}
        />
      )}

      <Gap className="h-6" />
      <div className="grid grid-cols-1 gap-4">
        <ProvidersFilter />
        <ProvidersList />
      </div>
    </PageWrapper>
  );
};
