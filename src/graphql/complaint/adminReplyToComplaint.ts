import {
  AdminLifecycleReplyComplaintMutation,
  AdminLifecycleReplyComplaintMutationVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_REPLY_TO_COMPLAINT_MUTATION: TypedDocumentNode<
  AdminLifecycleReplyComplaintMutation,
  AdminLifecycleReplyComplaintMutationVariables
> = gql`
  mutation AdminLifecycleReplyComplaint($id: String!, $content: String!) {
    adminReplyToComplaint(complaintId: $id, content: $content) {
      id
    }
  }
`;
