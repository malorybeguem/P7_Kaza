//IMPORTS//
import React, { useState } from "react";
import ArrowTop from "../assets/img/topArrow.svg";
import ArrowBot from "../assets/img/bottomArrow.svg";
import "../style/components/dropdown.css"

// COLLAPSE FUNCTION FOR ARTICLE PAGE AND ABOUT //
export default function DropDown({ txt, title, txtArray }) {
   const [isOpen, setIsOpen] = useState(false);

   return isOpen ? ( //HERE WE SET WHAT HAPPENING WHEN IT IS OPEN //
      <div>
         <button // SETTING BUTTONS 
            className="dropdown__button"
            type="button"
            onClick={() => setIsOpen(false)}
         >
            <span>{title}</span>
            <img src={ArrowTop} alt="flèche vers le haut" />
         </button>
         {txtArray ? (
            <div className="dropdown__p__array">
               {txtArray.map((txte, e) => (
                  <p className="dropdown__p-array" key={e}>
                     {txte}
                  </p>
               ))}
            </div>
         ) : (
            <p className="dropdown__p">{txt}</p>
         )}
      </div>
   ) : (
      <button
         className="dropdown__button"
         type="button"
         onClick={() => setIsOpen(true)}
      >
         <span>{title}</span>
         <img src={ArrowBot} alt="flèche vers le bas" />
      </button>
   );
}