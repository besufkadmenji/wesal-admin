/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AdminChangePasswordInput = {
  currentPassword: string;
  newPassword: string;
};

export type AdminForgotPasswordInput = {
  email: string;
};

export type AdminLoginInput = {
  email: string;
  password: string;
};

export type AdminPaginationInput = {
  /** Number of items per page */
  limit?: number;
  /** Page number (1-based) */
  page?: number;
  permissionType?: AdminPermissionType | null | undefined;
  search?: string | null | undefined;
  /** Sort field name */
  sortBy?: AdminSortField | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
  status?: AdminStatus | null | undefined;
};

/** Admin permission types */
export enum AdminPermissionType {
  Administrator = 'ADMINISTRATOR',
  Custom = 'CUSTOM',
  Moderator = 'MODERATOR',
  SuperAdmin = 'SUPER_ADMIN',
  Viewer = 'VIEWER'
}

export type AdminResetPasswordInput = {
  newPassword: string;
  resetToken: string;
};

export type AdminResolveContractInput = {
  contractId: string;
  reason: string;
  resolution: ContractResolution;
};

/** Available fields to sort admins by */
export enum AdminSortField {
  CreatedAt = 'createdAt',
  Email = 'email',
  FullName = 'fullName',
  Id = 'id',
  PermissionType = 'permissionType',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

/** Admin account status */
export enum AdminStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  PendingApproval = 'PENDING_APPROVAL',
  Suspended = 'SUSPENDED'
}

export type AdminTerminateContractInput = {
  providerId: string;
  terminationReason: string;
};

/** Admin user types */
export enum AdminUserType {
  Organization = 'ORGANIZATION',
  Platform = 'PLATFORM'
}

export type BankPaginationInput = {
  /** Number of items per page */
  limit?: number;
  /** Page number (1-based) */
  page?: number;
  search?: string | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
  status?: BankStatus | null | undefined;
};

/** Status of the bank */
export enum BankStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type BulkAssignPermissionsInput = {
  adminId: string;
  permissionIds: Array<string>;
};

export type BulkUpdateFaqOrderInput = {
  items: Array<UpdateFaqOrderInput>;
};

export type CategoryPaginationInput = {
  /** Number of items per page */
  limit?: number;
  /** Page number (1-based) */
  page?: number;
  search?: string | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
  status?: CategoryStatus | null | undefined;
};

/** Category publication status */
export enum CategoryStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type CityPaginationInput = {
  /** Number of items per page */
  limit?: number;
  /** Page number (1-based) */
  page?: number;
  search?: string | null | undefined;
  /** Sort field name */
  sortBy?: CitySortField | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
  status?: CityStatus | null | undefined;
};

/** Available fields to sort cities by */
export enum CitySortField {
  CountryId = 'countryId',
  CreatedAt = 'createdAt',
  Id = 'id',
  NameAr = 'nameAr',
  NameEn = 'nameEn',
  UpdatedAt = 'updatedAt'
}

/** City activation status */
export enum CityStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum ComplaintMessageAuthorType {
  Admin = 'ADMIN',
  Reporter = 'REPORTER'
}

export type ComplaintPaginationInput = {
  conversationId?: string | null | undefined;
  from?: string | null | undefined;
  /** Number of items per page */
  limit?: number;
  /** Page number (1-based) */
  page?: number;
  reporterType?: ComplaintReporterType | null | undefined;
  reviewerId?: string | null | undefined;
  search?: string | null | undefined;
  sortBy?: ComplaintSortField | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
  status?: ComplaintStatus | null | undefined;
  to?: string | null | undefined;
};

export enum ComplaintReporterType {
  Provider = 'PROVIDER',
  User = 'USER'
}

export enum ComplaintSortField {
  CreatedAt = 'createdAt',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

/** Complaint status */
export enum ComplaintStatus {
  Closed = 'CLOSED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Resolved = 'RESOLVED',
  UnderReview = 'UNDER_REVIEW'
}

export type ContactMessagePaginationInput = {
  /** Filter messages from this date */
  dateFrom?: string | null | undefined;
  /** Filter messages until this date */
  dateTo?: string | null | undefined;
  /** Number of items per page */
  limit?: number;
  messageType?: MessageType | null | undefined;
  /** Page number (1-based) */
  page?: number;
  /** Search across name, email, phone, and message content */
  search?: string | null | undefined;
  senderType?: SenderType | null | undefined;
  sortBy?: ContactMessageSortField | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
  status?: ContactMessageStatus | null | undefined;
};

/** Fields to sort contact messages by */
export enum ContactMessageSortField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Status = 'status'
}

/** Status of a contact message */
export enum ContactMessageStatus {
  Read = 'READ',
  Replied = 'REPLIED',
  Sent = 'SENT'
}

export enum ContractActorType {
  Admin = 'ADMIN',
  Provider = 'PROVIDER',
  System = 'SYSTEM',
  User = 'USER'
}

export enum ContractAuditAction {
  CancellationRequested = 'CANCELLATION_REQUESTED',
  ContractAccepted = 'CONTRACT_ACCEPTED',
  ContractCreated = 'CONTRACT_CREATED',
  ContractRejected = 'CONTRACT_REJECTED',
  ContractResent = 'CONTRACT_RESENT',
  CustomerCompleted = 'CUSTOMER_COMPLETED',
  DeliveryRefused = 'DELIVERY_REFUSED',
  DeliveryStarted = 'DELIVERY_STARTED',
  DisputeRefunded = 'DISPUTE_REFUNDED',
  DisputeReleased = 'DISPUTE_RELEASED',
  PaymentCompleted = 'PAYMENT_COMPLETED',
  ProviderCompleted = 'PROVIDER_COMPLETED',
  TimeoutCancelled = 'TIMEOUT_CANCELLED',
  TimeoutCompleted = 'TIMEOUT_COMPLETED'
}

export type ContractPaginationInput = {
  categoryId?: string | null | undefined;
  clientId?: string | null | undefined;
  conversationId?: string | null | undefined;
  from?: string | null | undefined;
  /** Number of items per page */
  limit?: number;
  /** Page number (1-based) */
  page?: number;
  providerId?: string | null | undefined;
  search?: string | null | undefined;
  /** Sort field name */
  sortBy?: ContractSortField | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
  status?: ContractStatus | null | undefined;
  to?: string | null | undefined;
};

export enum ContractResolution {
  Cancel = 'CANCEL',
  Complete = 'COMPLETE',
  RefundCustomer = 'REFUND_CUSTOMER',
  ReleaseProvider = 'RELEASE_PROVIDER'
}

/** Append-only mock allocation of a settled contract payment */
export enum ContractSettlementType {
  CustomerRefund = 'CUSTOMER_REFUND',
  Hold = 'HOLD',
  PlatformCommission = 'PLATFORM_COMMISSION',
  ProviderRelease = 'PROVIDER_RELEASE',
  Vat = 'VAT'
}

/** Contract acceptance or completion signature purpose */
export enum ContractSignatureType {
  CustomerAcceptance = 'CUSTOMER_ACCEPTANCE',
  CustomerCompletion = 'CUSTOMER_COMPLETION',
  ProviderAcceptance = 'PROVIDER_ACCEPTANCE',
  ProviderCompletion = 'PROVIDER_COMPLETION'
}

/** Entity type of the contract signer */
export enum ContractSignerType {
  Provider = 'PROVIDER',
  User = 'USER'
}

