import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {

    console.log("props in searchBox:", props);
     const {label,searchText,handleInput} = props;

    return (
        <form className="sideMenu__searchbox">
            {/* <label htmlFor={label} className="sideMenu__searchbox_label">{label}</label> */}
            <input 
            type="text" 
            name={label} 
            className="sideMenu__searchbox_input" 
            value={searchText} 
            onInput={handleInput}
            />
        </form>
    )
}

export default SearchBox

