import { ContractDetailPage } from "@/components/app/admin-lifecycle/ContractDetailPage";

export default async function ContractPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ContractDetailPage id={(await params).id} />;
}
