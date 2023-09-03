import React, { useEffect, useState } from 'react';
import './Watch.css'

const Watch = () => {
    
    let time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time);

    setInterval(() => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
        
    }, 1000);



    return (
        <div className='flex justify-center items-center watch-container'>
            
            <div className='clock'>
                <span>{currentTime}</span>
            </div>
        </div>
    );
};

export default Watch;