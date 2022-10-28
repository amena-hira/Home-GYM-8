import React from 'react';

const Break = () => {
    return (
        
        <div className='mt-4'>
            <h5 className='ms-1 mb-3'>Add A Barek</h5>
            <div className='row bg-white py-3  mx-1 rounded text-center'>
                <div className='col my-1'>
                    <button className='border rounded-circle text-center p-1'>10s</button>
                    
                </div>
                <div className='col my-1'>
                    <button className='border rounded-circle text-center p-1'>20s</button>
                </div>
                <div className='col my-1'>
                    <button className='border rounded-circle text-center p-1'>30s</button>
                </div>
                <div className='col my-1'>
                    <button className='border rounded-circle text-center p-1'>40s</button>
                </div>
                <div className='col my-1'>
                    <button className='border rounded-circle text-center p-1'>50s</button>
                </div>
            </div>
        </div>
        
    );
};

export default Break;