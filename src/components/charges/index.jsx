import React from 'react'
import { CustomPagination, useCustomePagination } from '..';
import './charges.scss'
const Chargestable = () => {

    const tabledata = [
        {
            description:'PayHere Monthly Subscription',
            value:'Rs.10,000'
        },
        {
            description:'PayHere Commission',
            value:'2.99%'
        }
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
        <div className='charges-table-wrapped'>
            <div className='action'>
                <button type='button' className='orange_border_btn'>Edit</button>
                <button type='button' className='orange_button'>Save</button>
            </div>
            <div className='data-table-wrapped'>
                <div className='data-table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData?.map((td, index) => (
                                <tr key={index}>
                                    <td>{td.description}</td>
                                    <td>{td.value}</td>
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

export default Chargestable
