import React from 'react'
import './BeerCard.scss'
import {Link} from 'react-router-dom'

const BeerCard = (props) => {

    console.log("BeerCard props : ",props);

    const {image,name,tagline,id} = props;
    return (
    <div className="beerCard">
        <img className="beerCard__img" src={image} alt="beer image"/>
        <Link to={`/beer/${id}`}>
        <p className="beerCard__title">{name} : {tagline}</p>
        </Link>
    </div>
    )
}

export default BeerCard
