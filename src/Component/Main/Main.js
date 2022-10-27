import React from 'react';
import Exercises from '../Exercises/Exercises';
// import './Main.css';

const Main = () => {
    return (
        <div class="container text-center">
            <div class="row">
                <Exercises></Exercises>
                {/* <div class="col-8">col-8</div> */}
                <div class="col-4">col-4</div>
            </div>
            {/* <div class="row">
                <Exercises className="col-8"></Exercises>
                <div class="col-4">right side</div>
            </div> */}
        </div>
    );
};

export default Main;