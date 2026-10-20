import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { Button } from "@heroui/react";
import { FileClock } from "lucide-react";
import { useState } from "react";
import { ApproveTerminationDialog } from "./ApproveTerminationDialog";
import { RejectTerminationDialog } from "./RejectTerminationDialog";

/**
 * S4-58 (D-22, BRD 4.3.7.3): a provider's pending e-contract termination
 * request, with the admin's approve/reject. Interim design (D-23).
 */
export const TerminationRequestCard = ({
  providerId,
  requestedAt,
  reason,
}: {
  providerId: string;
  requestedAt?: unknown;
  reason?: string | null;
}) => {
  const dict = useDict();
  const lang = useLang();
  const copy = dict.contract.terminationRequest;
  const [dialog, setDialog] = useState<"approve" | "reject" | null>(null);
  const date = requestedAt
    ? new Intl.DateTimeFormat(
        lang === "ar" ? "ar-SA-u-ca-gregory-nu-latn" : "en-US",
        { dateStyle: "long", timeStyle: "short" },
      ).format(new Date(String(requestedAt)))
    : null;

  return (
    <section
      aria-label={copy.title}
      className="grid gap-4 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 dark:border-orange-400/25 dark:bg-orange-500/10"
    >
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300">
          <FileClock aria-hidden className="size-5" strokeWidth={1.75} />
        </span>
        <div className="grid min-w-0 gap-1">
          <h3 className="text-primary font-semibold dark:text-white">
            {copy.title}
          </h3>
          {date && (
            <p className="text-subTitle dark:text-dark-subTitle text-sm">
              {copy.requestedOn.replace("{date}", date)}
            </p>
          )}
          {reason && (
            <p className="text-primary leading-7 dark:text-white">
              <span className="text-subTitle dark:text-dark-subTitle">
                {copy.reason}:{" "}
              </span>
              {reason}
            </p>
          )}
          <p className="text-subTitle dark:text-dark-subTitle text-sm">
            {copy.hint}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button
          className="h-11 rounded-full bg-[#B3251E] px-6 font-semibold text-white"
          onPress={() => setDialog("approve")}
        >
          {copy.approve}
        </Button>
        <Button
          className="bg-accent-soft text-primary h-11 rounded-full px-6 font-semibold dark:text-white"
          onPress={() => setDialog("reject")}
        >
          {copy.reject}
        </Button>
      </div>
      <ApproveTerminationDialog
        providerId={providerId}
        isOpen={dialog === "approve"}
        onClose={() => setDialog(null)}
      />
      <RejectTerminationDialog
        providerId={providerId}
        isOpen={dialog === "reject"}
        onClose={() => setDialog(null)}
      />
    </section>
  );
};
