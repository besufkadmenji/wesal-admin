import { Admin } from "@/gql/graphql";
import AdminService from "@/services/admin.service";
import { useQuery } from "@tanstack/react-query";
import Cookie from "js-cookie";
export const useMe = (): {
  me: Admin | null | undefined;
  isLoading: boolean;
  isError: boolean;
  logout: () => Promise<void>;
} => {
  const {
    isLoading,
    isError,
    data: me,
  } = useQuery({
    queryKey: ["me"],
    queryFn: () => AdminService.meAdmin(),
  });

  const logout = async (): Promise<void> => {
    Cookie.remove("token");
    window.location.reload();
  };

  return { isLoading, isError, me, logout };
};
