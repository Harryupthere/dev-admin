import React from 'react'

const OrderSummery = () => {
    return (
        <div className='order-total'>
            <div className='theme-card'>
                <div className='card-heading'>
                    <h2>Summary </h2>
                </div>
                <div className='light-table'>
                    <table>
                        <tr>
                            <th>Sub Total</th>
                            <td>Rs 2,006,000</td>
                        </tr>
                        <tr>
                            <th>Item Cost</th>
                            <td>Rs 0</td>
                        </tr>
                        <tr>
                            <th>PayHere Commission</th>
                            <td>Rs 2,006,000</td>
                        </tr>
                        <tr>
                            <th>Packing cost - Class 1</th>
                            <td>Rs -100</td>
                        </tr>
                        <tr>
                            <th>Profit/ Loss</th>
                            <td>Rs -40</td>
                        </tr>
                        <tr className='bold'>
                            <th>Profit/ Loss</th>
                            <td>Rs 191,516</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrderSummery;
