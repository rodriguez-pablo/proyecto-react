import React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx'
import Categorias from '../Categorias/Categorias.jsx'
import { Link } from 'react-router-dom';


const Navbar = ({nombre}) => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link className='nav-link' to={'/'}>
                    <button className="btn btn-ligth">
                        <img src="../img/logo.png" alt="" width={30} height={24} className="d-inline-block align-text-top" />
                        {nombre}
                    </button>
                </Link>
                <Categorias/>
                <CartWidget cantidadCarrito={5}/>
            </div>
        </nav>
    );
}

export default Navbar;
