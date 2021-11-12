import React, {useState,useEffect} from 'react'
import './Main.scss'

import BeerCard from '../../components/BeerCard/BeerCard'

const Main = () => {

    //   const [beerData,setBeerData] = useState(null);

    //   async function fetchAPIData() {
    //     const result = await fetch('https://api.punkapi.com/v2/beers');
    //     const json = await result.json();
    //     setBeerData(json);
        
    //   }

    //   useEffect(() => {
    //     fetchAPIData();
    //     console.log("fetchAPIDATA is :", beerData);
    //   }, []);


    const [beerData,setBeerData] = useState(null);
    useEffect(() => {
      
      fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        setBeerData(data)
        console.log("now data is: ",data);
      })
    }, [])

    return (
        <>
        <div className="mainSection">
           
        {/* {beerData && <h1>{beerData[0].name}</h1>} */}
        {beerData && beerData.map(beer => <BeerCard data={beer} />)}
        </div>
        </>
    )
}

export default Main
