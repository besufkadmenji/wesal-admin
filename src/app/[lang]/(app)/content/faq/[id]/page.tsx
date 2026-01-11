import { redirect } from "next/navigation";

type Params = {
  id: string;
};
const ViewFaqPage = async ({ params }: { params: Promise<Params> }) => {
  redirect("/content/faqs");
};

export default ViewFaqPage;
