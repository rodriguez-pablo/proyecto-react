import React from 'react';
import CartWidget  from '../CartWidget/CartWidget.jsx'
import Categorias from '../Categorias/Categorias.jsx'
import { Link } from 'react-router-dom';
import { BotonDarkMode } from './BotonDarkMode/BotonDarkMode.jsx';
import { useDarkModeContext } from '../../context/DarkModeContext.js';
const Navbar = ({nombre}) => {

    const {darkMode} = useDarkModeContext()
    return (
        <nav className={`navbar bg-body-tertiary ${darkMode ? "navbar-dark bg-dark" : "bg-ligth"}`}>
            <div className="container-fluid">
                <Link className='nav-link' to={'/'}>
                    <button className="btn btn-ligth">
                        <img src="https://firebasestorage.googleapis.com/v0/b/lux-autos.appspot.com/o/logo.png?alt=media&token=ac85843e-d670-43b9-b44b-1f30713e30df" alt="" width={30} height={24} className="d-inline-block align-text-top" />
                        {nombre}
                    </button>
                </Link>
                <Categorias/>
                <CartWidget/>
                <BotonDarkMode/>
            </div>
        </nav>
    );
}

export default Navbar;
