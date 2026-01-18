import {
  CreateCategoryMutation,
  CreateCategoryMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CREATE_CATEGORY_MUTATION: TypedDocumentNode<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
> = gql`
  mutation createCategory($input: CreateCategoryInput!) {
    createCategory(input: $input) {
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
