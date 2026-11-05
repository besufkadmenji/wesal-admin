import { gql } from "@apollo/client";

export const REGISTER_ADMIN_PUSH_DEVICE_MUTATION = gql`
  mutation RegisterAdminPushDevice($input: RegisterPushDeviceInput!) {
    registerAdminPushDevice(input: $input)
  }
`;

export const UNREGISTER_ADMIN_PUSH_DEVICE_MUTATION = gql`
  mutation UnregisterAdminPushDevice($token: String!) {
    unregisterAdminPushDevice(token: $token)
  }
`;
