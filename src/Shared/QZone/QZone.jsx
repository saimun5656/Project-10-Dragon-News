import React from 'react';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
const QZone = () => {
    return (
        <div className='bg-secondary bg-opacity-25 p-4 rounded'>
            <h2>Q-Zone</h2>
            <img className='w-100' src={qZone1} alt="" />
            <img className='w-100' src={qZone2} alt="" />
            <img className='w-100' src={qZone3}alt="" />
        </div>
    );
};

export default QZone;