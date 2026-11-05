import {
  RegisterAdminPushDeviceMutation,
  UnregisterAdminPushDeviceMutation,
} from "@/gql/graphql";
import {
  REGISTER_ADMIN_PUSH_DEVICE_MUTATION,
  UNREGISTER_ADMIN_PUSH_DEVICE_MUTATION,
} from "@/graphql/notification/adminPush";
import client from "@/utils/apollo.client";

/** ClickUp 869fp1jmt: this admin browser's FCM push registration. */
class AdminPushService {
  static register = async (token: string, language: "ar" | "en") => {
    const result = await client().mutate<RegisterAdminPushDeviceMutation>({
      mutation: REGISTER_ADMIN_PUSH_DEVICE_MUTATION,
      variables: { input: { token, language } },
    });
    return result.data?.registerAdminPushDevice ?? false;
  };

  static unregister = async (token: string) => {
    const result = await client().mutate<UnregisterAdminPushDeviceMutation>({
      mutation: UNREGISTER_ADMIN_PUSH_DEVICE_MUTATION,
      variables: { token },
    });
    return result.data?.unregisterAdminPushDevice ?? false;
  };
}

export default AdminPushService;
