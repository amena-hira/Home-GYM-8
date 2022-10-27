import React from 'react';
import Exercises from '../Exercises/Exercises';
import './Main.css';

const Main = () => {
    return (
        <div className='main-container'>
            <Exercises></Exercises>
            <div>right side</div>
        </div>
    );
};

export default Main;