import React, { useState } from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLin, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logo.svg';
// import logo from '../../assets/rb-logo.jpg';

const Menu = () => (
    <>
    <p><a href="#home">Home</a></p> 
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p> 
    <p><a href="#features">Case studies</a></p>
    <p><a href="#blog">Library</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links-logo">
                    <img src={logo} alt="logo" />

                </div>
                <div className = "gpt3__navbar-links_container">
                    <Menu/> 

                </div>

            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size= {27} onClick= {() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size= {27} onClick= {() => setToggleMenu(true)} />
                }
                {toggleMenu &&(
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                        <Menu/>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign Up</button>
                        </div>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default Navbar
