import React from 'react'
import useAppContext from '../../Hooks/useAppContext'   
const ListCurrencie = () => {

    const { currencies } = useAppContext();

    return (
        <div>
            {currencies.map( (currencie) => currencie.code )}
        </div>
    )
}

export default ListCurrencie