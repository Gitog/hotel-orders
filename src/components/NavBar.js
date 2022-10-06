import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar (){


    return (
       <nav className='font-bold font-serif text-center text-white bg-blue-500 h-14'>
        <NavLink to="/" className='px-5 hover:bg-sky-500'>PLACE ORDER</NavLink>
        <NavLink to="/orders" className='px-5  hover:bg-sky-500'>ORDERS</NavLink>
        <NavLink to="/sales" className='px-5 hover:bg-sky-500'>SALES</NavLink>
       </nav>
    )

}

export default NavBar;