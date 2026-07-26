import {
  AdminLifecycleStatusComplaintMutation,
  AdminLifecycleStatusComplaintMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_SET_COMPLAINT_STATUS_MUTATION: TypedDocumentNode<
  AdminLifecycleStatusComplaintMutation,
  AdminLifecycleStatusComplaintMutationVariables
> = gql`
  mutation AdminLifecycleStatusComplaint(
    $id: String!
    $status: ComplaintStatus!
  ) {
    adminSetComplaintStatus(complaintId: $id, status: $status) {
      id
      status
    }
  }
`;
