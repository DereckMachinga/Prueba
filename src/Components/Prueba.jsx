import React from 'react'
import useAppContext from '../Hooks/useAppContext'
import Loader from './Loader';
const Prueba = () => {
    const { setEstado, estado, loader } = useAppContext();
    const handleClick = () => {
        setEstado(estado+1);
    }
    return (
        <div className='center-div'>
            <button onClick={()=>handleClick()}>GAAA</button>
            <span>{estado}</span>
            {  !loader ? <Loader/>: '' }
        </div>
    )
}

export default Prueba