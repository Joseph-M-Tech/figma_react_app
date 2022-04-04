import React from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from '../../assets/logo.png';

const navbar = () => {
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links-logo">
                    <img src={logo} alt="logo" />

                </div>

            </div>
            
        </div>
    )
}

export default navbar
