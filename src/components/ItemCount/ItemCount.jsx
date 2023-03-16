import React from 'react';
import { useState } from 'react';
const ItemCount = ({ValInicial, Stock, onAdd}) => {
    const [contador, setContador] = useState(1)

    const sumar = () => contador < Stock && setContador(contador + 1)
    const restar = () => contador > ValInicial && setContador(contador - 1)
    return (
        <div>
            <button className='btn btn-dark' id='boton1' onClick={() => restar()}>-</button>
            {contador}
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
            <button className='btn btn-dark' onClick={()=> onAdd(contador)}>Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount;

