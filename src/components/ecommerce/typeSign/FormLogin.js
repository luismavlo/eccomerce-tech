import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import { startLogin } from '../../../redux/actions/auth';
import { showFormRegister } from '../../../redux/actions/ui';

const FormLogin = () => {

    const dispatch = useDispatch();

    const initialForm = {
        email: '',
        password: ''
    };

    const handleShowRegister = () =>{
        dispatch(showFormRegister())
    }
    
    const [ formValues, handleInputChange ] = useForm( initialForm );

    const {email, password} = formValues;

    const handleLogin = e =>{
        e.preventDefault()
        dispatch(startLogin(email, password))
    }

    return (
        <>  
            <h2>Login Now</h2>
            <div className='modal__content-form'>
                <form onSubmit={handleLogin}>
                    <div className="modal__input-container">
                        <label htmlFor="email">Email address</label>
                        <input 
                            type="email" 
                            name='email' 
                            autoComplete='off'
                            value={email}
                            onChange={handleInputChange}
                        />
                        <small>We'll never share your email with anyone else.</small>
                    </div>

                    <div className="modal__input-container">
                        <label htmlFor="password" autoComplete='off' >Password</label>
                        <input 
                            type="password" 
                            name='password'
                            autoComplete='off'
                            value={password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='modal__button-group'>
                        <input type="submit" value="Sign In" className='modal__btn' />
                        <input
                            type="button"
                            value="Create an account"
                            className='motal__btn-transparent'
                            onClick={handleShowRegister}
                        />
                    </div>

                </form>
            </div>
        </>
    )
}

export default FormLogin