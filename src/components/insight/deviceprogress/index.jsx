import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import './deviceprogress.scss'
const DeviceProgress = () => {
    return (
        <div className='deviceprogress theme-card'>
            <div className='main_heading'>
                <h2>Devices</h2>
            </div>
            <div className='channel'>
                <h2>Channel</h2>
                <h2>Traffic (%)</h2>
            </div>
            <div className='pogressbar'>
                <div className='label'>Desktop</div>
                <div className='progresbarline'>
                    <ProgressBar now={60} />
                </div>
                <div className='label'>60%</div>
            </div>
        </div>
    )
}

export default DeviceProgress   
