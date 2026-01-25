"use client";

import { Permissions } from "@/components/app/Admins/manage/Permissions";
import { useManageForm } from "@/components/app/Admins/manage/useForm";
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
import { useEffect } from "react";
import { AppLoading } from "../../shared/AppLoading";
import { useAdminById } from "../useAdmins";
import { AdminPermissionType } from "@/gql/graphql";

export const ViewAdmin = ({ id }: { id: string }) => {
  const { admin } = useAdminById(id);
  const { form, setForm, reset, permissionsReady } = useManageForm(id, admin);
  const dict = useDict();
  const router = useRouter();

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return !admin || !permissionsReady ? (
    <AppLoading className="h-[84vh]" />
  ) : (
    <div className="grid grid-cols-1">
      <AppForm type={FormType.Admins} action="view">
        <FormSection title={dict.edit_admin_form.sections.admin_information}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              label={dict.edit_admin_form.labels.admin_name}
              placeholder={dict.edit_admin_form.placeholders.admin_name}
              value={admin.fullName}
              onChange={(value: string): void => {}}
              readOnly
            />
            <FormInput
              label={dict.edit_admin_form.labels.phone_number}
              placeholder={dict.edit_admin_form.placeholders.phone_number}
              value={admin.phoneNumber}
              onChange={(value: string): void => {}}
              readOnly
            />
            <FormSelect
              label={dict.add_new_admin_form.labels.status}
              placeholder={dict.add_new_admin_form.labels.status}
              value={admin.status}
              onChange={(value: string): void => {}}
              options={Object.entries(statusMap(dict)).map(([key, value]) => ({
                label: value,
                key: key,
              }))}
              readOnly
            />
          </div>
        </FormSection>
        <FormSection title={dict.edit_admin_form.sections.login_information}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormInput
              label={dict.edit_admin_form.labels.email}
              placeholder={dict.edit_admin_form.labels.email}
              value={admin.email}
              onChange={(value: string): void => {}}
              readOnly
            />
          </div>
        </FormSection>
        <FormSection title="">
          <div className="grid grid-cols-1 gap-4"></div>
        </FormSection>
        <Permissions
          readOnly
          isSuperAdmin={admin.permissionType === AdminPermissionType.SuperAdmin}
        />
      </AppForm>
    </div>
  );
};
