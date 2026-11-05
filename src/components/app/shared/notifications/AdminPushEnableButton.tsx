"use client";

import { useDict } from "@/hooks/useDict";
import { useLang } from "@/hooks/useLang";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { enablePush, pushPermission } from "@/utils/push";
import { Button } from "@heroui/react";
import { useState } from "react";

/** Lets an admin who skipped the prompt turn on push from the bell. */
export const AdminPushEnableButton = () => {
  const dict = useDict();
  const lang = useLang() === "en" ? "en" : "ar";
  const copy = dict.admin_notifications.push;
  const [permission, setPermission] = useState(pushPermission);
  const [busy, setBusy] = useState(false);

  if (permission !== "default") return null;

  const handlePress = async () => {
    setBusy(true);
    try {
      const result = await enablePush(lang);
      setPermission(result);
      if (result === "granted") showSuccessMessage(copy.enabled);
      if (result === "denied") showErrorMessage(copy.denied);
    } catch {
      showErrorMessage(copy.denied);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Button
      size="sm"
      variant="light"
      className="text-app-link mx-5 justify-start font-medium"
      isLoading={busy}
      onPress={handlePress}
    >
      {copy.enable_browser}
    </Button>
  );
};
