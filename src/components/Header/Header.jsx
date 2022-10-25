import React from "react";
import './header.css'
import Logo from './Logo.png'
const Header = ()=> {
    return (
        <div>
            <header>
                <a href="#" className="logo"> <img src={Logo} /></a>
                <nav className="navbar">
                    <a href="/home">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Projects</a>
                    <a href="/Blog">Blog</a>

                    <button>Contact us</button>

                </nav>
        
      

            </header>

        </div>
    )
}


export default Header