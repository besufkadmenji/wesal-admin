/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

/** Type of user action (view or click) */
export enum ActionType {
  Click = 'CLICK',
  View = 'VIEW'
}

export type Admin = {
  adminPermissions?: Maybe<Array<AdminPermission>>;
  avatarFilename?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deactivationReason?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  organizationName: Scalars['String']['output'];
  permissionType: AdminPermissionType;
  phoneNumber: Scalars['String']['output'];
  platformManagerSignature?: Maybe<Scalars['String']['output']>;
  publicId?: Maybe<Scalars['Int']['output']>;
  roleName: Scalars['String']['output'];
  status: AdminStatus;
  updatedAt: Scalars['DateTime']['output'];
  userType: AdminUserType;
};

export type AdminAuthResponse = {
  accessToken: Scalars['String']['output'];
  admin: Admin;
};

export type AdminChangePasswordInput = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type AdminForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type AdminLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AdminPaginationInput = {
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  permissionType?: InputMaybe<AdminPermissionType>;
  search?: InputMaybe<Scalars['String']['input']>;
  /** Sort field name */
  sortBy?: InputMaybe<AdminSortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<AdminStatus>;
};

export type AdminPermission = {
  admin: Admin;
  adminId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  permission: Permission;
  permissionId: Scalars['ID']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
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
  newPassword: Scalars['String']['input'];
  resetToken: Scalars['String']['input'];
};

export type AdminSignContractInput = {
  providerId: Scalars['String']['input'];
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
  providerId: Scalars['String']['input'];
  terminationReason: Scalars['String']['input'];
};

/** Admin user types */
export enum AdminUserType {
  Organization = 'ORGANIZATION',
  Platform = 'PLATFORM'
}

export type AssignPermissionInput = {
  adminId: Scalars['ID']['input'];
  permissionId: Scalars['ID']['input'];
};

export type AuthResponse = {
  accessToken: Scalars['String']['output'];
  user: User;
};

