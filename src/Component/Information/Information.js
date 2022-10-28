import React from 'react';
import './Information.css';
import Break from '../Break/Break';
import Info from '../Info/Info';
import Experience from '../Experience/Experience';

const Information = () => {
    return (
        <div className="col-4 col-md-3 pt-5 info-container container">
            <Info></Info>
            <Break></Break>
            <Experience></Experience>

        </div>
    );
};

export default Information;