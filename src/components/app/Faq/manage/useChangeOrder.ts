import { Faq } from "@/gql/graphql";
import FaqService from "@/services/faq.service";
import { useDict } from "@/hooks/useDict";
import { showErrorMessage, showSuccessMessage } from "@/utils/show.message";
import { useCallback, useState } from "react";
import { useFaqs } from "@/components/app/Faq/useFaq";
import { queryClient } from "@/utils/query.client";

export const useChangeOrder = () => {
  const dict = useDict();
  const [busy, setBusy] = useState(false);
  const { data } = useFaqs();
  const [faqItems, setFaqItems] = useState<Faq[]>(data || []);
  // Re-sync local ordering when the server list changes (render-time update, no effect).
  const [syncedData, setSyncedData] = useState(data);
  if (data && data !== syncedData) {
    setSyncedData(data);
    setFaqItems(data);
  }

  const handleSaveOrder = useCallback(async () => {
    setBusy(true);
    try {
      const itemsToUpdate = faqItems.map((faq, index) => ({
        id: faq.id,
        order: index,
      }));

      await FaqService.bulkUpdateOrder({ items: itemsToUpdate });
      showSuccessMessage(dict.faq_page.messages.updateSuccess);
      queryClient.invalidateQueries({
        queryKey: ["faqs"],
      });
    } catch (error) {
      showErrorMessage(
        error instanceof Error ? error.message : "An error occurred.",
      );
    } finally {
      setBusy(false);
    }
  }, [faqItems, dict]);

  return {
    items: faqItems,
    setItems: setFaqItems,
    busy,
    handleSaveOrder,
  };
};
