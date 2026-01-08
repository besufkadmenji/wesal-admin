import { ViewCategory } from "@/components/app/Categories/manage/ViewCategory";

type Params = {
  id: string;
};
const ViewCategoryPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  return <ViewCategory id={id} />;
};

export default ViewCategoryPage;
