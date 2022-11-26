// IMPORTS //
import React from "react"
import {Link} from "react-router-dom"
import "../style/error.css"
import Meta from "../components/meta";
import ErrorImg from "../assets/img/404.png"

//ERROR FUNCTION - and HTML DISPLAY
export default function Error() {
    return (
       <div className="error">
          <Meta title={null} description={null} />
          <div>
             <img src={ErrorImg} alt="erreur 404" />
          </div>
          <p className="error__p">
             Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to={`/`} className="error__home">
             Retour sur la page d'acceuil
          </Link>
       </div>
    );
 }