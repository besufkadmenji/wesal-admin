import { EditFaq } from "@/components/app/Faq/manage/EditFaq";

type Params = {
  id: string;
};
const EditFaqPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  return <EditFaq id={id} />;
};

export default EditFaqPage;
