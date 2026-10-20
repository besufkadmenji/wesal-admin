import {
  AdminCharityContractsQuery,
  AdminCharitySummaryQuery,
  ContractPaginationInput,
} from "@/gql/graphql";
import {
  ADMIN_CHARITY_CONTRACTS_QUERY,
  ADMIN_CHARITY_SUMMARY_QUERY,
} from "@/graphql/charity/charity";
import client from "@/utils/apollo.client";

export type CharityContractRow =
  AdminCharityContractsQuery["adminCharityContracts"]["items"][number];

/** Wesal Al-Khair (charity) list for admins (BRD 4.3.11). */
class CharityService {
  static contracts = async (
    input: ContractPaginationInput,
  ): Promise<AdminCharityContractsQuery["adminCharityContracts"] | null> => {
    try {
      const result = await client().query<AdminCharityContractsQuery>({
        query: ADMIN_CHARITY_CONTRACTS_QUERY,
        variables: { input },
        fetchPolicy: "network-only",
      });
      return result.data?.adminCharityContracts ?? null;
    } catch (e) {
      console.error("adminCharityContractsResult", e);
    }
    return null;
  };

  static summary = async (
    from?: string,
    to?: string,
  ): Promise<AdminCharitySummaryQuery["adminCharitySummary"] | null> => {
    try {
      const result = await client().query<AdminCharitySummaryQuery>({
        query: ADMIN_CHARITY_SUMMARY_QUERY,
        variables: { from, to },
        fetchPolicy: "network-only",
      });
      return result.data?.adminCharitySummary ?? null;
    } catch (e) {
      console.error("adminCharitySummaryResult", e);
    }
    return null;
  };
}

export default CharityService;
