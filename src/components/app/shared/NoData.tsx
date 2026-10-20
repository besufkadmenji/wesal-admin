import { EmptyState } from "@/components/app/shared/states/EmptyState";
import { Inbox } from "lucide-react";
import { useDict } from "@/hooks/useDict";

export enum NoDataType {
  SubscriberRequests = "SubscriberRequests",
  Subscribers = "Subscribers",
  Admins = "Admins",
  Notifications = "Notifications",
  Messages = "Messages",
  Clients = "Clients",
  Features = "Features",
  Categories = "Categories",
  Cities = "Cities",
  Users = "Users",
  Providers = "Providers",
  Faqs = "Faqs",
  ContactMessages = "ContactMessages",
  Banks = "Banks",
  DeliveryCompanies = "DeliveryCompanies",
  Listings = "Listings",
}

export const NoData = ({ type }: { type: NoDataType }) => {
  const dict = useDict();

  const messageMap = {
    [NoDataType.SubscriberRequests]: dict.noData.subscriberRequests,
    [NoDataType.Subscribers]: dict.noData.subscribers,
    [NoDataType.Admins]: dict.noData.admins,
    [NoDataType.Notifications]: dict.noData.notifications,
    [NoDataType.Messages]: dict.noData.messages,
    [NoDataType.Clients]: dict.noData.clients,
    [NoDataType.Features]: dict.noData.features,
    [NoDataType.Categories]: dict.noData.categories,
    [NoDataType.Cities]: dict.noData.cities,
    [NoDataType.Users]: dict.noData.users,
    [NoDataType.Faqs]: dict.noData.faqs,
    [NoDataType.ContactMessages]: dict.noData.contactMessages,
    [NoDataType.Banks]: dict.noData.banks,
    [NoDataType.DeliveryCompanies]: dict.noData.deliveryCompanies,
    [NoDataType.Listings]: dict.noData.listings,
    [NoDataType.Providers]: dict.noData.providers,
  };

  return <EmptyState icon={Inbox} title={messageMap[type]} />;
};
