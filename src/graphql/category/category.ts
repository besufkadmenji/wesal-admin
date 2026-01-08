import { CategoryQuery, CategoryQueryVariables } from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CATEGORY_QUERY: TypedDocumentNode<
  CategoryQuery,
  CategoryQueryVariables
> = gql`
  query category($categoryId: String!) {
    category(id: $categoryId) {
      createdAt
      descriptionAr
      descriptionEn
      id
      nameAr
      nameEn
      parent {
        createdAt
        descriptionAr
        descriptionEn
        id
        nameAr
        nameEn
        parentId
        updatedAt
      }
      parentId
      updatedAt
    }
  }
`;