/** Available fields to sort contracts by */
export enum ContractSortField {
  AgreedPrice = 'agreedPrice',
  CreatedAt = 'createdAt',
  DownPayment = 'downPayment',
  Id = 'id',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

/** Contract status */
export enum ContractStatus {
  Accepted = 'ACCEPTED',
  AwaitingCustomerConfirmation = 'AWAITING_CUSTOMER_CONFIRMATION',
  CancellationRequested = 'CANCELLATION_REQUESTED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  DeliveryInProgress = 'DELIVERY_IN_PROGRESS',
  Disputed = 'DISPUTED',
  Draft = 'DRAFT',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type ConversationPaginationInput = {
  from?: string | null | undefined;
  /** Number of items per page */
  limit?: number;
  listingId?: string | null | undefined;
  /** Page number (1-based) */
  page?: number;
  providerId?: string | null | undefined;
  search?: string | null | undefined;
  /** Sort field name */
  sortBy?: ConversationSortField | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
  status?: ConversationStatus | null | undefined;
  to?: string | null | undefined;
  userId?: string | null | undefined;
};

/** Whether a message sender is a User, Provider, or the platform */
export enum ConversationSenderType {
  Provider = 'PROVIDER',
  System = 'SYSTEM',
  User = 'USER'
}

/** Available fields to sort conversations by */
export enum ConversationSortField {
  CreatedAt = 'createdAt',
  Id = 'id',
  LastActivityAt = 'lastActivityAt',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

/** Conversation lifecycle status */
export enum ConversationStatus {
  Active = 'ACTIVE',
  Closed = 'CLOSED'
}

export type CountryPaginationInput = {
  /** Number of items per page */
  limit?: number;
  /** Page number (1-based) */
  page?: number;
  /** Sort field name */
  sortBy?: CountrySortField | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
};

/** Available fields to sort countries by */
export enum CountrySortField {
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type CreateAdminInput = {
  avatarFilename?: string | null | undefined;
  email: string;
  fullName: string;
  organizationName: string;
  password: string;
  permissionType: AdminPermissionType;
  phoneNumber: string;
  roleName: string;
  status?: AdminStatus;
  userType: AdminUserType;
};

export type CreateBankInput = {
  nameAr: string;
  nameEn: string;
  status: BankStatus;
};

export type CreateCategoryInput = {
  commissionEnabled?: boolean | null | undefined;
  commissionPercent?: number | null | undefined;
  contractDocumentEnabled?: boolean | null | undefined;
  contractDocumentText?: string | null | undefined;
  customerConversationFee?: number | null | undefined;
  customerConversationFeeEnabled?: boolean | null | undefined;
  depositEnabled?: boolean | null | undefined;
  depositPercent?: number | null | undefined;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  maxCompletionDays?: number | null | undefined;
  maxCompletionDaysEnabled?: boolean | null | undefined;
  maxTerminationDays?: number | null | undefined;
  maxTerminationDaysEnabled?: boolean | null | undefined;
  minCommissionAmount?: number | null | undefined;
  minCommissionEnabled?: boolean | null | undefined;
  nameAr: string;
  nameEn: string;
  providerConversationFee?: number | null | undefined;
  providerConversationFeeEnabled?: boolean | null | undefined;
  refundPolicyAr?: string | null | undefined;
  refundPolicyEn?: string | null | undefined;
  refundPolicyEnabled?: boolean | null | undefined;
  rulesAr?: string | null | undefined;
  rulesEn?: string | null | undefined;
  undertakingEnabled?: boolean | null | undefined;
  undertakingTextAr?: string | null | undefined;
  undertakingTextEn?: string | null | undefined;
};

export type CreateCityInput = {
  countryId: string;
  geoBoundary?: unknown;
  nameAr: string;
  nameEn: string;
};

export type CreateDeliveryCompanyInput = {
  nameAr: string;
  nameEn: string;
  status: DeliveryCompanyStatus;
};

export type CreateFaqInput = {
  answerAr: string;
  answerEn: string;
  isActive?: boolean | null | undefined;
  order?: number | null | undefined;
  questionAr: string;
  questionEn: string;
};

export type DeactivateAdminInput = {
  reason?: string | null | undefined;
};

export type DeactivateBankInput = {
  reason: string;
};

export type DeactivateDeliveryCompanyInput = {
  reason: string;
};

export type DeactivateUserInput = {
  reason?: string | null | undefined;
};

export type DeleteProviderInput = {
  reason?: string | null | undefined;
};

export type DeleteUserInput = {
  reason?: string | null | undefined;
};

export type DeliveryCompanyPaginationInput = {
  /** Number of items per page */
  limit?: number;
  /** Page number (1-based) */
  page?: number;
  search?: string | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
  status?: DeliveryCompanyStatus | null | undefined;
};

/** Status of the delivery company */
export enum DeliveryCompanyStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type FeeReportInput = {
  categoryId?: string | null | undefined;
  conversationId?: string | null | undefined;
  customerId?: string | null | undefined;
  from?: string | null | undefined;
  /** Number of items per page */
  limit?: number;
  listingId?: string | null | undefined;
  /** Page number (1-based) */
  page?: number;
  providerId?: string | null | undefined;
  search?: string | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
  status?: string | null | undefined;
  to?: string | null | undefined;
};

export type ListingPaginationInput = {
  categoryId?: string | null | undefined;
  cityId?: string | null | undefined;
  /** Number of items per page */
  limit?: number;
  maxPrice?: number | null | undefined;
  minPrice?: number | null | undefined;
  /** Page number (1-based) */
  page?: number;
  search?: string | null | undefined;
  /** Sort field name */
  sortBy?: ListingSortField | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
  status?: ListingStatus | null | undefined;
  type?: ListingType | null | undefined;
};

/** Available fields to sort listings by */
export enum ListingSortField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Price = 'price',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

/** Listing publication status */
export enum ListingStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  PendingPayment = 'PENDING_PAYMENT'
}

/** Listing type (free or featured) */
export enum ListingType {
  Featured = 'FEATURED',
  Free = 'FREE'
}

/** Media file type */
export enum MediaType {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

/** User text or a typed system event in a conversation */
export enum MessageKind {
  ChatFeePaid = 'CHAT_FEE_PAID',
  ContractAccepted = 'CONTRACT_ACCEPTED',
  ContractCancellationRequested = 'CONTRACT_CANCELLATION_REQUESTED',
  ContractCancelled = 'CONTRACT_CANCELLED',
  ContractCompleted = 'CONTRACT_COMPLETED',
  ContractCreated = 'CONTRACT_CREATED',
  ContractDeliveryStarted = 'CONTRACT_DELIVERY_STARTED',
  ContractDisputed = 'CONTRACT_DISPUTED',
  ContractPaid = 'CONTRACT_PAID',
  ContractProviderCompleted = 'CONTRACT_PROVIDER_COMPLETED',
  ContractRejected = 'CONTRACT_REJECTED',
  ContractResent = 'CONTRACT_RESENT',
  Text = 'TEXT'
}

/** Type of contact message */
export enum MessageType {
  Complaint = 'COMPLAINT',
  Inquiry = 'INQUIRY',
  Other = 'OTHER',
  Request = 'REQUEST',
  Suggestion = 'SUGGESTION'
}

/** Permission platform types */
export enum PermissionPlatform {
  Admin = 'ADMIN',
  Global = 'GLOBAL'
}

export type ProviderPaginationInput = {
  limit?: number | null | undefined;
  page?: number | null | undefined;
  search?: string | null | undefined;
  sortBy?: string | null | undefined;
  sortOrder?: string | null | undefined;
  status?: ProviderStatus | null | undefined;
};

/** Provider status enumeration */
export enum ProviderStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE',
  PendingApproval = 'PENDING_APPROVAL',
  Rejected = 'REJECTED',
  Suspended = 'SUSPENDED'
}

export type RatingPaginationInput = {
  /** Number of items per page */
  limit?: number;
  listingId?: string | null | undefined;
  maxRating?: number | null | undefined;
  minRating?: number | null | undefined;
  /** Page number (1-based) */
  page?: number;
  /** Sort field name */
  sortBy?: RatingSortField | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
  userId?: string | null | undefined;
};

/** Available fields to sort ratings by */
export enum RatingSortField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Rating = 'rating',
  UpdatedAt = 'updatedAt'
}

/** Type of contact message sender */
export enum SenderType {
  Guest = 'GUEST',
  Provider = 'PROVIDER',
  User = 'USER'
}

export type SettingInput = {
  aboutAr?: string | null | undefined;
  aboutEn?: string | null | undefined;
  completionConfirmationGraceHours?: number | null | undefined;
  contractAcceptanceWindowDays?: number | null | undefined;
  contractAcceptanceWindowEnabled?: boolean | null | undefined;
  email?: string | null | undefined;
  phones?: Array<string> | null | undefined;
  platformManagerName?: string | null | undefined;
  platformManagerSignature?: string | null | undefined;
  premiumAdDurationDays?: number | null | undefined;
  premiumAdEnabled?: boolean | null | undefined;
  premiumAdFee?: number | null | undefined;
  privacyPolicyAr?: string | null | undefined;
  privacyPolicyEn?: string | null | undefined;
  rulesAr?: string | null | undefined;
  rulesEn?: string | null | undefined;
  socialMediaLinks?: Array<SocialMediaLinkInput> | null | undefined;
  termsAr?: string | null | undefined;
  termsEn?: string | null | undefined;
  vatEnabled?: boolean | null | undefined;
  vatRate?: number | null | undefined;
  whatsappNumber?: string | null | undefined;
};

export type SignedContractPaginationInput = {
  /** Number of items per page */
  limit?: number;
  /** Page number (1-based) */
  page?: number;
  providerId?: string | null | undefined;
  search?: string | null | undefined;
  /** Sort field name */
  sortBy?: SignedContractSortField | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
};

/** Available fields to sort signed contracts by */
export enum SignedContractSortField {
  CreatedAt = 'createdAt',
  Id = 'id',
  ProviderId = 'providerId',
  UpdatedAt = 'updatedAt'
}

/** Provider account status */
export enum SignedContractStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  TerminatedByAdmin = 'TERMINATED_BY_ADMIN',
  TerminatedByProvider = 'TERMINATED_BY_PROVIDER'
}

export type SocialMediaLinkInput = {
  link: string;
  name: SocialMediaPlatform;
};

export enum SocialMediaPlatform {
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  Linkedin = 'LINKEDIN',
  Tiktok = 'TIKTOK',
  Twitter = 'TWITTER'
}

/** Sort order direction */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type UpdateAdminInput = {
  avatarFilename?: string | null | undefined;
  email?: string | null | undefined;
  fullName?: string | null | undefined;
  organizationName?: string | null | undefined;
  permissionType?: AdminPermissionType | null | undefined;
  phoneNumber: string;
  roleName?: string | null | undefined;
  status?: AdminStatus | null | undefined;
  userType?: AdminUserType | null | undefined;
};

export type UpdateBankInput = {
  id: string;
  nameAr?: string | null | undefined;
  nameEn?: string | null | undefined;
  status?: BankStatus | null | undefined;
};

export type UpdateCategoryInput = {
  commissionEnabled?: boolean | null | undefined;
  commissionPercent?: number | null | undefined;
  contractDocumentEnabled?: boolean | null | undefined;
  contractDocumentText?: string | null | undefined;
  customerConversationFee?: number | null | undefined;
  customerConversationFeeEnabled?: boolean | null | undefined;
  depositEnabled?: boolean | null | undefined;
  depositPercent?: number | null | undefined;
  descriptionAr?: string | null | undefined;
  descriptionEn?: string | null | undefined;
  id: string;
  image?: string | null | undefined;
  maxCompletionDays?: number | null | undefined;
  maxCompletionDaysEnabled?: boolean | null | undefined;
  maxTerminationDays?: number | null | undefined;
  maxTerminationDaysEnabled?: boolean | null | undefined;
  minCommissionAmount?: number | null | undefined;
  minCommissionEnabled?: boolean | null | undefined;
  nameAr?: string | null | undefined;
  nameEn?: string | null | undefined;
  providerConversationFee?: number | null | undefined;
  providerConversationFeeEnabled?: boolean | null | undefined;
  refundPolicyAr?: string | null | undefined;
  refundPolicyEn?: string | null | undefined;
  refundPolicyEnabled?: boolean | null | undefined;
  rulesAr?: string | null | undefined;
  rulesEn?: string | null | undefined;
  undertakingEnabled?: boolean | null | undefined;
  undertakingTextAr?: string | null | undefined;
  undertakingTextEn?: string | null | undefined;
};

export type UpdateCityInput = {
  countryId?: string | null | undefined;
  geoBoundary?: unknown;
  id: string;
  nameAr?: string | null | undefined;
  nameEn?: string | null | undefined;
};

export type UpdateDeliveryCompanyInput = {
  id: string;
  nameAr?: string | null | undefined;
  nameEn?: string | null | undefined;
  status?: DeliveryCompanyStatus | null | undefined;
};

export type UpdateFaqInput = {
  answerAr?: string | null | undefined;
  answerEn?: string | null | undefined;
  id: string;
  isActive?: boolean | null | undefined;
  order?: number | null | undefined;
  questionAr?: string | null | undefined;
  questionEn?: string | null | undefined;
};

export type UpdateFaqOrderInput = {
  id: string;
  order: number;
};

export type UserPaginationInput = {
  /** Number of items per page */
  limit?: number;
  /** Page number (1-based) */
  page?: number;
  search?: string | null | undefined;
  /** Sort field name */
  sortBy?: UserSortField | null | undefined;
  /** Sort order: ASC or DESC */
  sortOrder?: SortOrder | null | undefined;
  status?: UserStatus | null | undefined;
};

/** Available fields to sort users by */
export enum UserSortField {
  CreatedAt = 'createdAt',
  Email = 'email',
  FullName = 'fullName',
  Id = 'id',
  IsActive = 'isActive',
  Phone = 'phone',
  UpdatedAt = 'updatedAt'
}

/** User account status */
export enum UserStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE',
  PendingApproval = 'PENDING_APPROVAL',
  Suspended = 'SUSPENDED'
}

export type VerifyAdminPasswordResetOtpInput = {
  code: string;
  email: string;
};

export type ActivateAdminMutationVariables = Exact<{
  activateAdminId: string;
}>;


export type ActivateAdminMutation = { activateAdmin: { avatarFilename: string | null, createdAt: string, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, phoneNumber: string, roleName: string, status: AdminStatus, updatedAt: string, userType: AdminUserType } };

export type AdminQueryVariables = Exact<{
  adminId: string;
}>;


export type AdminQuery = { admin: { createdAt: string, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, roleName: string, status: AdminStatus, updatedAt: string, userType: AdminUserType, phoneNumber: string } };

export type AdminsQueryVariables = Exact<{
  paginationInput?: AdminPaginationInput | null | undefined;
}>;


export type AdminsQuery = { admins: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ createdAt: string, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, roleName: string, status: AdminStatus, updatedAt: string, userType: AdminUserType, phoneNumber: string }> } };

export type CreateAdminMutationVariables = Exact<{
  createAdminInput: CreateAdminInput;
}>;


export type CreateAdminMutation = { createAdmin: { createdAt: string, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, roleName: string, status: AdminStatus, updatedAt: string, userType: AdminUserType, phoneNumber: string } };

export type DeactivateAdminMutationVariables = Exact<{
  deactivateAdminId: string;
  input: DeactivateAdminInput;
}>;


export type DeactivateAdminMutation = { deactivateAdmin: { avatarFilename: string | null, createdAt: string, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, phoneNumber: string, roleName: string, status: AdminStatus, updatedAt: string, userType: AdminUserType } };

export type MeAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type MeAdminQuery = { meAdmin: { id: string, createdAt: string, email: string, fullName: string, organizationName: string, permissionType: AdminPermissionType, roleName: string, status: AdminStatus, updatedAt: string, userType: AdminUserType, phoneNumber: string, avatarFilename: string | null, adminPermissions: Array<{ id: string, adminId: string, permissionId: string, publicId: number | null, updatedAt: string, createdAt: string, permission: { module: string, action: string, createdAt: string, description: string, id: string, name: string, nameAr: string, permissionPlatform: PermissionPlatform, resource: string, updatedAt: string } }> | null } };

export type RemoveAdminMutationVariables = Exact<{
  removeAdminId: string;
}>;


export type RemoveAdminMutation = { removeAdmin: boolean };

export type UpdateAdminMutationVariables = Exact<{
  updateAdminId: string;
  updateAdminInput: UpdateAdminInput;
}>;


export type UpdateAdminMutation = { updateAdmin: { createdAt: string, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, roleName: string, status: AdminStatus, updatedAt: string, userType: AdminUserType, phoneNumber: string } };

export type AdminChangePasswordMutationVariables = Exact<{
  input: AdminChangePasswordInput;
}>;


export type AdminChangePasswordMutation = { adminChangePassword: boolean };

export type AdminForgotPasswordMutationVariables = Exact<{
  input: AdminForgotPasswordInput;
}>;


export type AdminForgotPasswordMutation = { adminForgotPassword: boolean };

export type AdminLoginMutationVariables = Exact<{
  input: AdminLoginInput;
}>;


export type AdminLoginMutation = { adminLogin: { accessToken: string } };

