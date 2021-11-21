import React, { useState } from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import FiltersList from '../../components/FiltersList/FiltersList'
import BeerInfo from '../../components/BeerInfo/BeerInfo'
import Main from '../Main/Main'
import './MainContainer.scss'
import { Routes, Route } from "react-router-dom";

export const MainContainer = (props) => {

    console.log("side menu props",props);

    const [searchText,setSearchText] = useState('');
    const [isABV,setIsABV] = useState(false);
    const [isAcidic,setIsAcidic] = useState(false);
    const [isClassic, setIsClassic] = useState(false);


    const handleInput = (event) => {
        const textInLowercase = event.target.value.toLowerCase();
        setSearchText(textInLowercase);
    }

    const handleOnChangeABV = () => {
        setIsABV(!isABV);
    };

    const handleOnChangeAcidic = () => {
        setIsAcidic(!isAcidic);
    };

    const handleOnChangeClassic = () => {
        setIsClassic(!isClassic);
    };


    let abvarr=props.data;
 
    const func = () => {
        console.log("function called");
        if (isClassic) {
            abvarr = props.data.filter((beer) => beer.first_brewed.split("/")[1] < 2010);        
        }
        if (isAcidic) {
            abvarr = props.data.filter((beer) => beer.ph < 4.0);        
        }
        if (isABV) {
            abvarr = props.data.filter((beer) => beer.abv > 6.0);        
        }
        if(isABV && isAcidic && isClassic){
            abvarr = props.data.filter((beer) => beer.abv > 6.0 && beer.ph < 4.0 && beer.first_brewed.split("/")[1] < 2010);
        }
        if(isABV && isAcidic){
            abvarr = props.data.filter((beer) => beer.abv > 6.0 && beer.ph < 4.0);
        }
        if(isABV  && isClassic){
            abvarr = props.data.filter((beer) => beer.abv > 6.0 && beer.first_brewed.split("/")[1] < 2010);
        }

        if (isClassic && isAcidic) {
            abvarr = props.data.filter((beer) => beer.ph < 4.0 && beer.first_brewed.split("/")[1] < 2010);        
        }

    }

    func();
 
    console.log("abvarr" , abvarr);
    const filterBeersArr = abvarr
        .filter((beer) => {
            const beerTitleLower = beer.name.toLowerCase();
            console.log("here is my beer" , beer);
            
            return beerTitleLower.includes(searchText);
        })

     console.log("filterBeerArr object", filterBeersArr);

     

    return (
        <>
        <div className="section__mainContainer">
            <SearchBox searchText={searchText} handleInput={handleInput}/>
            <FiltersList handleOnChangeABV={handleOnChangeABV} handleOnChangeAcidic={handleOnChangeAcidic} handleOnChangeClassic={handleOnChangeClassic}/>
        </div>
        <Routes>
            <Route path="/" element={filterBeersArr && <Main data={filterBeersArr} />}/>
            <Route path="/beer/:idBeer" element={filterBeersArr && <BeerInfo beersArr={filterBeersArr} />} />
        </Routes>
        </>
    )
}

export default MainContainer