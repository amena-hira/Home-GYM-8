import React from 'react';
import logo from '../../image/favicon.ico';
import './Exercises.css';
import Exercise from '../Exercise/Exercise';
import Question from '../Question/Question';

const Exercises = (props) => {
    console.log("exercises: ",props)
    return (
        <div className="col-8 col-md-9 my-5 ">
            <div className='d-flex align-items-start'>
                <img className='logo-image me-3' src={logo} alt="" />
                <h3 className='text-primary'>Home GYM</h3>
            </div>
            <div className='container'>
                <h4 className='mt-5 mb-4'>Select today's exercise</h4>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 '>
                    {
                        props.activities.map(activity => <Exercise key={activity.id} activity = {activity} addtime= {props.addtime}></Exercise>)
                    }
                </div>
            </div>
            <div className='container mt-5'>
                <Question></Question>
            </div>
            
        </div>
    );
};

export default Exercises;