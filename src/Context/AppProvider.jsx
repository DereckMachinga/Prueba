import { createContext, useEffect, useState} from "react";
import Swal from 'sweetalert2'
const AppContext = createContext();

const AppProvider = ({children}) => {

    const [ estado, setEstado ] =  useState(0);
    const [ cupons, setCupons ] = useState([]);
    const [ parameters, setParameters ] = useState([]);
    const [ loader, setLoader ] = useState(false);
    const [ currencies, setCurrencies ] = useState([]);
    const [ language, setLanguage ] = useState("");    



    // multiples fetch 
    const consultarApi = async () => {
        let url_1 = "https://api.kiosco.bitzperu.com/es/bitz/admin/entity/coupon/list";
        let url_2 = "https://api.merlishop.com/es/magico/admin/entity/parameter/get";
        let body = {
            "parameter_id": 69
        }
        const [res, res2] = await Promise.all([fetch(url_1 , {method: 'POST', headers: {"Content-type": "application/json"}}), fetch(url_2, {method: 'POST', headers: {"Content-type": "application/json"}, body: JSON.stringify(body)})]);
        let cupones = await res.json();
        let parametros = await res2.json();
        setCupons(cupones);
        setParameters(parametros);
        
    }
    const consultasHeader = async() => {
        let url_1 = "https://api.merlishop.com/es/masterhouse/site/entity/currency/get";

        const [ res ] =  await Promise.all([fetch(url_1, {
            method: 'POST',
            headers: {"Content-type": "application/json"}
        })]);

        let  monedas = await res.json();
        console.log(monedas);
        setCurrencies(monedas);

    }
    useEffect(()=> {
        setTimeout(() => {
            setLoader(!loader);
            consultasHeader();
            consultarApi();
        }, 3000);
        setLoader(!loader);

    }, []);

    return (
        <AppContext.Provider
            value={{ 
                estado,
                setEstado,
                cupons, parameters,
                loader, 
                currencies,
                setLanguage, language
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export {
    AppProvider
}
export default AppContext;