// IMPORTATIONS //
import React from "react" // REACT IMPORT
import {NavLink} from "react-router-dom"
import Logo from "../assets/logo/logo.svg" // LOGO IMPORT 

// HEADER HTML CONSTITUTION //
const Header = () => {
    return ( // HTML CODE FOR THE HEADER //
    <header> 
            <img className="logo" src={Logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/a-propos">
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header;