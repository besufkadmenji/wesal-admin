import {
  DeactivateCityMutation,
  DeactivateCityMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const DEACTIVATE_CITY_MUTATION: TypedDocumentNode<
  DeactivateCityMutation,
  DeactivateCityMutationVariables
> = gql`
  mutation deactivateCity($deactivateCityId: ID!) {
    deactivateCity(id: $deactivateCityId) {
      id
      nameAr
      nameEn
      status
      countryId
      createdAt
      updatedAt
    }
  }
`;
