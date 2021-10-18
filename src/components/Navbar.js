import React from 'react'
import Navitems from './Navitems.js'

function Navbar() {
    return (
        <nav>
            <ul>
                <Navitems item="Home" tolink="/"></Navitems>
                <Navitems item="100GB" tolink="/image"></Navitems>
                <Navitems item="CSV viewer" tolink="/csv"></Navitems>
            </ul>
        </nav>
    );
}

export default Navbar;