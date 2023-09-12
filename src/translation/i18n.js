import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import dutchData from "./dutch.json";
import engData from "./english.json";
import hindiData from "./hindi.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: engData },
      de: { translation: dutchData },
      hi: { translation: hindiData },
    },
  });

export default i18n;
