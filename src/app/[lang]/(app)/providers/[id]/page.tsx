import { ProviderDetail } from "@/components/app/Providers/Detail/ProviderDetail";
type Params = {
  id: string;
};
const ServiceProviderDetailPage = async ({
  params,
}: {
  params: Promise<Params>;
}) => {
  const { id } = await params;
  return <ProviderDetail id={id} />;
};

export default ServiceProviderDetailPage;
