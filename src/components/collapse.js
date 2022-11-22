import React from "react"
import {useState} from "react"
import topArrow from "../assets/img/topArrow.svg"
import bottomArrow from "../assets/img/bottomArrow.svg"

const Collapse = ({content, title, classDP, classP}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="dropdown">
            <button className={"dropdown__button " + classDP} onClick={(e) => setIsActive(!isActive)}>
                {title} 
                {isActive && (<img className="dropdown__button__arrow" src={topArrow} alt="flèche tournée vers le haut" />)}
                {!isActive && (<img className="dropdown__button__arrow" src={bottomArrow} alt="flèche tournée vers le bas" />)}
            </button>
            {isActive &&
                (Array.isArray(content) ? (
                    <ul className="dropdown__equipments">
                        {content.map((info, index) => (
                            <li className="dropdown__content" key={index}>
                                {info}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={"dropdown__content " + classP}>{content}</p>
                ))}
        </div>
    )
}

export default Collapse