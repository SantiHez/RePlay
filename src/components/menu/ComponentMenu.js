import './ComponentMenu.css'
import React from 'react';
import { Link } from 'react-router-dom';

const menu = () => {
    return (
        <nav className="menu">
            <img src="/images/logo.png" alt="Logo" className="menu-logo" />
            <ul className="menu-list">
                <li className="menu-item"><Link to="/">Inicio</Link></li>
                <li className="menu-item"><Link to="/about">Buscar</Link></li>
                <li className="menu-item"><Link to="/contact">Peliculas</Link></li>
                
                <li className="menu-item"><Link to="/contact">Series</Link></li>
                <li className="menu-item"><Link to="/contact">Noticias</Link></li>
                <li className="menu-item"><Link to="/contact">Contacto</Link></li>
                
            </ul>
        </nav>
    );
};

export default menu;