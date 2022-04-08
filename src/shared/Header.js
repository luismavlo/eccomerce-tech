import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { openModal } from '../redux/actions/ui';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const handleOpenModal = () =>{
        dispatch(openModal());
    }

    const togleMenu = () =>{
        setIsOpen(!isOpen)
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
                            <li className="menu__item"><Link to="/" className="menu__link">FEATURES</Link></li>
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
                    <span onClick={ handleOpenModal } className="main-header__link"><i className="fas fa-user"></i></span>
                    <a href="/#" className="main-header__btn">My cart <i className="fas fa-shopping-cart"></i></a>
                    <input type="search" className="main-header__input" placeholder="Buscar productos" /><i className="fas fa-search"></i>
                </div>
            </div>
        </header>
    )
}

export default Header