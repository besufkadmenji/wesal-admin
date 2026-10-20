import { DETAIL_CARD_SURFACE } from "@/components/app/shared/detail/DetailCard";
import { FormTitle } from "@/components/app/shared/forms/FormTitle";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { TitleBar } from "./TitleBar";
export enum FormType {
  SubscriberRequests,
  Subscribers,
  Admins,
  Notifications,
  Message,
  Clients,
  Features,
  Categories,
  Cities,
  Users,
  Faqs,
  ContactMessages,
  Banks,
  DeliveryCompanies,
  Listings,
  Providers,
}
export const AppForm = ({
  type,
  children,
  className,
  classNames,
  titleChildren,
  action,
  busy,
  onSubmit,
  onCancel,
}: {
  type: FormType;
  children: ReactNode;
  titleChildren?: ReactNode;
  className?: string;
  classNames?: {
    form?: string;
    title?: string;
  };
  onSubmit?: () => void;
  onCancel?: () => void;
  busy?: boolean;
  action: "add" | "edit" | "view";
}) => {
  return (
    <div
      className={twMerge(
        "grid auto-rows-max grid-cols-1 items-start gap-6",
        className,
      )}
    >
      <TitleBar
        type={type}
        action={action}
        busy={busy}
        onSubmit={onSubmit}
        onCancel={onCancel}
        className={classNames?.title}
      >
        {titleChildren}
      </TitleBar>
      <form
        className={twMerge("grid grid-cols-1 gap-4", classNames?.form)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {children}
      </form>
    </div>
  );
};

export const FormSection = ({
  children,
  title,
  subTitle,
  className,
  classNames,
  titleEndContent,
}: {
  children: ReactNode;
  title?: string;
  subTitle?: string;
  className?: string;
  classNames?: {
    title?: string;
  };
  titleEndContent?: ReactNode;
}) => {
  return (
    <div
      className={twMerge(
        DETAIL_CARD_SURFACE,
        "grid grid-cols-1 gap-4 p-6",
        className,
      )}
    >
      {title === "" ? (
        <></>
      ) : (
        <FormTitle
          title={title}
          subTitle={subTitle}
          className={classNames?.title}
          endContent={titleEndContent}
        />
      )}

      <div className="grid grid-cols-1 gap-2">{children}</div>
    </div>
  );
};
