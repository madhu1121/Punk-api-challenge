import React from 'react'
import './BeerCard.scss'

const BeerCard = (props) => {

    console.log("BeerCard props : ",props);
    return (
    <div className="beerCard">
        <img className="beerCard__img" src={props.data.image_url} alt="beer image"/>
        <p className="beerCard__title">{props.data.name} : {props.data.tagline}</p>
    </div>
    )
}

export default BeerCard
