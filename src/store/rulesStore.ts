import { create } from 'zustand';

export interface RulesState {
  rules: {
    en: string;
    ar: string;
  };
  setRulesEn: (value: string) => void;
  setRulesAr: (value: string) => void;
  setRules: (rules: { en: string; ar: string }) => void;
  resetRules: () => void;
}

export const useRulesStore = create<RulesState>((set) => ({
  rules: {
    en: '',
    ar: '',
  },
  setRulesEn: (value: string) =>
    set((state) => ({
      rules: { ...state.rules, en: value },
    })),
  setRulesAr: (value: string) =>
    set((state) => ({
      rules: { ...state.rules, ar: value },
    })),
  setRules: (rules: { en: string; ar: string }) =>
    set(() => ({
      rules,
    })),
  resetRules: () =>
    set(() => ({
      rules: {
        en: '',
        ar: '',
      },
    })),
}));
