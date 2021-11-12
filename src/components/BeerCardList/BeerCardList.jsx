import React from 'react'
import './BeerCardList.scss'

import BeerCard from '../BeerCard/BeerCard'

const BeerCardList = (props) => {

    console.log("beer card list prop", props);

    // const beerCardListJSX = () => props.map((beer, index) => (
    //     <BeerCard name={beer.name} tagline={beer.tagline} image={beer.image_url} />
    //   ));

    return (
        <div className="mainSection">
            {Array.from(props.data).map(beer => <BeerCard name={beer.name} tagline={beer.tagline} image={beer.image_url} />)}
        </div>
    )
}

export default BeerCardList
