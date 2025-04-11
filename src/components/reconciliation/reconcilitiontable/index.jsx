import React from 'react'
import useCustomePagination from '../../layout/paginations/paginationUtils';
import CustomPagination from '../../layout/paginations';
import './recocilationtable.scss'
const ReconcilitionTable = () => {
    const tabledata = {
        th: [
            { thname: 'Order Date' },
            { thname: 'Update Date' },
            { thname: 'Payment' },
            { thname: 'Status' },
            { thname: 'Price Paid' },
            { thname: 'Actual PP' },
            { thname: 'Shipping Fee' },
            { thname: 'Actual SF' },
            { thname: 'Adjustment' }
        ],
        tr: [
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                updatedate: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                shippingfee: '0',
                actualsf: '0',
                profit: 'Rs. -265',
            },

        ]
    };

    //pagination
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
        <div className='reconcilation-table'>
            <div className='selected'>
                <div className='selected-data'>0 Selected</div>
                <button type='button' className='orange_button'>Save Changes</button>
            </div>
            <div className='data-table-wrapped'>
                <div className='data-table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <div className="checkcontainer">
                                        <input type="checkbox" />
                                        <label>Order Number</label>
                                    </div>
                                </th>
                                {tabledata.th?.map((th, index) => (
                                    <th key={index}>
                                        {th.thname}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData?.map((td, index) => (
                                <tr key={index}>
                                    <td>
                                    <div className="checkcontainer">
                                        <input type="checkbox"  />
                                        <label>{td.number}</label>
                                    </div>
                                    </td>
                                    <td>{td.date}</td>
                                    <td>{td.updatedate}</td>
                                    <td>{td.pay}</td>
                                    <td>{td.status}</td>
                                    <td>{td.price}</td>
                                    <td>{td.cost}</td>
                                    <td>{td.shippingfee}</td>
                                    <td>{td.actualsf}</td>
                                    <td>{td.profit}</td>
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

export default ReconcilitionTable;
