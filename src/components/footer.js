import React from "react";
import Logo from "../assets/logo/Logo_White.png";
import "../style/components/footer.css";

export default function Footer() {
   return (
      <div className="footer">
         <div className="footer__logo">
            <img src={Logo} alt="logo de Kasa"></img>
         </div>
         <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
   );
}