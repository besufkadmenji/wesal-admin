import { EditCategory } from "@/components/app/Categories/manage/EditCategory";

type Params = {
  id: string;
};
const EditCategoryPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  return <EditCategory id={id} />;
};

export default EditCategoryPage;
