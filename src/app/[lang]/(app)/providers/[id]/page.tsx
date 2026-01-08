import { UserDetail } from "@/components/app/Users/Detail/UserDetail";
type Params = {
  id: string;
};
const ServiceProviderDetailPage = async ({
  params,
}: {
  params: Promise<Params>;
}) => {
  const { id } = await params;
  return <UserDetail id={id} />;
};

export default ServiceProviderDetailPage;
