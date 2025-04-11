import React from 'react'
import './total_transactions_card.scss'
const TotalTransactionCards = () => {
  return (
    <div className='total-transactions-card'>
        <div className='grid-section'>
            <div className='item green'>
                <label>Total Profit</label>
                <h3>Rs. 125,759</h3>
            </div>
            <div className='item orange'>
                <label>Total Sales</label>
                <h3>Rs. 125,759</h3>
            </div>
            <div className='item blue'>
                <label>Total Expenses</label>
                <h3>Rs. 125,759</h3>
            </div>
        </div>
    </div>
  )
}

export default TotalTransactionCards
