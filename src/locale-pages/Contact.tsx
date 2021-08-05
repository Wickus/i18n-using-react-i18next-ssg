import { useTranslation } from "react-i18next";
import styles from "../styles/Home.module.css";

const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <h1>{t("contact.title")}</h1>
        </div>
    );
};

export default Contact;
