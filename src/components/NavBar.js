import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar (){


    return (
       <nav className='text-center text-white bg-blue-500'>
        <NavLink to="/" className='px-5  hover:bg-sky-500'>PLACE ORDER</NavLink>
        <NavLink to="/orders" className='px-5  hover:bg-sky-500'>ORDERS</NavLink>
        <NavLink to="/completeorders" className='px-5  hover:bg-sky-500'>COMPLETE ORDERS</NavLink>
       </nav>
    )

}

export default NavBar;