import { ViewCity } from "@/components/app/Cities/manage/ViewCity";

type Params = {
  id: string;
};
const ViewCityPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  return <ViewCity id={id} />;
};

export default ViewCityPage;
