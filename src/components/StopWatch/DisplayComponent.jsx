import React from 'react';

const DisplayComponent = (props) => {
    return (
        <div>
            <span>{props.time.h}</span> &nbsp; : &nbsp;
            <span>{props.time.m}</span> &nbsp; : &nbsp;
            <span>{props.time.s}</span> &nbsp; : &nbsp;
            <span>{props.time.ms}</span>&nbsp; : &nbsp;
        </div>
    );
};

export default DisplayComponent;