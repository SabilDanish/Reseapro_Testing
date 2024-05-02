import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/images/logo/logo.png';

const Navbar = () => {
    return (
        <div>
            <header className="header bg-transparent">
                <div className="container container-two">
                    <nav className="header-inner flx-between">
                        <div className="logo">
                            <a href="index.html" className="link">
                                <img src={logo} alt="Logo" />
                            </a>
                        </div>
                        <div className="header-menu d-lg-block d-none menu-right">

                            <ul className="nav-menu flx-align " style={{ listStyleType: 'none', padding: 0 }}>
                                <li className="nav-menu__item has-submenu">
                                    <Link className="nav-menu__link" to="/">Home</Link>
                                </li>
                                <li className="nav-menu__item has-submenu">
                                    <Link className="nav-menu__link" to="/about">About</Link>
                                </li>
                                <li className="nav-menu__item has-submenu">
                                    <Link className="nav-menu__link" to="/faq">FAQ</Link>
                                </li>
                                <li className="nav-menu__item has-submenu">
                                    <Link className="nav-menu__link" to="/checkout">Checkout</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar
