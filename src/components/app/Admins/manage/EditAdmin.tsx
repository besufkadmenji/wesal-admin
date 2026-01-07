"use client";

import { Permissions } from "@/components/app/Admins/manage/Permissions";
import { statusMap } from "@/components/app/Admins/renderCell";
import {
  AppForm,
  FormSection,
  FormType,
} from "@/components/app/shared/forms/AppForm";
import { FormInput } from "@/components/app/shared/forms/FormInput";
import { FormSelect } from "@/components/app/shared/forms/FormSelect";
import { useDict } from "@/hooks/useDict";
import { useRouter } from "next/navigation";
import { UploadInput } from "../../shared/UploadInput";
import { useAdminById } from "../useAdmins";
import { useForm, useManageForm } from "./useForm";
import { useFormValidation } from "./useFormValidation";
import { useManageAdmin } from "./useManageAdmin";
import { useEffect } from "react";
import { AppLoading } from "@/components/app/shared/AppLoading";
import { AdminStatus } from "@/gql/graphql";

export const EditAdmin = ({ id }: { id: string }) => {
  const { admin } = useAdminById(id);
  const { form, setForm, reset, permissionsReady } = useManageForm(id, admin);
  const avatarFile = useForm((state) => state.avatarFile);
  const setAvatarFile = useForm((state) => state.setAvatarFile);
  const dict = useDict();
  const router = useRouter();
  const { busy, updateAdmin } = useManageAdmin();
  const { errors, validateForm, clearError } = useFormValidation(form, "edit");
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);
  return !admin || !permissionsReady ? (
    <AppLoading className="h-[84vh]" />
  ) : (
    <div className="grid grid-cols-1">
      <AppForm
        type={FormType.Admins}
        onSubmit={() => {
          if (validateForm()) {
            updateAdmin(id);
          }
        }}
        onCancel={() => {
          router.push("/admins");
        }}
        busy={busy}
        action="edit"
      >
        <FormSection title={dict.edit_admin_form.sections.admin_information}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              label={dict.edit_admin_form.labels.admin_name}
              placeholder={dict.edit_admin_form.placeholders.admin_name}
              value={form.fullName}
              onChange={(value: string): void => {
                setForm({ fullName: value });
                clearError("fullName");
              }}
              errorMessage={errors.fullName}
            />
            <FormInput
              label={dict.edit_admin_form.labels.phone_number}
              placeholder={dict.edit_admin_form.placeholders.phone_number}
              value={form.phoneNumber}
              onChange={(value: string): void => {
                setForm({ phoneNumber: value });
                clearError("phoneNumber");
              }}
              errorMessage={errors.phoneNumber}
            />
            <FormSelect
              label={dict.add_new_admin_form.labels.status}
              placeholder={dict.add_new_admin_form.labels.status}
              value={form.status?.toString() || ""}
              onChange={(value: string): void => {
                setForm({
                  status: value as AdminStatus,
                });
                clearError("status");
              }}
              options={Object.entries(statusMap(dict)).map(([key, value]) => ({
                label: value,
                key: key,
              }))}
              errorMessage={errors.status}
            />
          </div>
        </FormSection>
        <FormSection title={dict.edit_admin_form.sections.login_information}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              label={dict.edit_admin_form.labels.email}
              placeholder={dict.edit_admin_form.labels.email}
              value={form.email}
              onChange={(value: string): void => {
                setForm({ email: value });
                clearError("email");
              }}
              errorMessage={errors.email}
            />
          </div>
        </FormSection>
        <FormSection title="">
          <div className="grid grid-cols-1 gap-4">
            <UploadInput
              label={dict.edit_admin_form.image.attach}
              desc={dict.edit_admin_form.image.desc}
              file={avatarFile}
              onChange={(file?: File): void => {
                setAvatarFile(file || null);
                if (!file) {
                  setAvatarFile(null);
                }
              }}
              accept={{
                "image/jpeg": [],
                "image/png": [],
              }}
              initUrl={form.avatarFilename || undefined}
            />
          </div>
        </FormSection>
        <Permissions />
      </AppForm>
    </div>
  );
};
