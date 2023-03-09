import React from 'react'
import './loader.css';
import Swal from 'sweetalert2'

const Loader = () => {
   
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            showCancelButton: false,
            allowOutsideClick: false,
            showConfirmButton: false
        })
    
}

export default Loader