import {
  DeactivateUserInput,
  DeleteUserInput,
  PaginatedUserResponse,
  User,
  UserPaginationInput,
} from "@/gql/graphql";
import { ACTIVATE_USER_MUTATION } from "@/graphql/user/activateUser";
import { DEACTIVATE_USER_MUTATION } from "@/graphql/user/deactivateUser";
import { REMOVE_USER_MUTATION } from "@/graphql/user/removeUser";
import { USER_QUERY } from "@/graphql/user/user";
import { USERS_QUERY } from "@/graphql/user/users";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";

class UserService {
  static users = async (
    input: UserPaginationInput,
  ): Promise<PaginatedUserResponse | null> => {
    try {
      const userResult = await client().query({
        query: USERS_QUERY,
        variables: {
          pagination: input,
        },
      });
      return userResult.data?.users ?? null;
    } catch (e) {
      console.error("userResult", e);
    }
    return null;
  };
  static user = async (userId: string): Promise<User | null> => {
    try {
      const userResult = await client().query({
        query: USER_QUERY,
        variables: {
          userId,
        },
      });
      return userResult.data?.user ?? null;
    } catch (e) {
      console.error("userResult", e);
    }
    return null;
  };

  static activateUser = async (activateUserId: string) => {
    try {
      const activateUserResponse = await client().mutate({
        mutation: ACTIVATE_USER_MUTATION,
        variables: {
          activateUserId,
        },
      });
      return activateUserResponse.data?.activateUser ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static deactivateUser = async (
    deactivateUserId: string,
    input: DeactivateUserInput,
  ) => {
    try {
      const deactivateUserResponse = await client().mutate({
        mutation: DEACTIVATE_USER_MUTATION,
        variables: {
          deactivateUserId,
          input,
        },
      });
      return deactivateUserResponse.data?.deactivateUser ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static removeUser = async (removeUserId: string, input: DeleteUserInput) => {
    try {
      const removeUserResponse = await client().mutate({
        mutation: REMOVE_USER_MUTATION,
        variables: {
          removeUserId,
          input,
        },
      });
      return removeUserResponse.data?.removeUser ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
}

export default UserService;
