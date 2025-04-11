import React from 'react'
import './welcomedeal.scss'

const WelcomeCard = () => {
  return (
    <div className='welcomecard action-card'>
        <div className='item'>
            <h3>Welcome Deal</h3>
            <p>Sales Discount Campaign</p>
        </div>
        <div className='item'>
            <p>Start at 01 January 2025</p>
            <p>End at 07 January 2025</p>
            <p>Running for 7 Days</p>
        </div>
    </div>
  )
}

export default WelcomeCard
