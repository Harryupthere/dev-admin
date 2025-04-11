import React from 'react'
const TotalReconcilitionCards = () => {
  return (
    <div className='total-transactions-card'>
        <div className='grid-section'>
            <div className='item green'>
                <label>Total Assumption Charged</label>
                <h3>Rs. 125,759</h3>
            </div>
            <div className='item orange'>
                <label>Actually Charged</label>
                <h3>Rs. 125,759</h3>
            </div>
            <div className='item blue'>
                <label>Total Adjustments</label>
                <h3>Rs. 125,759</h3>
            </div>
        </div>
    </div>
  )
}

export default TotalReconcilitionCards
