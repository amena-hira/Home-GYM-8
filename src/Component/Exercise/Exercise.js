import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {name, img, time} = props.activity;
    return (
        <div className='activity '>
            {/* <img src={img} alt="" />
            <div className='activity-info'>
                <p>{name}</p>
                <p>Time required: {time}mint</p>
            </div>
            <button className='btn btn-success'>Add to list</button> */}
        </div>
    );
};

export default Exercise;