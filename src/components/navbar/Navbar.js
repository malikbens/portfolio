import { Link } from 'react-router-dom';
import React from 'react';
import Themetoggle from "../../components/themetoggle";
import Logo from "../../assets/images/logo-simple.svg"
import WhiteLogo from  "../../assets/images/logo.svg"
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="navbar-main">
            <div className="nav-top-left">
                {/* <img src={Logo} alt="bens web logo" className="nav-logo" /> */}
            </div>
            <div className="nav-links">
                <Themetoggle />
                <ul className="nav-item-wrapper">
                    <li className="nav-item">
                        <Link className='nav-link' to='/'>Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>A propos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/CV">CV</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};