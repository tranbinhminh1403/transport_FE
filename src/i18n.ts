import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nResources from "./locales";

i18n.use(initReactI18next).init({
    lng: "en", //key language from local storage
    fallbackLng: ["en", "vi"],
    resources: i18nResources,
    interpolation: {
        escapeValue: false,
    },
});

i18n.services.formatter?.add('lowercase', (value: string) => {
    return value.toLowerCase();
});

export default i18n;
