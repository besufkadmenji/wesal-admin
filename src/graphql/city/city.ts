import { CityQuery, CityQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CITY_QUERY: TypedDocumentNode<CityQuery, CityQueryVariables> = gql`
  query city($cityId: ID!) {
    city(id: $cityId) {
      id
      nameAr
      nameEn
      status
      updatedAt
      createdAt
      countryId
      country {
        code
        createdAt
        dialCode
        id
        nameAr
        nameEn
        updatedAt
      }
      geoBoundary
    }
  }
`;