export type AdminResetPasswordMutationVariables = Exact<{
  input: AdminResetPasswordInput;
}>;


export type AdminResetPasswordMutation = { adminResetPassword: boolean };

export type AdminVerifyPasswordResetOtpMutationVariables = Exact<{
  input: VerifyAdminPasswordResetOtpInput;
}>;


export type AdminVerifyPasswordResetOtpMutation = { adminVerifyPasswordResetOtp: { resetToken: string } };

export type ActivateBankMutationVariables = Exact<{
  activateBankId: string;
}>;


export type ActivateBankMutation = { activateBank: { createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: string } };

export type BankQueryVariables = Exact<{
  bankId: string;
}>;


export type BankQuery = { bank: { createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: string } };

export type BanksQueryVariables = Exact<{
  input?: BankPaginationInput | null | undefined;
}>;


export type BanksQuery = { banks: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: string }> } };

export type CreateBankMutationVariables = Exact<{
  input: CreateBankInput;
}>;


export type CreateBankMutation = { createBank: { createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: string } };

export type DeactivateBankMutationVariables = Exact<{
  deactivateBankId: string;
  input: DeactivateBankInput;
}>;


export type DeactivateBankMutation = { deactivateBank: { createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: string } };

export type RemoveBankMutationVariables = Exact<{
  removeBankId: string;
}>;


export type RemoveBankMutation = { removeBank: { createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: string } };

export type UpdateBankMutationVariables = Exact<{
  input: UpdateBankInput;
}>;


export type UpdateBankMutation = { updateBank: { createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: string } };

export type ActivateCategoryMutationVariables = Exact<{
  activateCategoryId: string;
}>;


export type ActivateCategoryMutation = { activateCategory: { id: string, createdAt: string, descriptionAr: string, descriptionEn: string, nameAr: string, nameEn: string, image: string, status: CategoryStatus, updatedAt: string, rulesEn: string, rulesAr: string } };

export type CategoriesQueryVariables = Exact<{
  input?: CategoryPaginationInput | null | undefined;
}>;


export type CategoriesQuery = { categories: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ publicId: number | null, createdAt: string, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, status: CategoryStatus, updatedAt: string, rulesEn: string, rulesAr: string, commissionPercent: number | null, commissionEnabled: boolean, minCommissionAmount: number | null, minCommissionEnabled: boolean, depositPercent: number | null, depositEnabled: boolean, customerConversationFee: number | null, customerConversationFeeEnabled: boolean, providerConversationFee: number | null, providerConversationFeeEnabled: boolean, maxCompletionDays: number | null, maxCompletionDaysEnabled: boolean, maxTerminationDays: number | null, maxTerminationDaysEnabled: boolean, contractDocumentEnabled: boolean, contractDocumentText: string, undertakingTextAr: string, undertakingTextEn: string, undertakingEnabled: boolean, refundPolicyAr: string, refundPolicyEn: string, refundPolicyEnabled: boolean }> } };

export type CategoryQueryVariables = Exact<{
  categoryId: string;
}>;


export type CategoryQuery = { category: { createdAt: string, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, rulesEn: string, rulesAr: string, status: CategoryStatus, image: string, updatedAt: string, publicId: number | null, commissionPercent: number | null, commissionEnabled: boolean, minCommissionAmount: number | null, minCommissionEnabled: boolean, depositPercent: number | null, depositEnabled: boolean, customerConversationFee: number | null, customerConversationFeeEnabled: boolean, providerConversationFee: number | null, providerConversationFeeEnabled: boolean, maxCompletionDays: number | null, maxCompletionDaysEnabled: boolean, maxTerminationDays: number | null, maxTerminationDaysEnabled: boolean, contractDocumentEnabled: boolean, contractDocumentText: string, undertakingTextAr: string, undertakingTextEn: string, undertakingEnabled: boolean, refundPolicyAr: string, refundPolicyEn: string, refundPolicyEnabled: boolean } };

export type CreateCategoryMutationVariables = Exact<{
  input: CreateCategoryInput;
}>;


export type CreateCategoryMutation = { createCategory: { createdAt: string, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: string, rulesEn: string, rulesAr: string } };

export type DeactivateCategoryMutationVariables = Exact<{
  deactivateCategoryId: string;
}>;


export type DeactivateCategoryMutation = { deactivateCategory: { id: string, createdAt: string, descriptionAr: string, descriptionEn: string, nameAr: string, nameEn: string, image: string, status: CategoryStatus, updatedAt: string, rulesEn: string, rulesAr: string } };

export type RemoveCategoryMutationVariables = Exact<{
  removeCategoryId: string;
}>;


export type RemoveCategoryMutation = { removeCategory: { id: string, createdAt: string, descriptionAr: string, descriptionEn: string, nameAr: string, nameEn: string, image: string, updatedAt: string, rulesEn: string, rulesAr: string } };

export type UpdateCategoryMutationVariables = Exact<{
  input: UpdateCategoryInput;
}>;


export type UpdateCategoryMutation = { updateCategory: { createdAt: string, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: string, rulesEn: string, rulesAr: string } };

export type ActivateCityMutationVariables = Exact<{
  activateCityId: string;
}>;


export type ActivateCityMutation = { activateCity: { id: string, nameAr: string, nameEn: string, status: CityStatus, countryId: string, createdAt: string, updatedAt: string } };

export type CitiesQueryVariables = Exact<{
  pagination?: CityPaginationInput | null | undefined;
}>;


export type CitiesQuery = { cities: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, status: CityStatus, updatedAt: string, country: { code: string, createdAt: string, dialCode: string | null, id: string, nameAr: string, nameEn: string, updatedAt: string } | null }> } };

export type CityQueryVariables = Exact<{
  cityId: string;
}>;


export type CityQuery = { city: { id: string, nameAr: string, nameEn: string, status: CityStatus, updatedAt: string, createdAt: string, countryId: string, geoBoundary: unknown, country: { code: string, createdAt: string, dialCode: string | null, id: string, nameAr: string, nameEn: string, updatedAt: string } | null } };

export type CountriesQueryVariables = Exact<{
  pagination?: CountryPaginationInput | null | undefined;
}>;


export type CountriesQuery = { countries: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ code: string, createdAt: string, dialCode: string | null, id: string, nameAr: string, nameEn: string, updatedAt: string }> } };

export type CreateCityMutationVariables = Exact<{
  input: CreateCityInput;
}>;


export type CreateCityMutation = { createCity: { id: string, countryId: string, createdAt: string, nameAr: string, nameEn: string, updatedAt: string, geoBoundary: unknown, country: { code: string, createdAt: string, dialCode: string | null, id: string, nameAr: string, nameEn: string, updatedAt: string } | null } };

export type DeactivateCityMutationVariables = Exact<{
  deactivateCityId: string;
}>;


export type DeactivateCityMutation = { deactivateCity: { id: string, nameAr: string, nameEn: string, status: CityStatus, countryId: string, createdAt: string, updatedAt: string } };

export type RemoveCityMutationVariables = Exact<{
  removeCityId: string;
}>;


export type RemoveCityMutation = { removeCity: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, updatedAt: string, country: { code: string, createdAt: string, dialCode: string | null, id: string, nameAr: string, nameEn: string, updatedAt: string } | null } };

export type UpdateCityMutationVariables = Exact<{
  input: UpdateCityInput;
}>;


export type UpdateCityMutation = { updateCity: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, updatedAt: string, geoBoundary: unknown, country: { code: string, createdAt: string, dialCode: string | null, id: string, nameAr: string, nameEn: string, updatedAt: string } | null } };

export type AdminLifecycleComplaintQueryVariables = Exact<{
  id: string;
}>;


export type AdminLifecycleComplaintQuery = { adminComplaint: { id: string, publicId: number | null, status: ComplaintStatus, reporterType: ComplaintReporterType, title: string, description: string, attachments: unknown, createdAt: string, reviewedAt: string | null, conversation: { id: string, publicId: number | null, user: { name: string | null, phone: string }, provider: { commercialName: string | null, phone: string } }, contract: { id: string, publicId: number | null } | null, listing: { name: string }, reviewer: { fullName: string } | null, messages: Array<{ id: string, authorType: ComplaintMessageAuthorType, content: string, createdAt: string }> } };

export type AdminLifecycleComplaintsQueryVariables = Exact<{
  input?: ComplaintPaginationInput | null | undefined;
}>;


export type AdminLifecycleComplaintsQuery = { adminComplaints: { items: Array<{ id: string, publicId: number | null, title: string, description: string, reporterType: ComplaintReporterType, status: ComplaintStatus, createdAt: string, conversation: { publicId: number | null }, listing: { name: string }, reviewer: { fullName: string } | null }>, meta: { total: number, page: number, limit: number, totalPages: number } } };

export type AdminLifecycleReplyComplaintMutationVariables = Exact<{
  id: string;
  content: string;
}>;


export type AdminLifecycleReplyComplaintMutation = { adminReplyToComplaint: { id: string } };

export type AdminLifecycleStatusComplaintMutationVariables = Exact<{
  id: string;
  status: ComplaintStatus;
}>;


export type AdminLifecycleStatusComplaintMutation = { adminSetComplaintStatus: { id: string, status: ComplaintStatus } };

export type ContactMessageQueryVariables = Exact<{
  contactMessageId: string;
}>;


export type ContactMessageQuery = { contactMessage: { attachmentFilename: string | null, createdAt: string, dialCode: string | null, email: string, id: string, messageContent: string, messageType: MessageType, name: string, phone: string, updatedAt: string, reply: string, publicId: number | null, senderId: string | null, senderType: SenderType, status: ContactMessageStatus } };

export type ContactMessagesQueryVariables = Exact<{
  paginationInput?: ContactMessagePaginationInput | null | undefined;
}>;


export type ContactMessagesQuery = { contactMessages: { items: Array<{ attachmentFilename: string | null, createdAt: string, dialCode: string | null, email: string, id: string, messageContent: string, messageType: MessageType, name: string, phone: string, updatedAt: string, reply: string, publicId: number | null, senderId: string | null, senderType: SenderType, status: ContactMessageStatus }>, meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number } } };

export type MarkAsReadMutationVariables = Exact<{
  markAsReadId: string;
}>;


export type MarkAsReadMutation = { markAsRead: { attachmentFilename: string | null, createdAt: string, dialCode: string | null, email: string, id: string, messageContent: string, messageType: MessageType, name: string, phone: string, updatedAt: string, reply: string, publicId: number | null, senderId: string | null, senderType: SenderType, status: ContactMessageStatus } };

export type RemoveContactMessageMutationVariables = Exact<{
  removeContactMessageId: string;
}>;


export type RemoveContactMessageMutation = { removeContactMessage: boolean };

export type ReplyToContactMessageMutationVariables = Exact<{
  replyToContactMessageId: string;
  message: string;
}>;


export type ReplyToContactMessageMutation = { replyToContactMessage: { attachmentFilename: string | null, createdAt: string, dialCode: string | null, email: string, id: string, messageContent: string, messageType: MessageType, name: string, phone: string, updatedAt: string, reply: string, publicId: number | null, senderId: string | null, senderType: SenderType, status: ContactMessageStatus } };

export type AdminLifecycleContractQueryVariables = Exact<{
  id: string;
}>;


export type AdminLifecycleContractQuery = { adminContract: { id: string, publicId: number | null, version: number, status: ContractStatus, agreedPrice: number, depositPercent: number, downPayment: number, commissionPercent: number, commissionAmount: number, vatRate: number, vatAmount: number, totalPayable: number, providerNetAmount: number, customerAddress: string, providerAddress: string | null, deliveryCompanyNameAr: string | null, deliveryCompanyNameEn: string | null, deliveryEstimateDays: number | null, confirmationDeadlineAt: string | null, cancellationReason: string | null, disputeReason: string | null, contractDocumentText: string, undertakingTextAr: string, undertakingTextEn: string, refundPolicyAr: string, refundPolicyEn: string, createdAt: string, acceptedAt: string | null, paidAt: string | null, providerCompletedAt: string | null, deliveryStartedAt: string | null, completedAt: string | null, cancelledAt: string | null, client: { name: string | null, phone: string }, provider: { commercialName: string | null, phone: string }, conversation: { id: string, publicId: number | null, listing: { id: string, name: string } }, signatures: Array<{ id: string, signerType: ContractSignerType, signatureType: ContractSignatureType, signatureData: string, signedAt: string }>, settlements: Array<{ id: string, type: ContractSettlementType, amount: number, reason: string | null, createdAt: string }>, audits: Array<{ id: string, actorType: ContractActorType, action: ContractAuditAction, previousStatus: ContractStatus, newStatus: ContractStatus, reason: string | null, createdAt: string }>, document: { id: string, version: number, sha256: string, createdAt: string } | null } };

