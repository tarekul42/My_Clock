import React, { useState } from 'react';
import './StopWatch.css'

const StopWatch = () => {
    const [time, setTime] = useState({s:0, m:0, h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 1000));
    };

    var updateS = time.s, updateM = time.m ,updateH = time.h;

    const run = () =>{
        if(updateM === 60){
            updateM = 0;
            updateH = updateH + 1;
        }
        if(updateS === 60){
            updateS = 0;
            updateM = updateM + 1;
        }
        updateS = updateS + 1;
        return setTime({s:updateS, m:updateM, h:updateH});

    }
    const stop = () => {
        clearInterval(interv);
        setStatus(2)
    };
    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({s:0, m:0, h:0});
    };
    const resume = () => start();

    return (
        <div className='flex justify-center items-center'>
            <div className='stopwatch text-center'>
                <div className='flex items-center'>
                <span className='span'>{(time.h >= 10) ? time.h : "0"+time.h}</span> <span className='dot-span'>&nbsp; : &nbsp;</span>  
                <span className='span'>{(time.m >= 10) ? time.m : "0"+time.m}</span> <span className='dot-span'>&nbsp; : &nbsp;</span>  
                <span className='span'>{(time.s >= 10) ? time.s : "0"+time.s}</span>
                </div>
                {/* buttons are here */}
                <div>
                    {
                        (status === 0)?
                        <button onClick={start}>Start</button>
                        :
                        ""
                    }
                    {
                        (status === 1)?
                        <div>
                            <button onClick={stop}>Stop</button>
                            <button onClick={reset}>Reset</button>
                        </div> : ""
                    }
                    {
                        (status === 2)?
                        <div>
                            <button onClick={resume}>Resume</button>
                            <button onClick={reset}>Reset</button>
                        </div> : ""
                    }

                </div>
            </div>
        </div>
    );
};

export default StopWatch;