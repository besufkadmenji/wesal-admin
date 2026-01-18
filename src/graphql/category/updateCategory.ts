import {
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const UPDATE_CATEGORY_MUTATION: TypedDocumentNode<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
> = gql`
  mutation updateCategory($input: UpdateCategoryInput!) {
    updateCategory(input: $input) {
      createdAt
      descriptionAr
      descriptionEn
      id
      nameAr
      nameEn
      parentId
      updatedAt
      rulesEn
      rulesAr
    }
  }
`;