export type AdminLifecycleContractsQueryVariables = Exact<{
  input?: ContractPaginationInput | null | undefined;
}>;


export type AdminLifecycleContractsQuery = { adminContracts: { items: Array<{ id: string, publicId: number | null, status: ContractStatus, version: number, totalPayable: number, createdAt: string, client: { name: string | null, phone: string }, provider: { commercialName: string | null, phone: string }, conversation: { listing: { name: string } } }>, meta: { total: number, page: number, limit: number, totalPages: number } } };

export type AdminLifecycleResolveContractMutationVariables = Exact<{
  input: AdminResolveContractInput;
}>;


export type AdminLifecycleResolveContractMutation = { adminResolveContract: { id: string, status: ContractStatus } };

export type AdminLifecycleConversationQueryVariables = Exact<{
  id: string;
}>;


export type AdminLifecycleConversationQuery = { adminConversation: { id: string, publicId: number | null, status: ConversationStatus, feeCycle: number, createdAt: string, closedAt: string | null, customerFeePaidAt: string | null, providerFeePaidAt: string | null, user: { name: string | null, phone: string }, provider: { commercialName: string | null, phone: string }, listing: { id: string, name: string }, messages: Array<{ id: string, senderType: ConversationSenderType, content: string, kind: MessageKind, createdAt: string }> | null }, adminContracts: { items: Array<{ id: string, publicId: number | null, status: ContractStatus }> }, adminComplaints: { items: Array<{ id: string, publicId: number | null, status: ComplaintStatus }> } };

export type AdminLifecycleConversationsQueryVariables = Exact<{
  input?: ConversationPaginationInput | null | undefined;
}>;


export type AdminLifecycleConversationsQuery = { adminConversations: { items: Array<{ id: string, publicId: number | null, status: ConversationStatus, feeCycle: number, createdAt: string, closedAt: string | null, user: { name: string | null, phone: string }, provider: { commercialName: string | null, phone: string }, listing: { name: string } }>, meta: { total: number, page: number, limit: number, totalPages: number } } };

export type ActivateDeliveryCompanyMutationVariables = Exact<{
  activateDeliveryCompanyId: string;
}>;


export type ActivateDeliveryCompanyMutation = { activateDeliveryCompany: { createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: string } };

export type CreateDeliveryCompanyMutationVariables = Exact<{
  input: CreateDeliveryCompanyInput;
}>;


export type CreateDeliveryCompanyMutation = { createDeliveryCompany: { createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: string } };

export type DeactivateDeliveryCompanyMutationVariables = Exact<{
  deactivateDeliveryCompanyId: string;
  input: DeactivateDeliveryCompanyInput;
}>;


export type DeactivateDeliveryCompanyMutation = { deactivateDeliveryCompany: { createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: string } };

export type DeliveryCompaniesQueryVariables = Exact<{
  input?: DeliveryCompanyPaginationInput | null | undefined;
}>;


export type DeliveryCompaniesQuery = { deliveryCompanies: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: string }> } };

export type DeliveryCompanyQueryVariables = Exact<{
  deliveryCompanyId: string;
}>;


export type DeliveryCompanyQuery = { deliveryCompany: { createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: string } };

export type RemoveDeliveryCompanyMutationVariables = Exact<{
  removeDeliveryCompanyId: string;
}>;


export type RemoveDeliveryCompanyMutation = { removeDeliveryCompany: { createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: string } };

export type UpdateDeliveryCompanyMutationVariables = Exact<{
  input: UpdateDeliveryCompanyInput;
}>;


export type UpdateDeliveryCompanyMutation = { updateDeliveryCompany: { createdAt: string, deactivationReason: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: string } };

export type BulkUpdateOrderMutationVariables = Exact<{
  input: BulkUpdateFaqOrderInput;
}>;


export type BulkUpdateOrderMutation = { bulkUpdateOrder: Array<{ answerAr: string, answerEn: string, createdAt: string, id: string, isActive: boolean, order: number, questionAr: string, questionEn: string, updatedAt: string }> };

export type CreateFaqMutationVariables = Exact<{
  createFaqInput: CreateFaqInput;
}>;


export type CreateFaqMutation = { createFaq: { id: string, answerAr: string, answerEn: string, createdAt: string, isActive: boolean, order: number, questionAr: string, questionEn: string, updatedAt: string } };

export type FaqQueryVariables = Exact<{
  faqId: string;
}>;


export type FaqQuery = { faq: { answerAr: string, answerEn: string, createdAt: string, id: string, isActive: boolean, order: number, questionAr: string, questionEn: string, updatedAt: string } };

export type FaqsQueryVariables = Exact<{ [key: string]: never; }>;


export type FaqsQuery = { faqs: Array<{ answerAr: string, answerEn: string, createdAt: string, id: string, isActive: boolean, order: number, questionAr: string, questionEn: string, updatedAt: string }> };

export type RemoveFaqMutationVariables = Exact<{
  removeFaqId: string;
}>;


export type RemoveFaqMutation = { removeFaq: boolean };

export type UpdateFaqMutationVariables = Exact<{
  updateFaqInput: UpdateFaqInput;
}>;


export type UpdateFaqMutation = { updateFaq: { answerAr: string, answerEn: string, createdAt: string, id: string, isActive: boolean, order: number, questionAr: string, questionEn: string, updatedAt: string } };

export type ActivateListingMutationVariables = Exact<{
  activateListingId: string;
}>;


export type ActivateListingMutation = { activateListing: { createdAt: string, deactivationReason: string | null, id: string, status: ListingStatus, updatedAt: string, categoryId: string, cityId: string, description: string, name: string, price: number, tags: string, type: ListingType, providerId: string, provider: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, commercialName: string | null, commercialRegistrationFilename: string | null, commercialRegistrationNumber: string | null, countryId: string | null, createdAt: string, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, withAbsher: boolean | null, updatedAt: string, status: ProviderStatus, publicId: number | null, phoneVerified: boolean } | null, story: { filename: string, id: string, originalFilename: string, size: number, sortOrder: number, type: MediaType }, photos: Array<{ filename: string, id: string, originalFilename: string, sortOrder: number, type: MediaType, size: number }>, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, publicId: number | null, updatedAt: string } | null, category: { createdAt: string, descriptionAr: string, descriptionEn: string, id: string, image: string, nameAr: string, nameEn: string, publicId: number | null, rulesAr: string, rulesEn: string, status: CategoryStatus, updatedAt: string } | null } };

export type DeactivateListingMutationVariables = Exact<{
  deactivateListingId: string;
  reason: string;
}>;


export type DeactivateListingMutation = { deactivateListing: { createdAt: string, deactivationReason: string | null, id: string, status: ListingStatus, updatedAt: string, categoryId: string, cityId: string, description: string, name: string, price: number, tags: string, type: ListingType, providerId: string, provider: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, commercialName: string | null, commercialRegistrationFilename: string | null, commercialRegistrationNumber: string | null, countryId: string | null, createdAt: string, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, withAbsher: boolean | null, updatedAt: string, status: ProviderStatus, publicId: number | null, phoneVerified: boolean } | null, story: { filename: string, id: string, originalFilename: string, size: number, sortOrder: number, type: MediaType }, photos: Array<{ filename: string, id: string, originalFilename: string, sortOrder: number, type: MediaType, size: number }>, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, publicId: number | null, updatedAt: string } | null, category: { createdAt: string, descriptionAr: string, descriptionEn: string, id: string, image: string, nameAr: string, nameEn: string, publicId: number | null, rulesAr: string, rulesEn: string, status: CategoryStatus, updatedAt: string } | null } };

export type ListingQueryVariables = Exact<{
  listingId: string;
}>;


export type ListingQuery = { listing: { createdAt: string, deactivationReason: string | null, id: string, status: ListingStatus, updatedAt: string, categoryId: string, cityId: string, description: string, name: string, price: number, tags: string, type: ListingType, providerId: string, provider: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, commercialName: string | null, commercialRegistrationFilename: string | null, commercialRegistrationNumber: string | null, countryId: string | null, createdAt: string, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, withAbsher: boolean | null, updatedAt: string, status: ProviderStatus, publicId: number | null, phoneVerified: boolean } | null, story: { filename: string, id: string, originalFilename: string, size: number, sortOrder: number, type: MediaType }, photos: Array<{ filename: string, id: string, originalFilename: string, sortOrder: number, type: MediaType, size: number }>, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, publicId: number | null, updatedAt: string, status: CityStatus } | null, category: { createdAt: string, descriptionAr: string, descriptionEn: string, id: string, image: string, nameAr: string, nameEn: string, publicId: number | null, rulesAr: string, rulesEn: string, status: CategoryStatus, updatedAt: string } | null } | null };

export type ListingsQueryVariables = Exact<{
  input: ListingPaginationInput;
}>;


export type ListingsQuery = { listings: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ createdAt: string, deactivationReason: string | null, id: string, status: ListingStatus, updatedAt: string, categoryId: string, cityId: string, description: string, name: string, price: number, tags: string, type: ListingType, providerId: string, provider: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, commercialName: string | null, commercialRegistrationFilename: string | null, commercialRegistrationNumber: string | null, countryId: string | null, createdAt: string, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, withAbsher: boolean | null, updatedAt: string, status: ProviderStatus, publicId: number | null, phoneVerified: boolean } | null, story: { filename: string, id: string, originalFilename: string, size: number, sortOrder: number, type: MediaType }, photos: Array<{ filename: string, id: string, originalFilename: string, sortOrder: number, type: MediaType, size: number }>, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, publicId: number | null, updatedAt: string, status: CityStatus } | null, category: { createdAt: string, descriptionAr: string, descriptionEn: string, id: string, image: string, nameAr: string, nameEn: string, publicId: number | null, rulesAr: string, rulesEn: string, status: CategoryStatus, updatedAt: string } | null }> } };

export type RemoveListingMutationVariables = Exact<{
  removeListingId: string;
}>;


export type RemoveListingMutation = { removeListing: { message: string, success: boolean } };

export type AdminPermissionsQueryVariables = Exact<{
  adminId: string;
}>;


export type AdminPermissionsQuery = { adminPermissions: Array<{ adminId: string, createdAt: string, id: string, permissionId: string, updatedAt: string, permission: { action: string, createdAt: string, description: string, id: string, module: string, name: string, nameAr: string, permissionPlatform: PermissionPlatform, resource: string, updatedAt: string }, admin: { createdAt: string, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, phoneNumber: string, roleName: string, status: AdminStatus, updatedAt: string, userType: AdminUserType } | null }> };

export type BulkAssignPermissionsToAdminMutationVariables = Exact<{
  input: BulkAssignPermissionsInput;
}>;


export type BulkAssignPermissionsToAdminMutation = { bulkAssignPermissionsToAdmin: Array<{ adminId: string, createdAt: string, id: string, permissionId: string, updatedAt: string, permission: { resource: string, action: string, createdAt: string, description: string, id: string, module: string, name: string, nameAr: string, permissionPlatform: PermissionPlatform, updatedAt: string }, admin: { createdAt: string, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, phoneNumber: string, roleName: string, status: AdminStatus, updatedAt: string, userType: AdminUserType } | null }> };

export type PermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type PermissionsQuery = { permissions: Array<{ action: string, createdAt: string, description: string, id: string, module: string, name: string, nameAr: string, permissionPlatform: PermissionPlatform, resource: string, updatedAt: string }> };

export type ActivateProviderMutationVariables = Exact<{
  activateProviderId: string;
}>;


export type ActivateProviderMutation = { activateProvider: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, countryId: string | null, createdAt: string, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, updatedAt: string, status: ProviderStatus, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, updatedAt: string } | null } };

export type AdminReactivateProviderMutationVariables = Exact<{
  providerId: string;
}>;


export type AdminReactivateProviderMutation = { adminReactivateProvider: { id: string, name: string | null, isActive: boolean, status: ProviderStatus, email: string, phone: string, deactivationReason: string | null, signedContract: { id: string, status: SignedContractStatus, terminationReason: string | null, contractSignedAt: string, contractExpiresAt: string | null, platformManagerSignature: string | null, serviceProviderSignature: string } | null } };

