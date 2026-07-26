import { ConversationDetailPage } from "@/components/app/admin-lifecycle/ConversationDetailPage";

export default async function ConversationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ConversationDetailPage id={(await params).id} />;
}
