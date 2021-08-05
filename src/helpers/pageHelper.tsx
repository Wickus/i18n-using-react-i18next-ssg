import Home from "../locale-pages/Home";
import Contact from "../locale-pages/Contact";
import {ReactElement} from "react";

interface pageHelper {
    [key: string]: ReactElement
}

// Pages helper
export const pageHelper: pageHelper = {
    "index": <Home/>,
    "contact": <Contact/>,
}