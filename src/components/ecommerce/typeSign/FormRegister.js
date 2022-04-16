import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useForm } from '../../../hooks/useForm';
import { startRegister } from '../../../redux/actions/auth';
import { showFormLogin } from '../../../redux/actions/ui';

const FormRegister = () => {

    const dispatch = useDispatch();

    const initialForm = {
        rEmail: '',
        rName: '',
        rSurname: '',
        rPassword1: '',
        rPassword2: '',
        rPhone: ''
    };

    const handleShowLogin = () =>{
        dispatch(showFormLogin())
    }
    
    const [ formValues, handleInputChange ] = useForm( initialForm );

    const {rEmail, rName, rSurname, rPassword1, rPassword2, rPhone} = formValues;

    const handleRegister = (e) =>{
        e.preventDefault();
        if( rPassword1 === rPassword2){
            dispatch(startRegister( rName, rSurname, rEmail, rPassword1, rPhone, "normal" ));
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords must be the same!',
              })
        }
        
    }

    return (
        <>
            <h2 className='modal__title-register'>Register Now</h2>
            <div className='modal__content-form-r'>
                <form onSubmit={handleRegister}>
                    <div className="modal__input-container">
                        <label htmlFor="rEmail">Email address</label>
                        <input 
                            type="email" 
                            name='rEmail' 
                            autoComplete='off'
                            value={rEmail}
                            onChange={handleInputChange} 
                        />
                        <small>We'll never share your email with anyone else.</small>
                    </div>

                    <div className="modal__input-container">
                        <label htmlFor="rName">Name</label>
                        <input 
                            type="text" 
                            name='rName' 
                            autoComplete='off'
                            value={rName}
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="modal__input-container">
                        <label htmlFor="rSurname">Surname</label>
                        <input 
                            type="text" 
                            name='rSurname' 
                            autoComplete='off'
                            value={rSurname}
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="modal__input-container">
                        <label htmlFor="rPassword1">Password</label>
                        <input 
                            type="password" 
                            name='rPassword1' 
                            autoComplete='off' 
                            value={rPassword1}
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="modal__input-container">
                        <label htmlFor="rPassword2">Repeat Password</label>
                        <input 
                            type="password" 
                            name='rPassword2' 
                            autoComplete='off' 
                            value={rPassword2}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="modal__input-container">
                        <label htmlFor="rPhone">Phone (10 character)</label>
                        <input 
                            type="text" 
                            name='rPhone' 
                            autoComplete='off'
                            pattern="[0-9]{10}"
                            value={rPhone}
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className='modal__button-group'>
                        <input type="submit" value="Register" className='modal__btn' />
                        <input
                            type="button"
                            value="Sign in"
                            className='motal__btn-transparent'
                            onClick={handleShowLogin}
                        />
                    </div>

                </form>
            </div>
        </>
    )
}

export default FormRegister