import {ChangeEvent} from "react";
import {useRouter} from "next/router";

const LanguageSelector = () => {
    const router = useRouter();
    const {locale, page} = router.query;
    const onChangeHandler = async (e: ChangeEvent<HTMLSelectElement>) => {
        await router.push(`/${e.target.value}/${page ? page : "index"}`);
    }

    return <select onChange={onChangeHandler}>
        <option value={"en"} selected={locale === "en"}>English</option>
        <option value={"fr"} selected={locale === "fr"}>French</option>
        <option value={"es"} selected={locale === "es"}>Spanish</option>
    </select>
}

export default LanguageSelector;