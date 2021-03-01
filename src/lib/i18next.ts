import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "../helpers/locale/es.json";
import en from "../helpers/locale/en.json";
import empty from "../helpers/locale/empty.json";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
    empty: {
      translation: empty,
    },
  },
  lng: "es",
  fallbackLng: "empty",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
