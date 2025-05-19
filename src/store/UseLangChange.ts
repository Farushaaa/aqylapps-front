import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ILangChange {
  language: string;
  setLanguage: (lang: string) => void;
}

export const UseLangChange = create<ILangChange>()(
  persist(
    (set) => ({
      language: "ru",
    setLanguage: (lang: string) =>
        set(() => ({
          language: lang,
        })),
    }),
    {
      name: "lang-storage",
    }
  )
);
