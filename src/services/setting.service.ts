import { Setting, SettingInput } from "@/gql/graphql";
import { GET_SETTING_QUERY } from "@/graphql/setting/getSetting";
import { SET_SETTING_MUTATION } from "@/graphql/setting/setSetting";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";

export class SettingService {
  static getSetting = async (): Promise<Setting | null> => {
    try {
      const userResult = await client().query({
        query: GET_SETTING_QUERY,
        variables: {},
      });
      return userResult.data?.getSetting ?? null;
    } catch (e) {
      console.error("userResult", e);
    }
    return null;
  };

  static setSetting = async (input: SettingInput) => {
    try {
      const activateUserResponse = await client().mutate({
        mutation: SET_SETTING_MUTATION,
        variables: {
          input,
        },
      });
      return activateUserResponse.data?.setSetting ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
}
