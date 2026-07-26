import {
  AdminResolveContractInput,
  ComplaintPaginationInput,
  ComplaintStatus,
  ContractPaginationInput,
  ConversationPaginationInput,
  FeeReportInput,
} from "@/gql/graphql";
import { ADMIN_COMPLAINT_QUERY } from "@/graphql/complaint/adminComplaint";
import { ADMIN_COMPLAINTS_QUERY } from "@/graphql/complaint/adminComplaints";
import { ADMIN_REPLY_TO_COMPLAINT_MUTATION } from "@/graphql/complaint/adminReplyToComplaint";
import { ADMIN_SET_COMPLAINT_STATUS_MUTATION } from "@/graphql/complaint/adminSetComplaintStatus";
import { ADMIN_CONTRACT_QUERY } from "@/graphql/contract/adminContract";
import { ADMIN_CONTRACTS_QUERY } from "@/graphql/contract/adminContracts";
import { ADMIN_RESOLVE_CONTRACT_MUTATION } from "@/graphql/contract/adminResolveContract";
import { ADMIN_CONVERSATION_QUERY } from "@/graphql/conversation/adminConversation";
import { ADMIN_CONVERSATIONS_QUERY } from "@/graphql/conversation/adminConversations";
import { CONTRACT_FINANCIAL_REPORT_QUERY } from "@/graphql/report/contractFinancialReport";
import { CONVERSATION_FEE_REPORT_QUERY } from "@/graphql/report/conversationFeeReport";
import { PREMIUM_AD_FEE_REPORT_QUERY } from "@/graphql/report/premiumAdFeeReport";
import client from "@/utils/apollo.client";
import axiosClient from "@/utils/axios.client";

const requireData = <T>(data: T | undefined): T => {
  if (!data) throw new Error("GraphQL response did not include data");
  return data;
};

export class AdminLifecycleService {
  static async contracts(input: ContractPaginationInput) {
    const result = await client().query({
      query: ADMIN_CONTRACTS_QUERY,
      variables: { input },
      fetchPolicy: "network-only",
    });
    return requireData(result.data).adminContracts;
  }

  static async contract(id: string) {
    const result = await client().query({
      query: ADMIN_CONTRACT_QUERY,
      variables: { id },
      fetchPolicy: "network-only",
    });
    return requireData(result.data).adminContract;
  }

  static async resolveContract(input: AdminResolveContractInput) {
    const result = await client().mutate({
      mutation: ADMIN_RESOLVE_CONTRACT_MUTATION,
      variables: { input },
    });
    return result.data?.adminResolveContract ?? null;
  }

  static async conversations(input: ConversationPaginationInput) {
    const result = await client().query({
      query: ADMIN_CONVERSATIONS_QUERY,
      variables: { input },
      fetchPolicy: "network-only",
    });
    return requireData(result.data).adminConversations;
  }

  static async complaints(input: ComplaintPaginationInput) {
    const result = await client().query({
      query: ADMIN_COMPLAINTS_QUERY,
      variables: { input },
      fetchPolicy: "network-only",
    });
    return requireData(result.data).adminComplaints;
  }

  static async conversation(id: string) {
    const result = await client().query({
      query: ADMIN_CONVERSATION_QUERY,
      variables: { id },
      fetchPolicy: "network-only",
    });
    const data = requireData(result.data);
    return {
      ...data.adminConversation,
      contracts: data.adminContracts.items,
      complaints: data.adminComplaints.items,
    };
  }

  static async complaint(id: string) {
    const result = await client().query({
      query: ADMIN_COMPLAINT_QUERY,
      variables: { id },
      fetchPolicy: "network-only",
    });
    return requireData(result.data).adminComplaint;
  }

  static async replyComplaint(id: string, content: string) {
    const result = await client().mutate({
      mutation: ADMIN_REPLY_TO_COMPLAINT_MUTATION,
      variables: { id, content },
    });
    return result.data?.adminReplyToComplaint ?? null;
  }

  static async setComplaintStatus(id: string, status: ComplaintStatus) {
    const result = await client().mutate({
      mutation: ADMIN_SET_COMPLAINT_STATUS_MUTATION,
      variables: { id, status },
    });
    return result.data?.adminSetComplaintStatus ?? null;
  }

  static async report(
    type: "contracts" | "conversations" | "premium",
    input: FeeReportInput,
  ) {
    if (type === "contracts") {
      const result = await client().query({
        query: CONTRACT_FINANCIAL_REPORT_QUERY,
        variables: { input },
        fetchPolicy: "network-only",
      });
      return requireData(result.data).contractFinancialReport;
    }

    if (type === "conversations") {
      const result = await client().query({
        query: CONVERSATION_FEE_REPORT_QUERY,
        variables: { input },
        fetchPolicy: "network-only",
      });
      return requireData(result.data).conversationFeeReport;
    }

    const result = await client().query({
      query: PREMIUM_AD_FEE_REPORT_QUERY,
      variables: { input },
      fetchPolicy: "network-only",
    });
    return requireData(result.data).premiumAdFeeReport;
  }

  static async download(
    path: string,
    params: Record<string, string | number | undefined> = {},
  ) {
    const response = await axiosClient.get(path, {
      params,
      responseType: "blob",
    });
    return response.data as Blob;
  }
}
