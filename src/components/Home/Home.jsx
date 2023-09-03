import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-container'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;