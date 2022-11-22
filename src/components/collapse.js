import React from "react"
import {useState} from "react"
import topArrow from "../assets/img/topArrow.svg"
import bottomArrow from "../assets/img/bottomArrow.svg"

const collapse = ({content, title, classDP, classP}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="collapse">
            <button className={"collapse__button " + classDP} onClick={(e) => setIsActive(!isActive)}>
                {title} 
                {isActive && (<img className="collapse__button__arrow" src={topArrow} alt="flèche tournée vers le haut" />)}
                {!isActive && (<img className="collapse__button__arrow" src={bottomArrow} alt="flèche tournée vers le bas" />)}
            </button>
            {isActive &&
                (Array.isArray(content) ? (
                    <ul className="collapse__equipments">
                        {content.map((info, index) => (
                            <li className="collapse__content" key={index}>
                                {info}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={"collapse__content " + classP}>{content}</p>
                ))}
        </div>
    )
}

export default collapse