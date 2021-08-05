import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getResources } from "./json";

interface IResources {
    [key: string]: {
        translation: {};
    };
}

const resources: IResources = getResources();

// Configuring the i18n Library for global use
i18n.use(initReactI18next).init({
    resources: {
        ...resources,
    },
    lng: "en", // Sets default language
    fallbackLng: "en", // Default language if a language does not exists when calling changeLanguage
    interpolation: { escapeValue: false }, // React does this for us that is why it is false
});

export default i18n;
