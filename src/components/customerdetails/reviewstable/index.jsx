import React from 'react'
import './reviewstable.scss'
import { Link, NavLink } from 'react-router-dom';
import { StartFilled,MessageIcon ,GalleryIcon} from '../../../icons/icons';


const tabledata = {
    th: [
      { thname: "Date" },
      { thname: "Order Number" },
      { thname: "Status" },
      { thname: "Item Qty" },
      { thname: "Amount" },
      { thname: "Payment" },
      { thname: "Manage" },
    ],
    tr: [
      {
        date: "05/10/2024 14:03:17",
        o_no: "20241019005",
        status: "Pending",
        qty: "5",
        amount: "Rs. 2,006,000",
        payment: "COD",
        manage: "View",
      },
      {
        date: "06/10/2024 10:15:00",
        o_no: "20241019006",
        status: "Shipped",
        qty: "2",
        amount: "Rs. 1,000,000",
        payment: "Online",
        manage: "View",
      },
      {
        date: "07/10/2024 12:00:00",
        o_no: "20241019007",
        status: "Delivered",
        qty: "3",
        amount: "Rs. 500,000",
        payment: "Online",
        manage: "View",
      },
      {
        date: "08/10/2024 14:30:00",
        o_no: "20241019008",
        status: "Returned",
        qty: "1",
        amount: "Rs. 100,000",
        payment: "COD",
        manage: "View",
      },
      {
        date: "08/10/2024 14:30:00",
        o_no: "20241019008",
        status: "Exchanged",
        qty: "1",
        amount: "Rs. 100,000",
        payment: "COD",
        manage: "View",
      },
      {
        date: "08/10/2024 14:30:00",
        o_no: "20241019008",
        status: "Partially Delivered",
        qty: "1",
        amount: "Rs. 100,000",
        payment: "COD",
        manage: "View",
      },
      {
        date: "08/10/2024 14:30:00",
        o_no: "20241019008",
        status: "Cancelled",
        qty: "1",
        amount: "Rs. 100,000",
        payment: "COD",
        manage: "View",
      },
    ],
  };

const getStatusStyles = (status) => {
    const styles = {
      Pending: {
        backgroundColor: "#F68C1E40",
        color: "#F68C1E80",
      },
      Shipped: {
        backgroundColor: "#4679BD40",
        color: "#587DBD80",
      },
      Delivered: {
        backgroundColor: "#00800040",
        color: "#00800080",
      },
      Returned: {
        backgroundColor: "#E3362940",
        color: "#F4433680",
      },
      Exchanged: {
        backgroundColor: "#ACA82740",
        color: "#ACA82780",
      },
      "Partially Delivered": {
        backgroundColor: "#00800040",
        color: "#00800080",
      },
      Cancelled: {
        backgroundColor: "#BD1AB240",
        color: "#BD1AB280",
      },
    };
  
    return styles[status] || {};
  };
const ReviewsTable = () => {
  return (
     <div className="order-history-table vs-common-table">
          <div className="table-bar-data">
            <h2>Order History</h2>
            <NavLink to=" ">View All</NavLink>
          </div>
    
          <div className="data-table-wrapped">
            <div className="data-table-container">
              <table>
                <thead>
                  <tr>
                    {tabledata.th?.map((th, index) => (
                      <th key={index}>{th.thname}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tabledata.tr?.map((td, index) => (
                    <tr key={index}>
                      <td>{td.date} </td>
                      <td>{td.o_no} </td>
                      <td>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "3px 10px",
                            borderRadius: "3px",
                            fontSize: "12px",
                            width: "150px",
                            fontWeight:"500",
                            textAlign: "center",
                            ...getStatusStyles(td.status),
                          }}
                        >
                          {td.status}
                        </span>
                      </td>
    
                      <td><div className='table-star'>{td.qty}<StartFilled/></div></td>
                      <td><div className='table-star'>8<GalleryIcon/></div></td>
                      <td><MessageIcon/></td>
                      <td>
                        <div className="view">
                          <Link to="#/">View</Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
  )
}

export default ReviewsTable