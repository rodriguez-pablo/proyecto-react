import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext';
const Item = ({item}) => {

    const {darkMode} = useDarkModeContext()
    console.log(darkMode)

    return (
        <div className={`card mb-3 cardProducto ${darkMode ? "border-primary" : "border-ligth"}`}>
            <img src={item.img} className="card-img-top" alt={`imagen de ${item.nombre}`} />
            <div className={`card-body ${darkMode ? "cardBodyDark" : "cardBody"}`}>
                <h5 className="card-title">{item.nombre}</h5>
                <p className='card-text'>{item.marca}</p>
                <p className='card-text'>{item.transmision}</p>
                <p className='card-text'>${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <Link className='nav-link' to={`/item/${item.id}`}><button className='btn btn-primary'>Ver Auto</button></Link>
            </div>
        </div>
    );
}

export default Item;
