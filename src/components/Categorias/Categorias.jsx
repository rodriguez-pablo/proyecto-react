import React from 'react';
import { Link } from 'react-router-dom';
const Categorias = () => {
    
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className='btn btn-dark'>Nuestros Vehiculos</button>   
            </a>
            <ul className="dropdown-menu">
                <li><Link className='dropdown-item' to={'/category/1'}>SUV</Link></li>
                <li><Link className='dropdown-item' to={'/category/2'}>SEDAN</Link></li>
                <li><Link className='dropdown-item' to={'/category/3'}>UTILITARIO</Link></li>
            </ul>
        </li>
    );
}

export default Categorias;
