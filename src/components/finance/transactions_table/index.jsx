import React from 'react'
import useCustomePagination from '../../layout/paginations/paginationUtils';
import CustomPagination from '../../layout/paginations';
import { images } from '../../../utils/customFn';
import '../financetable.scss'
const FinanceTransactionTable = () => {
    const tabledata = {
        th: [
            { thname: 'Order Number' },
            { thname: 'Order Date' },
            { thname: 'Payment' },
            { thname: 'Status' },
            { thname: 'Details' },
            { thname: 'Price Paid' },
            { thname: 'Item Cost' },
            { thname: 'Packing Cost' },
            { thname: 'Shipping Fee' },
            { thname: 'PayHere Fee' },
            { thname: 'Profit' }
        ],
        tr: [
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
                profit: 'Rs. -265',
            },
            {
                number: '20241019006',
                date: '05/10/2024',
                pay: 'COD',
                status: 'Delivery',
                img: 'mouse.svg',
                email: 'sample@gmail.com',
                price: 'Rs. 0',
                cost: 'Rs. 0',
                packingcost: 'Rs. 0',
                shippingfee: '0',
                payfee: '0',
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
        <div className='product-detail-table'>
            <div className='data-table-wrapped'>
                <div className='data-table-container'>
                    <table>
                        <thead>
                            <tr>
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
                                    <td>{td.number} </td>
                                    <td>{td.date}</td>
                                    <td>{td.pay}</td>   
                                    <td>{td.status}</td>
                                    <td>
                                        <div className='table-product-details'>
                                            <div className='item'>
                                                <img src={images['mouse.png']} alt='product' />
                                            </div>
                                            <div className='details'>
                                                M10 EarBuds Bluetooth Earphone<br/>
                                                 Bluetooth
                                                 v5.3 TWS Stereo Airpods Gaming Support Delayless<br/>
                                                Block<br/>
                                                SKU: 100000001_100000001
                                            </div>
                                        </div>
                                    </td>
                                    <td>{td.price}</td>
                                    <td>{td.cost}</td>
                                    <td>{td.packingcost}</td>
                                    <td>{td.shippingfee}</td>
                                    <td>{td.payfee}</td>
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

export default FinanceTransactionTable;
