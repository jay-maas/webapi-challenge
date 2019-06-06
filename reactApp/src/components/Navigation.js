import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return(
        <div style={{position: "fixed", top: "0", width: "100vw", height: "10vh", borderBottom: "2px solid lightgrey", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default Navigation