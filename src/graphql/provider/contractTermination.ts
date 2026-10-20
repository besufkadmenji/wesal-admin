import { gql } from "@apollo/client";

/** S4-58: the admin decides a provider's e-contract termination request. */
export const APPROVE_CONTRACT_TERMINATION_MUTATION = gql`
  mutation approveProviderContractTermination($providerId: ID!) {
    approveProviderContractTermination(providerId: $providerId) {
      id
      status
      isActive
      signedContract {
        id
        status
        terminationReason
        terminationRequestedAt
        terminationRequestReason
        terminationRejectedAt
        terminationRejectionReason
      }
    }
  }
`;

export const REJECT_CONTRACT_TERMINATION_MUTATION = gql`
  mutation rejectProviderContractTermination(
    $input: RejectContractTerminationInput!
  ) {
    rejectProviderContractTermination(input: $input) {
      id
      status
      isActive
      signedContract {
        id
        status
        terminationReason
        terminationRequestedAt
        terminationRequestReason
        terminationRejectedAt
        terminationRejectionReason
      }
    }
  }
`;
