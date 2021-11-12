import React from 'react'
import './Nav.scss'

import SearchBox from '../SearchBox/SearchBox'

const Nav = () => {
    return (
        <div className="sideMenu">
            {/* <input className="sideMenu__searchbox" type="text" placeholder="Search..."/> */}
            <SearchBox className="sideMenu__searchbox"/>
        </div>
    )
}

export default Nav
