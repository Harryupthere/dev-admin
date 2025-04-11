import React, { useState } from 'react'
import { images } from '../../../utils/customFn'
import CustomPagination from '../../layout/paginations';
import { useCustomePagination } from '../..';
import './returndata.scss'
import ReturnFilter from '../returnfilter';
import { Link } from 'react-router-dom';
import CancelRequestModal from '../../ordersModal/cancelRequestModal';
import ChangeReturnStatusModal from '../../ordersModal/changestatusModal';
const tabledata = [
    {}, {},{},{}
]
const ReturnData = () => {
    const {
        paginatedData,
        page,
        rowsPerPage,
        rowsPerPageOptions,
        handlePageChange,
        handleRowsPerPageChange,
        totalItems,
    } = useCustomePagination(tabledata);

    const [openChangeStatus,setOpenChangeStatus]= useState(false)
    const [openCancelRequest,setOpenCancelRequest]= useState(false)

    const handleOpenChangeStatus = () =>{
        setOpenChangeStatus(true)
    }
    const handleCloseChangeStatus = () =>{
        setOpenChangeStatus(false)
    }

    const handleOpenCancelRequest = () =>{
        setOpenCancelRequest(true)
    }
    const handleCloseCancelRequest = () =>{
        setOpenCancelRequest(false)
    }
    return (
        <div className='return-data'>
            <ReturnFilter />
            <div className="data-table-wrapped">
                <div className="data-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <div className='d-flex gap-2'>
                                        <div className='checkcontainer'><input type='checkbox' /></div>Order Details
                                    </div>
                                </th>
                                <th>Price & Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                    </table>
                    {paginatedData.map((item, index) => (
                        <div className='theme-card' key={index}>
                                    <div className='info rows'>
                                        <div className='left-info'>
                                            <div className='info-in-label'>
                                                <div className='checkcontainer'><input type='checkbox' /></div>
                                                <div className='profilepic'><img src={images['avatar.png']} alt='profile' /></div>
                                                <h3 className='boldfont'>Name Sample</h3>
                                            </div>
                                            <div>|</div>
                                            <div className='info-in-label'>
                                                <label>Order Number:</label>
                                                <span>20241019005</span>
                                            </div>
                                        </div>
                                        <div className='right-info'>
                                            <div className='info-in-label'>
                                                <label>Order Date: 05/10/2024 14:03</label>
                                            </div>
                                        </div>
                            </div>
                            <div className='rows'>
                                <div className='td'>
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
                                </div>
                                <div className='td'>
                                    <p>Rs. 400,000</p>
                                    <div className='qty'>
                                        x 5
                                    </div>
                                </div>
                                <div className='td'>Rs. 250,000</div>
                            </div>
                        
                            <div className='rows'>
                                <div className='td'>
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
                                </div>
                                <div className='td'>
                                    <p>Rs. 400,000</p>
                                    <div className='qty'>
                                        x 5
                                    </div>
                                </div>
                                <div className='td'>Rs. 250,000</div>
                            </div>
                            <div className='rows img-details'>
                                <div className='img-section1'>
                                    <div className='view-img'>
                                        <img src={images['samsung.png']} alt='img' />
                                        <img src={images['samsung.png']} alt='img' />
                                    </div>
                                    <div className='break-line'></div>
                                    <div className='view-img'>
                                        <img src={images['damage.png']} alt='img' />
                                        <img src={images['damage.png']} alt='img' />
                                    </div>
                                </div>
                                <div className='img-section2 image-with-detail'>
                                    <img src={images['complain.png']} alt='img' />
                                    <div className='details'>
                                        <p>Bank Name: <span> Commercial Bank</span></p>
                                        <p>Account Name:<span> R Priya</span></p>
                                        <p>Account Number:<span> 123456789</span></p>
                                    </div>
                                </div>
                                <div className='img-section3 image-with-detail'>
                                    <img src={images['package.png']} alt='img' />
                                    <div className='details'>
                                        <p>Bank Name: <span> Commercial Bank</span></p>
                                        <p>Account Name:<span> R Priya</span></p>
                                        <p>Account Number:<span> 123456789</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='rows footer-info'>
                                <div className='order-sb-details'>
                                    <div className='item'>
                                        <div className='subtext'>
                                            Order Status: <h3 className='boldfont status'>Shipped</h3>
                                        </div>
                                        <div className='subtext'>
                                            Payment Method:  <h3 className='boldfont'>COD</h3>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='subtext'>
                                            Shipping Fee:  <h3 className='boldfont'>400</h3>
                                        </div>
                                        <div className='subtext'>
                                            Order Total: <h3 className='boldfont'>Rs. 6,200</h3>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='subtext'>
                                            Tracking Number:  <h3 className='boldfont'>0000156</h3>
                                        </div>
                                        <div className='subtext'>
                                            Items <h3 className='boldfont'>4</h3>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                                <div>
                                    <div className='action-btns'>
                                        <button type='button' className='blue_border_btn' onClick={handleOpenChangeStatus}>Change Status</button>
                                        <button type='button' className='orange_border_btn' onClick={handleOpenCancelRequest}>Cancel Request</button>
                                        <button type='button' className='blue_button'>Assign Pickup</button>
                                        <Link to='/orders/returns/form' className='orange_button'>Action</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <CustomPagination
                        totalItems={totalItems}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={rowsPerPageOptions}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                    />
                    <ChangeReturnStatusModal openModal={openChangeStatus} closeModal={handleCloseChangeStatus}/>
                    <CancelRequestModal openModal={openCancelRequest} closeModal={handleCloseCancelRequest}/>
                </div>
            </div>
        </div>
    )
}

export default ReturnData;