export type AdminTerminateProviderContractMutationVariables = Exact<{
  input: AdminTerminateContractInput;
}>;


export type AdminTerminateProviderContractMutation = { adminTerminateProviderContract: { id: string, name: string | null, isActive: boolean, languageCode: string | null, address: string | null, avatarFilename: string | null, cityId: string | null, countryId: string | null, createdAt: string, dialCode: string | null, email: string, emailVerified: boolean, latitude: number | null, longitude: number | null, phone: string, phoneVerified: boolean, updatedAt: string, ibanNumber: string | null, bankName: string | null, commercialRegistrationNumber: string | null, withAbsher: boolean | null, status: ProviderStatus, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, commercialName: string | null, commercialRegistrationFilename: string | null, categories: Array<{ id: string, createdAt: string, descriptionAr: string, descriptionEn: string, nameAr: string, nameEn: string, updatedAt: string }> | null, signedContract: { contractExpiresAt: string | null, contractSignedAt: string, platformManagerSignature: string | null, serviceProviderSignature: string, status: SignedContractStatus } | null } };

export type DeactivateProviderMutationVariables = Exact<{
  deactivateProviderId: string;
  reason: string;
}>;


export type DeactivateProviderMutation = { deactivateProvider: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, commercialRegistrationNumber: string | null, countryId: string | null, createdAt: string, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, updatedAt: string, withAbsher: boolean | null, status: ProviderStatus, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, commercialName: string | null, commercialRegistrationFilename: string | null, categories: Array<{ createdAt: string, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: string }> | null, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, updatedAt: string } | null, signedContract: { contractExpiresAt: string | null, contractSignedAt: string, platformManagerSignature: string | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason: string | null } | null } };

export type ProviderQueryVariables = Exact<{
  providerId: string;
}>;


export type ProviderQuery = { provider: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, commercialRegistrationNumber: string | null, countryId: string | null, createdAt: string, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, updatedAt: string, withAbsher: boolean | null, status: ProviderStatus, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, commercialName: string | null, commercialRegistrationFilename: string | null, publicId: number | null, categories: Array<{ createdAt: string, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: string, rulesEn: string, rulesAr: string, status: CategoryStatus }> | null, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, updatedAt: string, status: CityStatus } | null, signedContract: { contractExpiresAt: string | null, contractSignedAt: string, platformManagerSignature: string | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason: string | null, platformManagerName: string | null, id: string, createdAt: string, publicId: number | null, updatedAt: string, providerId: string | null, acceptedRulesAr: Array<{ label: string, value: string }> | null, acceptedRulesEn: Array<{ label: string, value: string }> | null } | null } };

export type ProvidersQueryVariables = Exact<{
  pagination: ProviderPaginationInput;
}>;


export type ProvidersQuery = { providers: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, commercialRegistrationNumber: string | null, countryId: string | null, createdAt: string, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, updatedAt: string, withAbsher: boolean | null, status: ProviderStatus, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, commercialName: string | null, commercialRegistrationFilename: string | null, publicId: number | null, categories: Array<{ createdAt: string, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: string, rulesEn: string, rulesAr: string, status: CategoryStatus }> | null, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, updatedAt: string, status: CityStatus } | null, signedContract: { contractExpiresAt: string | null, contractSignedAt: string, platformManagerSignature: string | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason: string | null, platformManagerName: string | null, id: string, createdAt: string, publicId: number | null, updatedAt: string, providerId: string | null, acceptedRulesAr: Array<{ label: string, value: string }> | null, acceptedRulesEn: Array<{ label: string, value: string }> | null } | null }> } };

export type RejectProviderJoinRequestMutationVariables = Exact<{
  id: string;
  reason: string;
}>;


export type RejectProviderJoinRequestMutation = { rejectProviderJoinRequest: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, commercialRegistrationNumber: string | null, countryId: string | null, createdAt: string, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, updatedAt: string, withAbsher: boolean | null, status: ProviderStatus, deactivationReason: string | null, rejectionReason: string | null, deleteReason: string | null, deletedAt: string | null, commercialName: string | null, commercialRegistrationFilename: string | null, categories: Array<{ createdAt: string, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: string }> | null, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, updatedAt: string } | null, signedContract: { contractExpiresAt: string | null, contractSignedAt: string, platformManagerSignature: string | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason: string | null } | null } };

export type RemoveProviderMutationVariables = Exact<{
  removeProviderId: string;
  input: DeleteProviderInput;
}>;


export type RemoveProviderMutation = { removeProvider: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, commercialRegistrationNumber: string | null, countryId: string | null, createdAt: string, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, updatedAt: string, withAbsher: boolean | null, status: ProviderStatus, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, commercialName: string | null, commercialRegistrationFilename: string | null, categories: Array<{ createdAt: string, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: string }> | null, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, updatedAt: string } | null, signedContract: { contractExpiresAt: string | null, contractSignedAt: string, platformManagerSignature: string | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason: string | null } | null } };

export type RatingStatisticsQueryVariables = Exact<{
  listingId: string;
}>;


export type RatingStatisticsQuery = { ratingStatistics: { averageRating: number, totalRatings: number, fiveStars: number, fourStars: number, threeStars: number, twoStars: number, oneStar: number } };

export type RatingsQueryVariables = Exact<{
  input?: RatingPaginationInput | null | undefined;
}>;


export type RatingsQuery = { ratings: { items: Array<{ id: string, rating: number, comment: string | null, createdAt: string, user: { id: string, name: string | null, avatarFilename: string | null } }>, meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number } } };

export type AdminContractFinancialReportQueryVariables = Exact<{
  input?: FeeReportInput | null | undefined;
}>;


export type AdminContractFinancialReportQuery = { contractFinancialReport: { completedCount: number, totalProviderNet: number, totalVat: number, totalCommission: number, totalPaid: number, totalCustomerRefunds: number, totalProviderReleases: number, items: Array<{ contractId: string, contractNumber: number | null, customerName: string | null, providerName: string | null, status: string, providerNet: number, vat: number, commission: number, totalPaid: number, customerRefund: number, providerRelease: number, createdAt: string }>, meta: { total: number, page: number, limit: number } } };

export type AdminConversationFeeReportQueryVariables = Exact<{
  input?: FeeReportInput | null | undefined;
}>;


export type AdminConversationFeeReportQuery = { conversationFeeReport: { totalCustomerFees: number, totalProviderFees: number, items: Array<{ conversationId: string, conversationNumber: number | null, customerName: string | null, providerName: string | null, providerPhone: string | null, status: string, customerFee: number, providerFee: number, startedAt: string, endedAt: string | null }>, meta: { total: number, page: number, limit: number } } };

export type AdminPremiumAdReportQueryVariables = Exact<{
  input?: FeeReportInput | null | undefined;
}>;


export type AdminPremiumAdReportQuery = { premiumAdFeeReport: { totalFees: number, items: Array<{ paymentId: string, listingId: string, listingName: string, providerName: string | null, providerPhone: string | null, status: string, fee: number, createdAt: string, featuredStartsAt: string | null, featuredEndsAt: string | null }>, meta: { total: number, page: number, limit: number } } };

export type GetSettingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingQuery = { getSetting: { aboutAr: string, aboutEn: string, email: string, phones: Array<string>, privacyPolicyAr: string, privacyPolicyEn: string, termsAr: string, termsEn: string, whatsappNumber: string, rulesAr: string, rulesEn: string, platformManagerName: string | null, platformManagerSignature: string | null, vatRate: number, vatEnabled: boolean, contractAcceptanceWindowDays: number, contractAcceptanceWindowEnabled: boolean, completionConfirmationGraceHours: number, premiumAdFee: number, premiumAdDurationDays: number, premiumAdEnabled: boolean, socialMediaLinks: Array<{ link: string, name: SocialMediaPlatform }> } };

export type SetSettingMutationVariables = Exact<{
  input: SettingInput;
}>;


export type SetSettingMutation = { setSetting: { aboutAr: string, aboutEn: string, email: string, phones: Array<string>, privacyPolicyAr: string, privacyPolicyEn: string, termsAr: string, termsEn: string, whatsappNumber: string, rulesAr: string, rulesEn: string, platformManagerName: string | null, platformManagerSignature: string | null, socialMediaLinks: Array<{ link: string, name: SocialMediaPlatform }> } };

export type SignedContractByIdQueryVariables = Exact<{
  signedContractByIdId: string;
}>;


export type SignedContractByIdQuery = { signedContractById: { contractExpiresAt: string | null, contractSignedAt: string, createdAt: string, id: string, platformManagerName: string | null, platformManagerSignature: string | null, publicId: number | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason: string | null, updatedAt: string, providerId: string | null, acceptedRulesAr: Array<{ label: string, value: string }> | null, acceptedRulesEn: Array<{ label: string, value: string }> | null, provider: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, commercialName: string | null, commercialRegistrationFilename: string | null, commercialRegistrationNumber: string | null, countryId: string | null, createdAt: string, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, publicId: number | null, status: ProviderStatus, updatedAt: string, withAbsher: boolean | null, categories: Array<{ createdAt: string, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, publicId: number | null, rulesAr: string, rulesEn: string, updatedAt: string, status: CategoryStatus }> | null, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, publicId: number | null, updatedAt: string, status: CityStatus } | null } | null } | null };

export type SignedContractByProviderIdQueryVariables = Exact<{
  providerId: string;
}>;


export type SignedContractByProviderIdQuery = { signedContractByProviderId: { contractExpiresAt: string | null, contractSignedAt: string, createdAt: string, id: string, platformManagerName: string | null, platformManagerSignature: string | null, publicId: number | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason: string | null, updatedAt: string, providerId: string | null, acceptedRulesAr: Array<{ label: string, value: string }> | null, acceptedRulesEn: Array<{ label: string, value: string }> | null, provider: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, commercialName: string | null, commercialRegistrationFilename: string | null, commercialRegistrationNumber: string | null, countryId: string | null, createdAt: string, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, publicId: number | null, status: ProviderStatus, updatedAt: string, withAbsher: boolean | null } | null } | null };

export type SignedContractsQueryVariables = Exact<{
  input?: SignedContractPaginationInput | null | undefined;
}>;


export type SignedContractsQuery = { signedContracts: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ contractExpiresAt: string | null, contractSignedAt: string, createdAt: string, id: string, platformManagerName: string | null, platformManagerSignature: string | null, publicId: number | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason: string | null, updatedAt: string, providerId: string | null, acceptedRulesAr: Array<{ label: string, value: string }> | null, acceptedRulesEn: Array<{ label: string, value: string }> | null, provider: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, commercialName: string | null, commercialRegistrationFilename: string | null, commercialRegistrationNumber: string | null, countryId: string | null, createdAt: string, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, publicId: number | null, status: ProviderStatus, updatedAt: string, withAbsher: boolean | null } | null }> } };

export type ActivateUserMutationVariables = Exact<{
  activateUserId: string;
}>;


export type ActivateUserMutation = { activateUser: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, countryId: string | null, createdAt: string, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, updatedAt: string, status: UserStatus, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, updatedAt: string } | null } };

export type DeactivateUserMutationVariables = Exact<{
  deactivateUserId: string;
  input: DeactivateUserInput;
}>;


export type DeactivateUserMutation = { deactivateUser: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, countryId: string | null, createdAt: string, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, updatedAt: string, status: UserStatus, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, updatedAt: string } | null } };

export type RemoveUserMutationVariables = Exact<{
  removeUserId: string;
  input: DeleteUserInput;
}>;


export type RemoveUserMutation = { removeUser: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, countryId: string | null, createdAt: string, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, updatedAt: string, status: UserStatus, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, updatedAt: string } | null } };

export type UserQueryVariables = Exact<{
  userId: string;
}>;


export type UserQuery = { user: { address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, countryId: string | null, createdAt: string, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, updatedAt: string, status: UserStatus, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, publicId: number | null, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, updatedAt: string, status: CityStatus } | null } };

export type UsersQueryVariables = Exact<{
  pagination: UserPaginationInput;
}>;


