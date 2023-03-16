import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useCarritoContext } from "../../context/CarritoContext"
const Cart = () => {
    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0
                ?
                <>
                    <h2>Carrito Vacio</h2>
                    <Link className='nav-link' to={"/"}><button className='btn btn-primary'>Continuar comprando</button></Link>
                </>
                :
                <div className='container cartContainer'>
                    <ItemList prods={carrito} plantilla = "ItemCart"/>
                    <div className="divbuttons">
                        <p>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <button className='btn btn-danger' onClick={() => emptyCart()}>Vaciar Carrito</button>
                        <Link className='nav-link' to={"/"}><button className='btn btn-dark'>Continuar Comprando</button></Link>
                        <Link className='nav-link' to={"/checkout"}><button className='btn btn-dark'>Finalizar Compra</button></Link>
                    </div>
                </div>
            }
        </>
    )
}
//<ItemList prods={prods} plantilla = "Item"/>
export default Cart;
