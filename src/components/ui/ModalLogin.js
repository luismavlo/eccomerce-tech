import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/actions/ui';
import FormLogin from '../ecommerce/typeSign/FormLogin';
import FormRegister from '../ecommerce/typeSign/FormRegister';

const ModalLogin = () => {

  const [handleTypeLog, setHandleTypeLog] = useState(false);

  const dispatch = useDispatch();

  const handleCloseModal = () =>{
    dispatch(closeModal())
  }

  return (
    <section className='modal animate__animated animate__fadeIn'>
      <div className="modal__container" style={{overflow: 'auto'}}>
        <div className='modal__close' onClick={handleCloseModal}>
          <i class="fa-solid fa-xmark"></i>
        </div>
        
        {
           !handleTypeLog 
           ? <FormLogin  setHandleTypeLog={setHandleTypeLog}/>
           : <FormRegister setHandleTypeLog={setHandleTypeLog}/>
        }
      </div>
    </section>
  )
}

export default ModalLogin