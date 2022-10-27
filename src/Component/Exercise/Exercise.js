import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {name, img, time} = props.activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Exercise;