import React from 'react'
import { CustomPagination, useCustomePagination, UserProfilePicAndName } from '../..';
import { images } from '../../../utils/customFn';
import { Link } from 'react-router-dom';

const tabledata = [
    { name: 'Arjuna Ranatunga' },
    { name: 'Arjuna Ranatunga' },
    { name: 'Arjuna Ranatunga' },
    { name: 'Arjuna Ranatunga' },
    { name: 'Arjuna Ranatunga' },
    { name: 'Arjuna Ranatunga' },
]
const FairDealData = () => {

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
        <div className='campaigns-data-wrapped'>
            <div className='action-card'>
                <Link to='/campaigns/fairdeal/create-campaigns' className='orange_button ms-auto' >Create New Campaign</Link>
            </div>
            <div className='data-table-wrapped'>
                <div className='data-table-container'>
                    <table>
                        <thead className='three_items'>
                            <tr>
                                <th>Campaign Details</th>
                                <th>Starts in</th>
                                <th>Live period</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className='product-details'>
                {paginatedData?.map((index) => (
                    <div className='product-item' key={index}>
                        <div className='item-body'>
                            <div className='body-item campaign-all-detail'>
                                <div className='given-img'>
                                    <img src={images['fairdeal.png']} alt='img' />
                                </div>
                                <div>
                                <p>Welcome Deal</p>
                                <p>Sales Discount Campaign</p>
                                <p>Regular Campaign</p>
                                </div>
                            </div>
                            <div className='body-item'>
                                <p>01 January 2025 </p>
                                <p>07d : 02h : 43m : 07s</p>
                            </div>
                            <div className='body-item'>
                                <p>Start at 01 January 2025</p>
                                <p>End at 07 January 2025</p>
                                <p>Running for 7 Days</p>
                            </div>

                        </div>
                        <div className='item-footer'>
                            <div className='leftside'>
                                <UserProfilePicAndName />
                            </div>
                            <div className='rightside'>
                                <button type='buton' className='blue_border_btn'>Edit</button>
                                <button type='buton' className='orange_border_btn'>Delete</button>
                                <Link className='orange_button' to='/campaigns/fairdeal/onboarding'>Add Prodcuts</Link>
                            </div>
                        </div>
                    </div>
                ))}
                {/* ===============show this is no data=================== */}

                {/* <div className='product-item'>
                    <div className='empty-data'>No Campaigns live at the moment.</div>
                </div> */}
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

export default FairDealData;
