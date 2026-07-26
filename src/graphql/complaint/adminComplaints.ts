import {
  AdminLifecycleComplaintsQuery,
  AdminLifecycleComplaintsQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_COMPLAINTS_QUERY: TypedDocumentNode<
  AdminLifecycleComplaintsQuery,
  AdminLifecycleComplaintsQueryVariables
> = gql`
  query AdminLifecycleComplaints($input: ComplaintPaginationInput) {
    adminComplaints(input: $input) {
      items {
        id
        publicId
        title
        description
        reporterType
        status
        createdAt
        conversation {
          publicId
        }
        listing {
          name
        }
        reviewer {
          fullName
        }
      }
      meta {
        total
        page
        limit
        totalPages
      }
    }
  }
`;
