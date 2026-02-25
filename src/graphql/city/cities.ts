import { CitiesQuery, CitiesQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CITIES_QUERY: TypedDocumentNode<
  CitiesQuery,
  CitiesQueryVariables
> = gql`
  query cities($pagination: CityPaginationInput) {
    cities(pagination: $pagination) {
      meta {
        hasNext
        hasPrevious
        limit
        page
        total
        totalPages
      }
      items {
        countryId
        createdAt
        id
        nameAr
        nameEn
        status
        updatedAt
        country {
          code
          createdAt
          dialCode
          id
          nameAr
          nameEn
          updatedAt
        }
      }
    }
  }
`;
