import { CountriesQuery, CountriesQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const COUNTRIES_QUERY: TypedDocumentNode<
  CountriesQuery,
  CountriesQueryVariables
> = gql`
  query countries($pagination: CountryPaginationInput) {
    countries(pagination: $pagination) {
      meta {
        hasNext
        hasPrevious
        limit
        page
        total
        totalPages
      }
      items {
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
`;
