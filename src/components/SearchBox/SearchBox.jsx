import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {

    console.log("props in searchBox:", props);

    return (
        <input className={props.className} type="text" placeholder="Search..."/>
    )
}

export default SearchBox
