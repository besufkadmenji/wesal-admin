import { EditBank } from "@/components/app/Banks/manage/EditBank";
type Params = {
  id: string;
};
const EditBankPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  return <EditBank id={id} />;
};

export default EditBankPage;
