import React from 'react'
import './BeerCard.scss'

const BeerCard = (props) => {

    console.log("BeerCard props : ",props);

    const {image,name,tagline} = props;
    return (
    <div className="beerCard">
        <img className="beerCard__img" src={image} alt="beer image"/>
        <p className="beerCard__title">{name} : {tagline}</p>
    </div>
    )
}

export default BeerCard
