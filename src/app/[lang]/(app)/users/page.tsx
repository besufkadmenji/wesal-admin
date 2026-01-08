import { Users } from "@/components/app/Users/Users";
import { UserRole } from "@/gql/graphql";
const UsersPage = () => {
  return <Users role={UserRole.User} />;
};

export default UsersPage;
