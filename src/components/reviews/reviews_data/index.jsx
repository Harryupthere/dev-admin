import React, { useState } from 'react'
import { CustomPagination, useCustomePagination } from '../..';
import { images } from '../../../utils/customFn';
import ReviewsFilter from '../reviewsfilter';
import './reviews_data.scss'
import { StartFilled } from '../../../icons/icons';
import RejectReviewModal from '../rejectreviews_modal';
import RevokeReviewModal from '../revokereview_modal';

const ReviewsData = () => {

    const tabledata = [
        { name: 'Arjuna Ranatunga' },
        { name: 'Arjuna Ranatunga' },
        { name: 'Arjuna Ranatunga' },
        { name: 'Arjuna Ranatunga' },
        { name: 'Arjuna Ranatunga' },
        { name: 'Arjuna Ranatunga' },
    ]
    const {
        paginatedData,
        page,
        rowsPerPage,
        rowsPerPageOptions,
        handlePageChange,
        handleRowsPerPageChange,
        totalItems,
    } = useCustomePagination(tabledata);

    const [openRejectModal,setOpenRejectModal] = useState(false)
    const [openRevokeModal,setOpenRevokeModal] = useState(false)

    const handleOpenReject = () =>{
        setOpenRejectModal(true)
    }
    const handleCloseReject = () =>{
        setOpenRejectModal(false)
    }
    // ====revoke modal====
    const handleOpenRevoke = () =>{
        setOpenRevokeModal(true)
    }
    const handleCloseRevoke = () =>{
        setOpenRevokeModal(false)
    }
    return (
        <div className='reviews-wrapped help-wrapped'>
            <ReviewsFilter />
            <div className='data-table-wrapped'>
                <div className='data-table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Details</th>
                                <th>Rating</th>
                                <th>Comment</th>
                                <th>Images</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className='product-details'>
                {paginatedData?.map((tabledata, index) => (
                    <div className='product-item' key={index}>
                        <div className='item-header'>
                            <div className='leftside'>
                                <div className='profile'>
                                    <div className='profile-pic'><img src={images['avatar.png']} alt='avatar' /></div>
                                    <h4>{tabledata.name}</h4>
                                </div>
                                <div className='case'><p>Order Number: <span className='bold-text'>C-1000003</span></p></div>
                            </div>
                            <div className='rightside'>
                                <p>Case Date: 05/10/2024 14:03</p>
                            </div>
                        </div>
                        <div className='item-body'>
                            <div className='body-item'>
                                <div className='product-details'>
                                    <div className='product-image'><img src={images['mouse.png']} alt='product' /></div>
                                    <div className='content'>
                                        <p>Logitech G502 HERO High Performance Gaming Mouse</p>
                                        <p>Variant: Black</p>
                                        <p>Shop SKU: 100000012_100000132</p>
                                    </div>
                                </div>
                            </div>
                            <div className='body-item'>
                                <div className='rating-start'>
                                    <StartFilled/>
                                    <StartFilled/>
                                    <StartFilled/>
                                    <StartFilled/>
                                    <StartFilled/>
                                </div>
                            </div>
                            <div className='body-item'>
                                <p>Comment:</p>
                                <p>I can’t use my app! It randomly crashing!</p>
                            </div>
                            <div className='body-item'>
                                <p>Images:</p>
                                <div className='given-img'>
                                    <img src={images['samsung1.png']} alt='img' />
                                    <img src={images['samsung2.png']} alt='img' />
                                    <img src={images['samsung3.png']} alt='img' />
                                    <img src={images['samsung4.png']} alt='img' />
                                    <img src={images['samsung1.png']} alt='img' />

                                </div>
                            </div>
                        </div>
                        <div className='item-footer'>
                            <div className='leftside'>
                                <div className='status'>
                                    <p>Review Status: </p>
                                    <div> <span className='bold-text'>Pending</span></div>
                                </div>
                                <p>Review Date: 12/10/2024 10:00</p>
                            </div>
                            <div className='rightside'>
                                <button type='buton' className='blue_border_btn'>Report</button>
                                <button type='buton' className='orange_border_btn' onClick={handleOpenReject}>Reject</button>
                                <button type='buton' className='orange_button'>Approve & Publish</button>
                                <button type='buton' className='orange_border_btn' onClick={handleOpenRevoke}>Revoke</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <CustomPagination
                totalItems={totalItems}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={rowsPerPageOptions}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
            />
            {/* ======modal for reject review====== */}
            <RejectReviewModal openModal={openRejectModal} closeModal={handleCloseReject}/>
            {/* =========modal for revoke reviews====== */}
            <RevokeReviewModal openModal={openRevokeModal} closeModal={handleCloseRevoke}/>
        </div>
    )
}

export default ReviewsData;
