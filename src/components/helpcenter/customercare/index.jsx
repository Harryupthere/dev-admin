import React from 'react'
import { CustomPagination, useCustomePagination } from '../..';
import { images } from '../../../utils/customFn';

const CustomercareData = () => {

    const tabledata = [
        {name:'Arjuna Ranatunga'},
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
        <div className='help-wrapped'>
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
                                <div className='case'><p>Case ID: <span className='bold-text'>C-1000003</span></p></div>
                            </div>
                            <div className='rightside'>
                                <p>Case Date: 05/10/2024 14:03</p>
                            </div>
                        </div>
                        <div className='item-body'>
                            <div className='body-item'>
                                <p>Issue Type:</p>
                                <p>My app is force closing</p>
                            </div>
                            <div className='body-item'>
                                <p>Comment:</p>
                                <p>I can’t use my app! It randomly crashing!</p>
                            </div>
                            <div className='body-item'>
                                <p>Images:</p>
                                {/* <div className='given-img'>
                                    <img src={images['complain.png']} alt='img' />
                                </div> */}
                            </div>
                        </div>
                        <div className='item-footer'>
                            <div className='leftside'>
                                <div className='status'>
                                    <p>Case Status:</p>
                                    <div> <span className='bold-text'>Pending</span></div>
                                </div>
                                <p>Customer Phone: 077 123 4567</p>
                            </div>
                            <div className='rightside'>
                                <button type='buton' className='blue_border_btn'>Report</button>
                                <button type='buton' className='orange_border_btn'>Customer Care</button>
                                <button type='buton' className='orange_button'>Move to Bug</button>
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
        </div>
    )
}

export default CustomercareData
