import { RemoveCityMutation, RemoveCityMutationVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const REMOVE_CITY_MUTATION: TypedDocumentNode<
  RemoveCityMutation,
  RemoveCityMutationVariables
> = gql`
  mutation removeCity($removeCityId: ID!) {
    removeCity(id: $removeCityId) {
      countryId
      createdAt
      id
      nameAr
      nameEn
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
`;
