import React from 'react'
import useAppContext from '../Hooks/useAppContext'
import Loader from './Loader';
import { useTranslation, Trans  } from 'react-i18next';
import Swal from 'sweetalert2'
import Header from './templates/Header';

const Prueba = () => {
    const { t, i18n  } = useTranslation();
    const lngs = {
        en: { nativeName: 'English' },
        es: { nativeName: 'Spanish' }
    }

    const { setEstado, estado, loader } = useAppContext();
    const handleClick = () => {
        setEstado(estado+1);   
    }
    const SweetAlert = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
    }
    const ChangeLanguage = (lng)=> {
        i18n.changeLanguage(lng);
        
    }
    return (
    <>
        <Header/>
        <div className='center-div'>
            <div>
                {Object.keys(lngs).map((lng) => (
                    <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => ChangeLanguage(lng)}>
                    {lngs[lng].nativeName}
                    </button>
                ))}
            </div>
            <button onClick={()=>handleClick()}>
                <Trans i18nKey="wellcome">
                    {t('Wellcome')}
                </Trans>    
            </button>
            <span>
                <Trans i18nKey="prueba">
                    {t('Prueba')}
                </Trans>            
            </span>
            <button onClick={()=> SweetAlert()}>SweetAlert</button>
            <a href={ `/${t('url')}`}>{t('url')}</a>
            {/* {  !loader ? <Loader/>: '' } */}
        </div>
    </>
    )
}

export default Prueba