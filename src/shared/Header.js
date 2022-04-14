import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { startLogout } from '../redux/actions/auth';
import { startFilterProductPerName } from '../redux/actions/products';
import { openModal } from '../redux/actions/ui';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token')
    const [search, setSearch] = useState('');


    const handleOpenModal = () =>{
        dispatch(openModal());
    }

    const togleMenu = () =>{
        setIsOpen(!isOpen)
    }

    const handleLogout = () =>{
        dispatch(startLogout())
        navigate('/')
    }

    const filterHeadline = (e) =>{
        e.preventDefault();
        dispatch(startFilterProductPerName( search ))
    }   

    return (
        <header className="main-header">
            <div className="container container--flex">
                <div className="main-header__container">
                    <h1 className="main-header__title">TECNOTECH</h1>
                    <span onClick={togleMenu} className="icon-menu" id="btn-menu"><i className="fas fa-bars"></i></span>
                    <nav className={`main-nav ${isOpen ? 'mostrar' : ''}`} id="main-nav">
                        <ul className="menu">
                            <li className="menu__item"><Link to="/" className="menu__link">HOME</Link></li>
                            <li className="menu__item"><Link to="/about" className="menu__link">ABOUT</Link></li>
                            {
                                token
                                &&  <li className="menu__item"><Link to="/store/purchases" className="menu__link" disabled>PURCHASES</Link></li>
                            }
                            <li className="menu__item"><Link to="/shop" className="menu__link">SHOP</Link></li>
                            <li className="menu__item"><Link to="/contact" className="menu__link">CONTACT</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="main-header__container">
                    <span className="main-header__txt">Need Help</span>
                    <p className="main-header__txt"><i className="fas fa-phone"></i> Call 12345678099</p>
                </div>
                <div className="main-header__container">
                    {
                        !token
                        ? <span onClick={ handleOpenModal } className="main-header__link"><i className="fas fa-user"></i></span>
                        : <span className="main-header__btn-logout" onClick={handleLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                    }
                    
                    <a href="/#" className="main-header__btn">My cart <i className="fas fa-shopping-cart"></i></a>
                    
                    <form className='header__content-search' onSubmit={filterHeadline}>
                        <input type="search" className="main-header__input" placeholder="Buscar productos" value={search} onChange={e => setSearch(e.target.value)} /><i className="centerY fas fa-search"></i>
                    </form>
                        
                    
                    
                </div>
            </div>
        </header>
    )
}

export default Header