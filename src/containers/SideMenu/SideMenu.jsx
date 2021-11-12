import React, { useState } from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import Main from '../Main/Main'
import './SideMenu.scss'

export const SideMenu = (props) => {

    console.log("side menu props",props);

    const [searchText,setSearchText] = useState('');
    const handleInput = (event) => {
        const textInLowercase = event.target.value.toLowerCase();
        setSearchText(textInLowercase);
    }

    const filterBeersArr = props.data.filter((beer) => {
         const beerTitleLower = beer.name.toLowerCase();
         console.log("here is my beer" , beer);
        return beerTitleLower.includes(searchText) && beer;

     });

     console.log("filterBeerArr object", filterBeersArr);

    return (
        <>
        <div className="sideMenu">
            <SearchBox label="Search For beers" searchText={searchText} handleInput={handleInput}/>
        </div>
        
        {filterBeersArr && <Main data={filterBeersArr} />}
        </>
    )
}

export default SideMenu