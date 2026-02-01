import { ViewDeliveryCompany } from "@/components/app/DeliveryCompanies/manage/ViewDeliveryCompany";
type Params = {
  id: string;
};
const ViewDeliveryCompanyPage = async ({
  params,
}: {
  params: Promise<Params>;
}) => {
  const { id } = await params;
  return <ViewDeliveryCompany id={id} />;
};

export default ViewDeliveryCompanyPage;
