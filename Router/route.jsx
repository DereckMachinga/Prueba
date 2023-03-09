import { createBrowserRouter } from "react-router-dom";
import App from '../src/App';
import { useTranslation, Trans } from "react-i18next";
import Home  from "../src/Components/Home";


import { GetIdioma } from "../src/lang/prueba";

const idioma = GetIdioma(localStorage.getItem('i18nextLng'));
console.log(GetIdioma(localStorage.getItem('lang')));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: idioma.url,
        element: <Home/>
    }
    
]);

export default router;