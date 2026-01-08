import { CreateCityMutation, CreateCityMutationVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CREATE_CITY_MUTATION: TypedDocumentNode<
  CreateCityMutation,
  CreateCityMutationVariables
> = gql`
  mutation createCity($input: CreateCityInput!) {
    createCity(input: $input) {
      id
      countryId
      createdAt
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
