import React from 'react';

const Experience = (props) => {
    const { activity, breakTime } = props;
    let total = 0;
    for (const item of activity) {
        total = total + item.time;
    }
    const breakTimeLocal = localStorage.getItem('Break-Time');
    console.log(breakTimeLocal);
    let time;
    if (breakTimeLocal) {
        time = breakTimeLocal
    }
    else{
        time = breakTime;
    }
    return (
        <div>
            <h5 className='mt-4 mb-3'>Experience Details</h5>
            <div className='mb-5'>
                <div className='bg-white d-lg-flex align-items-center justify-content-between px-3 pt-3 py-2 rounded my-3'>
                    <h6>Exercise Details</h6>
                    <h6 className='fw-lighter'>{total} minutes</h6>
                </div>

                <div className='bg-white d-lg-flex align-items-center justify-content-between px-3 rounded py-3'>
                    <h6>Break time</h6>
                    <h6 className='fw-lighter'>
                        {time} seconds</h6>
                </div>
            </div>

            <button className='btn btn-primary w-100'>Activity Completed</button>
        </div>
    );
};

export default Experience;