import React, { useState, useEffect } from 'react'
import './Main.scss'

import BeerCardList from '../../components/BeerCardList/BeerCardList'

const Main = (props) => {

    console.log("Main props:", props);
    console.log("main props name key", props.data);

    return (
        <>
            <BeerCardList data={props.data}/>
        </>
    )
}

export default Main
