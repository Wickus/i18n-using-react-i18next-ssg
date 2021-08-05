import { GetStaticProps, GetStaticPaths } from "next";
import { pageHelper } from "../../helpers/pageHelper";
import i18n from "../../i18n";

interface IParams {
    locale: string;
    page: string;
}

const Page: React.FC<{ params: IParams }> = ({ params }) => {
    // Checking if the language is set correctly
    if (i18n.language != params.locale) {
        i18n.changeLanguage(params.locale);
    }
    // Returning the correct page based of the router
    return pageHelper[params.page];
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            params: context.params,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { locale: "en", page: "index" } },
            { params: { locale: "fr", page: "index" } },
            { params: { locale: "es", page: "index" } },
            { params: { locale: "en", page: "contact" } },
            { params: { locale: "fr", page: "contact" } },
            { params: { locale: "es", page: "contact" } },
        ],
        fallback: false,
    };
};
