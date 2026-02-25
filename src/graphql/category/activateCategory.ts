import {
  ActivateCategoryMutation,
  ActivateCategoryMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ACTIVATE_CATEGORY_MUTATION: TypedDocumentNode<
  ActivateCategoryMutation,
  ActivateCategoryMutationVariables
> = gql`
  mutation activateCategory($activateCategoryId: ID!) {
    activateCategory(id: $activateCategoryId) {
      id
      createdAt
      descriptionAr
      descriptionEn
      nameAr
      nameEn
      image
      status
      updatedAt
      rulesEn
      rulesAr
    }
  }
`;
