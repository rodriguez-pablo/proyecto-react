import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';
const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (
        <>
            <Link className="nav-link" to={"/cart"}>
            <button className="btn btn-dark"><img src="https://firebasestorage.googleapis.com/v0/b/lux-autos.appspot.com/o/carrito.png?alt=media&token=72c2a306-75da-46ba-8afb-31574a20ae29" alt="carrito" /></button>
            {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link>
        </>
    );
}

export default CartWidget;
