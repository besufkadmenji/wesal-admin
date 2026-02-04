import { ExportModel } from "@/types/export.models";
import UserService from "@/services/user.service";
import ProviderService from "@/services/provider.service";
import ListingService from "@/services/listing.service";
import CategoryService from "@/services/category.service";
import CityService from "@/services/city.service";
import BankService from "@/services/bank.service";
import DeliveryCompanyService from "@/services/delivery.company.service";
import ContactMessageService from "@/services/contact.message.service";
import SignedContractService from "@/services/signed.contract.service";
import AdminService from "@/services/admin.service";
import { PermissionService } from "@/services/permission.service";
import { SettingService } from "@/services/setting.service";
import FaqService from "@/services/faq.service";

export const useExport = () => {
  const exportData = async (
    model: ExportModel,
    fields?: string[],
  ): Promise<Blob> => {
    switch (model) {
      case ExportModel.Users:
        return UserService.exportUsers(fields);

      case ExportModel.Providers:
        return ProviderService.exportProviders(fields);

      case ExportModel.Listings:
        return ListingService.exportListings(fields);

      case ExportModel.Categories:
        return CategoryService.exportCategories(fields);

      case ExportModel.Cities:
        return CityService.exportCities(fields);

      case ExportModel.Countries:
        return CityService.exportCountries(fields);

      case ExportModel.Banks:
        return BankService.exportBanks(fields);

      case ExportModel.DeliveryCompanies:
        return DeliveryCompanyService.exportDeliveryCompanies(fields);

      case ExportModel.ContactMessages:
        return ContactMessageService.exportContactMessages(fields);

      case ExportModel.SignedContracts:
        return SignedContractService.exportSignedContracts(fields);

      case ExportModel.Admins:
        return AdminService.exportAdmins(fields);

      case ExportModel.Permissions:
        return PermissionService.exportPermissions(fields);

      case ExportModel.AdminPermissions:
        return PermissionService.exportAdminPermissions(fields);

      case ExportModel.Settings:
        return SettingService.exportSettings(fields);

      case ExportModel.FAQs:
        return FaqService.exportFaqs(fields);

      default:
        throw new Error(`Export not implemented for model: ${model}`);
    }
  };

  const downloadBlob = (blob: Blob, filename: string) => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const exportToCSV = async (
    model: ExportModel,
    fields?: string[],
    filename?: string,
  ): Promise<void> => {
    const blob = await exportData(model, fields);
    const timestamp = new Date().toISOString().split("T")[0];
    const defaultFilename = `${model.toLowerCase().replace(/\s+/g, "-")}-export-${timestamp}.csv`;
    downloadBlob(blob, filename || defaultFilename);
  };

  return { exportData, exportToCSV, downloadBlob };
};
