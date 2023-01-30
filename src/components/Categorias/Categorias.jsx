import React from 'react';

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nuestros Vehiculos
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Deportivos</a></li>
                <li><a className="dropdown-item" href="#">SUV</a></li>
                <li><a className="dropdown-item" href="#">Sedan</a></li>
            </ul>
        </li>
    );
}

export default Categorias;
