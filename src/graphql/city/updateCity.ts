import { UpdateCityMutation, UpdateCityMutationVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const UPDATE_CITY_MUTATION: TypedDocumentNode<
  UpdateCityMutation,
  UpdateCityMutationVariables
> = gql`
  mutation updateCity($input: UpdateCityInput!) {
    updateCity(input: $input) {
      countryId
      createdAt
      id
      nameAr
      nameEn
      updatedAt
      geoBoundary
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
