import React from 'react'
import './orderhistory.scss'

const OrderHistory = () => {
    return (
        <div className='order-history'>
            <div className='theme-card'>
                <div className='card-heading'>
                    <h2>Order History</h2>
                </div>
                <div className='order-process'>
                    <div className='steps'>
                        <h3 className='title'>Delivered to the customer [API Update]</h3>
                        <p className='date'>06/10/2024 11:05</p>
                    </div>
                    <div className='steps'>
                        <h3 className='title'>Out for delivery [API Update]</h3>
                        <p className='date'>06/10/2024 11:05</p>
                    </div>
                    <div className='steps'>
                        <h3 className='title'>Received at last mile hub [API Update]</h3>
                        <p className='date'>06/10/2024 11:05</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderHistory
