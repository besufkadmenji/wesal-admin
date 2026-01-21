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
        acceptedRulesAr
        acceptedRulesEn
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
        user {
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
          role
          status
          updatedAt
          withAbsher
        }
        userId
      }
    }
  }
`;
