"use client";

import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { enablePush, pushPermission } from "@/utils/push";
import { addToast, Button, closeToast } from "@heroui/react";
import { useEffect } from "react";

const SNOOZE_KEY = "wesal.admin.pushPromptSnoozedUntil";
const SNOOZE_MS = 7 * 24 * 60 * 60 * 1000;
const PROMPT_DELAY_MS = 3000;

const isSnoozed = () => {
  try {
    return Number(window.localStorage.getItem(SNOOZE_KEY) ?? 0) > Date.now();
  } catch {
    return false;
  }
};
const snooze = () => {
  try {
    window.localStorage.setItem(SNOOZE_KEY, String(Date.now() + SNOOZE_MS));
  } catch {
    // Private mode: the prompt may show again next visit.
  }
};

/**
 * ClickUp 869fp1jmt: keeps this admin browser registered for FCM push and
 * offers to turn it on once (browsers only ask after a click).
 */
export const AdminPushGate = ({ adminId }: { adminId: string }) => {
  const dict = useDict();
  const lang = useLang() === "en" ? "en" : "ar";
  const copy = dict.admin_notifications.push;

  useEffect(() => {
    const permission = pushPermission();
    if (permission === "granted") {
      // Refresh the token and tie it to whoever is signed in now.
      void enablePush(lang).catch(() => undefined);
      return;
    }
    if (permission !== "default" || isSnoozed()) return;
    const timer = window.setTimeout(() => {
      let key: string | null = null;
      const close = () => {
        if (key) closeToast(key);
      };
      key = addToast({
        title: copy.prompt,
        color: "primary",
        timeout: Infinity,
        onClose: snooze,
        endContent: (
          <div className="flex gap-2">
            <Button
              size="sm"
              color="primary"
              onPress={() => {
                close();
                void enablePush(lang)
                  .then((result) => {
                    if (result === "granted") showSuccessMessage(copy.enabled);
                    else if (result === "denied") showErrorMessage(copy.denied);
                  })
                  .catch(() => snooze());
              }}
            >
              {copy.enable}
            </Button>
            <Button size="sm" variant="light" onPress={close}>
              {copy.not_now}
            </Button>
          </div>
        ),
      });
    }, PROMPT_DELAY_MS);
    return () => window.clearTimeout(timer);
    // Offered once per sign-in, not on every language switch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminId]);

  return null;
};
