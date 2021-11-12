import React, { useState, useEffect } from 'react'
import './Main.scss'

import BeerCardList from '../../components/BeerCardList/BeerCardList'

const Main = (props) => {

    console.log("Main props:", props);
    console.log("main props name key", props.data);


    // const { beerdata } = props;

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



    // const [beerData,setBeerData] = useState(null);
    // useEffect(() => {

    //   fetch('https://api.punkapi.com/v2/beers')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log("data", data);
    //     setBeerData(data)
    //     console.log("now data is: ",data);
    //   })
    // }, [])

    return (
        <>
            <BeerCardList data={props.data}/>
        </>
    )
}

export default Main
