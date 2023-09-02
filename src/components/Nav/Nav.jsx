import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to='/Watch'>Watch</Link>
            <Link to='/Alarm' >Alarm</Link>
            <Link to='StopWatch'>Stop Watch</Link>
            <Link to='Timer'>Timer</Link>
        </div>
    );
};

export default Nav;