import React from "react"
import redStar from "../assets/img/redStar.svg"
import greyStar from "../assets/img/GreyStar.svg"

const Stars = ({stars}) => {
    //rating stars
    const starsNumber = stars && JSON.parse(stars)
    //create table to display stars images
    const starsString = "star ".repeat(5)
    let starsTable = starsString.split(" ")
    starsTable.pop()
    //find empty Stars number
    const emptyStarsNumber = 5 - starsNumber
    //tables of stars
    const fullStars = starsTable.splice(0, starsNumber)
    const emptyStars = starsTable.splice(0, emptyStarsNumber)

    return (
        <div className="content__info2__stars">
            {fullStars.map((rate, index) => (
                <img src={redStar} alt="" key={index}/>
            ))}
            {emptyStars.map((emptyStar, index) => (
                <img src={greyStar} alt="" key={index}/>
            ))}
        </div>
    )
}

export default Stars