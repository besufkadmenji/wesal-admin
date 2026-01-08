import {
  Category,
  CategoryPaginationInput,
  CreateCategoryInput,
  PaginatedCategoryResponse,
  UpdateCategoryInput,
} from "@/gql/graphql";
import { CATEGORIES_QUERY } from "@/graphql/category/categories";
import { CATEGORY_QUERY } from "@/graphql/category/category";
import { CREATE_CATEGORY_MUTATION } from "@/graphql/category/createCategory";
import { REMOVE_CATEGORY_MUTATION } from "@/graphql/category/removeCategory";
import { UPDATE_CATEGORY_MUTATION } from "@/graphql/category/updateCategory";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";

class CategoryService {
  static categories = async (
    input: CategoryPaginationInput,
  ): Promise<PaginatedCategoryResponse | null> => {
    try {
      const categoryResult = await client().query({
        query: CATEGORIES_QUERY,
        variables: {
          input,
        },
      });
      return categoryResult.data?.categories ?? null;
    } catch (e) {
      console.error("categoryResult", e);
    }
    return null;
  };
  static category = async (categoryId: string): Promise<Category | null> => {
    try {
      const categoryResult = await client().query({
        query: CATEGORY_QUERY,
        variables: {
          categoryId,
        },
      });
      return categoryResult.data?.category ?? null;
    } catch (e) {
      console.error("categoryResult", e);
    }
    return null;
  };

  static createCategory = async (input: CreateCategoryInput) => {
    try {
      const createResponse = await client().mutate({
        mutation: CREATE_CATEGORY_MUTATION,
        variables: {
          input,
        },
      });
      return createResponse.data?.createCategory ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static updateCategory = async (input: UpdateCategoryInput) => {
    try {
      const updateCategoryResponse = await client().mutate({
        mutation: UPDATE_CATEGORY_MUTATION,
        variables: {
          input,
        },
      });
      return updateCategoryResponse.data?.updateCategory ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };

  static removeCategory = async (removeCategoryId: string) => {
    try {
      const removeCategoryResponse = await client().mutate({
        mutation: REMOVE_CATEGORY_MUTATION,
        variables: {
          removeCategoryId,
        },
      });
      return removeCategoryResponse.data?.removeCategory ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
}

export default CategoryService;
