import React from 'react'
import { CustomPagination, useCustomePagination } from '../..';
import { images } from '../../../utils/customFn';
import { Link } from 'react-router-dom';
const SmsNotificationData = () => {

    const tabledata = [
        {
            title: '🤩🤩 Up to 90% Off on this black Friday 😍',
            message: '📣  Up to 90% off on selected products! ⏱ Grab the deal now and enjoy! 💝',
            link: 'http://www.fairbay.lk/campaign/100001',
            img: 'friday.png',
            icon: 'sold.png'
        },

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
    return (
        <div className='notification-wrapped'>
            <div className='action'>
                <Link to='/notifications/send-sms-notification' className='orange_button'>Send new Notification</Link>
            </div>
            <div className='data-table-wrapped'>
                <div className='data-table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Message</th>
                                <th>Link</th>
                                <th>Image</th>
                                <th>Icon</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='spacing_item'>
                                <td colSpan={5} ></td>
                            </tr>
                            {paginatedData?.map((td, index) => (
                                <tr key={index}>
                                    <td>{td.title}</td>
                                    <td>{td.message}</td>
                                    <td>{td.link}</td>
                                    <td>
                                        <div className='product-img'><img src={images[`${td.img}`]} /></div>
                                    </td>
                                    <td>
                                        <div className='product-img'><img src={images[`${td.icon}`]} /></div>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={5}>
                                    <div className='flex-wrapped'>
                                    <div className='profile-section'>
                                        <div className='profile-img'>
                                            <img src={images['profile-boy.svg']} alt='profile' />
                                        </div>
                                        <div className='details'>
                                            <h2>Arc Super Admin</h2>
                                            <h3>Admin</h3>
                                        </div>
                                    </div>
                                    <div className='detail-flex'>
                                        <span>Link Clicks: 127</span>
                                        <span>Notification Date:  05/10/2024 14:03</span>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <CustomPagination
                        totalItems={totalItems}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={rowsPerPageOptions}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default SmsNotificationData
