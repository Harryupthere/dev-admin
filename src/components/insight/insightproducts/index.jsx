import React from 'react'
import './insightproducts.scss'
import { images } from '../../../utils/customFn'
import InsightFilter from '../insightfilter'

const InsightProducts = () => {

    return (
        <div className='insight-detail-list'>
            <InsightFilter/>
            <div className="data-table-wrapped">
                <div className="data-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Details</th>
                                <th>Units Sold</th>
                                <th>Add to Carts</th>
                                <th>Wishlists</th>
                                <th>Sales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className='item-dtails'>
                                        <div className='item-img'>
                                            <img src={images['product1.png']} alt='product-item' />
                                        </div>
                                        <div className='details'>
                                            <label>M10 EarBuds Bluetooth Earphone Bluetooth v5.3 TWS Stereo Airpods Gaming Support Delayless</label>
                                            <p>Product ID: 100000001</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Rs. 350,000 </td>
                                <td>2675 </td>
                                <td>3775</td>
                                <td>Rs. 2,000,000</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='item-dtails'>
                                        <div className='item-img'>
                                            <img src={images['product2.png']} alt='product-item' />
                                        </div>
                                        <div className='details'>
                                            <label>M10 EarBuds Bluetooth Earphone Bluetooth v5.3 TWS Stereo Airpods Gaming Support Delayless</label>
                                            <p>Product ID: 100000001</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Rs. 350,000 </td>
                                <td>2675 </td>
                                <td>3775</td>
                                <td>Rs. 2,000,000</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='item-dtails'>
                                        <div className='item-img'>
                                            <img src={images['samsung.png']} alt='product-item' />
                                        </div>
                                        <div className='details'>
                                            <label>M10 EarBuds Bluetooth Earphone Bluetooth v5.3 TWS Stereo Airpods Gaming Support Delayless</label>
                                            <p>Product ID: 100000001</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Rs. 350,000 </td>
                                <td>2675 </td>
                                <td>3775</td>
                                <td>Rs. 2,000,000</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='item-dtails'>
                                        <div className='item-img'>
                                            <img src={images['samsung.png']} alt='product-item' />
                                        </div>
                                        <div className='details'>
                                            <label>M10 EarBuds Bluetooth Earphone Bluetooth v5.3 TWS Stereo Airpods Gaming Support Delayless</label>
                                            <p>Product ID: 100000001</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Rs. 350,000 </td>
                                <td>2675 </td>
                                <td>3775</td>
                                <td>Rs. 2,000,000</td>
                            </tr> <tr>
                                <td>
                                    <div className='item-dtails'>
                                        <div className='item-img'>
                                            <img src={images['samsung.png']} alt='product-item' />
                                        </div>
                                        <div className='details'>
                                            <label>M10 EarBuds Bluetooth Earphone Bluetooth v5.3 TWS Stereo Airpods Gaming Support Delayless</label>
                                            <p>Product ID: 100000001</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Rs. 350,000 </td>
                                <td>2675 </td>
                                <td>3775</td>
                                <td>Rs. 2,000,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default InsightProducts;
