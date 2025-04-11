import React from 'react'
const TotalPaymentCards = () => {
  return (
    <div className='total-transactions-card'>
        <div className='grid-section'>
            <div className='item green'>
                <label>Total Expected Payout</label>
                <h3>Rs. 125,759</h3>
            </div>
            <div className='item orange'>
                <label>Total Expected Payments</label>
                <h3>Rs. 125,759</h3>
            </div>
            <div className='item blue'>
                <label>Total Expected Deductions</label>
                <h3>Rs. 125,759</h3>
            </div>
        </div>
    </div>
  )
}

export default TotalPaymentCards
