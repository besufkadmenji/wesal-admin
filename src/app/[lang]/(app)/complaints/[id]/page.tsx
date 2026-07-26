import { ComplaintDetailPage } from "@/components/app/admin-lifecycle/ComplaintDetailPage";

export default async function ComplaintPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ComplaintDetailPage id={(await params).id} />;
}
