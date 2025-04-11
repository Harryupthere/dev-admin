import React from 'react'

const OrderTotal = () => {
    return (
        <div className='order-total'>
            <div className='theme-card'>
                <div className='card-heading'>
                    <h2>Order Total</h2>
                </div>
                <div className='light-table'>
                    <table>
                        <tr>
                            <th>Sub Total</th>
                            <td>Rs 2,006,000</td>
                        </tr>
                        <tr>
                            <th>Shipping Fee Charged</th>
                            <td>Rs 0</td>
                        </tr>
                        <tr className='bold'>
                            <th>Grand Total</th>
                            <td>Rs 2,006,000</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrderTotal
