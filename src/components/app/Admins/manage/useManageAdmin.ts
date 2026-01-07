import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import AdminService from "@/services/admin.service";
import { PermissionService } from "@/services/permission.service";
import { UserService } from "@/services/user.service";
import { DeactivateUserDto } from "@/types/user";
import { uploadFile } from "@/utils/file.upload";
import { queryClient } from "@/utils/query.client";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { useForm } from "./useForm";
import { AdminPermissionType } from "@/gql/graphql";

export const useManageAdmin = () => {
  const [busy, setBusy] = useState(false);
  const form = useForm((state) => state.form);
  const avatarFile = useForm((state) => state.avatarFile);
  const resetForm = useForm((state) => state.reset);
  const permissionIds = useForm((state) => state.permissionIds);
  const router = useRouter();
  const dict = useDict();
  const lang = useLang();
  const [isDeleteWarningOpen, setIsDeleteWarningOpen] = useQueryState(
    "isDeleteWarningOpen",
  );
  const [showSuccess, setShowSuccess] = useQueryState("showSuccess");
  const [, setActivateAdmin] = useQueryState("activateAdmin");
  const [, setDeactivateAdmin] = useQueryState("deactivateAdmin");

  const createAdmin = async () => {
    setBusy(true);
    try {
      let avatarFilename: string | null = null;
      if (avatarFile) {
        const uploadResponse = await uploadFile(avatarFile);
        if (uploadResponse?.filename) {
          avatarFilename = uploadResponse.filename;
        }
      }
      const response = await AdminService.createAdmin({
        ...form,
        roleName: form.permissionType.toString(),
        avatarFilename: avatarFilename || undefined,
      });
      if (response) {
        if (form.permissionType === AdminPermissionType.Custom) {
          await PermissionService.assignPermissions({
            adminId: response.id,
            permissionIds: permissionIds || [],
          });
        }
        queryClient.invalidateQueries({
          queryKey: ["admins"],
        });
        queryClient.invalidateQueries({
          queryKey: ["admin", response.id],
        });
        setShowSuccess("true");
      }
      resetForm();
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const updateAdmin = async (id: string) => {
    setBusy(true);
    try {
      const { password, ...rest } = form;
      let avatarFilename: string | null = rest.avatarFilename || null;
      if (avatarFile) {
        const uploadResponse = await uploadFile(avatarFile);
        if (uploadResponse?.filename) {
          avatarFilename = uploadResponse.filename;
        }
      }
      const response = await AdminService.updateAdmin(id, {
        ...rest,
        avatarFilename,
      });
      if (response) {
        if (form.permissionType === AdminPermissionType.Custom) {
          await PermissionService.assignPermissions({
            adminId: response.id,
            permissionIds: permissionIds || [],
          });
        }
        showSuccessMessage(dict.system_managers_page.messages.updateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["admin", id],
        });
        queryClient.invalidateQueries({
          queryKey: ["admins"],
        });
        router.push("/admins");
      }
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const deleteAdmin = async (id: string) => {
    setBusy(true);
    try {
      const success = await AdminService.removeAdmin(id);
      if (success) {
        showSuccessMessage(dict.system_managers_page.messages.deleteSuccess);
        queryClient.invalidateQueries({
          queryKey: ["admins"],
        });
        queryClient.invalidateQueries({
          queryKey: ["admin", id],
        });
        router.push("/admins");
      } else {
        showErrorMessage("Failed to delete admin.");
      }
    } catch (error) {
      console.error("Delete admin error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
      setIsDeleteWarningOpen(null);
    }
  };

  const activateAdmin = async (id: string) => {
    setBusy(true);
    try {
      const success = await AdminService.activateAdmin(id);
      if (success) {
        showSuccessMessage(dict.system_managers_page.messages.activateSuccess);
        queryClient.invalidateQueries({
          queryKey: ["admins"],
        });
        queryClient.invalidateQueries({
          queryKey: ["admin", id],
        });
        setActivateAdmin(null);
      } else {
        showErrorMessage("Failed to activate admin.");
      }
    } catch (error) {
      console.error("Activate admin error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  const deactivateAdmin = async (id: string, reason?: string) => {
    setBusy(true);
    try {
      const deactivateData: DeactivateUserDto = reason ? { reason } : {};
      const success = await AdminService.deactivateAdmin(id, deactivateData);
      if (success) {
        showSuccessMessage(
          dict.system_managers_page.messages.deactivateSuccess,
        );
        queryClient.invalidateQueries({
          queryKey: ["admins"],
        });
        queryClient.invalidateQueries({
          queryKey: ["admin", id],
        });
        setDeactivateAdmin(null);
      } else {
        showErrorMessage("Failed to deactivate admin.");
      }
    } catch (error) {
      console.error("Deactivate admin error:", error);
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  };

  return {
    busy,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    activateAdmin,
    deactivateAdmin,
  };
};
