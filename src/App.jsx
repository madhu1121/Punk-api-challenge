import React, { useState, useEffect } from 'react';
import './App.scss'
import MainContainer from './containers/MainContainer/MainContainer';
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {

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
    <Router>
      <section className="section">
        {beerData && <MainContainer data={beerData}/>}
      </section>
    </Router>
    </>
  )
}

export default App
