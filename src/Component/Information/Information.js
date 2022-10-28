import React from 'react';
import './Information.css';
import profile from '../../image/profile.png';

const Information = () => {
    return (
        <div className="col-3 pt-5 info-container container">
            <div className='d-flex mb-2 align-items-center'>
                <img className='profile-img me-2 ms-1' src={profile} alt="" />
                <h4>Hira Hiya</h4>
            </div>
            <div className='row bg-white p-1 text-center mx-1 border rounded'>
                
               <div className='col'>
                <p className='mb-0'>60kg</p>
                <small>Weight</small>
               </div>
               <div className='col'>
                <p className='mb-0'>5.0</p>
                <p>Height</p>
               </div>
               <div className='col'>
                <p className='mb-0'>20yrs</p>
                <p>Age</p>
               </div>
            </div>


            <div className='mt-4'>
                <h5 className='ms-1 mb-3'>Add A Barek</h5>
                <div className='row bg-white py-3  mx-1 rounded'>
                    <div className='col'>
                        <button className='border rounded-circle text-center p-1'>10s</button>
                        
                    </div>
                    <div className='col'>
                        <button className='border rounded-circle text-center p-1'>20s</button>
                    </div>
                    <div className='col'>
                        <button className='border rounded-circle text-center p-1'>30s</button>
                    </div>
                    <div className='col'>
                        <button className='border rounded-circle text-center p-1'>40s</button>
                    </div>
                    <div className='col'>
                        <button className='border rounded-circle text-center p-1'>50s</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;