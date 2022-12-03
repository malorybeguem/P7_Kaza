// IMPORTS //
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Products from "../data/logements.json";
import Meta from "../components/meta";
import HomeImg from "../assets/img/home.png";
import "../style/home.css";

// HOME PAGE PARAMS //
export default function Home() {
   const [currImg] = useState(0);
    // SETTING META TITLE //
   const metaTitle = "Kasa : location d'appartements entre particuliers";
    // SETTING META DESC //
   const metaDescription =
      "Kasa est une entreprise dans la location d'appartements entre particuliers. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d'appartements entre particuliers en France";

      // HOME DISPLAY HTML //
   return ( 
      <div id="home" className="home">
         <Meta title={metaTitle} description={metaDescription} />
         <section className="home__section">
            <p>Chez vous, partout et ailleurs</p>
            <div className="home__img">
               <img src={HomeImg} alt="décor naturel"></img>
            </div>
         </section>
         <div className="gallery">
            {Products.map((product) => (
            <div className="location__container"key={product.id} >
                    <Link to={`/Logement/${product.id}`}
                        className="product__item"
                         > 
                        <img src={product.pictures[currImg]} alt="logement" className="product__img"/>
                            <div className="product__title">
                                <span>{product.title}</span>
                            </div>
                    </Link> 
            </div>))}

         </div>
      </div>
   );
}