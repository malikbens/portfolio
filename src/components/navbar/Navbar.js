import { Link } from 'react-router-dom';
import React from 'react';
import Themetoggle from "../../components/themetoggle";
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="navbar-main">
            
                <Themetoggle />
            
            <div className="nav-links">
               <ul className="nav-item-wrapper">
                    <li className="nav-item">
                        <Link className='nav-link' to='/'>Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">À propos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};