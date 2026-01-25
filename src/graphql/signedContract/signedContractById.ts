import {
    SignedContractByIdQuery,
    SignedContractByIdQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const SIGNED_CONTRACT_BY_ID: TypedDocumentNode<
  SignedContractByIdQuery,
  SignedContractByIdQueryVariables
> = gql`
  query signedContractById($signedContractByIdId: String!) {
    signedContractById(id: $signedContractByIdId) {
      acceptedRulesAr
      acceptedRulesEn
      contractExpiresAt
      contractSignedAt
      createdAt
      id
      platformManagerName
      platformManagerSignature
      publicId
      serviceProviderSignature
      status
      terminationReason
      updatedAt
      user {
        address
        avatarFilename
        bankName
        cityId
        commercialName
        commercialRegistrationFilename
        commercialRegistrationNumber
        countryId
        createdAt
        deactivationReason
        deleteReason
        deletedAt
        dialCode
        email
        emailVerified
        ibanNumber
        id
        isActive
        languageCode
        latitude
        longitude
        name
        phone
        phoneVerified
        publicId
        role
        status
        updatedAt
        withAbsher
        categories {
          createdAt
          descriptionAr
          descriptionEn
          id
          nameAr
          nameEn
          image
          publicId
          rulesAr
          rulesEn
          updatedAt
        }
        city {
          countryId
          createdAt
          id
          nameAr
          nameEn
          publicId
          updatedAt
        }
      }
      userId
    }
  }
`;
