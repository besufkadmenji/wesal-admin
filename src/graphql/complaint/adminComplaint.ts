import {
  AdminLifecycleComplaintQuery,
  AdminLifecycleComplaintQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_COMPLAINT_QUERY: TypedDocumentNode<
  AdminLifecycleComplaintQuery,
  AdminLifecycleComplaintQueryVariables
> = gql`
  query AdminLifecycleComplaint($id: String!) {
    adminComplaint(id: $id) {
      id
      publicId
      status
      reporterType
      title
      description
      attachments
      createdAt
      reviewedAt
      conversation {
        id
        publicId
        user {
          name
          phone
        }
        provider {
          commercialName
          phone
        }
      }
      contract {
        id
        publicId
      }
      listing {
        name
      }
      reviewer {
        fullName
      }
      messages {
        id
        authorType
        content
        createdAt
      }
    }
  }
`;
