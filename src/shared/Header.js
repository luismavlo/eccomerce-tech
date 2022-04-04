import React from 'react'


const Header = () => {
    return (
        <header className="main-header">
            <div className="container container--flex">
                <div className="main-header__container">
                    <h1 className="main-header__title">TECNOTECH</h1>
                    <span className="icon-menu" id="btn-menu"><i className="fas fa-bars"></i></span>
                    <nav className="main-nav" id="main-nav">
                        <ul className="menu">
                            <li className="menu__item"><a href="/#" className="menu__link">HOME</a></li>
                            <li className="menu__item"><a href="/#" className="menu__link">ABOUT</a></li>
                            <li className="menu__item"><a href="/#" className="menu__link">FEATURES</a></li>
                            <li className="menu__item"><a href="/#" className="menu__link">SHOP</a></li>
                            <li className="menu__item"><a href="/#" className="menu__link">CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="main-header__container">
                    <span className="main-header__txt">Need Help</span>
                    <p className="main-header__txt"><i className="fas fa-phone"></i> Call 12345678099</p>
                </div>
                <div className="main-header__container">
                    <a href="" className="main-header__link"><i className="fas fa-user"></i></a>
                    <a href="" className="main-header__btn">My cart <i className="fas fa-shopping-cart"></i></a>
                    <input type="search" className="main-header__input" placeholder="Buscar productos" /><i className="fas fa-search"></i>
                </div>
            </div>
        </header>
    )
}

export default Header