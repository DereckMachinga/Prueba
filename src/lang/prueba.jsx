import { useTranslation } from "react-i18next";

const idioma = {
    "es": {
        "url": "/inicio"
    },
    "en": {
        "url": "/Home"
    }
}
export const GetIdioma  = (lang)=> {
    
    return idioma[`${lang}`];
}