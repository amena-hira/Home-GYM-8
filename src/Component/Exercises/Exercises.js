import React from 'react';
import './Exercises.css'
import logo from '../../image/favicon.ico';

const Exercises = () => {
    return (
        <div className='exercises-container'>
            <div className='header'>
                <img className='image' src={logo} alt="" />
                <h2 className='text-primary'>Home GYM</h2>
            </div>
            <div className='exercise-div'>
                <h3>Select today's exercise</h3>
            </div>
        </div>
    );
};

export default Exercises;