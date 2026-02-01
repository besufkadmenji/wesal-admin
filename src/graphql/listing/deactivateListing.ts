import {
  DeactivateListingMutation,
  DeactivateListingMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const DEACTIVATE_LISTING_MUTATION: TypedDocumentNode<
  DeactivateListingMutation,
  DeactivateListingMutationVariables
> = gql`
  mutation deactivateListing($deactivateListingId: ID!, $reason: String!) {
    deactivateListing(id: $deactivateListingId, reason: $reason) {
      createdAt
      deactivationReason
      id
      status
      updatedAt
      categoryId
      cityId
      description
      name
      price
      provider {
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
        withAbsher
        updatedAt
        status
        role
        publicId
        phoneVerified
      }
      story {
        filename
        id
        originalFilename
        size
        sortOrder
        type
      }
      tags
      type
      userId
      photos {
        filename
        id
        originalFilename
        sortOrder
        type
        size
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
      category {
        createdAt
        descriptionAr
        descriptionEn
        id
        image
        nameAr
        nameEn
        publicId
        rulesAr
        rulesEn
        updatedAt
      }
    }
  }
`;
