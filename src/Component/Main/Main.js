import React from 'react';
import Exercises from '../Exercises/Exercises';
// import './Main.css';

const Main = () => {
    return (
        <div className="container">
            <div className="row">
                <Exercises></Exercises>
                <div className="col-3">col-4</div>
            </div>
        </div>
    );
};

export default Main;