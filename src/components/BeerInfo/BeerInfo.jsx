import React from 'react'
import { useParams } from 'react-router-dom';

const BeerInfo = (props) => {

  const { idBeer } = useParams();
  console.log("id in useparam object destructuring", idBeer);

  // const currentBeer = props.data.find((beer) => {
  //     console.log("MY BEER", beer);
  //     beer.id === idBeer
  // });

  const { beersArr } = props;
  console.log("beerArr in BeerInfo : ", beersArr);

  const currentBeer = beersArr.find(beer => beer.id == idBeer);
  console.log("currentBeer in BeerInfo", currentBeer);

  return (
    <article className="beer-info">
      <div className="beer-info__banner">
        <img className="beer-info__img" src={currentBeer.image_url} alt={currentBeer.name} />
      </div>
      <div className="beer-info__content">
        <h2 className="beer-info__heading">{currentBeer.name}</h2>
        <h4 className="beer-info__heading">{currentBeer.tagline}</h4>
        <p>{currentBeer.description.length > 300 && currentBeer.description.slice(0, 300)}</p>
        <h2 className="beer-info__heading">Facts</h2>
        <ul className="beer-info__facts">
          <li>ABV : {currentBeer.abv} </li>
          <li>IBU : {currentBeer.ibu} </li>
          <li>target_fg : {currentBeer.target_fg} </li>
          <li>target_og : {currentBeer.target_og} </li>
        </ul>
      </div>
    </article>
  )
}

export default BeerInfo
