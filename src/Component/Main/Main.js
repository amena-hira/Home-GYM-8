import React from 'react';
import Exercises from '../Exercises/Exercises';
// import './Main.css';

const Main = () => {
    return (
        <div class="container">
            <div class="row">
                <Exercises></Exercises>
                <div class="col-4">col-4</div>
            </div>
        </div>
    );
};

export default Main;