export type UsersQuery = { users: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ address: string | null, avatarFilename: string | null, bankName: string | null, cityId: string | null, countryId: string | null, createdAt: string, dialCode: string | null, email: string, emailVerified: boolean, ibanNumber: string | null, id: string, isActive: boolean, languageCode: string | null, latitude: number | null, longitude: number | null, name: string | null, phone: string, phoneVerified: boolean, updatedAt: string, status: UserStatus, deactivationReason: string | null, deleteReason: string | null, deletedAt: string | null, publicId: number | null, city: { countryId: string, createdAt: string, id: string, nameAr: string, nameEn: string, updatedAt: string, status: CityStatus } | null }> } };


export const ActivateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"activateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activateAdminId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activateAdminId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}}]}}]} as unknown as DocumentNode<ActivateAdminMutation, ActivateAdminMutationVariables>;
export const AdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"admin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adminId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adminId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]} as unknown as DocumentNode<AdminQuery, AdminQueryVariables>;
export const AdminsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"admins"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paginationInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]}}]} as unknown as DocumentNode<AdminsQuery, AdminsQueryVariables>;
export const CreateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createAdminInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createAdminInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createAdminInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]} as unknown as DocumentNode<CreateAdminMutation, CreateAdminMutationVariables>;
export const DeactivateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deactivateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deactivateAdminId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeactivateAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deactivateAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deactivateAdminId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}}]}}]} as unknown as DocumentNode<DeactivateAdminMutation, DeactivateAdminMutationVariables>;
export const MeAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"meAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"adminPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"permission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"module"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"permissionPlatform"}},{"kind":"Field","name":{"kind":"Name","value":"resource"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"adminId"}},{"kind":"Field","name":{"kind":"Name","value":"permissionId"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<MeAdminQuery, MeAdminQueryVariables>;
export const RemoveAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeAdminId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeAdminId"}}}]}]}}]} as unknown as DocumentNode<RemoveAdminMutation, RemoveAdminMutationVariables>;
export const UpdateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateAdminId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateAdminInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateAdminId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateAdminInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateAdminInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]} as unknown as DocumentNode<UpdateAdminMutation, UpdateAdminMutationVariables>;
export const AdminChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"adminChangePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminChangePasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminChangePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<AdminChangePasswordMutation, AdminChangePasswordMutationVariables>;
export const AdminForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"adminForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminForgotPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminForgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<AdminForgotPasswordMutation, AdminForgotPasswordMutationVariables>;
export const AdminLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"adminLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<AdminLoginMutation, AdminLoginMutationVariables>;
export const AdminResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"adminResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminResetPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminResetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<AdminResetPasswordMutation, AdminResetPasswordMutationVariables>;
export const AdminVerifyPasswordResetOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"adminVerifyPasswordResetOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyAdminPasswordResetOtpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminVerifyPasswordResetOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetToken"}}]}}]}}]} as unknown as DocumentNode<AdminVerifyPasswordResetOtpMutation, AdminVerifyPasswordResetOtpMutationVariables>;
export const ActivateBankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"activateBank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activateBankId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateBank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activateBankId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ActivateBankMutation, ActivateBankMutationVariables>;
export const BankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"bank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bankId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bankId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<BankQuery, BankQueryVariables>;
export const BanksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"banks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BankPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"banks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<BanksQuery, BanksQueryVariables>;
export const CreateBankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createBank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBankInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateBankMutation, CreateBankMutationVariables>;
export const DeactivateBankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deactivateBank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deactivateBankId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeactivateBankInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deactivateBank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deactivateBankId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<DeactivateBankMutation, DeactivateBankMutationVariables>;
export const RemoveBankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeBank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeBankId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeBank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeBankId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveBankMutation, RemoveBankMutationVariables>;
export const UpdateBankDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateBank"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateBankInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateBankMutation, UpdateBankMutationVariables>;
export const ActivateCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"activateCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activateCategoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activateCategoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}}]}}]}}]} as unknown as DocumentNode<ActivateCategoryMutation, ActivateCategoryMutationVariables>;
export const CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"categories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"commissionPercent"}},{"kind":"Field","name":{"kind":"Name","value":"commissionEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"minCommissionAmount"}},{"kind":"Field","name":{"kind":"Name","value":"minCommissionEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"depositPercent"}},{"kind":"Field","name":{"kind":"Name","value":"depositEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"customerConversationFee"}},{"kind":"Field","name":{"kind":"Name","value":"customerConversationFeeEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"providerConversationFee"}},{"kind":"Field","name":{"kind":"Name","value":"providerConversationFeeEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"maxCompletionDays"}},{"kind":"Field","name":{"kind":"Name","value":"maxCompletionDaysEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"maxTerminationDays"}},{"kind":"Field","name":{"kind":"Name","value":"maxTerminationDaysEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"contractDocumentEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"contractDocumentText"}},{"kind":"Field","name":{"kind":"Name","value":"undertakingTextAr"}},{"kind":"Field","name":{"kind":"Name","value":"undertakingTextEn"}},{"kind":"Field","name":{"kind":"Name","value":"undertakingEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"refundPolicyAr"}},{"kind":"Field","name":{"kind":"Name","value":"refundPolicyEn"}},{"kind":"Field","name":{"kind":"Name","value":"refundPolicyEnabled"}}]}}]}}]}}]} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"category"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"commissionPercent"}},{"kind":"Field","name":{"kind":"Name","value":"commissionEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"minCommissionAmount"}},{"kind":"Field","name":{"kind":"Name","value":"minCommissionEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"depositPercent"}},{"kind":"Field","name":{"kind":"Name","value":"depositEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"customerConversationFee"}},{"kind":"Field","name":{"kind":"Name","value":"customerConversationFeeEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"providerConversationFee"}},{"kind":"Field","name":{"kind":"Name","value":"providerConversationFeeEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"maxCompletionDays"}},{"kind":"Field","name":{"kind":"Name","value":"maxCompletionDaysEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"maxTerminationDays"}},{"kind":"Field","name":{"kind":"Name","value":"maxTerminationDaysEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"contractDocumentEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"contractDocumentText"}},{"kind":"Field","name":{"kind":"Name","value":"undertakingTextAr"}},{"kind":"Field","name":{"kind":"Name","value":"undertakingTextEn"}},{"kind":"Field","name":{"kind":"Name","value":"undertakingEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"refundPolicyAr"}},{"kind":"Field","name":{"kind":"Name","value":"refundPolicyEn"}},{"kind":"Field","name":{"kind":"Name","value":"refundPolicyEnabled"}}]}}]}}]} as unknown as DocumentNode<CategoryQuery, CategoryQueryVariables>;
export const CreateCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}}]}}]}}]} as unknown as DocumentNode<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const DeactivateCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deactivateCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deactivateCategoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deactivateCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deactivateCategoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}}]}}]}}]} as unknown as DocumentNode<DeactivateCategoryMutation, DeactivateCategoryMutationVariables>;
export const RemoveCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeCategoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeCategoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}}]}}]}}]} as unknown as DocumentNode<RemoveCategoryMutation, RemoveCategoryMutationVariables>;
export const UpdateCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}}]}}]}}]} as unknown as DocumentNode<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const ActivateCityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"activateCity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activateCityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateCity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activateCityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ActivateCityMutation, ActivateCityMutationVariables>;
export const CitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CityPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CitiesQuery, CitiesQueryVariables>;
export const CityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"city"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"geoBoundary"}}]}}]}}]} as unknown as DocumentNode<CityQuery, CityQueryVariables>;
export const CountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CountryPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<CountriesQuery, CountriesQueryVariables>;
export const CreateCityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCityInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"geoBoundary"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCityMutation, CreateCityMutationVariables>;
export const DeactivateCityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deactivateCity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deactivateCityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deactivateCity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deactivateCityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<DeactivateCityMutation, DeactivateCityMutationVariables>;
export const RemoveCityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeCity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeCityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeCityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveCityMutation, RemoveCityMutationVariables>;
export const UpdateCityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCityInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"geoBoundary"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateCityMutation, UpdateCityMutationVariables>;
export const AdminLifecycleComplaintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminLifecycleComplaint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminComplaint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"reporterType"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"reviewedAt"}},{"kind":"Field","name":{"kind":"Name","value":"conversation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorType"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<AdminLifecycleComplaintQuery, AdminLifecycleComplaintQueryVariables>;
export const AdminLifecycleComplaintsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminLifecycleComplaints"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ComplaintPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminComplaints"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"reporterType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"conversation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<AdminLifecycleComplaintsQuery, AdminLifecycleComplaintsQueryVariables>;
export const AdminLifecycleReplyComplaintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminLifecycleReplyComplaint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminReplyToComplaint"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AdminLifecycleReplyComplaintMutation, AdminLifecycleReplyComplaintMutationVariables>;
export const AdminLifecycleStatusComplaintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminLifecycleStatusComplaint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ComplaintStatus"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminSetComplaintStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"complaintId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<AdminLifecycleStatusComplaintMutation, AdminLifecycleStatusComplaintMutationVariables>;
export const ContactMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"contactMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contactMessageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contactMessageId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachmentFilename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messageContent"}},{"kind":"Field","name":{"kind":"Name","value":"messageType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"senderType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ContactMessageQuery, ContactMessageQueryVariables>;
export const ContactMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"contactMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContactMessagePaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paginationInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachmentFilename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messageContent"}},{"kind":"Field","name":{"kind":"Name","value":"messageType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"senderType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<ContactMessagesQuery, ContactMessagesQueryVariables>;
export const MarkAsReadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"markAsRead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"markAsReadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markAsRead"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"markAsReadId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachmentFilename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messageContent"}},{"kind":"Field","name":{"kind":"Name","value":"messageType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"senderType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<MarkAsReadMutation, MarkAsReadMutationVariables>;
export const RemoveContactMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeContactMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeContactMessageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeContactMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeContactMessageId"}}}]}]}}]} as unknown as DocumentNode<RemoveContactMessageMutation, RemoveContactMessageMutationVariables>;
export const ReplyToContactMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"replyToContactMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"replyToContactMessageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replyToContactMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"replyToContactMessageId"}}},{"kind":"Argument","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachmentFilename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messageContent"}},{"kind":"Field","name":{"kind":"Name","value":"messageType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"senderType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ReplyToContactMessageMutation, ReplyToContactMessageMutationVariables>;
export const AdminLifecycleContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminLifecycleContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"agreedPrice"}},{"kind":"Field","name":{"kind":"Name","value":"depositPercent"}},{"kind":"Field","name":{"kind":"Name","value":"downPayment"}},{"kind":"Field","name":{"kind":"Name","value":"commissionPercent"}},{"kind":"Field","name":{"kind":"Name","value":"commissionAmount"}},{"kind":"Field","name":{"kind":"Name","value":"vatRate"}},{"kind":"Field","name":{"kind":"Name","value":"vatAmount"}},{"kind":"Field","name":{"kind":"Name","value":"totalPayable"}},{"kind":"Field","name":{"kind":"Name","value":"providerNetAmount"}},{"kind":"Field","name":{"kind":"Name","value":"customerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"providerAddress"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryCompanyNameAr"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryCompanyNameEn"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryEstimateDays"}},{"kind":"Field","name":{"kind":"Name","value":"confirmationDeadlineAt"}},{"kind":"Field","name":{"kind":"Name","value":"cancellationReason"}},{"kind":"Field","name":{"kind":"Name","value":"disputeReason"}},{"kind":"Field","name":{"kind":"Name","value":"contractDocumentText"}},{"kind":"Field","name":{"kind":"Name","value":"undertakingTextAr"}},{"kind":"Field","name":{"kind":"Name","value":"undertakingTextEn"}},{"kind":"Field","name":{"kind":"Name","value":"refundPolicyAr"}},{"kind":"Field","name":{"kind":"Name","value":"refundPolicyEn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paidAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerCompletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryStartedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"cancelledAt"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"conversation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"listing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"signatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"signerType"}},{"kind":"Field","name":{"kind":"Name","value":"signatureType"}},{"kind":"Field","name":{"kind":"Name","value":"signatureData"}},{"kind":"Field","name":{"kind":"Name","value":"signedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"settlements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"audits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"actorType"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"previousStatus"}},{"kind":"Field","name":{"kind":"Name","value":"newStatus"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"sha256"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<AdminLifecycleContractQuery, AdminLifecycleContractQueryVariables>;
export const AdminLifecycleContractsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminLifecycleContracts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContractPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminContracts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"totalPayable"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"conversation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<AdminLifecycleContractsQuery, AdminLifecycleContractsQueryVariables>;
export const AdminLifecycleResolveContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminLifecycleResolveContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminResolveContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminResolveContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<AdminLifecycleResolveContractMutation, AdminLifecycleResolveContractMutationVariables>;
export const AdminLifecycleConversationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminLifecycleConversation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminConversation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"feeCycle"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"closedAt"}},{"kind":"Field","name":{"kind":"Name","value":"customerFeePaidAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerFeePaidAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"senderType"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"adminContracts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"conversationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"adminComplaints"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"conversationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<AdminLifecycleConversationQuery, AdminLifecycleConversationQueryVariables>;
export const AdminLifecycleConversationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminLifecycleConversations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConversationPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminConversations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"feeCycle"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"closedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"listing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<AdminLifecycleConversationsQuery, AdminLifecycleConversationsQueryVariables>;
export const ActivateDeliveryCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"activateDeliveryCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activateDeliveryCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateDeliveryCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activateDeliveryCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ActivateDeliveryCompanyMutation, ActivateDeliveryCompanyMutationVariables>;
export const CreateDeliveryCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createDeliveryCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateDeliveryCompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDeliveryCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateDeliveryCompanyMutation, CreateDeliveryCompanyMutationVariables>;
export const DeactivateDeliveryCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deactivateDeliveryCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deactivateDeliveryCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeactivateDeliveryCompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deactivateDeliveryCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deactivateDeliveryCompanyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<DeactivateDeliveryCompanyMutation, DeactivateDeliveryCompanyMutationVariables>;
export const DeliveryCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"deliveryCompanies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DeliveryCompanyPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deliveryCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<DeliveryCompaniesQuery, DeliveryCompaniesQueryVariables>;
export const DeliveryCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"deliveryCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deliveryCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deliveryCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deliveryCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<DeliveryCompanyQuery, DeliveryCompanyQueryVariables>;
export const RemoveDeliveryCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeDeliveryCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeDeliveryCompanyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeDeliveryCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeDeliveryCompanyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveDeliveryCompanyMutation, RemoveDeliveryCompanyMutationVariables>;
export const UpdateDeliveryCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateDeliveryCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateDeliveryCompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDeliveryCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateDeliveryCompanyMutation, UpdateDeliveryCompanyMutationVariables>;
export const BulkUpdateOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"bulkUpdateOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BulkUpdateFaqOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bulkUpdateOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerAr"}},{"kind":"Field","name":{"kind":"Name","value":"answerEn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"questionAr"}},{"kind":"Field","name":{"kind":"Name","value":"questionEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<BulkUpdateOrderMutation, BulkUpdateOrderMutationVariables>;
export const CreateFaqDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createFaq"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createFaqInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFaqInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFaq"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createFaqInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createFaqInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answerAr"}},{"kind":"Field","name":{"kind":"Name","value":"answerEn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"questionAr"}},{"kind":"Field","name":{"kind":"Name","value":"questionEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateFaqMutation, CreateFaqMutationVariables>;
export const FaqDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"faq"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"faqId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"faq"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"faqId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerAr"}},{"kind":"Field","name":{"kind":"Name","value":"answerEn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"questionAr"}},{"kind":"Field","name":{"kind":"Name","value":"questionEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FaqQuery, FaqQueryVariables>;
export const FaqsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"faqs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"faqs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerAr"}},{"kind":"Field","name":{"kind":"Name","value":"answerEn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"questionAr"}},{"kind":"Field","name":{"kind":"Name","value":"questionEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FaqsQuery, FaqsQueryVariables>;
export const RemoveFaqDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeFaq"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeFaqId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFaq"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeFaqId"}}}]}]}}]} as unknown as DocumentNode<RemoveFaqMutation, RemoveFaqMutationVariables>;
export const UpdateFaqDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateFaq"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateFaqInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFaqInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFaq"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateFaqInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateFaqInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerAr"}},{"kind":"Field","name":{"kind":"Name","value":"answerEn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"questionAr"}},{"kind":"Field","name":{"kind":"Name","value":"questionEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateFaqMutation, UpdateFaqMutationVariables>;
export const ActivateListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"activateListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activateListingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activateListingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"story"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalFilename"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalFilename"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<ActivateListingMutation, ActivateListingMutationVariables>;
export const DeactivateListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deactivateListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deactivateListingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reason"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deactivateListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deactivateListingId"}}},{"kind":"Argument","name":{"kind":"Name","value":"reason"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reason"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"story"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalFilename"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalFilename"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<DeactivateListingMutation, DeactivateListingMutationVariables>;
export const ListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"story"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalFilename"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalFilename"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<ListingQuery, ListingQueryVariables>;
export const ListingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingPaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paginationInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"story"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalFilename"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalFilename"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ListingsQuery, ListingsQueryVariables>;
export const RemoveListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeListingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeListingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<RemoveListingMutation, RemoveListingMutationVariables>;
export const AdminPermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"adminPermissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adminId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminPermissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"adminId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adminId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"permission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"module"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"permissionPlatform"}},{"kind":"Field","name":{"kind":"Name","value":"resource"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"permissionId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}}]}}]}}]} as unknown as DocumentNode<AdminPermissionsQuery, AdminPermissionsQueryVariables>;
export const BulkAssignPermissionsToAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"bulkAssignPermissionsToAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BulkAssignPermissionsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bulkAssignPermissionsToAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"permission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resource"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"module"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"permissionPlatform"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"permissionId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<BulkAssignPermissionsToAdminMutation, BulkAssignPermissionsToAdminMutationVariables>;
export const PermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"module"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"permissionPlatform"}},{"kind":"Field","name":{"kind":"Name","value":"resource"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<PermissionsQuery, PermissionsQueryVariables>;
export const ActivateProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"activateProvider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activateProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateProvider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activateProviderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<ActivateProviderMutation, ActivateProviderMutationVariables>;
export const AdminReactivateProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"adminReactivateProvider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminReactivateProvider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"providerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}}]}}]}}]}}]} as unknown as DocumentNode<AdminReactivateProviderMutation, AdminReactivateProviderMutationVariables>;
export const AdminTerminateProviderContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"adminTerminateProviderContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminTerminateContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminTerminateProviderContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}}]}}]}}]} as unknown as DocumentNode<AdminTerminateProviderContractMutation, AdminTerminateProviderContractMutationVariables>;
export const DeactivateProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deactivateProvider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deactivateProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reason"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deactivateProvider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deactivateProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"reason"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reason"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}}]}}]}}]} as unknown as DocumentNode<DeactivateProviderMutation, DeactivateProviderMutationVariables>;
export const ProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"provider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerName"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesAr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesEn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]} as unknown as DocumentNode<ProviderQuery, ProviderQueryVariables>;
export const ProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"providers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProviderPaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"providers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerName"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesAr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesEn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]}}]} as unknown as DocumentNode<ProvidersQuery, ProvidersQueryVariables>;
export const RejectProviderJoinRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"rejectProviderJoinRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reason"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rejectProviderJoinRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"reason"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reason"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}}]}}]}}]} as unknown as DocumentNode<RejectProviderJoinRequestMutation, RejectProviderJoinRequestMutationVariables>;
export const RemoveProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeProvider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteProviderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeProvider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}}]}}]}}]} as unknown as DocumentNode<RemoveProviderMutation, RemoveProviderMutationVariables>;
export const RatingStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ratingStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ratingStatistics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"averageRating"}},{"kind":"Field","name":{"kind":"Name","value":"totalRatings"}},{"kind":"Field","name":{"kind":"Name","value":"fiveStars"}},{"kind":"Field","name":{"kind":"Name","value":"fourStars"}},{"kind":"Field","name":{"kind":"Name","value":"threeStars"}},{"kind":"Field","name":{"kind":"Name","value":"twoStars"}},{"kind":"Field","name":{"kind":"Name","value":"oneStar"}}]}}]}}]} as unknown as DocumentNode<RatingStatisticsQuery, RatingStatisticsQueryVariables>;
export const RatingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ratings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RatingPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ratings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<RatingsQuery, RatingsQueryVariables>;
export const AdminContractFinancialReportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminContractFinancialReport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FeeReportInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractFinancialReport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completedCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalProviderNet"}},{"kind":"Field","name":{"kind":"Name","value":"totalVat"}},{"kind":"Field","name":{"kind":"Name","value":"totalCommission"}},{"kind":"Field","name":{"kind":"Name","value":"totalPaid"}},{"kind":"Field","name":{"kind":"Name","value":"totalCustomerRefunds"}},{"kind":"Field","name":{"kind":"Name","value":"totalProviderReleases"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractId"}},{"kind":"Field","name":{"kind":"Name","value":"contractNumber"}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"providerName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"providerNet"}},{"kind":"Field","name":{"kind":"Name","value":"vat"}},{"kind":"Field","name":{"kind":"Name","value":"commission"}},{"kind":"Field","name":{"kind":"Name","value":"totalPaid"}},{"kind":"Field","name":{"kind":"Name","value":"customerRefund"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelease"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}}]}}]}}]}}]} as unknown as DocumentNode<AdminContractFinancialReportQuery, AdminContractFinancialReportQueryVariables>;
export const AdminConversationFeeReportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminConversationFeeReport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FeeReportInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conversationFeeReport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCustomerFees"}},{"kind":"Field","name":{"kind":"Name","value":"totalProviderFees"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conversationId"}},{"kind":"Field","name":{"kind":"Name","value":"conversationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"providerName"}},{"kind":"Field","name":{"kind":"Name","value":"providerPhone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customerFee"}},{"kind":"Field","name":{"kind":"Name","value":"providerFee"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}}]}}]}}]}}]} as unknown as DocumentNode<AdminConversationFeeReportQuery, AdminConversationFeeReportQueryVariables>;
export const AdminPremiumAdReportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminPremiumAdReport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FeeReportInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"premiumAdFeeReport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalFees"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentId"}},{"kind":"Field","name":{"kind":"Name","value":"listingId"}},{"kind":"Field","name":{"kind":"Name","value":"listingName"}},{"kind":"Field","name":{"kind":"Name","value":"providerName"}},{"kind":"Field","name":{"kind":"Name","value":"providerPhone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredStartsAt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredEndsAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}}]}}]}}]}}]} as unknown as DocumentNode<AdminPremiumAdReportQuery, AdminPremiumAdReportQueryVariables>;
export const GetSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutAr"}},{"kind":"Field","name":{"kind":"Name","value":"aboutEn"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phones"}},{"kind":"Field","name":{"kind":"Name","value":"privacyPolicyAr"}},{"kind":"Field","name":{"kind":"Name","value":"privacyPolicyEn"}},{"kind":"Field","name":{"kind":"Name","value":"socialMediaLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"termsAr"}},{"kind":"Field","name":{"kind":"Name","value":"termsEn"}},{"kind":"Field","name":{"kind":"Name","value":"whatsappNumber"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerName"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"vatRate"}},{"kind":"Field","name":{"kind":"Name","value":"vatEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"contractAcceptanceWindowDays"}},{"kind":"Field","name":{"kind":"Name","value":"contractAcceptanceWindowEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"completionConfirmationGraceHours"}},{"kind":"Field","name":{"kind":"Name","value":"premiumAdFee"}},{"kind":"Field","name":{"kind":"Name","value":"premiumAdDurationDays"}},{"kind":"Field","name":{"kind":"Name","value":"premiumAdEnabled"}}]}}]}}]} as unknown as DocumentNode<GetSettingQuery, GetSettingQueryVariables>;
export const SetSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SettingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutAr"}},{"kind":"Field","name":{"kind":"Name","value":"aboutEn"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phones"}},{"kind":"Field","name":{"kind":"Name","value":"privacyPolicyAr"}},{"kind":"Field","name":{"kind":"Name","value":"privacyPolicyEn"}},{"kind":"Field","name":{"kind":"Name","value":"socialMediaLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"termsAr"}},{"kind":"Field","name":{"kind":"Name","value":"termsEn"}},{"kind":"Field","name":{"kind":"Name","value":"whatsappNumber"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerName"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}}]}}]}}]} as unknown as DocumentNode<SetSettingMutation, SetSettingMutationVariables>;
export const SignedContractByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"signedContractById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signedContractByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signedContractById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signedContractByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesAr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesEn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerName"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}}]}}]}}]} as unknown as DocumentNode<SignedContractByIdQuery, SignedContractByIdQueryVariables>;
export const SignedContractByProviderIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"signedContractByProviderId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signedContractByProviderId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"providerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesAr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesEn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerName"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}}]}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}}]}}]}}]} as unknown as DocumentNode<SignedContractByProviderIdQuery, SignedContractByProviderIdQueryVariables>;
export const SignedContractsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"signedContracts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedContractPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signedContracts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesAr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesEn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerName"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}}]}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}}]}}]}}]}}]} as unknown as DocumentNode<SignedContractsQuery, SignedContractsQueryVariables>;
export const ActivateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"activateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activateUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activateUserId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<ActivateUserMutation, ActivateUserMutationVariables>;
export const DeactivateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deactivateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deactivateUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeactivateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deactivateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deactivateUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<DeactivateUserMutation, DeactivateUserMutationVariables>;
export const RemoveUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveUserMutation, RemoveUserMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;

