import React from 'react';
import './Information.css';
import Break from '../Break/Break';
import Info from '../Info/Info';
import Experience from '../Experience/Experience';
import { useState } from 'react';
import addToDB from '../../utilities/localstorage';

const Information = (props) => {
    const [breakTime, setBreakTime] = useState();
    const selectBreak = (breakTime) =>{
        console.log(breakTime);
        setBreakTime(breakTime);
        addToDB(breakTime);
    }

    
    return (
        <div className="col-4 col-md-3 pt-5 info-container container">
            <Info></Info>
            <Break selectBreakTime={selectBreak}></Break>
            <Experience activity = {props.activity} breakTime={breakTime} ></Experience>

        </div>
    );
};

export default Information;