import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Exercises from '../Exercises/Exercises';
import Information from '../Information/Information';
import './Main.css';

const Main = () => {
    const [activities, setActivities] = useState([]);
    
    useEffect(() =>{
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data));
    },[])


    const [activity, setActivity] = useState([]);
    const addTime = (selectedActivity) =>{
        console.log(selectedActivity)
        const newSelectedActivity = [...activity, selectedActivity];
        setActivity(newSelectedActivity);
        console.log(newSelectedActivity)
        
    }
    return (
        <div className="container main-container">
            <div className="row">
                <Exercises activities={activities} addtime={addTime}></Exercises>
                <Information activity = {activity}></Information>
            </div>
        </div>
    );
};

export default Main;