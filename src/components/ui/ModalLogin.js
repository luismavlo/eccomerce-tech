import React from 'react'
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/actions/ui';

const ModalLogin = () => {

  const dispatch = useDispatch();

  const handleCloseModal = () =>{
    dispatch(closeModal())
  }

  return (
    <section className='modal animate__animated animate__fadeIn'>
      <div className="modal__container">
        <div className='modal__close' onClick={handleCloseModal}>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h2>Login Now</h2>
        <div className='modal__content-form'>
          <form >
            <div className="modal__input-container">
              <label htmlFor="email">Email address</label>
              <input type="email" name='email' />
              <small>We'll never share your email with anyone else.</small>
            </div>

            <div className="modal__input-container">
              <label htmlFor="password">Password</label>
              <input type="email" name='password' />
            </div>

            <input type="submit" value="Sign In" className='modal__btn' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default ModalLogin