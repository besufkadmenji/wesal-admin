import {
  RejectProviderJoinRequestMutation,
  RejectProviderJoinRequestMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const REJECT_PROVIDER_JOIN_REQUEST_MUTATION: TypedDocumentNode<
  RejectProviderJoinRequestMutation,
  RejectProviderJoinRequestMutationVariables
> = gql`
  mutation rejectProviderJoinRequest($id: ID!, $reason: String!) {
    rejectProviderJoinRequest(id: $id, reason: $reason) {
      address
      avatarFilename
      bankName
      categories {
        createdAt
        descriptionAr
        descriptionEn
        id
        nameAr
        nameEn
        image
        updatedAt
      }
      cityId
      commercialRegistrationNumber
      countryId
      createdAt
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
      updatedAt
      withAbsher
      status
      city {
        countryId
        createdAt
        id
        nameAr
        nameEn
        updatedAt
      }
      deactivationReason
      rejectionReason
      deleteReason
      deletedAt
      signedContract {
        contractExpiresAt
        contractSignedAt
        platformManagerSignature
        serviceProviderSignature
        status
        terminationReason
      }
      commercialName
      commercialRegistrationFilename
    }
  }
`;
