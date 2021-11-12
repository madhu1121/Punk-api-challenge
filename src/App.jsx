import React, { useState, useEffect } from 'react'
import './App.scss'
import SideMenu from './containers/SideMenu/SideMenu'
import Main from './containers/Main/Main'

const App = () => {

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

  const [beerData, setBeerData] = useState(null);

  useEffect(() => {

    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        setBeerData(data);
        console.log("now data is: ", typeof data);
      })
  }, [])

  return (
    <>

      <section className="section">
        {beerData && <SideMenu data={beerData}/>}
        {/* {beerData && <Main data={beerData} />} */}
      </section>







    </>
  )
}

export default App
