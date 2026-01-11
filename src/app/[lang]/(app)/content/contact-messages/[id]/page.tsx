import { ViewContactMessages } from "@/components/app/ContactMessages/ViewContactMessages";

type Params = {
  id: string;
};
const ViewContactMessagePage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  return <ViewContactMessages id={id} />;
};

export default ViewContactMessagePage;