export type Bank = {
  createdAt: Scalars['DateTime']['output'];
  deactivationReason?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nameAr: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  status: BankStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type BankPaginationInput = {
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<BankStatus>;
};

/** Status of the bank */
export enum BankStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type BulkAssignPermissionsInput = {
  adminId: Scalars['ID']['input'];
  permissionIds: Array<Scalars['ID']['input']>;
};

export type BulkUpdateFaqOrderInput = {
  items: Array<UpdateFaqOrderInput>;
};

export type Category = {
  createdAt: Scalars['DateTime']['output'];
  descriptionAr: Scalars['String']['output'];
  descriptionEn: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  nameAr: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  rulesAr: Scalars['String']['output'];
  rulesEn: Scalars['String']['output'];
  status: CategoryStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryPaginationInput = {
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<CategoryStatus>;
};

/** Category publication status */
export enum CategoryStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type ChangeEmailInput = {
  newEmail: Scalars['String']['input'];
};

export type ChangeEmailResponse = {
  changeToken: Scalars['String']['output'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
};

export type ChangePhoneInput = {
  countryCode: Scalars['String']['input'];
  newPhone: Scalars['String']['input'];
};

export type ChangePhoneResponse = {
  changeToken: Scalars['String']['output'];
};

export type City = {
  country?: Maybe<Country>;
  countryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  geoBoundary?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  nameAr: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  status: CityStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type CityPaginationInput = {
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  /** Sort field name */
  sortBy?: InputMaybe<CitySortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<CityStatus>;
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

export type Complaint = {
  adminResponse?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  listing: Listing;
  listingId: Scalars['String']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  reason: ComplaintReason;
  reviewedAt?: Maybe<Scalars['DateTime']['output']>;
  reviewedBy?: Maybe<Scalars['String']['output']>;
  reviewer?: Maybe<User>;
  status: ComplaintStatus;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type ComplaintPaginationInput = {
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  listingId?: InputMaybe<Scalars['String']['input']>;
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  reason?: InputMaybe<ComplaintReason>;
  reviewedBy?: InputMaybe<Scalars['String']['input']>;
  /** Sort field name */
  sortBy?: InputMaybe<ComplaintSortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<ComplaintStatus>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Reason for complaint */
export enum ComplaintReason {
  CopyrightViolation = 'COPYRIGHT_VIOLATION',
  Fraud = 'FRAUD',
  InappropriateContent = 'INAPPROPRIATE_CONTENT',
  MisleadingInformation = 'MISLEADING_INFORMATION',
  Offensive = 'OFFENSIVE',
  Other = 'OTHER',
  Spam = 'SPAM'
}

/** Available fields to sort complaints by */
export enum ComplaintSortField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Reason = 'reason',
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

export type ContactMessage = {
  attachmentFilename?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  dialCode?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isRead: Scalars['Boolean']['output'];
  messageContent: Scalars['String']['output'];
  messageType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  reply: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ContactMessagePaginationInput = {
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  messageType?: InputMaybe<Scalars['String']['input']>;
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  sortBy?: InputMaybe<ContactMessageSortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
};

/** Fields to sort contact messages by */
export enum ContactMessageSortField {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsRead = 'isRead'
}

export type Contract = {
  agreedPrice: Scalars['Float']['output'];
  client: User;
  clientId: Scalars['String']['output'];
  conversation: Conversation;
  conversationId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  downPayment: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  provider: Provider;
  providerId: Scalars['String']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  signatures?: Maybe<Array<ContractSignature>>;
  status: ContractStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type ContractPaginationInput = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  conversationId?: InputMaybe<Scalars['String']['input']>;
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  providerId?: InputMaybe<Scalars['String']['input']>;
  /** Sort field name */
  sortBy?: InputMaybe<ContractSortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<ContractStatus>;
};

export type ContractSignature = {
  contract: Contract;
  contractId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  signatureData: Scalars['String']['output'];
  signedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type ContractSignatureInput = {
  signatureData: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

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
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type Conversation = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isPaid: Scalars['Boolean']['output'];
  listing: Listing;
  listingId: Scalars['String']['output'];
  messages?: Maybe<Array<Message>>;
  provider: User;
  providerId: Scalars['String']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type ConversationPaginationInput = {
  isPaid?: InputMaybe<Scalars['Boolean']['input']>;
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  listingId?: InputMaybe<Scalars['String']['input']>;
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  providerId?: InputMaybe<Scalars['String']['input']>;
  /** Sort field name */
  sortBy?: InputMaybe<ConversationSortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Available fields to sort conversations by */
export enum ConversationSortField {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsPaid = 'isPaid',
  UpdatedAt = 'updatedAt'
}

export type Country = {
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dialCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nameAr: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CountryPaginationInput = {
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  /** Sort field name */
  sortBy?: InputMaybe<CountrySortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
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
  avatarFilename?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  organizationName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  permissionType: AdminPermissionType;
  phoneNumber: Scalars['String']['input'];
  roleName: Scalars['String']['input'];
  status?: AdminStatus;
  userType: AdminUserType;
};

export type CreateBankInput = {
  nameAr: Scalars['String']['input'];
  nameEn: Scalars['String']['input'];
  status: BankStatus;
};

export type CreateCategoryInput = {
  descriptionAr: Scalars['String']['input'];
  descriptionEn: Scalars['String']['input'];
  image: Scalars['String']['input'];
  nameAr: Scalars['String']['input'];
  nameEn: Scalars['String']['input'];
  rulesAr: Scalars['String']['input'];
  rulesEn: Scalars['String']['input'];
};

export type CreateCityInput = {
  countryId: Scalars['ID']['input'];
  geoBoundary?: InputMaybe<Scalars['JSON']['input']>;
  nameAr: Scalars['String']['input'];
  nameEn: Scalars['String']['input'];
};

export type CreateComplaintInput = {
  description: Scalars['String']['input'];
  listingId: Scalars['String']['input'];
  reason: ComplaintReason;
  status?: InputMaybe<ComplaintStatus>;
  userId: Scalars['String']['input'];
};

export type CreateContactMessageInput = {
  attachmentFilename?: InputMaybe<Scalars['String']['input']>;
  dialCode?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  messageContent: Scalars['String']['input'];
  messageType: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateContractInput = {
  agreedPrice: Scalars['Float']['input'];
  clientId: Scalars['String']['input'];
  conversationId: Scalars['String']['input'];
  downPayment: Scalars['Float']['input'];
  providerId: Scalars['String']['input'];
  signatures?: InputMaybe<Array<ContractSignatureInput>>;
  status?: InputMaybe<ContractStatus>;
};

export type CreateConversationInput = {
  isPaid?: InputMaybe<Scalars['Boolean']['input']>;
  listingId: Scalars['String']['input'];
  providerId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateCountryInput = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateDeliveryCompanyInput = {
  nameAr: Scalars['String']['input'];
  nameEn: Scalars['String']['input'];
  status: DeliveryCompanyStatus;
};

export type CreateFaqInput = {
  answerAr: Scalars['String']['input'];
  answerEn: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Float']['input']>;
  questionAr: Scalars['String']['input'];
  questionEn: Scalars['String']['input'];
};

export type CreateFavoriteInput = {
  listingId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateListingInput = {
  categoryId: Scalars['String']['input'];
  cityId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  photos?: InputMaybe<Array<CreateListingMediaInput>>;
  price: Scalars['Float']['input'];
  status?: InputMaybe<ListingStatus>;
  story?: InputMaybe<CreateListingMediaInput>;
  type: ListingType;
};

export type CreateListingMediaInput = {
  filename: Scalars['String']['input'];
  id: Scalars['String']['input'];
  originalFilename: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  sortOrder: Scalars['Int']['input'];
  type: MediaType;
};

export type CreateMessageInput = {
  content: Scalars['String']['input'];
  conversationId: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
};

export type CreateNotificationInput = {
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  message: Scalars['String']['input'];
  relatedEntityId?: InputMaybe<Scalars['String']['input']>;
  relatedEntityType?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: NotificationType;
  userId: Scalars['String']['input'];
};

export type CreatePaymentInput = {
  amount: Scalars['Float']['input'];
  contractId: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  paymentMethod: PaymentMethod;
  status?: InputMaybe<PaymentStatus>;
  transactionReference?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type CreatePermissionInput = {
  action: Scalars['String']['input'];
  description: Scalars['String']['input'];
  module: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nameAr: Scalars['String']['input'];
  permissionPlatform?: PermissionPlatform;
  resource: Scalars['String']['input'];
};

export type CreateProviderInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatarFilename?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['String']['input']>>;
  cityId?: InputMaybe<Scalars['String']['input']>;
  commercialName?: InputMaybe<Scalars['String']['input']>;
  commercialRegistrationFilename?: InputMaybe<Scalars['String']['input']>;
  commercialRegistrationNumber?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  dialCode?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  ibanNumber?: InputMaybe<Scalars['String']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  withAbsher?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateRatingInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  listingId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
};

export type DeactivateAdminInput = {
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type DeactivateBankInput = {
  reason: Scalars['String']['input'];
};

export type DeactivateDeliveryCompanyInput = {
  reason: Scalars['String']['input'];
};

export type DeactivateUserInput = {
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteProviderInput = {
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteUserInput = {
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type DeliveryCompany = {
  createdAt: Scalars['DateTime']['output'];
  deactivationReason?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nameAr: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  status: DeliveryCompanyStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type DeliveryCompanyPaginationInput = {
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<DeliveryCompanyStatus>;
};

/** Status of the delivery company */
export enum DeliveryCompanyStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Faq = {
  answerAr: Scalars['String']['output'];
  answerEn: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  order: Scalars['Float']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  questionAr: Scalars['String']['output'];
  questionEn: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Favorite = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  listing: Listing;
  listingId: Scalars['String']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type FavoritePaginationInput = {
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  listingId?: InputMaybe<Scalars['String']['input']>;
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  /** Sort field name */
  sortBy?: InputMaybe<FavoriteSortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Available fields to sort favorites by */
export enum FavoriteSortField {
  CreatedAt = 'createdAt',
  Id = 'id'
}

export type ForgotPasswordInput = {
  emailOrPhone: Scalars['String']['input'];
};

export type Listing = {
  category?: Maybe<Category>;
  categoryId: Scalars['String']['output'];
  city?: Maybe<City>;
  cityId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deactivationReason?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  photos: Array<ListingMedia>;
  price: Scalars['Float']['output'];
  provider?: Maybe<Provider>;
  providerId: Scalars['String']['output'];
  status: ListingStatus;
  story: ListingMedia;
  tags: Scalars['String']['output'];
  type: ListingType;
  updatedAt: Scalars['DateTime']['output'];
};

export type ListingMedia = {
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  originalFilename: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  sortOrder: Scalars['Float']['output'];
  type: MediaType;
};

export type ListingPaginationInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['String']['input']>;
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  /** Sort field name */
  sortBy?: InputMaybe<ListingSortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<ListingStatus>;
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
  Inactive = 'INACTIVE'
}

/** Listing type (free or featured) */
export enum ListingType {
  Featured = 'FEATURED',
  Free = 'FREE'
}

export type LoginInput = {
  emailOrPhone: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginProviderInput = {
  emailOrPhone: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** Media file type */
export enum MediaType {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type Message = {
  content: Scalars['String']['output'];
  conversation: Conversation;
  conversationId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  sender: User;
  senderId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MessagePaginationInput = {
  conversationId?: InputMaybe<Scalars['String']['input']>;
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  senderId?: InputMaybe<Scalars['String']['input']>;
  /** Sort field name */
  sortBy?: InputMaybe<MessageSortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
};

/** Available fields to sort messages by */
export enum MessageSortField {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type Mutation = {
  activateAdmin: Admin;
  activateBank: Bank;
  activateCategory: Category;
  activateCity: City;
  activateDeliveryCompany: DeliveryCompany;
  activateListing: Listing;
  /** Activate provider by ID */
  activateProvider: Provider;
  /** Activate user by ID */
  activateUser: User;
  adminChangePassword: Scalars['Boolean']['output'];
  adminForgotPassword: Scalars['Boolean']['output'];
  adminLogin: AdminAuthResponse;
  adminResetPassword: Scalars['Boolean']['output'];
  /** Admin signs provider contract */
  adminSignProviderContract: Provider;
  /** Admin terminates provider contract */
  adminTerminateProviderContract: Provider;
  adminVerifyPasswordResetOtp: VerifyAdminPasswordResetOtpResponse;
  assignPermissionToAdmin: AdminPermission;
  bulkAssignPermissionsToAdmin: Array<AdminPermission>;
  bulkRevokePermissionsFromAdmin: Scalars['Boolean']['output'];
  /** Bulk update FAQ order (admin only) */
  bulkUpdateOrder: Array<Faq>;
  /** Change password for authenticated user */
  changePassword: Scalars['Boolean']['output'];
  /** Change password for authenticated provider */
  changeProviderPassword: Scalars['Boolean']['output'];
  createAdmin: Admin;
  createBank: Bank;
  createCategory: Category;
  createCity: City;
  createComplaint: Complaint;
  /** Create contact message (public) */
  createContactMessage: ContactMessage;
  createContract: Contract;
  createConversation: Conversation;
  createCountry: Country;
  createDeliveryCompany: DeliveryCompany;
  /** Create FAQ (admin only) */
  createFaq: Faq;
  createFavorite: Favorite;
  createListing: Listing;
  createMessage: Message;
  createNotification: Notification;
  createPayment: Payment;
  createPermission: Permission;
  /** Create a new provider */
  createProvider: Provider;
  createRating: Rating;
  deactivateAdmin: Admin;
  deactivateBank: Bank;
  deactivateCategory: Category;
  deactivateCity: City;
  deactivateDeliveryCompany: DeliveryCompany;
  deactivateListing: Listing;
  /** Deactivate provider */
  deactivateProvider: Provider;
  /** Deactivate user by ID */
  deactivateUser: User;
  /** Delete all notifications for a user */
  deleteAllNotificationsForUser: Scalars['Boolean']['output'];
  deleteSignedContract: SignedContract;
  /** Request password reset OTP */
  forgotPassword: Scalars['Boolean']['output'];
  /** Request password reset OTP for provider */
  forgotProviderPassword: Scalars['Boolean']['output'];
  /** Initiate email change - sends OTP to new email and returns change token */
  initiateEmailChange: ChangeEmailResponse;
  /** Initiate phone change - sends OTP to new phone and returns change token */
  initiatePhoneChange: ChangePhoneResponse;
  /** Initiate provider email change - sends OTP to new email and returns change token */
  initiateProviderEmailChange: ChangeEmailResponse;
  /** Initiate provider phone change - sends OTP to new phone and returns change token */
  initiateProviderPhoneChange: ChangePhoneResponse;
  /** Login with email and password */
  login: AuthResponse;
  /** Login as provider with email/phone and password */
  loginProvider: ProviderAuthResponse;
  /** Mark all notifications as read for a user */
  markAllNotificationsAsRead: Scalars['Boolean']['output'];
  /** Mark message as read (admin only) */
  markAsRead: ContactMessage;
  /** Mark multiple notifications as read */
  markMultipleNotificationsAsRead: Scalars['Boolean']['output'];
  /** Mark a notification as read */
  markNotificationAsRead: Notification;
  /** Mark a notification as unread */
  markNotificationAsUnread: Notification;
  /** Process a refund for a completed payment */
  refundPayment: Payment;
  /** Register a new user and send verification OTPs */
  register: User;
  /** Register a new provider and send verification OTPs */
  registerProvider: Provider;
  /** Reject a complaint */
  rejectComplaint: Complaint;
  /** Reject a pending provider join request */
  rejectProviderJoinRequest: Provider;
  removeAdmin: Scalars['Boolean']['output'];
  /** Delete user avatar by ID */
  removeAvatar: Scalars['Boolean']['output'];
  removeBank: Bank;
  removeCategory: Category;
  removeCity: City;
  removeComplaint: Complaint;
  /** Delete contact message (admin only) */
  removeContactMessage: Scalars['Boolean']['output'];
  removeContract: Contract;
  removeConversation: Conversation;
  removeCountry: Country;
  removeDeliveryCompany: DeliveryCompany;
  /** Remove FAQ (admin only) */
  removeFaq: Scalars['Boolean']['output'];
  removeFavorite: Favorite;
  /** Remove favorite by user and listing IDs */
  removeFavoriteByUserAndListing: Favorite;
  removeListing: RemoveListingResponse;
  removeMessage: Message;
  removeNotification: Notification;
  removePayment: Payment;
  removePermission: Scalars['Boolean']['output'];
  /** Remove provider */
  removeProvider: Provider;
  /** Delete provider avatar by ID */
  removeProviderAvatar: Scalars['Boolean']['output'];
  removeRating: Rating;
  /** Delete user by ID */
  removeUser: User;
  /** Reply to contact message (admin only) */
  replyToContactMessage: ContactMessage;
  /** Resend OTP for email or phone verification */
  resendOtp: Scalars['Boolean']['output'];
  /** Resend OTP for provider email or phone verification */
  resendProviderOtp: Scalars['Boolean']['output'];
  /** Reset password using reset token */
  resetPassword: Scalars['Boolean']['output'];
  /** Reset provider password using reset token */
  resetProviderPassword: Scalars['Boolean']['output'];
  /** Review and resolve a complaint */
  reviewComplaint: Complaint;
  revokeAllPermissionsFromAdmin: Scalars['Boolean']['output'];
  revokePermissionFromAdmin: Scalars['Boolean']['output'];
  /** Create or update application settings (admin only) */
  setSetting: Setting;
  /** Sign contract as provider */
  signProviderContract: Provider;
  /** Terminate provider contract */
  terminateProviderContract: Provider;
  trackAction: Tracking;
  updateAdmin: Admin;
  updateBank: Bank;
  updateCategory: Category;
  updateCity: City;
  updateComplaint: Complaint;
  /** Update contact message (admin only) */
  updateContactMessage: ContactMessage;
  updateContract: Contract;
  updateConversation: Conversation;
  updateCountry: Country;
  updateDeliveryCompany: DeliveryCompany;
  /** Update FAQ (admin only) */
  updateFaq: Faq;
  updateListing: Listing;
  updateMessage: Message;
  updatePayment: Payment;
  updatePermission: Permission;
  /** Update provider */
  updateProvider: Provider;
  updateRating: Rating;
  /** Update user */
  updateUser: User;
  /** Verify email change with OTP and change token */
  verifyEmailChange: Scalars['Boolean']['output'];
  /** Verify email or phone with OTP */
  verifyOtp: Scalars['Boolean']['output'];
  /** Verify password reset OTP and get reset token */
  verifyPasswordResetOtp: VerifyPasswordResetOtpResponse;
  /** Verify phone change with OTP and change token */
  verifyPhoneChange: Scalars['Boolean']['output'];
  /** Verify email change with OTP and change token */
  verifyProviderEmailChange: Scalars['Boolean']['output'];
  /** Verify provider email or phone with OTP */
  verifyProviderOtp: Scalars['Boolean']['output'];
  /** Verify provider password reset OTP and get reset token */
  verifyProviderPasswordResetOtp: VerifyPasswordResetOtpResponse;
  /** Verify phone change with OTP and change token */
  verifyProviderPhoneChange: Scalars['Boolean']['output'];
};


export type MutationActivateAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationActivateBankArgs = {
  id: Scalars['ID']['input'];
};


export type MutationActivateCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationActivateCityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationActivateDeliveryCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationActivateListingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationActivateProviderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationActivateUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAdminChangePasswordArgs = {
  input: AdminChangePasswordInput;
};


export type MutationAdminForgotPasswordArgs = {
  input: AdminForgotPasswordInput;
};


export type MutationAdminLoginArgs = {
  input: AdminLoginInput;
};


export type MutationAdminResetPasswordArgs = {
  input: AdminResetPasswordInput;
};


export type MutationAdminSignProviderContractArgs = {
  input: AdminSignContractInput;
};


export type MutationAdminTerminateProviderContractArgs = {
  input: AdminTerminateContractInput;
};


export type MutationAdminVerifyPasswordResetOtpArgs = {
  input: VerifyAdminPasswordResetOtpInput;
};


export type MutationAssignPermissionToAdminArgs = {
  input: AssignPermissionInput;
};


export type MutationBulkAssignPermissionsToAdminArgs = {
  input: BulkAssignPermissionsInput;
};


export type MutationBulkRevokePermissionsFromAdminArgs = {
  adminId: Scalars['ID']['input'];
  permissionIds: Array<Scalars['ID']['input']>;
};


export type MutationBulkUpdateOrderArgs = {
  input: BulkUpdateFaqOrderInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationChangeProviderPasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput;
};


export type MutationCreateBankArgs = {
  input: CreateBankInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateCityArgs = {
  input: CreateCityInput;
};


export type MutationCreateComplaintArgs = {
  input: CreateComplaintInput;
};


export type MutationCreateContactMessageArgs = {
  createContactMessageInput: CreateContactMessageInput;
};


export type MutationCreateContractArgs = {
  input: CreateContractInput;
};


export type MutationCreateConversationArgs = {
  input: CreateConversationInput;
};


export type MutationCreateCountryArgs = {
  input: CreateCountryInput;
};


export type MutationCreateDeliveryCompanyArgs = {
  input: CreateDeliveryCompanyInput;
};


export type MutationCreateFaqArgs = {
  createFaqInput: CreateFaqInput;
};


export type MutationCreateFavoriteArgs = {
  input: CreateFavoriteInput;
};


export type MutationCreateListingArgs = {
  createListingInput: CreateListingInput;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationCreateNotificationArgs = {
  input: CreateNotificationInput;
};


export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};


export type MutationCreatePermissionArgs = {
  createPermissionInput: CreatePermissionInput;
};


export type MutationCreateProviderArgs = {
  createProviderInput: CreateProviderInput;
};


export type MutationCreateRatingArgs = {
  input: CreateRatingInput;
};


export type MutationDeactivateAdminArgs = {
  id: Scalars['ID']['input'];
  input: DeactivateAdminInput;
};


export type MutationDeactivateBankArgs = {
  id: Scalars['ID']['input'];
  input: DeactivateBankInput;
};


export type MutationDeactivateCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeactivateCityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeactivateDeliveryCompanyArgs = {
  id: Scalars['ID']['input'];
  input: DeactivateDeliveryCompanyInput;
};


export type MutationDeactivateListingArgs = {
  id: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
};


export type MutationDeactivateProviderArgs = {
  id: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeactivateUserArgs = {
  id: Scalars['ID']['input'];
  input: DeactivateUserInput;
};


export type MutationDeleteAllNotificationsForUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationDeleteSignedContractArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationForgotProviderPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationInitiateEmailChangeArgs = {
  input: ChangeEmailInput;
};


export type MutationInitiatePhoneChangeArgs = {
  input: ChangePhoneInput;
};


export type MutationInitiateProviderEmailChangeArgs = {
  input: ChangeEmailInput;
};


export type MutationInitiateProviderPhoneChangeArgs = {
  input: ChangePhoneInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLoginProviderArgs = {
  input: LoginProviderInput;
};


export type MutationMarkAllNotificationsAsReadArgs = {
  userId: Scalars['String']['input'];
};


export type MutationMarkAsReadArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMarkMultipleNotificationsAsReadArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationMarkNotificationAsReadArgs = {
  id: Scalars['String']['input'];
};


export type MutationMarkNotificationAsUnreadArgs = {
  id: Scalars['String']['input'];
};


export type MutationRefundPaymentArgs = {
  id: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRegisterProviderArgs = {
  input: RegisterProviderInput;
};


export type MutationRejectComplaintArgs = {
  complaintId: Scalars['String']['input'];
  reason: Scalars['String']['input'];
  reviewerId: Scalars['String']['input'];
};


export type MutationRejectProviderJoinRequestArgs = {
  id: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
};


export type MutationRemoveAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveAvatarArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveBankArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveCityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveComplaintArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveContactMessageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveContractArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveConversationArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveCountryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveDeliveryCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveFaqArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveFavoriteArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveFavoriteByUserAndListingArgs = {
  listingId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationRemoveListingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveMessageArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveNotificationArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemovePaymentArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemovePermissionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveProviderArgs = {
  id: Scalars['ID']['input'];
  input: DeleteProviderInput;
};


export type MutationRemoveProviderAvatarArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveRatingArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']['input'];
  input: DeleteUserInput;
};


export type MutationReplyToContactMessageArgs = {
  id: Scalars['ID']['input'];
  message: Scalars['String']['input'];
};


export type MutationResendOtpArgs = {
  input: ResendOtpInput;
};


export type MutationResendProviderOtpArgs = {
  input: ResendOtpInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordWithTokenInput;
};


export type MutationResetProviderPasswordArgs = {
  input: ResetPasswordWithTokenInput;
};


export type MutationReviewComplaintArgs = {
  input: ReviewComplaintInput;
};


export type MutationRevokeAllPermissionsFromAdminArgs = {
  adminId: Scalars['ID']['input'];
};


export type MutationRevokePermissionFromAdminArgs = {
  adminId: Scalars['ID']['input'];
  permissionId: Scalars['ID']['input'];
};


export type MutationSetSettingArgs = {
  input: SettingInput;
};


export type MutationSignProviderContractArgs = {
  input: SignContractInput;
};


export type MutationTerminateProviderContractArgs = {
  terminationReason: Scalars['String']['input'];
};


export type MutationTrackActionArgs = {
  input: TrackActionInput;
};


export type MutationUpdateAdminArgs = {
  id: Scalars['ID']['input'];
  updateAdminInput: UpdateAdminInput;
};


export type MutationUpdateBankArgs = {
  input: UpdateBankInput;
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationUpdateCityArgs = {
  input: UpdateCityInput;
};


export type MutationUpdateComplaintArgs = {
  input: UpdateComplaintInput;
};


export type MutationUpdateContactMessageArgs = {
  updateContactMessageInput: UpdateContactMessageInput;
};


export type MutationUpdateContractArgs = {
  input: UpdateContractInput;
};


export type MutationUpdateConversationArgs = {
  input: UpdateConversationInput;
};


export type MutationUpdateCountryArgs = {
  input: UpdateCountryInput;
};


export type MutationUpdateDeliveryCompanyArgs = {
  input: UpdateDeliveryCompanyInput;
};


export type MutationUpdateFaqArgs = {
  updateFaqInput: UpdateFaqInput;
};


export type MutationUpdateListingArgs = {
  updateListingInput: UpdateListingInput;
};


export type MutationUpdateMessageArgs = {
  input: UpdateMessageInput;
};


export type MutationUpdatePaymentArgs = {
  input: UpdatePaymentInput;
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['ID']['input'];
  updatePermissionInput: UpdatePermissionInput;
};


export type MutationUpdateProviderArgs = {
  updateProviderInput: UpdateProviderInput;
};


export type MutationUpdateRatingArgs = {
  input: UpdateRatingInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationVerifyEmailChangeArgs = {
  input: VerifyChangeEmailInput;
};


export type MutationVerifyOtpArgs = {
  input: VerifyOtpInput;
};


export type MutationVerifyPasswordResetOtpArgs = {
  input: VerifyPasswordResetOtpInput;
};


export type MutationVerifyPhoneChangeArgs = {
  input: VerifyChangePhoneInput;
};


export type MutationVerifyProviderEmailChangeArgs = {
  input: VerifyChangeEmailInput;
};


export type MutationVerifyProviderOtpArgs = {
  input: VerifyOtpInput;
};


export type MutationVerifyProviderPasswordResetOtpArgs = {
  input: VerifyPasswordResetOtpInput;
};


export type MutationVerifyProviderPhoneChangeArgs = {
  input: VerifyChangePhoneInput;
};

export type Notification = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isRead: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  readAt?: Maybe<Scalars['DateTime']['output']>;
  relatedEntityId?: Maybe<Scalars['String']['output']>;
  relatedEntityType?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: NotificationType;
  user: User;
  userId: Scalars['String']['output'];
};

export type NotificationPaginationInput = {
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  /** Sort field name */
  sortBy?: InputMaybe<NotificationSortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  type?: InputMaybe<NotificationType>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Available fields to sort notifications by */
export enum NotificationSortField {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsRead = 'isRead',
  Type = 'type'
}

export type NotificationStats = {
  readCount: Scalars['Int']['output'];
  totalNotifications: Scalars['Int']['output'];
  unreadCount: Scalars['Int']['output'];
};

/** Type of notification */
export enum NotificationType {
  ComplaintResolved = 'COMPLAINT_RESOLVED',
  ComplaintSubmitted = 'COMPLAINT_SUBMITTED',
  ContractCreated = 'CONTRACT_CREATED',
  ContractSigned = 'CONTRACT_SIGNED',
  ListingApproved = 'LISTING_APPROVED',
  ListingRejected = 'LISTING_REJECTED',
  NewMessage = 'NEW_MESSAGE',
  NewRating = 'NEW_RATING',
  PaymentCompleted = 'PAYMENT_COMPLETED',
  PaymentReceived = 'PAYMENT_RECEIVED',
  SystemAnnouncement = 'SYSTEM_ANNOUNCEMENT'
}

/** Type of OTP */
export enum OtpType {
  EmailVerification = 'EMAIL_VERIFICATION',
  PasswordReset = 'PASSWORD_RESET',
  PhoneVerification = 'PHONE_VERIFICATION'
}

export type PaginatedAdminResponse = {
  /** List of items */
  items: Array<Admin>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedBankResponse = {
  /** List of items */
  items: Array<Bank>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedCategoryResponse = {
  /** List of items */
  items: Array<Category>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedCityResponse = {
  /** List of items */
  items: Array<City>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedComplaintResponse = {
  /** List of items */
  items: Array<Complaint>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedContactMessageResponse = {
  /** List of items */
  items: Array<ContactMessage>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedContractResponse = {
  /** List of items */
  items: Array<Contract>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedConversationResponse = {
  /** List of items */
  items: Array<Conversation>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedCountryResponse = {
  /** List of items */
  items: Array<Country>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedDeliveryCompanyResponse = {
  /** List of items */
  items: Array<DeliveryCompany>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedFavoriteResponse = {
  /** List of items */
  items: Array<Favorite>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedListingResponse = {
  /** List of items */
  items: Array<Listing>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedMessageResponse = {
  /** List of items */
  items: Array<Message>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedNotificationResponse = {
  /** List of items */
  items: Array<Notification>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedPaymentResponse = {
  /** List of items */
  items: Array<Payment>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedProviderResponse = {
  items: Array<Provider>;
  meta: PaginationMeta;
};

export type PaginatedRatingResponse = {
  /** List of items */
  items: Array<Rating>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedSignedContractResponse = {
  /** List of items */
  items: Array<SignedContract>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginatedUserResponse = {
  /** List of items */
  items: Array<User>;
  /** Pagination metadata */
  meta: PaginationMeta;
};

export type PaginationMeta = {
  /** Whether there is a next page */
  hasNext: Scalars['Boolean']['output'];
  /** Whether there is a previous page */
  hasPrevious: Scalars['Boolean']['output'];
  /** Number of items per page */
  limit: Scalars['Int']['output'];
  /** Current page number */
  page: Scalars['Int']['output'];
  /** Total number of items */
  total: Scalars['Int']['output'];
  /** Total number of pages */
  totalPages: Scalars['Int']['output'];
};

export type Payment = {
  amount: Scalars['Float']['output'];
  contract: Contract;
  contractId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  gatewayResponse?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  paymentMethod: PaymentMethod;
  publicId?: Maybe<Scalars['Int']['output']>;
  status: PaymentStatus;
  transactionReference?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

/** Payment method */
export enum PaymentMethod {
  BankTransfer = 'BANK_TRANSFER',
  Cash = 'CASH',
  CreditCard = 'CREDIT_CARD',
  DebitCard = 'DEBIT_CARD',
  Wallet = 'WALLET'
}

export type PaymentPaginationInput = {
  contractId?: InputMaybe<Scalars['String']['input']>;
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  paymentMethod?: InputMaybe<PaymentMethod>;
  /** Sort field name */
  sortBy?: InputMaybe<PaymentSortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<PaymentStatus>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Available fields to sort payments by */
export enum PaymentSortField {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  Id = 'id',
  PaymentMethod = 'paymentMethod',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

/** Payment status */
export enum PaymentStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED'
}

export type Permission = {
  action: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  module: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nameAr: Scalars['String']['output'];
  permissionPlatform: PermissionPlatform;
  publicId?: Maybe<Scalars['Int']['output']>;
  resource: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Permission platform types */
export enum PermissionPlatform {
  Admin = 'ADMIN',
  Global = 'GLOBAL'
}

export type Provider = {
  address?: Maybe<Scalars['String']['output']>;
  avatarFilename?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Category>>;
  city?: Maybe<City>;
  cityId?: Maybe<Scalars['String']['output']>;
  commercialName?: Maybe<Scalars['String']['output']>;
  commercialRegistrationFilename?: Maybe<Scalars['String']['output']>;
  commercialRegistrationNumber?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  countryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deactivationReason?: Maybe<Scalars['String']['output']>;
  deleteReason?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  dialCode?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  ibanNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  languageCode?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  phoneVerified: Scalars['Boolean']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
  signedContract?: Maybe<SignedContract>;
  status: ProviderStatus;
  updatedAt: Scalars['DateTime']['output'];
  withAbsher?: Maybe<Scalars['Boolean']['output']>;
};

export type ProviderAuthResponse = {
  accessToken: Scalars['String']['output'];
  provider: Provider;
};

export type ProviderPaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ProviderStatus>;
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

export type Query = {
  admin: Admin;
  adminPermissions: Array<AdminPermission>;
  admins: PaginatedAdminResponse;
  bank: Bank;
  banks: PaginatedBankResponse;
  categories: PaginatedCategoryResponse;
  category: Category;
  /** Get all cities with pagination */
  cities: PaginatedCityResponse;
  /** Get cities by country with pagination */
  citiesByCountry: PaginatedCityResponse;
  city: City;
  complaint: Complaint;
  complaints: PaginatedComplaintResponse;
  /** Get single contact message (admin only) */
  contactMessage: ContactMessage;
  /** Get contact messages (admin only) with pagination */
  contactMessages: PaginatedContactMessageResponse;
  contract: Contract;
  contracts: PaginatedContractResponse;
  conversation: Conversation;
  conversations: PaginatedConversationResponse;
  /** Get all countries with pagination */
  countries: PaginatedCountryResponse;
  country: Country;
  deliveryCompanies: PaginatedDeliveryCompanyResponse;
  deliveryCompany: DeliveryCompany;
  faq: Faq;
  /** Get all active FAQs (or all if admin) */
  faqs: Array<Faq>;
  favorite: Favorite;
  favorites: PaginatedFavoriteResponse;
  /** Get application settings (admin only) */
  getSetting: Setting;
  /** Check if listing is favorited by user */
  isFavorite: Scalars['Boolean']['output'];
  listing?: Maybe<Listing>;
  listings: PaginatedListingResponse;
  meAdmin: Admin;
  /** Get current authenticated provider */
  meProvider: Provider;
  /** Get current authenticated user */
  meUser: User;
  message: Message;
  messages: PaginatedMessageResponse;
  myListings: PaginatedListingResponse;
  myPopularCategories: Array<Scalars['String']['output']>;
  myPopularListings: Array<Scalars['String']['output']>;
  notification: Notification;
  /** Get notification statistics for a user */
  notificationStats: NotificationStats;
  notifications: PaginatedNotificationResponse;
  payment: Payment;
  payments: PaginatedPaymentResponse;
  permission: Permission;
  permissionAdmins: Array<AdminPermission>;
  permissions: Array<Permission>;
  /** Get provider by ID */
  provider: Provider;
  /** Get provider by email */
  providerByEmail: Provider;
  /** Get provider by phone */
  providerByPhone: Provider;
  /** Get all providers with pagination */
  providers: PaginatedProviderResponse;
  rating: Rating;
  /** Get rating statistics for an listing */
  ratingStatistics: RatingStatistics;
  ratings: PaginatedRatingResponse;
  signedContractById?: Maybe<SignedContract>;
  signedContractByProviderId?: Maybe<SignedContract>;
  signedContracts: PaginatedSignedContractResponse;
  /** Get user by ID */
  user: User;
  /** Get all users with pagination by role */
  users: PaginatedUserResponse;
};


export type QueryAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdminPermissionsArgs = {
  adminId: Scalars['ID']['input'];
};


export type QueryAdminsArgs = {
  paginationInput?: InputMaybe<AdminPaginationInput>;
};


export type QueryBankArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBanksArgs = {
  input?: InputMaybe<BankPaginationInput>;
};


export type QueryCategoriesArgs = {
  input?: InputMaybe<CategoryPaginationInput>;
};


export type QueryCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryCitiesArgs = {
  pagination?: InputMaybe<CityPaginationInput>;
};


export type QueryCitiesByCountryArgs = {
  countryId: Scalars['ID']['input'];
  pagination?: InputMaybe<CityPaginationInput>;
};


export type QueryCityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryComplaintArgs = {
  id: Scalars['String']['input'];
};


export type QueryComplaintsArgs = {
  input?: InputMaybe<ComplaintPaginationInput>;
};


export type QueryContactMessageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContactMessagesArgs = {
  paginationInput?: InputMaybe<ContactMessagePaginationInput>;
};


export type QueryContractArgs = {
  id: Scalars['String']['input'];
};


export type QueryContractsArgs = {
  input?: InputMaybe<ContractPaginationInput>;
};


export type QueryConversationArgs = {
  id: Scalars['String']['input'];
};


export type QueryConversationsArgs = {
  input?: InputMaybe<ConversationPaginationInput>;
};


export type QueryCountriesArgs = {
  pagination?: InputMaybe<CountryPaginationInput>;
};


export type QueryCountryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDeliveryCompaniesArgs = {
  input?: InputMaybe<DeliveryCompanyPaginationInput>;
};


export type QueryDeliveryCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFaqArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFavoriteArgs = {
  id: Scalars['String']['input'];
};


export type QueryFavoritesArgs = {
  input?: InputMaybe<FavoritePaginationInput>;
};


export type QueryIsFavoriteArgs = {
  listingId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type QueryListingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryListingsArgs = {
  paginationInput: ListingPaginationInput;
};


export type QueryMessageArgs = {
  id: Scalars['String']['input'];
};


export type QueryMessagesArgs = {
  input?: InputMaybe<MessagePaginationInput>;
};


export type QueryMyListingsArgs = {
  paginationInput: ListingPaginationInput;
};


export type QueryMyPopularCategoriesArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryMyPopularListingsArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryNotificationArgs = {
  id: Scalars['String']['input'];
};


export type QueryNotificationStatsArgs = {
  userId: Scalars['String']['input'];
};


export type QueryNotificationsArgs = {
  input?: InputMaybe<NotificationPaginationInput>;
};


export type QueryPaymentArgs = {
  id: Scalars['String']['input'];
};


export type QueryPaymentsArgs = {
  input?: InputMaybe<PaymentPaginationInput>;
};


export type QueryPermissionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPermissionAdminsArgs = {
  permissionId: Scalars['ID']['input'];
};


export type QueryProviderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProviderByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryProviderByPhoneArgs = {
  phone: Scalars['String']['input'];
};


export type QueryProvidersArgs = {
  pagination: ProviderPaginationInput;
};


export type QueryRatingArgs = {
  id: Scalars['String']['input'];
};


export type QueryRatingStatisticsArgs = {
  listingId: Scalars['String']['input'];
};


export type QueryRatingsArgs = {
  input?: InputMaybe<RatingPaginationInput>;
};


export type QuerySignedContractByIdArgs = {
  id: Scalars['String']['input'];
};


export type QuerySignedContractByProviderIdArgs = {
  providerId: Scalars['String']['input'];
};


export type QuerySignedContractsArgs = {
  input?: InputMaybe<SignedContractPaginationInput>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  pagination: UserPaginationInput;
};

export type Rating = {
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  listing: Listing;
  listingId: Scalars['String']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  rating: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type RatingPaginationInput = {
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  listingId?: InputMaybe<Scalars['String']['input']>;
  maxRating?: InputMaybe<Scalars['Int']['input']>;
  minRating?: InputMaybe<Scalars['Int']['input']>;
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  /** Sort field name */
  sortBy?: InputMaybe<RatingSortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Available fields to sort ratings by */
export enum RatingSortField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Rating = 'rating',
  UpdatedAt = 'updatedAt'
}

export type RatingStatistics = {
  averageRating: Scalars['Float']['output'];
  fiveStars: Scalars['Int']['output'];
  fourStars: Scalars['Int']['output'];
  oneStar: Scalars['Int']['output'];
  threeStars: Scalars['Int']['output'];
  totalRatings: Scalars['Int']['output'];
  twoStars: Scalars['Int']['output'];
};

export type RegisterInput = {
  avatarFilename?: InputMaybe<Scalars['String']['input']>;
  bankName: Scalars['String']['input'];
  cityId?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  dialCode?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  ibanNumber: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  withAbsher?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RegisterProviderInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatarFilename?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['String']['input']>>;
  cityId?: InputMaybe<Scalars['String']['input']>;
  commercialName: Scalars['String']['input'];
  commercialRegistrationFilename?: InputMaybe<Scalars['String']['input']>;
  commercialRegistrationNumber: Scalars['String']['input'];
  countryId?: InputMaybe<Scalars['String']['input']>;
  dialCode?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  ibanNumber?: InputMaybe<Scalars['String']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  withAbsher?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RemoveListingResponse = {
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ResendOtpInput = {
  target: Scalars['String']['input'];
  type: OtpType;
};

export type ResetPasswordWithTokenInput = {
  newPassword: Scalars['String']['input'];
  resetToken: Scalars['String']['input'];
};

export type ReviewComplaintInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  adminResponse: Scalars['String']['input'];
  complaintId: Scalars['String']['input'];
  reviewerId: Scalars['String']['input'];
};

export type Setting = {
  aboutAr: Scalars['String']['output'];
  aboutEn: Scalars['String']['output'];
  email: Scalars['String']['output'];
  phones: Array<Scalars['String']['output']>;
  privacyPolicyAr: Scalars['String']['output'];
  privacyPolicyEn: Scalars['String']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  rulesAr: Scalars['String']['output'];
  rulesEn: Scalars['String']['output'];
  socialMediaLinks: Array<SocialMediaLink>;
  termsAr: Scalars['String']['output'];
  termsEn: Scalars['String']['output'];
  whatsappNumber: Scalars['String']['output'];
};

export type SettingInput = {
  aboutAr?: InputMaybe<Scalars['String']['input']>;
  aboutEn?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<Scalars['String']['input']>>;
  privacyPolicyAr?: InputMaybe<Scalars['String']['input']>;
  privacyPolicyEn?: InputMaybe<Scalars['String']['input']>;
  rulesAr?: InputMaybe<Scalars['String']['input']>;
  rulesEn?: InputMaybe<Scalars['String']['input']>;
  socialMediaLinks?: InputMaybe<Array<SocialMediaLinkInput>>;
  termsAr?: InputMaybe<Scalars['String']['input']>;
  termsEn?: InputMaybe<Scalars['String']['input']>;
  whatsappNumber?: InputMaybe<Scalars['String']['input']>;
};

export type SignContractInput = {
  acceptedRulesAr?: InputMaybe<Scalars['String']['input']>;
  acceptedRulesEn?: InputMaybe<Scalars['String']['input']>;
  serviceProviderSignature: Scalars['String']['input'];
};

export type SignedContract = {
  acceptedRulesAr?: Maybe<Scalars['String']['output']>;
  acceptedRulesEn?: Maybe<Scalars['String']['output']>;
  contractExpiresAt?: Maybe<Scalars['String']['output']>;
  contractSignedAt: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  platformManagerName?: Maybe<Scalars['String']['output']>;
  platformManagerSignature?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Provider>;
  providerId?: Maybe<Scalars['String']['output']>;
  publicId?: Maybe<Scalars['Int']['output']>;
  serviceProviderSignature: Scalars['String']['output'];
  status: SignedContractStatus;
  terminationReason?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type SignedContractPaginationInput = {
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  providerId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  /** Sort field name */
  sortBy?: InputMaybe<SignedContractSortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
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
  TerminatedByAdmin = 'TERMINATED_BY_ADMIN',
  TerminatedByProvider = 'TERMINATED_BY_PROVIDER'
}

export type SocialMediaLink = {
  link: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SocialMediaLinkInput = {
  link: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** Sort order direction */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Subscription = {
  /** Subscribe to real-time updates for the authenticated provider */
  providerUpdated: Provider;
  /** Subscribe to real-time updates for the authenticated user */
  userUpdated: User;
};

/** Type of target being tracked (category or listing) */
export enum TargetType {
  Category = 'CATEGORY',
  Listing = 'LISTING'
}

export type TrackActionInput = {
  actionType: ActionType;
  targetId: Scalars['String']['input'];
  targetType: TargetType;
};

export type Tracking = {
  actionType: ActionType;
  count: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  targetId: Scalars['String']['output'];
  targetType: TargetType;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UpdateAdminInput = {
  avatarFilename?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  organizationName?: InputMaybe<Scalars['String']['input']>;
  permissionType?: InputMaybe<AdminPermissionType>;
  phoneNumber: Scalars['String']['input'];
  platformManagerSignature?: InputMaybe<Scalars['String']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<AdminStatus>;
  userType?: InputMaybe<AdminUserType>;
};

export type UpdateBankInput = {
  id: Scalars['String']['input'];
  nameAr?: InputMaybe<Scalars['String']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<BankStatus>;
};

export type UpdateCategoryInput = {
  descriptionAr?: InputMaybe<Scalars['String']['input']>;
  descriptionEn?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  nameAr?: InputMaybe<Scalars['String']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
  rulesAr?: InputMaybe<Scalars['String']['input']>;
  rulesEn?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCityInput = {
  countryId?: InputMaybe<Scalars['ID']['input']>;
  geoBoundary?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  nameAr?: InputMaybe<Scalars['String']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateComplaintInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  listingId?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<ComplaintReason>;
  status?: InputMaybe<ComplaintStatus>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContactMessageInput = {
  attachmentFilename?: InputMaybe<Scalars['String']['input']>;
  dialCode?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  messageContent?: InputMaybe<Scalars['String']['input']>;
  messageType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContractInput = {
  agreedPrice?: InputMaybe<Scalars['Float']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  conversationId?: InputMaybe<Scalars['String']['input']>;
  downPayment?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  providerId?: InputMaybe<Scalars['String']['input']>;
  signatures?: InputMaybe<Array<ContractSignatureInput>>;
  status?: InputMaybe<ContractStatus>;
};

export type UpdateConversationInput = {
  id: Scalars['String']['input'];
  isPaid?: InputMaybe<Scalars['Boolean']['input']>;
  listingId?: InputMaybe<Scalars['String']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCountryInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDeliveryCompanyInput = {
  id: Scalars['String']['input'];
  nameAr?: InputMaybe<Scalars['String']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DeliveryCompanyStatus>;
};

export type UpdateFaqInput = {
  answerAr?: InputMaybe<Scalars['String']['input']>;
  answerEn?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Float']['input']>;
  questionAr?: InputMaybe<Scalars['String']['input']>;
  questionEn?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFaqOrderInput = {
  id: Scalars['String']['input'];
  order: Scalars['Int']['input'];
};

export type UpdateListingInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<CreateListingMediaInput>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<ListingStatus>;
  story?: InputMaybe<CreateListingMediaInput>;
  type?: InputMaybe<ListingType>;
};

export type UpdateMessageInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  conversationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  senderId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePaymentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  contractId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<PaymentMethod>;
  status?: InputMaybe<PaymentStatus>;
  transactionReference?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePermissionInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  module?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameAr?: InputMaybe<Scalars['String']['input']>;
  permissionPlatform?: InputMaybe<PermissionPlatform>;
  resource?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProviderInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatarFilename?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['String']['input']>>;
  cityId?: InputMaybe<Scalars['String']['input']>;
  commercialName?: InputMaybe<Scalars['String']['input']>;
  commercialRegistrationFilename?: InputMaybe<Scalars['String']['input']>;
  commercialRegistrationNumber?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  dialCode?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  ibanNumber?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  languageCode?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  withAbsher?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateRatingInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  listingId?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatarFilename?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  dialCode?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  ibanNumber?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  languageCode?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  withAbsher?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User = {
  address?: Maybe<Scalars['String']['output']>;
  avatarFilename?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  city?: Maybe<City>;
  cityId?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  countryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deactivationReason?: Maybe<Scalars['String']['output']>;
  deleteReason?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  dialCode?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  ibanNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  languageCode?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  phoneVerified: Scalars['Boolean']['output'];
  publicId?: Maybe<Scalars['Int']['output']>;
  status: UserStatus;
  updatedAt: Scalars['DateTime']['output'];
  withAbsher?: Maybe<Scalars['Boolean']['output']>;
};

export type UserPaginationInput = {
  /** Number of items per page */
  limit?: Scalars['Int']['input'];
  /** Page number (1-based) */
  page?: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  /** Sort field name */
  sortBy?: InputMaybe<UserSortField>;
  /** Sort order: ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
  status?: InputMaybe<UserStatus>;
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
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type VerifyAdminPasswordResetOtpResponse = {
  resetToken: Scalars['String']['output'];
};

export type VerifyChangeEmailInput = {
  changeToken: Scalars['String']['input'];
  code: Scalars['String']['input'];
};

export type VerifyChangePhoneInput = {
  changeToken: Scalars['String']['input'];
  code: Scalars['String']['input'];
  countryCode: Scalars['String']['input'];
};

export type VerifyOtpInput = {
  code: Scalars['String']['input'];
  target: Scalars['String']['input'];
  type: OtpType;
};

export type VerifyPasswordResetOtpInput = {
  code: Scalars['String']['input'];
  target: Scalars['String']['input'];
};

export type VerifyPasswordResetOtpResponse = {
  resetToken: Scalars['String']['output'];
};

export type ActivateAdminMutationVariables = Exact<{
  activateAdminId: Scalars['ID']['input'];
}>;


export type ActivateAdminMutation = { activateAdmin: { avatarFilename?: string | null, createdAt: any, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, phoneNumber: string, roleName: string, status: AdminStatus, updatedAt: any, userType: AdminUserType, platformManagerSignature?: string | null } };

export type AdminQueryVariables = Exact<{
  adminId: Scalars['ID']['input'];
}>;


export type AdminQuery = { admin: { createdAt: any, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, roleName: string, status: AdminStatus, updatedAt: any, userType: AdminUserType, phoneNumber: string, platformManagerSignature?: string | null } };

export type AdminsQueryVariables = Exact<{
  paginationInput?: InputMaybe<AdminPaginationInput>;
}>;


export type AdminsQuery = { admins: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ createdAt: any, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, roleName: string, status: AdminStatus, updatedAt: any, userType: AdminUserType, phoneNumber: string, platformManagerSignature?: string | null }> } };

export type CreateAdminMutationVariables = Exact<{
  createAdminInput: CreateAdminInput;
}>;


export type CreateAdminMutation = { createAdmin: { createdAt: any, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, roleName: string, status: AdminStatus, updatedAt: any, userType: AdminUserType, phoneNumber: string, platformManagerSignature?: string | null } };

export type DeactivateAdminMutationVariables = Exact<{
  deactivateAdminId: Scalars['ID']['input'];
  input: DeactivateAdminInput;
}>;


export type DeactivateAdminMutation = { deactivateAdmin: { avatarFilename?: string | null, createdAt: any, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, phoneNumber: string, roleName: string, status: AdminStatus, updatedAt: any, userType: AdminUserType } };

export type MeAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type MeAdminQuery = { meAdmin: { id: string, createdAt: any, email: string, fullName: string, organizationName: string, permissionType: AdminPermissionType, roleName: string, status: AdminStatus, updatedAt: any, userType: AdminUserType, phoneNumber: string, avatarFilename?: string | null, platformManagerSignature?: string | null, adminPermissions?: Array<{ id: string, permission: { module: string, action: string } }> | null } };

export type RemoveAdminMutationVariables = Exact<{
  removeAdminId: Scalars['ID']['input'];
}>;


export type RemoveAdminMutation = { removeAdmin: boolean };

export type UpdateAdminMutationVariables = Exact<{
  updateAdminId: Scalars['ID']['input'];
  updateAdminInput: UpdateAdminInput;
}>;


export type UpdateAdminMutation = { updateAdmin: { createdAt: any, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, roleName: string, status: AdminStatus, updatedAt: any, userType: AdminUserType, phoneNumber: string, platformManagerSignature?: string | null } };

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
  activateBankId: Scalars['ID']['input'];
}>;


export type ActivateBankMutation = { activateBank: { createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: any } };

export type BankQueryVariables = Exact<{
  bankId: Scalars['ID']['input'];
}>;


export type BankQuery = { bank: { createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: any } };

export type BanksQueryVariables = Exact<{
  input?: InputMaybe<BankPaginationInput>;
}>;


export type BanksQuery = { banks: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: any }> } };

export type CreateBankMutationVariables = Exact<{
  input: CreateBankInput;
}>;


export type CreateBankMutation = { createBank: { createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: any } };

export type DeactivateBankMutationVariables = Exact<{
  deactivateBankId: Scalars['ID']['input'];
  input: DeactivateBankInput;
}>;


export type DeactivateBankMutation = { deactivateBank: { createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: any } };

export type RemoveBankMutationVariables = Exact<{
  removeBankId: Scalars['ID']['input'];
}>;


export type RemoveBankMutation = { removeBank: { createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: any } };

export type UpdateBankMutationVariables = Exact<{
  input: UpdateBankInput;
}>;


export type UpdateBankMutation = { updateBank: { createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: BankStatus, updatedAt: any } };

export type ActivateCategoryMutationVariables = Exact<{
  activateCategoryId: Scalars['ID']['input'];
}>;


export type ActivateCategoryMutation = { activateCategory: { id: string, createdAt: any, descriptionAr: string, descriptionEn: string, nameAr: string, nameEn: string, image: string, status: CategoryStatus, updatedAt: any, rulesEn: string, rulesAr: string } };

export type CategoriesQueryVariables = Exact<{
  input?: InputMaybe<CategoryPaginationInput>;
}>;


export type CategoriesQuery = { categories: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ publicId?: number | null, createdAt: any, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, status: CategoryStatus, updatedAt: any, rulesEn: string, rulesAr: string }> } };

export type CategoryQueryVariables = Exact<{
  categoryId: Scalars['String']['input'];
}>;


export type CategoryQuery = { category: { createdAt: any, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, rulesEn: string, rulesAr: string, status: CategoryStatus, image: string, updatedAt: any, publicId?: number | null } };

export type CreateCategoryMutationVariables = Exact<{
  input: CreateCategoryInput;
}>;


export type CreateCategoryMutation = { createCategory: { createdAt: any, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: any, rulesEn: string, rulesAr: string } };

export type DeactivateCategoryMutationVariables = Exact<{
  deactivateCategoryId: Scalars['ID']['input'];
}>;


export type DeactivateCategoryMutation = { deactivateCategory: { id: string, createdAt: any, descriptionAr: string, descriptionEn: string, nameAr: string, nameEn: string, image: string, status: CategoryStatus, updatedAt: any, rulesEn: string, rulesAr: string } };

export type RemoveCategoryMutationVariables = Exact<{
  removeCategoryId: Scalars['String']['input'];
}>;


export type RemoveCategoryMutation = { removeCategory: { id: string, createdAt: any, descriptionAr: string, descriptionEn: string, nameAr: string, nameEn: string, image: string, updatedAt: any, rulesEn: string, rulesAr: string } };

export type UpdateCategoryMutationVariables = Exact<{
  input: UpdateCategoryInput;
}>;


export type UpdateCategoryMutation = { updateCategory: { createdAt: any, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: any, rulesEn: string, rulesAr: string } };

export type ActivateCityMutationVariables = Exact<{
  activateCityId: Scalars['ID']['input'];
}>;


export type ActivateCityMutation = { activateCity: { id: string, nameAr: string, nameEn: string, status: CityStatus, countryId: string, createdAt: any, updatedAt: any } };

export type CitiesQueryVariables = Exact<{
  pagination?: InputMaybe<CityPaginationInput>;
}>;


export type CitiesQuery = { cities: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, status: CityStatus, updatedAt: any, country?: { code: string, createdAt: any, dialCode?: string | null, id: string, nameAr: string, nameEn: string, updatedAt: any } | null }> } };

export type CityQueryVariables = Exact<{
  cityId: Scalars['ID']['input'];
}>;


export type CityQuery = { city: { id: string, nameAr: string, nameEn: string, status: CityStatus, updatedAt: any, createdAt: any, countryId: string, geoBoundary?: any | null, country?: { code: string, createdAt: any, dialCode?: string | null, id: string, nameAr: string, nameEn: string, updatedAt: any } | null } };

export type CountriesQueryVariables = Exact<{
  pagination?: InputMaybe<CountryPaginationInput>;
}>;


export type CountriesQuery = { countries: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ code: string, createdAt: any, dialCode?: string | null, id: string, nameAr: string, nameEn: string, updatedAt: any }> } };

export type CreateCityMutationVariables = Exact<{
  input: CreateCityInput;
}>;


export type CreateCityMutation = { createCity: { id: string, countryId: string, createdAt: any, nameAr: string, nameEn: string, updatedAt: any, geoBoundary?: any | null, country?: { code: string, createdAt: any, dialCode?: string | null, id: string, nameAr: string, nameEn: string, updatedAt: any } | null } };

export type DeactivateCityMutationVariables = Exact<{
  deactivateCityId: Scalars['ID']['input'];
}>;


export type DeactivateCityMutation = { deactivateCity: { id: string, nameAr: string, nameEn: string, status: CityStatus, countryId: string, createdAt: any, updatedAt: any } };

export type RemoveCityMutationVariables = Exact<{
  removeCityId: Scalars['ID']['input'];
}>;


export type RemoveCityMutation = { removeCity: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, updatedAt: any, country?: { code: string, createdAt: any, dialCode?: string | null, id: string, nameAr: string, nameEn: string, updatedAt: any } | null } };

export type UpdateCityMutationVariables = Exact<{
  input: UpdateCityInput;
}>;


export type UpdateCityMutation = { updateCity: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, updatedAt: any, geoBoundary?: any | null, country?: { code: string, createdAt: any, dialCode?: string | null, id: string, nameAr: string, nameEn: string, updatedAt: any } | null } };

export type ContactMessageQueryVariables = Exact<{
  contactMessageId: Scalars['ID']['input'];
}>;


export type ContactMessageQuery = { contactMessage: { attachmentFilename?: string | null, createdAt: any, dialCode?: string | null, email: string, id: string, isRead: boolean, messageContent: string, messageType: string, name: string, phone: string, updatedAt: any, reply: string } };

export type ContactMessagesQueryVariables = Exact<{
  paginationInput?: InputMaybe<ContactMessagePaginationInput>;
}>;


export type ContactMessagesQuery = { contactMessages: { items: Array<{ attachmentFilename?: string | null, createdAt: any, dialCode?: string | null, email: string, id: string, isRead: boolean, messageContent: string, messageType: string, name: string, phone: string, updatedAt: any, reply: string }>, meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number } } };

export type MarkAsReadMutationVariables = Exact<{
  markAsReadId: Scalars['ID']['input'];
}>;


export type MarkAsReadMutation = { markAsRead: { attachmentFilename?: string | null, createdAt: any, dialCode?: string | null, email: string, id: string, isRead: boolean, messageContent: string, messageType: string, name: string, phone: string, updatedAt: any, reply: string } };

export type RemoveContactMessageMutationVariables = Exact<{
  removeContactMessageId: Scalars['ID']['input'];
}>;


export type RemoveContactMessageMutation = { removeContactMessage: boolean };

export type ReplyToContactMessageMutationVariables = Exact<{
  replyToContactMessageId: Scalars['ID']['input'];
  message: Scalars['String']['input'];
}>;


export type ReplyToContactMessageMutation = { replyToContactMessage: { id: string, attachmentFilename?: string | null, createdAt: any, dialCode?: string | null, email: string, isRead: boolean, messageContent: string, messageType: string, name: string, phone: string, publicId?: number | null, reply: string, updatedAt: any } };

export type ActivateDeliveryCompanyMutationVariables = Exact<{
  activateDeliveryCompanyId: Scalars['ID']['input'];
}>;


export type ActivateDeliveryCompanyMutation = { activateDeliveryCompany: { createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: any } };

export type CreateDeliveryCompanyMutationVariables = Exact<{
  input: CreateDeliveryCompanyInput;
}>;


export type CreateDeliveryCompanyMutation = { createDeliveryCompany: { createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: any } };

export type DeactivateDeliveryCompanyMutationVariables = Exact<{
  deactivateDeliveryCompanyId: Scalars['ID']['input'];
  input: DeactivateDeliveryCompanyInput;
}>;


export type DeactivateDeliveryCompanyMutation = { deactivateDeliveryCompany: { createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: any } };

export type DeliveryCompaniesQueryVariables = Exact<{
  input?: InputMaybe<DeliveryCompanyPaginationInput>;
}>;


export type DeliveryCompaniesQuery = { deliveryCompanies: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: any }> } };

export type DeliveryCompanyQueryVariables = Exact<{
  deliveryCompanyId: Scalars['ID']['input'];
}>;


export type DeliveryCompanyQuery = { deliveryCompany: { createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: any } };

export type RemoveDeliveryCompanyMutationVariables = Exact<{
  removeDeliveryCompanyId: Scalars['ID']['input'];
}>;


export type RemoveDeliveryCompanyMutation = { removeDeliveryCompany: { createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: any } };

export type UpdateDeliveryCompanyMutationVariables = Exact<{
  input: UpdateDeliveryCompanyInput;
}>;


export type UpdateDeliveryCompanyMutation = { updateDeliveryCompany: { createdAt: any, deactivationReason?: string | null, id: string, nameAr: string, nameEn: string, status: DeliveryCompanyStatus, updatedAt: any } };

export type BulkUpdateOrderMutationVariables = Exact<{
  input: BulkUpdateFaqOrderInput;
}>;


export type BulkUpdateOrderMutation = { bulkUpdateOrder: Array<{ answerAr: string, answerEn: string, createdAt: any, id: string, isActive: boolean, order: number, questionAr: string, questionEn: string, updatedAt: any }> };

export type CreateFaqMutationVariables = Exact<{
  createFaqInput: CreateFaqInput;
}>;


export type CreateFaqMutation = { createFaq: { id: string, answerAr: string, answerEn: string, createdAt: any, isActive: boolean, order: number, questionAr: string, questionEn: string, updatedAt: any } };

export type FaqQueryVariables = Exact<{
  faqId: Scalars['ID']['input'];
}>;


export type FaqQuery = { faq: { answerAr: string, answerEn: string, createdAt: any, id: string, isActive: boolean, order: number, questionAr: string, questionEn: string, updatedAt: any } };

export type FaqsQueryVariables = Exact<{ [key: string]: never; }>;


export type FaqsQuery = { faqs: Array<{ answerAr: string, answerEn: string, createdAt: any, id: string, isActive: boolean, order: number, questionAr: string, questionEn: string, updatedAt: any }> };

export type RemoveFaqMutationVariables = Exact<{
  removeFaqId: Scalars['ID']['input'];
}>;


export type RemoveFaqMutation = { removeFaq: boolean };

export type UpdateFaqMutationVariables = Exact<{
  updateFaqInput: UpdateFaqInput;
}>;


export type UpdateFaqMutation = { updateFaq: { answerAr: string, answerEn: string, createdAt: any, id: string, isActive: boolean, order: number, questionAr: string, questionEn: string, updatedAt: any } };

export type ActivateListingMutationVariables = Exact<{
  activateListingId: Scalars['ID']['input'];
}>;


export type ActivateListingMutation = { activateListing: { createdAt: any, deactivationReason?: string | null, id: string, status: ListingStatus, updatedAt: any, categoryId: string, cityId: string, description: string, name: string, price: number, tags: string, type: ListingType, providerId: string, provider?: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, commercialRegistrationNumber?: string | null, countryId?: string | null, createdAt: any, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, withAbsher?: boolean | null, updatedAt: any, status: ProviderStatus, publicId?: number | null, phoneVerified: boolean } | null, story: { filename: string, id: string, originalFilename: string, size: number, sortOrder: number, type: MediaType }, photos: Array<{ filename: string, id: string, originalFilename: string, sortOrder: number, type: MediaType, size: number }>, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, publicId?: number | null, updatedAt: any } | null, category?: { createdAt: any, descriptionAr: string, descriptionEn: string, id: string, image: string, nameAr: string, nameEn: string, publicId?: number | null, rulesAr: string, rulesEn: string, status: CategoryStatus, updatedAt: any } | null } };

export type DeactivateListingMutationVariables = Exact<{
  deactivateListingId: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
}>;


export type DeactivateListingMutation = { deactivateListing: { createdAt: any, deactivationReason?: string | null, id: string, status: ListingStatus, updatedAt: any, categoryId: string, cityId: string, description: string, name: string, price: number, tags: string, type: ListingType, providerId: string, provider?: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, commercialRegistrationNumber?: string | null, countryId?: string | null, createdAt: any, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, withAbsher?: boolean | null, updatedAt: any, status: ProviderStatus, publicId?: number | null, phoneVerified: boolean } | null, story: { filename: string, id: string, originalFilename: string, size: number, sortOrder: number, type: MediaType }, photos: Array<{ filename: string, id: string, originalFilename: string, sortOrder: number, type: MediaType, size: number }>, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, publicId?: number | null, updatedAt: any } | null, category?: { createdAt: any, descriptionAr: string, descriptionEn: string, id: string, image: string, nameAr: string, nameEn: string, publicId?: number | null, rulesAr: string, rulesEn: string, status: CategoryStatus, updatedAt: any } | null } };

export type ListingQueryVariables = Exact<{
  listingId: Scalars['ID']['input'];
}>;


export type ListingQuery = { listing?: { createdAt: any, deactivationReason?: string | null, id: string, status: ListingStatus, updatedAt: any, categoryId: string, cityId: string, description: string, name: string, price: number, tags: string, type: ListingType, providerId: string, provider?: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, commercialRegistrationNumber?: string | null, countryId?: string | null, createdAt: any, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, withAbsher?: boolean | null, updatedAt: any, status: ProviderStatus, publicId?: number | null, phoneVerified: boolean } | null, story: { filename: string, id: string, originalFilename: string, size: number, sortOrder: number, type: MediaType }, photos: Array<{ filename: string, id: string, originalFilename: string, sortOrder: number, type: MediaType, size: number }>, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, publicId?: number | null, updatedAt: any, status: CityStatus } | null, category?: { createdAt: any, descriptionAr: string, descriptionEn: string, id: string, image: string, nameAr: string, nameEn: string, publicId?: number | null, rulesAr: string, rulesEn: string, status: CategoryStatus, updatedAt: any } | null } | null };

export type ListingsQueryVariables = Exact<{
  input: ListingPaginationInput;
}>;


export type ListingsQuery = { listings: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ createdAt: any, deactivationReason?: string | null, id: string, status: ListingStatus, updatedAt: any, categoryId: string, cityId: string, description: string, name: string, price: number, tags: string, type: ListingType, providerId: string, provider?: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, commercialRegistrationNumber?: string | null, countryId?: string | null, createdAt: any, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, withAbsher?: boolean | null, updatedAt: any, status: ProviderStatus, publicId?: number | null, phoneVerified: boolean } | null, story: { filename: string, id: string, originalFilename: string, size: number, sortOrder: number, type: MediaType }, photos: Array<{ filename: string, id: string, originalFilename: string, sortOrder: number, type: MediaType, size: number }>, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, publicId?: number | null, updatedAt: any, status: CityStatus } | null, category?: { createdAt: any, descriptionAr: string, descriptionEn: string, id: string, image: string, nameAr: string, nameEn: string, publicId?: number | null, rulesAr: string, rulesEn: string, status: CategoryStatus, updatedAt: any } | null }> } };

export type RemoveListingMutationVariables = Exact<{
  removeListingId: Scalars['ID']['input'];
}>;


export type RemoveListingMutation = { removeListing: { message: string, success: boolean } };

export type AdminPermissionsQueryVariables = Exact<{
  adminId: Scalars['ID']['input'];
}>;


export type AdminPermissionsQuery = { adminPermissions: Array<{ adminId: string, createdAt: any, id: string, permissionId: string, updatedAt: any, permission: { action: string, createdAt: any, description: string, id: string, module: string, name: string, nameAr: string, permissionPlatform: PermissionPlatform, resource: string, updatedAt: any }, admin: { createdAt: any, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, phoneNumber: string, roleName: string, status: AdminStatus, updatedAt: any, userType: AdminUserType } }> };

export type BulkAssignPermissionsToAdminMutationVariables = Exact<{
  input: BulkAssignPermissionsInput;
}>;


export type BulkAssignPermissionsToAdminMutation = { bulkAssignPermissionsToAdmin: Array<{ adminId: string, createdAt: any, id: string, permissionId: string, updatedAt: any, permission: { resource: string, action: string, createdAt: any, description: string, id: string, module: string, name: string, nameAr: string, permissionPlatform: PermissionPlatform, updatedAt: any }, admin: { createdAt: any, email: string, fullName: string, id: string, organizationName: string, permissionType: AdminPermissionType, phoneNumber: string, roleName: string, status: AdminStatus, updatedAt: any, userType: AdminUserType } }> };

export type PermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type PermissionsQuery = { permissions: Array<{ action: string, createdAt: any, description: string, id: string, module: string, name: string, nameAr: string, permissionPlatform: PermissionPlatform, resource: string, updatedAt: any }> };

export type ActivateProviderMutationVariables = Exact<{
  activateProviderId: Scalars['ID']['input'];
}>;


export type ActivateProviderMutation = { activateProvider: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, countryId?: string | null, createdAt: any, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, updatedAt: any, status: ProviderStatus, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, updatedAt: any } | null } };

export type AdminSignProviderContractMutationVariables = Exact<{
  input: AdminSignContractInput;
}>;


export type AdminSignProviderContractMutation = { adminSignProviderContract: { id: string, name?: string | null, isActive: boolean, languageCode?: string | null, address?: string | null, avatarFilename?: string | null, cityId?: string | null, countryId?: string | null, createdAt: any, dialCode?: string | null, email: string, emailVerified: boolean, latitude?: number | null, longitude?: number | null, phone: string, phoneVerified: boolean, updatedAt: any, ibanNumber?: string | null, bankName?: string | null, commercialRegistrationNumber?: string | null, withAbsher?: boolean | null, status: ProviderStatus, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, categories?: Array<{ id: string, createdAt: any, descriptionAr: string, descriptionEn: string, nameAr: string, nameEn: string, updatedAt: any }> | null, signedContract?: { contractExpiresAt?: string | null, contractSignedAt: string, platformManagerSignature?: string | null, serviceProviderSignature: string, status: SignedContractStatus, platformManagerName?: string | null, acceptedRulesEn?: string | null, acceptedRulesAr?: string | null } | null } };

export type AdminTerminateProviderContractMutationVariables = Exact<{
  input: AdminTerminateContractInput;
}>;


export type AdminTerminateProviderContractMutation = { adminTerminateProviderContract: { id: string, name?: string | null, isActive: boolean, languageCode?: string | null, address?: string | null, avatarFilename?: string | null, cityId?: string | null, countryId?: string | null, createdAt: any, dialCode?: string | null, email: string, emailVerified: boolean, latitude?: number | null, longitude?: number | null, phone: string, phoneVerified: boolean, updatedAt: any, ibanNumber?: string | null, bankName?: string | null, commercialRegistrationNumber?: string | null, withAbsher?: boolean | null, status: ProviderStatus, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, categories?: Array<{ id: string, createdAt: any, descriptionAr: string, descriptionEn: string, nameAr: string, nameEn: string, updatedAt: any }> | null, signedContract?: { contractExpiresAt?: string | null, contractSignedAt: string, platformManagerSignature?: string | null, serviceProviderSignature: string, status: SignedContractStatus } | null } };

export type DeactivateProviderMutationVariables = Exact<{
  deactivateProviderId: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
}>;


export type DeactivateProviderMutation = { deactivateProvider: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, commercialRegistrationNumber?: string | null, countryId?: string | null, createdAt: any, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, updatedAt: any, withAbsher?: boolean | null, status: ProviderStatus, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, categories?: Array<{ createdAt: any, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: any }> | null, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, updatedAt: any } | null, signedContract?: { contractExpiresAt?: string | null, contractSignedAt: string, platformManagerSignature?: string | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason?: string | null } | null } };

export type ProviderQueryVariables = Exact<{
  providerId: Scalars['ID']['input'];
}>;


export type ProviderQuery = { provider: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, commercialRegistrationNumber?: string | null, countryId?: string | null, createdAt: any, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, updatedAt: any, withAbsher?: boolean | null, status: ProviderStatus, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, publicId?: number | null, categories?: Array<{ createdAt: any, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: any, rulesEn: string, rulesAr: string, status: CategoryStatus }> | null, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, updatedAt: any, status: CityStatus } | null, signedContract?: { contractExpiresAt?: string | null, contractSignedAt: string, platformManagerSignature?: string | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason?: string | null, platformManagerName?: string | null, acceptedRulesEn?: string | null, acceptedRulesAr?: string | null, id: string, createdAt: any, publicId?: number | null, updatedAt: any, providerId?: string | null } | null } };

export type ProvidersQueryVariables = Exact<{
  pagination: ProviderPaginationInput;
}>;


export type ProvidersQuery = { providers: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, commercialRegistrationNumber?: string | null, countryId?: string | null, createdAt: any, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, updatedAt: any, withAbsher?: boolean | null, status: ProviderStatus, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, publicId?: number | null, categories?: Array<{ createdAt: any, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: any, rulesEn: string, rulesAr: string, status: CategoryStatus }> | null, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, updatedAt: any, status: CityStatus } | null, signedContract?: { contractExpiresAt?: string | null, contractSignedAt: string, platformManagerSignature?: string | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason?: string | null, platformManagerName?: string | null, acceptedRulesEn?: string | null, acceptedRulesAr?: string | null, id: string, createdAt: any, publicId?: number | null, updatedAt: any, providerId?: string | null } | null }> } };

export type RejectProviderJoinRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
}>;


export type RejectProviderJoinRequestMutation = { rejectProviderJoinRequest: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, commercialRegistrationNumber?: string | null, countryId?: string | null, createdAt: any, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, updatedAt: any, withAbsher?: boolean | null, status: ProviderStatus, deactivationReason?: string | null, rejectionReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, categories?: Array<{ createdAt: any, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: any }> | null, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, updatedAt: any } | null, signedContract?: { contractExpiresAt?: string | null, contractSignedAt: string, platformManagerSignature?: string | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason?: string | null } | null } };

export type RemoveProviderMutationVariables = Exact<{
  removeProviderId: Scalars['ID']['input'];
  input: DeleteProviderInput;
}>;


export type RemoveProviderMutation = { removeProvider: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, commercialRegistrationNumber?: string | null, countryId?: string | null, createdAt: any, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, updatedAt: any, withAbsher?: boolean | null, status: ProviderStatus, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, categories?: Array<{ createdAt: any, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, updatedAt: any }> | null, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, updatedAt: any } | null, signedContract?: { contractExpiresAt?: string | null, contractSignedAt: string, platformManagerSignature?: string | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason?: string | null } | null } };

export type GetSettingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingQuery = { getSetting: { aboutAr: string, aboutEn: string, email: string, phones: Array<string>, privacyPolicyAr: string, privacyPolicyEn: string, termsAr: string, termsEn: string, whatsappNumber: string, rulesAr: string, rulesEn: string, socialMediaLinks: Array<{ link: string, name: string }> } };

export type SetSettingMutationVariables = Exact<{
  input: SettingInput;
}>;


export type SetSettingMutation = { setSetting: { aboutAr: string, aboutEn: string, email: string, phones: Array<string>, privacyPolicyAr: string, privacyPolicyEn: string, termsAr: string, termsEn: string, whatsappNumber: string, rulesAr: string, rulesEn: string, socialMediaLinks: Array<{ link: string, name: string }> } };

export type SignedContractByIdQueryVariables = Exact<{
  signedContractByIdId: Scalars['String']['input'];
}>;


export type SignedContractByIdQuery = { signedContractById?: { acceptedRulesAr?: string | null, acceptedRulesEn?: string | null, contractExpiresAt?: string | null, contractSignedAt: string, createdAt: any, id: string, platformManagerName?: string | null, platformManagerSignature?: string | null, publicId?: number | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason?: string | null, updatedAt: any, providerId?: string | null, provider?: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, commercialRegistrationNumber?: string | null, countryId?: string | null, createdAt: any, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, publicId?: number | null, status: ProviderStatus, updatedAt: any, withAbsher?: boolean | null, categories?: Array<{ createdAt: any, descriptionAr: string, descriptionEn: string, id: string, nameAr: string, nameEn: string, image: string, publicId?: number | null, rulesAr: string, rulesEn: string, updatedAt: any, status: CategoryStatus }> | null, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, publicId?: number | null, updatedAt: any, status: CityStatus } | null } | null } | null };

export type SignedContractByProviderIdQueryVariables = Exact<{
  providerId: Scalars['String']['input'];
}>;


export type SignedContractByProviderIdQuery = { signedContractByProviderId?: { acceptedRulesAr?: string | null, acceptedRulesEn?: string | null, contractExpiresAt?: string | null, contractSignedAt: string, createdAt: any, id: string, platformManagerName?: string | null, platformManagerSignature?: string | null, publicId?: number | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason?: string | null, updatedAt: any, providerId?: string | null, provider?: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, commercialRegistrationNumber?: string | null, countryId?: string | null, createdAt: any, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, publicId?: number | null, status: ProviderStatus, updatedAt: any, withAbsher?: boolean | null } | null } | null };

export type SignedContractsQueryVariables = Exact<{
  input?: InputMaybe<SignedContractPaginationInput>;
}>;


export type SignedContractsQuery = { signedContracts: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ acceptedRulesAr?: string | null, acceptedRulesEn?: string | null, contractExpiresAt?: string | null, contractSignedAt: string, createdAt: any, id: string, platformManagerName?: string | null, platformManagerSignature?: string | null, publicId?: number | null, serviceProviderSignature: string, status: SignedContractStatus, terminationReason?: string | null, updatedAt: any, providerId?: string | null, provider?: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, commercialName?: string | null, commercialRegistrationFilename?: string | null, commercialRegistrationNumber?: string | null, countryId?: string | null, createdAt: any, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, publicId?: number | null, status: ProviderStatus, updatedAt: any, withAbsher?: boolean | null } | null }> } };

export type ActivateUserMutationVariables = Exact<{
  activateUserId: Scalars['ID']['input'];
}>;


export type ActivateUserMutation = { activateUser: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, countryId?: string | null, createdAt: any, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, updatedAt: any, status: UserStatus, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, updatedAt: any } | null } };

export type DeactivateUserMutationVariables = Exact<{
  deactivateUserId: Scalars['ID']['input'];
  input: DeactivateUserInput;
}>;


export type DeactivateUserMutation = { deactivateUser: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, countryId?: string | null, createdAt: any, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, updatedAt: any, status: UserStatus, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, updatedAt: any } | null } };

export type RemoveUserMutationVariables = Exact<{
  removeUserId: Scalars['ID']['input'];
  input: DeleteUserInput;
}>;


export type RemoveUserMutation = { removeUser: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, countryId?: string | null, createdAt: any, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, updatedAt: any, status: UserStatus, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, updatedAt: any } | null } };

export type UserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type UserQuery = { user: { address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, countryId?: string | null, createdAt: any, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, updatedAt: any, status: UserStatus, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, publicId?: number | null, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, updatedAt: any, status: CityStatus } | null } };

export type UsersQueryVariables = Exact<{
  pagination: UserPaginationInput;
}>;


export type UsersQuery = { users: { meta: { hasNext: boolean, hasPrevious: boolean, limit: number, page: number, total: number, totalPages: number }, items: Array<{ address?: string | null, avatarFilename?: string | null, bankName?: string | null, cityId?: string | null, countryId?: string | null, createdAt: any, dialCode?: string | null, email: string, emailVerified: boolean, ibanNumber?: string | null, id: string, isActive: boolean, languageCode?: string | null, latitude?: number | null, longitude?: number | null, name?: string | null, phone: string, phoneVerified: boolean, updatedAt: any, status: UserStatus, deactivationReason?: string | null, deleteReason?: string | null, deletedAt?: string | null, publicId?: number | null, city?: { countryId: string, createdAt: any, id: string, nameAr: string, nameEn: string, updatedAt: any, status: CityStatus } | null }> } };


export const ActivateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"activateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activateAdminId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activateAdminId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}}]}}]}}]} as unknown as DocumentNode<ActivateAdminMutation, ActivateAdminMutationVariables>;
export const AdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"admin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"adminId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"adminId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}}]}}]}}]} as unknown as DocumentNode<AdminQuery, AdminQueryVariables>;
export const AdminsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"admins"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paginationInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}}]}}]}}]}}]} as unknown as DocumentNode<AdminsQuery, AdminsQueryVariables>;
export const CreateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createAdminInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createAdminInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createAdminInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}}]}}]}}]} as unknown as DocumentNode<CreateAdminMutation, CreateAdminMutationVariables>;
export const DeactivateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deactivateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deactivateAdminId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeactivateAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deactivateAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deactivateAdminId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}}]}}]} as unknown as DocumentNode<DeactivateAdminMutation, DeactivateAdminMutationVariables>;
export const MeAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"meAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meAdmin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"adminPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"permission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"module"}},{"kind":"Field","name":{"kind":"Name","value":"action"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MeAdminQuery, MeAdminQueryVariables>;
export const RemoveAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeAdminId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeAdminId"}}}]}]}}]} as unknown as DocumentNode<RemoveAdminMutation, RemoveAdminMutationVariables>;
export const UpdateAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateAdminId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateAdminInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateAdminId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateAdminInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateAdminInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"permissionType"}},{"kind":"Field","name":{"kind":"Name","value":"roleName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}}]}}]}}]} as unknown as DocumentNode<UpdateAdminMutation, UpdateAdminMutationVariables>;
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
export const CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"categories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}}]}}]}}]}}]} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"category"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]} as unknown as DocumentNode<CategoryQuery, CategoryQueryVariables>;
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
export const ContactMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"contactMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contactMessageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contactMessageId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachmentFilename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}},{"kind":"Field","name":{"kind":"Name","value":"messageContent"}},{"kind":"Field","name":{"kind":"Name","value":"messageType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}}]}}]}}]} as unknown as DocumentNode<ContactMessageQuery, ContactMessageQueryVariables>;
export const ContactMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"contactMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContactMessagePaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paginationInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachmentFilename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}},{"kind":"Field","name":{"kind":"Name","value":"messageContent"}},{"kind":"Field","name":{"kind":"Name","value":"messageType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}}]} as unknown as DocumentNode<ContactMessagesQuery, ContactMessagesQueryVariables>;
export const MarkAsReadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"markAsRead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"markAsReadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markAsRead"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"markAsReadId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachmentFilename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}},{"kind":"Field","name":{"kind":"Name","value":"messageContent"}},{"kind":"Field","name":{"kind":"Name","value":"messageType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}}]}}]}}]} as unknown as DocumentNode<MarkAsReadMutation, MarkAsReadMutationVariables>;
export const RemoveContactMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeContactMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeContactMessageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeContactMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeContactMessageId"}}}]}]}}]} as unknown as DocumentNode<RemoveContactMessageMutation, RemoveContactMessageMutationVariables>;
export const ReplyToContactMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"replyToContactMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"replyToContactMessageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replyToContactMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"replyToContactMessageId"}}},{"kind":"Argument","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attachmentFilename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}},{"kind":"Field","name":{"kind":"Name","value":"messageContent"}},{"kind":"Field","name":{"kind":"Name","value":"messageType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ReplyToContactMessageMutation, ReplyToContactMessageMutationVariables>;
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
export const AdminSignProviderContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"adminSignProviderContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminSignContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminSignProviderContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerName"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}}]}}]}}]} as unknown as DocumentNode<AdminSignProviderContractMutation, AdminSignProviderContractMutationVariables>;
export const AdminTerminateProviderContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"adminTerminateProviderContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminTerminateContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminTerminateProviderContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}}]}}]}}]} as unknown as DocumentNode<AdminTerminateProviderContractMutation, AdminTerminateProviderContractMutationVariables>;
export const DeactivateProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deactivateProvider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deactivateProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reason"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deactivateProvider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deactivateProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"reason"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reason"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}}]}}]}}]} as unknown as DocumentNode<DeactivateProviderMutation, DeactivateProviderMutationVariables>;
export const ProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"provider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerName"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]} as unknown as DocumentNode<ProviderQuery, ProviderQueryVariables>;
export const ProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"providers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProviderPaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"providers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerName"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]}}]} as unknown as DocumentNode<ProvidersQuery, ProvidersQueryVariables>;
export const RejectProviderJoinRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"rejectProviderJoinRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reason"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rejectProviderJoinRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"reason"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reason"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}}]}}]}}]} as unknown as DocumentNode<RejectProviderJoinRequestMutation, RejectProviderJoinRequestMutationVariables>;
export const RemoveProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeProvider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteProviderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeProvider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"signedContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}}]}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}}]}}]}}]} as unknown as DocumentNode<RemoveProviderMutation, RemoveProviderMutationVariables>;
export const GetSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutAr"}},{"kind":"Field","name":{"kind":"Name","value":"aboutEn"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phones"}},{"kind":"Field","name":{"kind":"Name","value":"privacyPolicyAr"}},{"kind":"Field","name":{"kind":"Name","value":"privacyPolicyEn"}},{"kind":"Field","name":{"kind":"Name","value":"socialMediaLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"termsAr"}},{"kind":"Field","name":{"kind":"Name","value":"termsEn"}},{"kind":"Field","name":{"kind":"Name","value":"whatsappNumber"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}}]}}]}}]} as unknown as DocumentNode<GetSettingQuery, GetSettingQueryVariables>;
export const SetSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SettingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutAr"}},{"kind":"Field","name":{"kind":"Name","value":"aboutEn"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phones"}},{"kind":"Field","name":{"kind":"Name","value":"privacyPolicyAr"}},{"kind":"Field","name":{"kind":"Name","value":"privacyPolicyEn"}},{"kind":"Field","name":{"kind":"Name","value":"socialMediaLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"termsAr"}},{"kind":"Field","name":{"kind":"Name","value":"termsEn"}},{"kind":"Field","name":{"kind":"Name","value":"whatsappNumber"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}}]}}]}}]} as unknown as DocumentNode<SetSettingMutation, SetSettingMutationVariables>;
export const SignedContractByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"signedContractById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signedContractByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signedContractById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signedContractByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerName"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionAr"}},{"kind":"Field","name":{"kind":"Name","value":"descriptionEn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"rulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"rulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}}]}}]}}]} as unknown as DocumentNode<SignedContractByIdQuery, SignedContractByIdQueryVariables>;
export const SignedContractByProviderIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"signedContractByProviderId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signedContractByProviderId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"providerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerName"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}}]}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}}]}}]}}]} as unknown as DocumentNode<SignedContractByProviderIdQuery, SignedContractByProviderIdQueryVariables>;
export const SignedContractsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"signedContracts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedContractPaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signedContracts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesAr"}},{"kind":"Field","name":{"kind":"Name","value":"acceptedRulesEn"}},{"kind":"Field","name":{"kind":"Name","value":"contractExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractSignedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerName"}},{"kind":"Field","name":{"kind":"Name","value":"platformManagerSignature"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"serviceProviderSignature"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminationReason"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"commercialName"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationFilename"}},{"kind":"Field","name":{"kind":"Name","value":"commercialRegistrationNumber"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"withAbsher"}}]}},{"kind":"Field","name":{"kind":"Name","value":"providerId"}}]}}]}}]}}]} as unknown as DocumentNode<SignedContractsQuery, SignedContractsQueryVariables>;
export const ActivateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"activateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activateUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activateUserId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<ActivateUserMutation, ActivateUserMutationVariables>;
export const DeactivateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deactivateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deactivateUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeactivateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deactivateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deactivateUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<DeactivateUserMutation, DeactivateUserMutationVariables>;
export const RemoveUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveUserMutation, RemoveUserMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevious"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"avatarFilename"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"cityId"}},{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"dialCode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"ibanNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countryId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"nameEn"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deactivationReason"}},{"kind":"Field","name":{"kind":"Name","value":"deleteReason"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;