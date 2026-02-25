import {
  DeactivateCategoryMutation,
  DeactivateCategoryMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const DEACTIVATE_CATEGORY_MUTATION: TypedDocumentNode<
  DeactivateCategoryMutation,
  DeactivateCategoryMutationVariables
> = gql`
  mutation deactivateCategory($deactivateCategoryId: ID!) {
    deactivateCategory(id: $deactivateCategoryId) {
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
