import React, { useState } from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import './SideMenu.scss'

export const SideMenu = () => {

    const [searchText,setSearchText] = useState("");

    const handleInput = (event) => {
        const textInLowercase = event.target.value.toLowercase();
        setSearchText(textInLowercase);
    }

    return (
        <>
        <div className="sideMenu">
            <SearchBox className="sideMenu__searchbox" searchText={searchText} handleInput={handleInput}/>
        </div>
        </>
    )
}
