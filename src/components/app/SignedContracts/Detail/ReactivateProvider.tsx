import CheckCircleGreenIcon from "@/assets/icons/check.circle.green.svg";
import { useDict } from "@/hooks/useDict";
import { Button, Modal, ModalContent } from "@heroui/react";
import { useQueryState } from "nuqs";
import { useSignSignature } from "./useSignSignature";

export const ReactivateProvider = ({ providerId }: { providerId: string }) => {
  const { reactivateProvider, busy } = useSignSignature();
  const dict = useDict();
  const [open, setOpen] = useQueryState("reactivateProvider", {
    defaultValue: "false",
  });

  return (
    <Modal
      isOpen={open === "true"}
      onOpenChange={(isOpen) => {
        setOpen(isOpen ? "true" : null);
      }}
    >
      <ModalContent className="min-w-[42vw] p-0">
        <div className="grid grid-cols-[auto_1fr] gap-6 px-6 py-10">
          <div className="grid size-15 items-center justify-items-center rounded-2xl bg-[#EFF9F0]">
            <CheckCircleGreenIcon className="size-7.5" />
          </div>
          <div>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-2">
                <h3 className="text-xl leading-8 font-semibold text-black">
                  {dict.contract.reactivateReason.title}
                </h3>
                <p className="text-gray leading-7">
                  {dict.contract.reactivateReason.subtitle}
                </p>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-6">
                <Button
                  className="bg-primary h-12.5 rounded-full font-semibold text-white outline-none!"
                  onPress={() => {
                    reactivateProvider(providerId).then((v) => {
                      if (v) {
                        setOpen(null);
                      }
                    });
                  }}
                  disabled={busy}
                  isLoading={busy}
                >
                  {dict.contract.reactivateReason.confirm}
                </Button>
                <Button
                  className="h-12.5 rounded-full border-[#F2F2F2] bg-[#F2F2F2] font-semibold text-[#4D4D4D] outline-none!"
                  onPress={() => {
                    setOpen(null);
                  }}
                  variant={"bordered"}
                  disabled={busy}
                >
                  {dict.contract.reactivateReason.cancel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};
