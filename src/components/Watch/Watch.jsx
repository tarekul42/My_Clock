import React from 'react';
import './Watch.css'

const Watch = () => {
    let hrs = document.getElementById('hrs')
    let min = document.getElementById('min')
    let sec = document.getElementById('sec')
    setInterval(() => {
        hrs.innerText = new Date().getHours();
        min.innerText = new Date().getMinutes();
        sec.innerText = new Date().getSeconds();
    }, 1000);
    return (
        <div className='flex justify-center items-center watch-container'>
            
            <div className='clock'>
                <span id='hrs'></span>
                <span >:</span>
                <span id='min'></span>
                <span>:</span>
                <span id='sec'></span>
            </div>
        </div>
    );
};

export default Watch;