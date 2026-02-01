import { ViewListing } from "@/components/app/Listings/manage/ViewListing";
type Params = {
  id: string;
};
const ViewListingPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  return <ViewListing id={id} />;
};

export default ViewListingPage;
