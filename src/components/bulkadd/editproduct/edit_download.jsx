import React from 'react'

const EditDownloadFile = () => {
    return (
        <div className='download-table'>
            <div className='theme-card'>
                <div className='checkboxes'>
                    <div className='checkboxes-container'>
                        <div className='check-wrapped'>
                            <h3>Products to Edit</h3>
                            <div className='checkcontainer'>
                                <input type='checkbox' />
                                <label>All</label>
                            </div>
                        </div>
                        <div className='check-wrapped'>
                            <h3>Segment to Edit</h3>
                            <div className='checkcontainer'>
                                <input type='checkbox' />
                                <label>All</label>
                            </div>
                            <div className='checkcontainer'>
                                <input type='checkbox' />
                                <div className='with-instruction'>
                                    <label>Basic Information</label>
                                    <p>Editable: Product Name, Product Category, Product Images, Product Specification, Product Description, Product Warranty Information</p>
                                </div>
                            </div>
                            <div className='checkcontainer'>
                                <input type='checkbox' />
                                <div className='with-instruction'>
                                    <label>Price and Stocks</label>
                                    <p>Editable: Stock, Price, Special Price, Cost, FairBay SKU ID,  FairBay SKU Name, Cost Class, SKU Status</p>
                                </div>
                            </div>
                            <div className='checkcontainer'>
                                <input type='checkbox' />
                                <div className='with-instruction'>
                                    <label>Variant Images</label>
                                    <p>Editable: SKU Images</p>
                                </div>
                            </div>
                            <div className='checkcontainer'>
                                <input type='checkbox' />
                                <div className='with-instruction'>
                                    <label>Weight</label>
                                    <p>Editable: SKU Weight</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='action_btn'>
                    <button type='button' className='orange_button'>Download File</button>
                </div>
                <div className='data-table-wrapped'>
                    <div className='data-table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Track ID</th>
                                    <th>Date</th>
                                    <th>User</th>
                                    <th>File</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>D1001</td>
                                    <td>05/10/2024 05:35:02</td>
                                    <td>Arc Super Admin</td>
                                    <td>Template</td>
                                    <td>afrar@fairbay.lk</td>
                                </tr>
                                <tr>
                                    <td>D1001</td>
                                    <td>05/10/2024 05:35:02</td>
                                    <td>Arc Super Admin</td>
                                    <td>Template</td>
                                    <td>afrar@fairbay.lk</td>
                                </tr>
                                <tr>
                                    <td>D1001</td>
                                    <td>05/10/2024 05:35:02</td>
                                    <td>Arc Super Admin</td>
                                    <td>Template</td>
                                    <td>afrar@fairbay.lk</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditDownloadFile
