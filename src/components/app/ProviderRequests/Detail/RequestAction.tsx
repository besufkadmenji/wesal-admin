import ApproveIcon from "@/assets/icons/app/approve.svg";
import RejectIcon from "@/assets/icons/app/reject.svg";
import { User } from "@/gql/graphql";
import { useDict } from "@/hooks/useDict";
import moment from "moment";
import { useQueryState } from "nuqs";
import { PrimaryButton } from "../../shared/button/PrimaryButton";
import { useManageUser } from "./useManageUser";
export const RequestAction = ({ request }: { request: User }) => {
  const dict = useDict();
  const { activateUser, busy } = useManageUser();
  const [showRejectModal, setShowRejectModal] =
    useQueryState("showRejectModal");
  return (
    <div className="flex items-center gap-4">
      <p>{moment(request.createdAt).format("DD/MM/YYYY h:mm a")}</p>
      <div className="flex gap-4">
        <PrimaryButton
          startContent={<ApproveIcon className="size-5" />}
          onPress={() => {
            activateUser(request.id);
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
