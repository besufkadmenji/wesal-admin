import { Faq } from "@/gql/graphql";
import { useLang } from "@/hooks/useLang";
import FaqService from "@/services/faq.service";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useFaqs = (): UseQueryResult<Faq[] | null, Error> => {
  const lang = useLang();

  return useQuery({
    queryKey: ["faqs", lang],
    queryFn: () => FaqService.faqs(),
  });
};

export const useFaq = (id: string): UseQueryResult<Faq | null, Error> => {
  const lang = useLang();

  return useQuery({
    queryKey: ["faq", id, lang],
    queryFn: () => FaqService.faq(id),
    enabled: !!id,
  });
};
