// import React from 'react';
// import './Exercises.css';
// import { useEffect, useState } from 'react';
// import logo from '../../image/favicon.ico';
// import Exercise from '../Exercise/Exercise';

// const Exercises = () => {
//     const [activities, setActivities] = useState([]);
//     useEffect(() =>{
//         fetch('activities.json')
//         .then(res => res.json())
//         .then(data => setActivities(data));
//     },[])
//     return (
//         <div className='exercises-container'>
//             <div className='header'>
//                 <img className='image' src={logo} alt="" />
//                 <h2 className='text-primary'>Home GYM</h2>
//             </div>
//             <div className='exercise-div'>
//                 <h3>Select today's exercise</h3>
//                 <div className='activities-container'>
//                     {
//                         activities.map(activity => <Exercise key={activity.id} activity = {activity}></Exercise>)
//                     }
//                 </div>
                
                
//             </div>
//         </div>
//     );
// };

// export default Exercises;
import React from 'react';
import logo from '../../image/favicon.ico';
import './Exercises.css';

const Exercises = () => {
    return (
        <div className="col-8 my-5 ps-5">
            <div className='d-flex align-items-start'>
                <img className='logo-image me-3' src={logo} alt="" />
                <h3 className='text-primary'>Home GYM</h3>
            </div>
        </div>
    );
};

export default Exercises;