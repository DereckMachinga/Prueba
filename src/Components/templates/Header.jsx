import React from 'react'
import ListCurrencie from '../Helpers/ListCurrencie'
import ListLanguages from '../Helpers/ListLanguages'

const Header = () => {
    return (
        <div className='center-div h-50'>
            <ListLanguages/>
            <ListCurrencie/>
        </div>
    )
}

export default Header