import React from 'react';
import Exercises from '../Exercises/Exercises';
import Information from '../Information/Information';
// import './Main.css';

const Main = () => {
    return (
        <div className="container main-container">
            <div className="row">
                <Exercises></Exercises>
                <Information></Information>
            </div>
        </div>
    );
};

export default Main;