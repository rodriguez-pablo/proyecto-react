import React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx'
import Categorias from '../Categorias/Categorias.jsx'
import ItemListContainer from '../ItemListContainer/ItemListContainer.jsx';

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
            <ItemListContainer greeting={"Bienvenido a Lux Autos"}/>
            </div>
      </nav>
    );
}

export default Navbar;
