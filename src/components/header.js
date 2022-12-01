// IMPORTS //

import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/logo/logo.svg";
import '../style/components/header.css';

// SETTING HEADER HTML CONSTITUTION //

export default function Header() {
    return (
       <div className="header">
          <nav>
            <Link to="/" className="home_link">
             <img className="header__logo" src={Logo} alt="logo de Kasa"></img>
            </Link>
             <ul>
                <li>
                   <Link to="/" className="items">
                      Accueil
                   </Link>
                </li>
                <li>
                   <Link to="/about" className="items">
                      A Propos
                   </Link>
                </li>
             </ul>
          </nav>
       </div>
    );
 }
