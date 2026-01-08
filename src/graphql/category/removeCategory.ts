import {
    RemoveCategoryMutation,
    RemoveCategoryMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const REMOVE_CATEGORY_MUTATION: TypedDocumentNode<
  RemoveCategoryMutation,
  RemoveCategoryMutationVariables
> = gql`
  mutation removeCategory($removeCategoryId: String!) {
    removeCategory(id: $removeCategoryId) {
      id
      createdAt
      descriptionAr
      descriptionEn
      nameAr
      nameEn
      parentId
      updatedAt
    }
  }
`;
