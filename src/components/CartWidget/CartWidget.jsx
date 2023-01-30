import React from 'react';

const CartWidget = ({cantidadCarrito}) => {
    return (
        <div>
            <button className='btn btn-dark'><img src="./recursos/carrito.png" alt="carrito" /></button>
            <p>{cantidadCarrito}</p>
        </div>
    );
}

export default CartWidget;
