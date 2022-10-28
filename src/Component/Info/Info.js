import React from 'react';
import profile from '../../image/profile.png';

const Info = () => {
    return (
        <div>
            <div className='d-md-flex mb-2 align-items-center'>
                <img className='profile-img me-2 ms-1' src={profile} alt="" />
                <h4>Hira Hiya</h4>
            </div>
            <div className='row bg-white p-1 text-center mx-1 border rounded'>
               <div className='col my-2'>
                <p className='mb-0'>60kg</p>
                <small>Weight</small>
               </div>
               <div className='col my-2'>
                <p className='mb-0'>5.0</p>
                <small>Height</small>
               </div>
               <div className='col my-2'>
                <p className='mb-0'>20yrs</p>
                <small>Age</small>
               </div>
            </div>
        </div>
    );
};

export default Info;