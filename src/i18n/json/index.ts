import LOCALES from "../locales.json";
import PAGES from "../pages.json";
// Add all the page content data HERE
import homeContent from "./home";
import contactContent from "./contact";

interface IResources {
    [key: string]: {
        translation: {};
    };
}

interface IObject {
    [key: string]: string | {};
}

interface IDictionary {
    [key: string]: string;
}

const locales: IDictionary = LOCALES; // Making the json object type safe
const pageNames: IDictionary = PAGES; // Making the json object type safe

const languages = Object.keys(locales).map((item) => { // Creating languages array
    return locales[item];
});

const pages = Object.keys(pageNames).map((item) => { // Creating pages array
    return pageNames[item];
});

// Helper function to pass to the i18next resources section
export const getResources = () => {
    const resources: IResources = {};
    // Looping through the languages to create a resource for each language
    languages.map((lang) => {
        const page: IObject = {};
        // Looping through all the available pages to create a resource for each page using the data files
        pages.map((pageName) => {
            let pageContent = {};
            // Assigning the correct data file to the correct page
            switch (pageName) {
                case "index":
                    pageContent = homeContent[lang];
                    break;
                case "contact":
                    pageContent = contactContent[lang];
                    break;
            }
            // Setting the page content in the page object
            page[pageName] = pageContent;
        });
        // Adding the page resources to be translated to the correct language
        resources[lang] = { translation: { ...page } };
    });

    return resources;
};
