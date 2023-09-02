import React from 'react';
import './Nav.css'
import { NavLink, } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navigation'>
            
            <NavLink to='/Watch'>Watch</NavLink>
            <NavLink to='/Alarm' >Alarm</NavLink>
            <NavLink to='StopWatch'>Stopwatch</NavLink>
            <NavLink to='Timer'>Timer</NavLink>
        </div>
    );
};

export default Nav;