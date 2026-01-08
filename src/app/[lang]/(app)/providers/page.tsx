import { Users } from "@/components/app/Users/Users";
import { UserRole } from "@/gql/graphql";
const ServiceProvidersPage = () => {
  return <Users role={UserRole.Provider} />;
};

export default ServiceProvidersPage;
