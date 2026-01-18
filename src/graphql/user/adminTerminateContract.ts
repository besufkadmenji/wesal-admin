import {
  AdminTerminateContractMutation,
  AdminTerminateContractMutationVariables
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const TERMINATE_CONTRACT_MUTATION: TypedDocumentNode<
  AdminTerminateContractMutation,
  AdminTerminateContractMutationVariables
> = gql`
  mutation adminTerminateContract(
    $userId: String!
    $terminationReason: String!
  ) {
    adminTerminateContract(
      userId: $userId
      terminationReason: $terminationReason
    ) {
      id
      name
      isActive
      languageCode
      address
      avatarFilename
      cityId
      countryId
      createdAt
      dialCode
      email
      emailVerified
      latitude
      longitude
      phone
      phoneVerified
      role
      updatedAt
      ibanNumber
      bankName
      commercialRegistrationNumber
      categories {
        id
        createdAt
        descriptionAr
        descriptionEn
        nameAr
        nameEn
        updatedAt
      }
      withAbsher
      status
      signedContract {
        contractExpiresAt
        contractSignedAt
        platformManagerSignature
        serviceProviderSignature
        status
      }
      deactivationReason
      deleteReason
      deletedAt
      commercialName
      commercialRegistrationFilename
    }
  }
`;
