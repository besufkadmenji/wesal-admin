import { EditCity } from "@/components/app/Cities/manage/EditCity";

type Params = {
  id: string;
};
const EditCityPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  return <EditCity id={id} />;
};

export default EditCityPage;
