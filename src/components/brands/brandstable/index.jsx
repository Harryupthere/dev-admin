import React from 'react'
import { IconEditInput, TranshIcon } from '../../../icons/icons';
import { Link } from 'react-router-dom';
import CustomPagination from '../../layout/paginations';
import { BrandFilter, useCustomePagination } from '../../';
import { images } from '../../../utils/customFn';
import './brandlist.scss'
const tabledata = {
    tr: [
        {
            brandId: 1000,
            name: 'Arc Super Admin',
            email: 'afrar@fairbay.lk',
            product: '120',
        },
        {
            brandId: 1001,
            name: 'John Doe',
            email: 'john@doe.com',
            product: '120',

        },
        {
            brandId: 1001,
            name: 'John Doe',
            email: 'john@doe.com',
            product: '120',

        },
        {
            brandId: 1001,
            name: 'John Doe',
            email: 'john@doe.com',
            product: '120',

        },
    ],
};
const BrandListTable = () => {
    const {
        paginatedData,
        page,
        rowsPerPage,
        rowsPerPageOptions,
        handlePageChange,
        handleRowsPerPageChange,
        totalItems,
    } = useCustomePagination(tabledata.tr);
    return (
        <div className='brand-table'>
           <BrandFilter/>
            <div className="data-table-wrapped">
                <div className="data-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Brand Name</th>
                                <th>Products</th>
                                <th>Brand ID</th>
                                <th>Authorized</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((user, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className='brand-detail'>
                                            <img src={images['apple-brand.png']} alt='brand-logo'/>
                                            <span>Apple</span>
                                        </div>
                                    </td>
                                    <td>{user.product}</td>
                                    <td>{user.brandId}</td>
                                    <td>
                                        <div className='green-switch'>
                                            <input type='checkbox' />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='actions'>
                                            <Link to='#/' className='blue_button edit'>
                                                Edit <IconEditInput />
                                            </Link>
                                            <button type='button' className='bg-transparent delet'>
                                                <TranshIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
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

export default BrandListTable;
