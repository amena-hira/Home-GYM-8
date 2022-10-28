import React from 'react';
// import './Exercise.css';

const Exercise = (props) => {
    const {name, img, time} = props.activity;
    return (
        <div className='col mt-4'>
            <div className="card p-2" style={{width: "18rem"}}>
                <img src={img} className="card-img-top img-thumbnail"  alt="" style={{height: "10rem"}} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    
                    <a href="" className='btn btn-primary'>Add to list</a>
                </div>
            </div>
            
        </div>
    );
};


export default Exercise;