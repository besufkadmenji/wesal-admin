import { useDict } from "@/hooks/useDict";
import { AppDialog } from "@/components/app/shared/dialogs/AppDialog";
import { DialogActions } from "@/components/app/shared/dialogs/DialogActions";
import { KeyRound } from "lucide-react";
import { useQueryState } from "nuqs";
import { useChangePasswordForm } from "@/components/app/Settings/useChangePasswordForm";
import { PasswordInput } from "../shared/forms/FormInput";
import { useManageSetting } from "@/components/app/Settings/useManageSetting";
import { showErrorMessage } from "@/utils/show.message";

export const ChangePassword = () => {
  const dict = useDict();
  const [changePassword, setChangePassword] = useQueryState("changePassword");
  const { currentPassword, newPassword, confirmPassword, setForm } =
    useChangePasswordForm();
  const { changePassword: handleChangePassword, changingPassword } =
    useManageSetting();
  const close = () => setChangePassword(null);
  return (
    <AppDialog
      isOpen={!!changePassword}
      onClose={close}
      tone="primary"
      icon={KeyRound}
      title={dict.change_password_form.title}
      description={dict.change_password_form.description}
      isBusy={changingPassword}
      actions={
        <DialogActions
          tone="primary"
          confirmLabel={dict.change_password_form.buttons.submit}
          cancelLabel={dict.change_password_form.buttons.cancel}
          onConfirm={() => {
            if (newPassword !== confirmPassword) {
              showErrorMessage(
                dict.change_password_form.messages.passwordMismatch,
              );
              return;
            }
            void handleChangePassword({ currentPassword, newPassword });
          }}
          onCancel={close}
          isBusy={changingPassword}
        />
      }
    >
      <div className="grid grid-cols-1 gap-4">
        <PasswordInput
          label={dict.change_password_form.labels.current_password}
          placeholder={"********"}
          value={currentPassword}
          onChange={(value) => setForm({ currentPassword: value })}
        />
        <PasswordInput
          label={dict.change_password_form.labels.new_password}
          placeholder={"********"}
          value={newPassword}
          onChange={(value) => setForm({ newPassword: value })}
        />
        <PasswordInput
          label={dict.change_password_form.labels.confirm_password}
          placeholder={"********"}
          value={confirmPassword}
          onChange={(value) => setForm({ confirmPassword: value })}
        />
      </div>
    </AppDialog>
  );
};
