import Home from "../locale-pages/Home";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        if (navigator) {
            const browserLanguage = navigator.language.replace(/-.*/g, "");
            if (browserLanguage != "en") {
                (async () => {
                    await router.push(`/${browserLanguage}/index`);
                })();
            }
        }
    });

    return <Home />;
}
