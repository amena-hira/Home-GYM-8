import React from 'react';

const Exercise = (props) => {
    const {activity, addtime} = props;
    const {id, name, img, time} = activity;
    return (
        <div className='col mt-4'>
            <div className="card p-2" >
                <img src={img} className="card-img-top img-thumbnail"  alt="" style={{height: "10rem"}} />
                <div className="card-body">
                    <p className="card-title fw-bold fs-5 ">{name}</p>
                    <p>Time: {time} min</p>
                    
                    <button onClick={() => addtime(activity)} className='btn btn-primary'>Add to list</button>
                </div>
            </div>
            
        </div>
    );
};


export default Exercise;