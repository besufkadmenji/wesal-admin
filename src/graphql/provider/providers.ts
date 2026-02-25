import { ProvidersQuery, ProvidersQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const PROVIDERS_QUERY: TypedDocumentNode<
  ProvidersQuery,
  ProvidersQueryVariables
> = gql`
  query providers($pagination: ProviderPaginationInput!) {
    providers(pagination: $pagination) {
      meta {
        hasNext
        hasPrevious
        limit
        page
        total
        totalPages
      }
      items {
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
          rulesEn
          rulesAr
          status
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
        deleteReason
        deletedAt
        signedContract {
          contractExpiresAt
          contractSignedAt
          platformManagerSignature
          serviceProviderSignature
          status
          terminationReason
          platformManagerName
          acceptedRulesEn
          acceptedRulesAr
          id
          createdAt
          publicId
          updatedAt
          providerId
        }
        commercialName
        commercialRegistrationFilename
        publicId
      }
    }
  }
`;
