import locales from "../../locales.json";
import en from "./en.json";
import fr from "./fr.json";
import es from "./es.json";

export default {
    [locales.ENGLISH]: { ...en },
    [locales.FRENCH]: { ...fr },
    [locales.SPANISH]: { ...es },
};