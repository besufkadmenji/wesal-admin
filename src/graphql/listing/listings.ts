import { ListingsQuery, ListingsQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const LISTINGS_QUERY: TypedDocumentNode<
  ListingsQuery,
  ListingsQueryVariables
> = gql`
  query listings($input: ListingPaginationInput!) {
    listings(paginationInput: $input) {
      meta {
        hasNext
        hasPrevious
        limit
        page
        total
        totalPages
      }
      items {
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
        providerId
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
          status
          updatedAt
        }
      }
    }
  }
`;
