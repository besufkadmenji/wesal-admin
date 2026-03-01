import {
  SignedContractsQuery,
  SignedContractsQueryVariables,
} from "@/gql/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const SIGNED_CONTRACTS: TypedDocumentNode<
  SignedContractsQuery,
  SignedContractsQueryVariables
> = gql`
  query signedContracts($input: SignedContractPaginationInput) {
    signedContracts(input: $input) {
      meta {
        hasNext
        hasPrevious
        limit
        page
        total
        totalPages
      }
      items {
        acceptedRulesAr {
          label
          value
        }
        acceptedRulesEn {
          label
          value
        }
        contractExpiresAt
        contractSignedAt
        createdAt
        id
        platformManagerName
        platformManagerSignature
        publicId
        serviceProviderSignature
        status
        terminationReason
        updatedAt
        provider {
          address
          avatarFilename
          bankName
          cityId
          commercialName
          commercialRegistrationFilename
          commercialRegistrationNumber
          countryId
          createdAt
          deactivationReason
          deleteReason
          deletedAt
          dialCode
          email
          emailVerified
          ibanNumber
          id
          isActive
          languageCode
          latitude
          longitude
          name
          phone
          phoneVerified
          publicId
          status
          updatedAt
          withAbsher
        }
        providerId
      }
    }
  }
`;
