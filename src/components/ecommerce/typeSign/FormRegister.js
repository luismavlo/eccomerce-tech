import React from 'react'

const FormRegister = ({setHandleTypeLog}) => {
    return (
        <>
            <h2 className='modal__title-register'>Register Now</h2>
            <div className='modal__content-form-r'>
                <form >
                    <div className="modal__input-container">
                        <label htmlFor="Remail">Email address</label>
                        <input 
                            type="email" 
                            name='Remail' 
                            autoComplete='off' 
                        />
                        <small>We'll never share your email with anyone else.</small>
                    </div>

                    <div className="modal__input-container">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            name='name' 
                            autoComplete='off' 
                        />
                    </div>

                    <div className="modal__input-container">
                        <label htmlFor="surname">Surname</label>
                        <input 
                            type="text" 
                            name='surname' 
                            autoComplete='off' 
                        />
                    </div>

                    <div className="modal__input-container">
                        <label htmlFor="Rpassword1">Password</label>
                        <input 
                            type="email" 
                            name='Rpassword1' 
                            autoComplete='off' 
                        />
                    </div>

                    <div className="modal__input-container">
                        <label htmlFor="Rpassword2">Repeat Password</label>
                        <input 
                            type="email" 
                            name='Rpassword2' 
                            autoComplete='off' 
                        />
                    </div>

                    <div className="modal__input-container">
                        <label htmlFor="phone">Phone (10 character)</label>
                        <input 
                            type="text" 
                            name='phone' 
                            autoComplete='off' 
                        />
                    </div>

                    <div className='modal__button-group'>
                        <input type="submit" value="Register" className='modal__btn' />
                        <input
                            type="button"
                            value="Sign in"
                            className='motal__btn-transparent'
                            onClick={() => setHandleTypeLog(false)}
                        />
                    </div>

                </form>
            </div>
        </>
    )
}

export default FormRegister