import {
  AdminLifecycleResolveContractMutation,
  AdminLifecycleResolveContractMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_RESOLVE_CONTRACT_MUTATION: TypedDocumentNode<
  AdminLifecycleResolveContractMutation,
  AdminLifecycleResolveContractMutationVariables
> = gql`
  mutation AdminLifecycleResolveContract($input: AdminResolveContractInput!) {
    adminResolveContract(input: $input) {
      id
      status
    }
  }
`;
