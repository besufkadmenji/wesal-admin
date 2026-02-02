import ApproveIcon from "@/assets/icons/app/approve.svg";
import RejectIcon from "@/assets/icons/app/reject.svg";
import { Provider } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import moment from "moment";
import { useQueryState } from "nuqs";
import { PrimaryButton } from "../../shared/button/PrimaryButton";
import { useManageProvider } from "./useManageProvider";
export const RequestAction = ({ request }: { request: Provider }) => {
  const dict = useDict();
  const { activateProvider, busy } = useManageProvider();
  const [showRejectModal, setShowRejectModal] =
    useQueryState("showRejectModal");
  return (
    <div className="flex items-center gap-4">
      <p>{moment(request.createdAt).format("DD/MM/YYYY h:mm a")}</p>
      <div className="flex gap-4">
        <PrimaryButton
          startContent={<ApproveIcon className="size-5" />}
          onPress={() => {
            activateProvider(request.id);
          }}
          isLoading={busy}
          isDisabled={busy}
        >
          {dict.subscription_request_detail_page.buttons.approve}
        </PrimaryButton>
        <PrimaryButton
          startContent={<RejectIcon className="size-5" />}
          className="bg-[#EA5455]"
          onPress={() => {
            setShowRejectModal("true");
          }}
        >
          {dict.subscription_request_detail_page.buttons.reject}
        </PrimaryButton>
      </div>
    </div>
  );
};
