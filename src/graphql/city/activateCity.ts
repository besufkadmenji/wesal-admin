import {
  ActivateCityMutation,
  ActivateCityMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ACTIVATE_CITY_MUTATION: TypedDocumentNode<
  ActivateCityMutation,
  ActivateCityMutationVariables
> = gql`
  mutation activateCity($activateCityId: ID!) {
    activateCity(id: $activateCityId) {
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
