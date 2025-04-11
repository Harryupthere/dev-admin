import React from 'react'
import './detail_list.scss'
import { images } from '../../../utils/customFn'

const OrderDetailList = () => {

    return (
        <div className='order-detail-list'>
            <div className='theme-card'>
                <div className='card-heading'>
                    <h2>Order Details</h2>
                </div>
                <div className='info'>
                    <div className='left-info'>
                        <div className='info-in-label'>
                            <label>Order Number: </label>
                            <span>20241019005</span>
                        </div>
                        <div>|</div>
                        <div className='info-in-label'>
                            <label>Tracking Number:</label>
                            <span>20241019005</span>
                        </div>
                    </div>
                    <div className='right-info'>
                        <div className='info-in-label'>
                            <span>Cancelled: </span>
                            <label>Order Date: 05/10/2024 14:03</label>
                        </div>
                    </div>
                </div>
                <div className="data-table-wrapped">
                    <div className="data-table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Item Details</th>
                                    <th>Unit Cost</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Profit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='item-dtails'>
                                            <div className='item-img'>
                                                <img src={images['samsung.png']} alt='product-item' />
                                            </div>
                                            <div className='details'>
                                                <p>Samsung Galaxy S24 Ultra</p>
                                                <p>Variant: <span className='orange'>Titanium Yellow • 1TB/ 12GB RAM</span></p>
                                                <p>FairBay SKU: Galaxy S24 Ultra - Titanium Yellow - 1TB/ 12GB RAM</p>
                                                <p>Shop SKU: 100000003_100000017</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rs. 350,000
                                    </td>
                                    <td>
                                        <div className='qty'>
                                            x 5
                                        </div>
                                    </td>
                                    <td>Rs. 400,000</td>
                                    <td>Rs. 2,000,000</td>
                                    <td>Rs. 250,000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='item-dtails'>
                                            <div className='item-img'>
                                                <img src={images['mouse.png']} alt='product-item' />
                                            </div>
                                            <div className='details'>
                                                <p>Samsung Galaxy S24 Ultra</p>
                                                <p>Variant: <span className='orange'>Titanium Yellow • 1TB/ 12GB RAM</span></p>
                                                <p>FairBay SKU: Galaxy S24 Ultra - Titanium Yellow - 1TB/ 12GB RAM</p>
                                                <p>Shop SKU: 100000003_100000017</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Rs. 350,000
                                    </td>
                                    <td>
                                        <div className='qty'>
                                            x 5
                                        </div>
                                    </td>
                                    <td>Rs. 400,000</td>
                                    <td>Rs. 2,000,000</td>
                                    <td>Rs. 250,000</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><div className='qty'>x 5</div></td>
                                    <td>Rs. 400,000</td>
                                    <td>Rs. 2,000,000</td>
                                    <td>Rs. 250,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* -----manage button by functionality and use the belowe classes for designing different button styles */}
                <div className='action-btns'>
                    <button type='button' className='blue_border_btn'>Change Status</button>
                    <button type='button' className='orange_border_btn'>Cancel Order</button>
                    <button type='button' className='orange_button'>Print AWB</button>
                    {/* <button type='button' className='blue_button'>Initiate Return</button> */} {/*uncomment for see design*/}
                </div>
            </div>
        </div>
    )
}

export default OrderDetailList;
