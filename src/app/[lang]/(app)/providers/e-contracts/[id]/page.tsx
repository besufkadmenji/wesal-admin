import { SignedContract } from "@/components/app/SignedContracts/Detail/SignedContract";
type Params = {
  id: string;
};
const ServiceProviderDetailPage = async ({
  params,
}: {
  params: Promise<Params>;
}) => {
  const { id } = await params;
  return <SignedContract userId={id} />;
};

export default ServiceProviderDetailPage;
