import React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx'
import Categorias from '../Categorias/Categorias.jsx'


const Navbar = ({nombre}) => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="./recursos/logo.png" alt="" width={30} height={24} className="d-inline-block align-text-top" />
                {nombre}
            </a>
            <Categorias/>
            <CartWidget cantidadCarrito={5}/>
            </div>
        </nav>
    );
}

export default Navbar;
