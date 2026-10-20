import { useDict } from "@/hooks/useDict";
import { Trash2 } from "lucide-react";
import { ConfirmDialog } from "./dialogs/ConfirmDialog";
export enum DeleteWarningType {
  ADMIN = "ADMIN",
  SUBSCRIBER = "SUBSCRIBER",
  CLIENT = "CLIENT",
  FEATURE = "FEATURE",
  CATEGORY = "CATEGORY",
  CITY = "CITY",
  USER = "USER",
  FAQ = "FAQ",
  CONTACT_MESSAGE = "CONTACT_MESSAGE",
  BANK = "BANK",
  DELIVERY_COMPANY = "DELIVERY_COMPANY",
  LISTING = "LISTING",
  PROVIDER = "PROVIDER",
}

export const DeleteWarning = ({
  isOpen,
  onClose,
  onConfirm,
  busy,
  type,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  busy: boolean;
  type: DeleteWarningType;
}) => {
  const dict = useDict();
  const title = {
    [DeleteWarningType.ADMIN]: dict.deleteConfirmation.deleteAdmin.title,
    [DeleteWarningType.SUBSCRIBER]:
      dict.deleteConfirmation.deleteSubscriber.title,
    [DeleteWarningType.CLIENT]: dict.deleteConfirmation.deleteClient.title,
    [DeleteWarningType.FEATURE]: dict.deleteConfirmation.deleteFeature.title,
    [DeleteWarningType.CATEGORY]: dict.deleteConfirmation.deleteCategory.title,
    [DeleteWarningType.CITY]: dict.deleteConfirmation.deleteCity.title,
    [DeleteWarningType.USER]: dict.deleteConfirmation.deleteUser.title,
    [DeleteWarningType.FAQ]: dict.deleteConfirmation.deleteFaq.title,
    [DeleteWarningType.CONTACT_MESSAGE]:
      dict.deleteConfirmation.deleteContactMessage.title,
    [DeleteWarningType.BANK]: dict.deleteConfirmation.deleteBank.title,
    [DeleteWarningType.DELIVERY_COMPANY]:
      dict.deleteConfirmation.deleteDeliveryCompany.title,
    [DeleteWarningType.LISTING]: dict.deleteConfirmation.deleteListing.title,
    [DeleteWarningType.PROVIDER]: dict.deleteConfirmation.deleteProvider.title,
  };
  const message = {
    [DeleteWarningType.ADMIN]: dict.deleteConfirmation.deleteAdmin.message,
    [DeleteWarningType.SUBSCRIBER]:
      dict.deleteConfirmation.deleteSubscriber.message,
    [DeleteWarningType.CLIENT]: dict.deleteConfirmation.deleteClient.message,
    [DeleteWarningType.FEATURE]: dict.deleteConfirmation.deleteFeature.message,
    [DeleteWarningType.CATEGORY]:
      dict.deleteConfirmation.deleteCategory.message,
    [DeleteWarningType.CITY]: dict.deleteConfirmation.deleteCity.message,
    [DeleteWarningType.USER]: dict.deleteConfirmation.deleteUser.message,
    [DeleteWarningType.FAQ]: dict.deleteConfirmation.deleteFaq.message,
    [DeleteWarningType.CONTACT_MESSAGE]:
      dict.deleteConfirmation.deleteContactMessage.message,
    [DeleteWarningType.BANK]: dict.deleteConfirmation.deleteBank.message,
    [DeleteWarningType.DELIVERY_COMPANY]:
      dict.deleteConfirmation.deleteDeliveryCompany.message,
    [DeleteWarningType.LISTING]: dict.deleteConfirmation.deleteListing.message,
    [DeleteWarningType.PROVIDER]:
      dict.deleteConfirmation.deleteProvider.message,
  };

  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      busy={busy}
      autoClose={false}
      tone="danger"
      icon={Trash2}
      title={title[type]}
      description={message[type]}
      confirmLabel={dict.deleteConfirmation.confirm}
      cancelLabel={dict.deleteConfirmation.cancel}
    />
  );
};
