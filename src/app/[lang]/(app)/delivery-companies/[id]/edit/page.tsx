import { EditDeliveryCompany } from "@/components/app/DeliveryCompanies/manage/EditDeliveryCompany";
type Params = {
  id: string;
};
const EditDeliveryCompanyPage = async ({
  params,
}: {
  params: Promise<Params>;
}) => {
  const { id } = await params;
  return <EditDeliveryCompany id={id} />;
};

export default EditDeliveryCompanyPage;
