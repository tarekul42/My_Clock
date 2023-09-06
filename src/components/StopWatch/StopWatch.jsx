import React, { useState } from 'react';
import './StopWatch.css'

const StopWatch = () => {
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    var updatems = time.ms, updateS = time.s, updateM = time.m ,updateH = time.h;

    const run = () =>{
        if(updateM === 60){
            updateM = 0;
            updateH = updateH + 1;
        }
        if(updateS === 60){
            updateS = 0;
            updateM = updateM + 1;
        }
        if(updatems === 100){
            updatems = 0;
            updateS = updateS + 1;
        }
        updatems = updatems + 1;
        return setTime({ms:updatems, s:updateS, m:updateM, h:updateH});

    }
    const stop = () => {
        clearInterval(interv);
        setStatus(2)
    };
    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms:0, s:0, m:0, h:0});
    };
    const resume = () => start();

    const h = () =>{
        if(time.h === 0){
            return '';
        }else{
            return <span>{(time.h >= 10) ? time.h : "0"+time.h}</span>
        }
    }

    return (
        <div className='main-section'>
            <div className='clock-holder'>
                <div className='stopwatch'>
                {h()} &nbsp; : &nbsp;
                <span>{(time.m >= 10) ? time.m : "0"+time.m}</span> &nbsp; : &nbsp;
                <span>{(time.s >= 10) ? time.s : "0"+time.s}</span> &nbsp; : &nbsp;
                <span>{(time.ms >= 10) ? time.ms : "0"+time.ms}</span>&nbsp;  &nbsp;
                {/* buttons are here */}
                <div>
                    {
                        (status === 0)?
                        <button className='start-btn' onClick={start}>Start</button>
                        :
                        ""
                    }
                    {
                        (status === 1)?
                        <div>
                            <button className='stop-btn' onClick={stop}>Stop</button>
                            <button className='reset-btn' onClick={reset}>Reset</button>
                        </div> : ""
                    }
                    {
                        (status === 2)?
                        <div>
                            <button className='stop-btn' onClick={resume}>Resume</button>
                            <button className='reset-btn' onClick={reset}>Reset</button>
                        </div> : ""
                    }

                </div>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;