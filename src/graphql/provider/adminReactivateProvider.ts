import { gql } from "@apollo/client";

export const ADMIN_REACTIVATE_PROVIDER_MUTATION = gql`
  mutation adminReactivateProvider($providerId: ID!) {
    adminReactivateProvider(providerId: $providerId) {
      id
      name
      isActive
      status
      email
      phone
      deactivationReason
      signedContract {
        id
        status
        terminationReason
        contractSignedAt
        contractExpiresAt
        platformManagerSignature
        serviceProviderSignature
      }
    }
  }
`;
