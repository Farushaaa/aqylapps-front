import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import locales from "./index";
import { UseLangChange } from "../store/UseLangChange";

const langStore = UseLangChange.getState();
const currentLang = langStore.language || "ru";

const resources = {
  en: {
    translation: locales.enLang,
  },
  ru: {
    translation: locales.ruLang,
  },
  kz: {
    translation: locales.kzLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: currentLang,
  fallbackLng: "ru",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
