import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar (){


    return (
       <nav>
        <NavLink to="/">Place Order</NavLink>
        <NavLink to="/orders">Listed Orders</NavLink>
        <NavLink to="/completeorders">Complete Orders</NavLink>
       </nav>
    )

}

export default NavBar;