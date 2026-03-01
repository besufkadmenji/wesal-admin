import {
  AdminSignProviderContractMutation,
  AdminSignProviderContractMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const SIGN_CONTRACT_MUTATION: TypedDocumentNode<
  AdminSignProviderContractMutation,
  AdminSignProviderContractMutationVariables
> = gql`
  mutation adminSignProviderContract($input: AdminSignContractInput!) {
    adminSignProviderContract(input: $input) {
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
        platformManagerName
        acceptedRulesAr {
          label
          value
        }
        acceptedRulesEn {
          label
          value
        }
      }
      deactivationReason
      deleteReason
      deletedAt
      commercialName
      commercialRegistrationFilename
    }
  }
`;
