import { ViewBank } from "@/components/app/Banks/manage/ViewBank";
type Params = {
  id: string;
};
const ViewBankPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  return <ViewBank id={id} />;
};

export default ViewBankPage;