// <schema-object-types>
export type {
  AcceptContractInput,
  Admin,
  AdminAuthResponse,
  AdminPermission,
  AssignPermissionInput,
  AuthResponse,
  Bank,
  CancelContractInput,
  Category,
  ChangeEmailInput,
  ChangeEmailResponse,
  ChangePasswordInput,
  ChangePhoneInput,
  ChangePhoneResponse,
  City,
  Complaint,
  ComplaintMessage,
  CompleteContractInput,
  ContactMessage,
  Contract,
  ContractAudit,
  ContractDocument,
  ContractFinancialReport,
  ContractFinancialReportRow,
  ContractPaymentResponse,
  ContractQuote,
  ContractQuoteInput,
  ContractRule,
  ContractRuleInput,
  ContractSettlement,
  ContractSignature,
  Conversation,
  ConversationAccess,
  ConversationFeePaymentResponse,
  ConversationFeeReport,
  ConversationFeeReportRow,
  Country,
  CreateComplaintInput,
  CreateContactMessageInput,
  CreateContractInput,
  CreateConversationInput,
  CreateCountryInput,
  CreateListingInput,
  CreateListingMediaInput,
  CreateMessageInput,
  CreateNotificationInput,
  CreatePermissionInput,
  CreateProviderInput,
  CreateRatingInput,
  DeliveryCompany,
  Faq,
  Favorite,
  FavoritePaginationInput,
  ForgotPasswordInput,
  InitializeContractInput,
  Listing,
  ListingMedia,
  LoginInput,
  LoginProviderInput,
  Message,
  MessagePaginationInput,
  MessageSender,
  MutationAcceptContractArgs,
  MutationActivateAdminArgs,
  MutationActivateBankArgs,
  MutationActivateCategoryArgs,
  MutationActivateCityArgs,
  MutationActivateDeliveryCompanyArgs,
  MutationActivateListingArgs,
  MutationActivateProviderArgs,
  MutationActivateUserArgs,
  MutationAddComplaintMessageArgs,
  MutationAdminChangePasswordArgs,
  MutationAdminForgotPasswordArgs,
  MutationAdminLoginArgs,
  MutationAdminReactivateProviderArgs,
  MutationAdminReplyToComplaintArgs,
  MutationAdminResetPasswordArgs,
  MutationAdminResolveContractArgs,
  MutationAdminSetComplaintStatusArgs,
  MutationAdminTerminateProviderContractArgs,
  MutationAdminVerifyPasswordResetOtpArgs,
  MutationAssignPermissionToAdminArgs,
  MutationBulkAssignPermissionsToAdminArgs,
  MutationBulkRevokePermissionsFromAdminArgs,
  MutationBulkUpdateOrderArgs,
  MutationChangePasswordArgs,
  MutationChangeProviderPasswordArgs,
  MutationCompleteContractArgs,
  MutationCreateAdminArgs,
  MutationCreateBankArgs,
  MutationCreateCategoryArgs,
  MutationCreateCityArgs,
  MutationCreateComplaintArgs,
  MutationCreateContactMessageArgs,
  MutationCreateContractArgs,
  MutationCreateConversationArgs,
  MutationCreateCountryArgs,
  MutationCreateDeliveryCompanyArgs,
  MutationCreateFaqArgs,
  MutationCreateListingArgs,
  MutationCreateMessageArgs,
  MutationCreateNotificationArgs,
  MutationCreatePermissionArgs,
  MutationCreateProviderArgs,
  MutationCreateRatingArgs,
  MutationDeactivateAdminArgs,
  MutationDeactivateBankArgs,
  MutationDeactivateCategoryArgs,
  MutationDeactivateCityArgs,
  MutationDeactivateDeliveryCompanyArgs,
  MutationDeactivateListingArgs,
  MutationDeactivateProviderArgs,
  MutationDeactivateUserArgs,
  MutationDeleteAllNotificationsForUserArgs,
  MutationDeleteSignedContractArgs,
  MutationForgotPasswordArgs,
  MutationForgotProviderPasswordArgs,
  MutationInitializeContractArgs,
  MutationInitiateEmailChangeArgs,
  MutationInitiatePhoneChangeArgs,
  MutationInitiateProviderEmailChangeArgs,
  MutationInitiateProviderPhoneChangeArgs,
  MutationLoginArgs,
  MutationLoginProviderArgs,
  MutationMarkAllNotificationsAsReadArgs,
  MutationMarkAsReadArgs,
  MutationMarkConversationReadArgs,
  MutationMarkMultipleNotificationsAsReadArgs,
  MutationMarkNotificationAsReadArgs,
  MutationMarkNotificationAsUnreadArgs,
  MutationPayContractArgs,
  MutationPayConversationFeeArgs,
  MutationProviderCompleteContractArgs,
  MutationRefuseContractDeliveryArgs,
  MutationRegisterArgs,
  MutationRegisterProviderArgs,
  MutationRejectContractArgs,
  MutationRejectProviderJoinRequestArgs,
  MutationRemoveAdminArgs,
  MutationRemoveAvatarArgs,
  MutationRemoveBankArgs,
  MutationRemoveCategoryArgs,
  MutationRemoveCityArgs,
  MutationRemoveContactMessageArgs,
  MutationRemoveCountryArgs,
  MutationRemoveDeliveryCompanyArgs,
  MutationRemoveFaqArgs,
  MutationRemoveListingArgs,
  MutationRemoveNotificationArgs,
  MutationRemovePermissionArgs,
  MutationRemoveProviderArgs,
  MutationRemoveRatingArgs,
  MutationRemoveUserArgs,
  MutationReplyToContactMessageArgs,
  MutationRequestContractCancellationArgs,
  MutationResendContractArgs,
  MutationResendOtpArgs,
  MutationResendProviderOtpArgs,
  MutationResetPasswordArgs,
  MutationResetProviderPasswordArgs,
  MutationRestartConversationArgs,
  MutationRevokeAllPermissionsFromAdminArgs,
  MutationRevokePermissionFromAdminArgs,
  MutationSetProviderFavoriteArgs,
  MutationSetSettingArgs,
  MutationSignProviderContractArgs,
  MutationTerminateProviderContractArgs,
  MutationTrackActionArgs,
  MutationUpdateAdminArgs,
  MutationUpdateBankArgs,
  MutationUpdateCategoryArgs,
  MutationUpdateCityArgs,
  MutationUpdateContactMessageArgs,
  MutationUpdateCountryArgs,
  MutationUpdateDeliveryCompanyArgs,
  MutationUpdateFaqArgs,
  MutationUpdateListingArgs,
  MutationUpdateMeArgs,
  MutationUpdatePermissionArgs,
  MutationUpdateProviderArgs,
  MutationUpdateRatingArgs,
  MutationUpdateUserArgs,
  MutationVerifyEmailChangeArgs,
  MutationVerifyOtpArgs,
  MutationVerifyPasswordResetOtpArgs,
  MutationVerifyPhoneChangeArgs,
  MutationVerifyProviderEmailChangeArgs,
  MutationVerifyProviderOtpArgs,
  MutationVerifyProviderPasswordResetOtpArgs,
  MutationVerifyProviderPhoneChangeArgs,
  Notification,
  NotificationPaginationInput,
  NotificationStats,
  PaginatedAdminResponse,
  PaginatedBankResponse,
  PaginatedCategoryResponse,
  PaginatedCityResponse,
  PaginatedComplaintResponse,
  PaginatedContactMessageResponse,
  PaginatedContractResponse,
  PaginatedConversationResponse,
  PaginatedCountryResponse,
  PaginatedDeliveryCompanyResponse,
  PaginatedFavoriteResponse,
  PaginatedListingResponse,
  PaginatedMessageResponse,
  PaginatedNotificationResponse,
  PaginatedPaymentResponse,
  PaginatedProviderResponse,
  PaginatedRatingResponse,
  PaginatedSignedContractResponse,
  PaginatedUserResponse,
  PaginationMeta,
  Payment,
  PaymentPaginationInput,
  PaymentPayer,
  Permission,
  PremiumAdFeeReport,
  PremiumAdFeeReportRow,
  Provider,
  ProviderAuthResponse,
  ProviderCompleteContractInput,
  QueryAdminArgs,
  QueryAdminComplaintArgs,
  QueryAdminComplaintsArgs,
  QueryAdminContractArgs,
  QueryAdminContractsArgs,
  QueryAdminConversationArgs,
  QueryAdminConversationsArgs,
  QueryAdminPermissionsArgs,
  QueryAdminsArgs,
  QueryBankArgs,
  QueryBanksArgs,
  QueryCategoriesArgs,
  QueryCategoryArgs,
  QueryCitiesArgs,
  QueryCitiesByCountryArgs,
  QueryCityArgs,
  QueryContactMessageArgs,
  QueryContactMessagesArgs,
  QueryContractArgs,
  QueryContractFinancialReportArgs,
  QueryContractQuoteArgs,
  QueryContractsArgs,
  QueryConversationArgs,
  QueryConversationFeeReportArgs,
  QueryConversationsArgs,
  QueryCountriesArgs,
  QueryCountryArgs,
  QueryDeliveryCompaniesArgs,
  QueryDeliveryCompanyArgs,
  QueryFaqArgs,
  QueryIsProviderFavoriteArgs,
  QueryListingArgs,
  QueryListingsArgs,
  QueryMessageArgs,
  QueryMessagesArgs,
  QueryMyComplaintArgs,
  QueryMyComplaintsArgs,
  QueryMyFavoriteProvidersArgs,
  QueryMyListingArgs,
  QueryMyListingsArgs,
  QueryMyPopularCategoriesArgs,
  QueryMyPopularListingsArgs,
  QueryNotificationArgs,
  QueryNotificationStatsArgs,
  QueryNotificationsArgs,
  QueryPaymentArgs,
  QueryPaymentsArgs,
  QueryPermissionArgs,
  QueryPermissionAdminsArgs,
  QueryPremiumAdFeeReportArgs,
  QueryProviderArgs,
  QueryProviderByEmailArgs,
  QueryProviderByPhoneArgs,
  QueryProvidersArgs,
  QueryRatingArgs,
  QueryRatingStatisticsArgs,
  QueryRatingsArgs,
  QuerySignedContractByIdArgs,
  QuerySignedContractByProviderIdArgs,
  QuerySignedContractsArgs,
  QueryUserArgs,
  QueryUsersArgs,
  Rating,
  RatingStatistics,
  RefuseDeliveryInput,
  RegisterInput,
  RegisterProviderInput,
  RejectContractInput,
  RemoveListingResponse,
  ReportPageMeta,
  ResendContractInput,
  ResendOtpInput,
  ResetPasswordWithTokenInput,
  Setting,
  SignContractInput,
  SignedContract,
  SocialMediaLink,
  SubscriptionMessageAddedArgs,
  TrackActionInput,
  Tracking,
  UpdateContactMessageInput,
  UpdateCountryInput,
  UpdateListingInput,
  UpdateMeInput,
  UpdatePermissionInput,
  UpdateProviderInput,
  UpdateRatingInput,
  UpdateUserInput,
  User,
  VerifyAdminPasswordResetOtpResponse,
  VerifyChangeEmailInput,
  VerifyChangePhoneInput,
  VerifyOtpInput,
  VerifyPasswordResetOtpInput,
  VerifyPasswordResetOtpResponse,
} from './schema';
// </schema-object-types>
