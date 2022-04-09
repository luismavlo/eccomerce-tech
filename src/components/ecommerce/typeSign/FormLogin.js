import React from 'react'

const FormLogin = ({setHandleTypeLog}) => {
    return (
        <>  
            <h2>Login Now</h2>
            <div className='modal__content-form'>
                <form >
                    <div className="modal__input-container">
                        <label htmlFor="email">Email address</label>
                        <input 
                            type="email" 
                            name='email' 
                            autoComplete='none' 
                        />
                        <small>We'll never share your email with anyone else.</small>
                    </div>

                    <div className="modal__input-container">
                        <label htmlFor="password" autoComplete='off' >Password</label>
                        <input 
                            type="email" 
                            name='password' 
                        />
                    </div>

                    <div className='modal__button-group'>
                        <input type="submit" value="Sign In" className='modal__btn' />
                        <input
                            type="button"
                            value="Create an account"
                            className='motal__btn-transparent'
                            onClick={() => setHandleTypeLog(true)}
                        />
                    </div>

                </form>
            </div>
        </>
    )
}

export default FormLogin