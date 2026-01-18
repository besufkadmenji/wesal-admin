import { useSetting } from "@/components/app/Settings/useSettings";
import { useDict } from "@/hooks/useDict";
import { useEffect } from "react";
import { FormSection } from "../shared/forms/AppForm";
import { FormAreaInput } from "../shared/forms/FormAreaInput";
import { useManageSetting } from "./useManageSetting";
import { PrimaryButton } from "../shared/button/PrimaryButton";
import { useRulesStore } from "@/store/rulesStore";

export const Rules = () => {
  const dict = useDict();
  const { setting } = useSetting("rules");
  const { updateRules, busy } = useManageSetting();
  const { rules, setRulesEn, setRulesAr, setRules } = useRulesStore();

  useEffect(() => {
    if (setting) {
      setRules({
        en: setting?.rulesEn ?? "",
        ar: setting?.rulesAr ?? "",
      });
    }
  }, [setting, setRules]);

  return (
    <FormSection title={dict.settings.rules}>
      <div className="grid grid-cols-1 gap-6">
        <FormAreaInput
          label={dict.settings.labels.rulesAr}
          placeholder={dict.settings.labels.rulesAr}
          value={rules.ar}
          onChange={(value: string): void => {
            setRulesAr(value);
          }}
        />
        <FormAreaInput
          label={dict.settings.labels.rulesEn}
          placeholder={dict.settings.labels.rulesEn}
          value={rules.en}
          onChange={(value: string): void => {
            setRulesEn(value);
          }}
        />
        <PrimaryButton
          onPress={() => updateRules(rules.ar, rules.en)}
          isDisabled={busy}
          isLoading={busy}
          className="justify-self-center px-20"
        >
          {dict.settings.saveRules}
        </PrimaryButton>
      </div>
    </FormSection>
  );
};
