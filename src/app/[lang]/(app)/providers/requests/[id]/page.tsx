import { RequestDetail } from "@/components/app/ProviderRequests/Detail/RequestDetail";
type Params = {
  id: string;
};
const SubscriberRequestDetailPage = async ({
  params,
}: {
  params: Promise<Params>;
}) => {
  const { id } = await params;
  return <RequestDetail id={id} />;
};

export default SubscriberRequestDetailPage;
