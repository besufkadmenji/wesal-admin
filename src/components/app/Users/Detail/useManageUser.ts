import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import UserService from "@/services/user.service";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useAppRouter } from "@/hooks/useAppRouter";

export const useManageUser = () => {
  const [busy, setBusy] = useState(false);
  const router = useAppRouter();
  const dict = useDict();
  const lang = useLang();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [, setActivateUser] = useQueryState("activateUser");
  const [, setDeactivateUser] = useQueryState("deactivateUser");
  const activateUser = async (id: string) => {
    setBusy(true);
    try {
      const response = await UserService.activateUser(id);
      if (response) {
        showSuccessMessage(dict.users_page.messages.activateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
        queryClient.invalidateQueries({
          queryKey: ["user", id],
        });
      }
    } catch (error) {
      console.error("Activate user error:", error);
      showErrorMessage(
        error instanceof Error
          ? error
          : (error as string) || "An error occurred.",
      );
    } finally {
      setBusy(false);
      setActivateUser(null);
    }
  };

  const deactivateUser = async (id: string, reason?: string) => {
    setBusy(true);
    try {
      const response = await UserService.deactivateUser(id, {
        reason: reason ?? "",
      });
      if (response) {
        showSuccessMessage(dict.users_page.messages.deactivateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
        queryClient.invalidateQueries({
          queryKey: ["user", id],
        });
      }
    } catch (error) {
      console.error("Deactivate user error:", error);
      showErrorMessage(
        error instanceof Error
          ? error
          : (error as string) || "An error occurred.",
      );
    } finally {
      setBusy(false);
      setDeactivateUser(null);
    }
  };

  const deleteUser = async (id: string, reason?: string) => {
    setBusy(true);
    try {
      const response = await UserService.removeUser(id, { reason });
      if (response) {
        showSuccessMessage(dict.system_managers_page.messages.deleteSuccess);
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
        queryClient.invalidateQueries({
          queryKey: ["users", id],
        });
        router.push("/users");
      }
    } catch (error) {
      console.error("Delete user error wtf:", error);
      showErrorMessage(
        error instanceof Error
          ? error
          : (error as string) || "An error occurred.",
      );
    } finally {
      setBusy(false);
      setIsDeleteWarningOpen(null);
    }
  };

  return {
    busy,
    activateUser,
    deactivateUser,
    deleteUser,
  };
};
