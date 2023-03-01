import { createContext, useEffect, useState} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [ estado, setEstado ] =  useState(0);
    const [ cupons, setCupons ] = useState([]);
    const [ parameters, setParameters ] = useState([]);
    const [ loader, setLoader ] = useState(false);

    



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

    useEffect(()=> {
        setTimeout(() => {
            setLoader(!loader);
            consultarApi();
            setLoader(!loader);
        }, 3000);

    }, []);

    return (
        <AppContext.Provider
            value={{ 
                estado,
                setEstado,
                cupons, parameters,
                loader, 
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