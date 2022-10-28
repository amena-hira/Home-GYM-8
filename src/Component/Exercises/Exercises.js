import React from 'react';
import logo from '../../image/favicon.ico';
import './Exercises.css';
import { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';

const Exercises = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() =>{
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data));
    },[])
    return (
        <div className="col-9 my-5 ">
            <div className='d-flex align-items-start'>
                <img className='logo-image me-3' src={logo} alt="" />
                <h3 className='text-primary'>Home GYM</h3>
            </div>
            <div className='container'>
                <h4 className='mt-5 mb-4'>Select today's exercise</h4>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 '>
                    {
                        activities.map(activity => <Exercise key={activity.id} activity = {activity}></Exercise>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Exercises;