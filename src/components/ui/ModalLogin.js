import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/actions/ui';
import FormLogin from '../ecommerce/typeSign/FormLogin';
import FormRegister from '../ecommerce/typeSign/FormRegister';

const ModalLogin = () => {

  const dispatch = useDispatch();

  const { typeLog } = useSelector( state => state.ui );
    

  const handleCloseModal = () =>{
    dispatch(closeModal())
  }

  return (
    <section className='modal animate__animated animate__fadeIn'>
      <div className="modal__container" style={{overflow: 'auto'}}>
        <div className='modal__close' onClick={handleCloseModal}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        
        {
           !typeLog
           ? <FormLogin  />
           : <FormRegister />
        }
      </div>
    </section>
  )
}

export default ModalLogin