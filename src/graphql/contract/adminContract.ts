import {
  AdminLifecycleContractQuery,
  AdminLifecycleContractQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const ADMIN_CONTRACT_QUERY: TypedDocumentNode<
  AdminLifecycleContractQuery,
  AdminLifecycleContractQueryVariables
> = gql`
  query AdminLifecycleContract($id: String!) {
    adminContract(id: $id) {
      id
      publicId
      version
      status
      agreedPrice
      depositPercent
      downPayment
      commissionPercent
      commissionAmount
      vatRate
      vatAmount
      totalPayable
      providerNetAmount
      customerAddress
      providerAddress
      deliveryCompanyNameAr
      deliveryCompanyNameEn
      deliveryEstimateDays
      confirmationDeadlineAt
      cancellationReason
      disputeReason
      contractDocumentText
      undertakingTextAr
      undertakingTextEn
      refundPolicyAr
      refundPolicyEn
      createdAt
      acceptedAt
      paidAt
      providerCompletedAt
      deliveryStartedAt
      completedAt
      cancelledAt
      client {
        name
        phone
      }
      provider {
        commercialName
        phone
      }
      conversation {
        id
        publicId
        listing {
          id
          name
        }
      }
      signatures {
        id
        signerType
        signatureType
        signatureData
        signedAt
      }
      settlements {
        id
        type
        amount
        reason
        createdAt
      }
      audits {
        id
        actorType
        action
        previousStatus
        newStatus
        reason
        createdAt
      }
      document {
        id
        version
        sha256
        createdAt
      }
    }
  }
`;
