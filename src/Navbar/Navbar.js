import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
             <NavLink className='link' to='/home'>Home</NavLink>
            <NavLink className='link' to='/about'>About</NavLink>
            <NavLink className='link' to='/login'>Login</NavLink>
        </div>
    );
};

export default Navbar;