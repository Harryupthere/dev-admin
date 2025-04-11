import React, { useState } from 'react'
import { Icons, images } from '../../../utils/customFn';
import { Link } from 'react-router-dom';
import TableFilter from '../tablefilters';
import BlockUnblockModal from '../block_unblock_modal';
import useCustomePagination from '../../layout/paginations/paginationUtils';
import CustomPagination from '../../layout/paginations';
const CustomerTable = () => {
  const tabledata = {
    th: [
      { thname: 'Name' },
      { thname: 'Gender' },
      { thname: 'Age' },
      { thname: 'Phone' },
      { thname: 'Email' },
      { thname: 'City' },
      { thname: 'Created on' },
      { thname: 'Sales Rs' },
      { thname: 'Return' },
      { thname: 'Rank' },
      { thname: 'Signed up' },
      { thname: 'Status' },
      { thname: 'Action' },
      { thname: 'Manage' },
    ],
    tr: [
      {
        id: 'U10000001',
        name: 'Kevin Joseph',
        gender: 'Male',
        age: 'N/A',
        phone: 'N/A',
        email: 'sample@gmail.com',
        city: 'N/A',
        date: '05/10/2024',
        price: '1,200',
        return: '3 : 0',
        rank: '3',
        signupicon: 'facebook.svg',
        status: 'active',
        action: 'block'
      },
      {
        id: 'U10000002',
        name: 'Priya Ram',
        gender: 'Male',
        age: 'N/A',
        phone: 'N/A',
        email: 'sample@gmail.com',
        city: 'N/A',
        date: '05/10/2024',
        price: '1,200',
        return: '3 : 0',
        rank: '3',
        signupicon: 'phone.svg',
        status: 'active',
        action: 'block'
      },
      {
        id: 'U10000002',
        name: 'Priya Ram',
        gender: 'FeMale',
        age: 'N/A',
        phone: '88775522',
        email: 'sample@gmail.com',
        city: 'N/A',
        date: '10/10/2024',
        price: '1,200',
        return: '3 : 0',
        rank: '3',
        signupicon: 'email.svg',
        status: 'inactive',
        action: 'unblock'
      },
      {
        id: 'U10000002',
        name: 'Priya Ram',
        gender: 'Male',
        age: 'N/A',
        phone: 'N/A',
        email: 'sample@gmail.com',
        city: 'N/A',
        date: '05/10/2024',
        price: '1,200',
        return: '3 : 0',
        rank: '3',
        signupicon: 'google.svg',
        status: 'active',
        action: 'unblock'
      },
      {
        id: 'U10000002',
        name: 'Priya Ram',
        gender: 'Male',
        age: 'N/A',
        phone: 'N/A',
        email: 'sample@gmail.com',
        city: 'N/A',
        date: '05/10/2024',
        price: '1,200',
        return: '3 : 0',
        rank: '3',
        signupicon: 'google.svg',
        status: 'inactive',
        action: 'block'
      },
      {
        id: 'U10000001',
        name: 'Kevin Joseph',
        gender: 'Male',
        age: 'N/A',
        phone: 'N/A',
        email: 'sample@gmail.com',
        city: 'N/A',
        date: '05/10/2024',
        price: '1,200',
        return: '3 : 0',
        rank: '3',
        signupicon: 'facebook.svg',
        status: 'active',
        action: 'block'
      },
      {
        id: 'U10000002',
        name: 'Priya Ram',
        gender: 'Male',
        age: 'N/A',
        phone: 'N/A',
        email: 'sample@gmail.com',
        city: 'N/A',
        date: '05/10/2024',
        price: '1,200',
        return: '3 : 0',
        rank: '3',
        signupicon: 'phone.svg',
        status: 'active',
        action: 'block'
      },
      {
        id: 'U10000002',
        name: 'Priya Ram',
        gender: 'FeMale',
        age: 'N/A',
        phone: '88775522',
        email: 'sample@gmail.com',
        city: 'N/A',
        date: '10/10/2024',
        price: '1,200',
        return: '3 : 0',
        rank: '3',
        signupicon: 'email.svg',
        status: 'inactive',
        action: 'unblock'
      },
      {
        id: 'U10000002',
        name: 'Priya Ram',
        gender: 'Male',
        age: 'N/A',
        phone: 'N/A',
        email: 'sample@gmail.com',
        city: 'N/A',
        date: '05/10/2024',
        price: '1,200',
        return: '3 : 0',
        rank: '3',
        signupicon: 'google.svg',
        status: 'active',
        action: 'unblock'
      },
      {
        id: 'U10000002',
        name: 'Priya Ram',
        gender: 'Male',
        age: 'N/A',
        phone: 'N/A',
        email: 'sample@gmail.com',
        city: 'N/A',
        date: '05/10/2024',
        price: '1,200',
        return: '3 : 0',
        rank: '3',
        signupicon: 'google.svg',
        status: 'active',
        action: 'unblock'
      },
      {
        id: 'U10000002',
        name: 'Priya Ram',
        gender: 'Male',
        age: 'N/A',
        phone: 'N/A',
        email: 'sample@gmail.com',
        city: 'N/A',
        date: '05/10/2024',
        price: '1,200',
        return: '3 : 0',
        rank: '3',
        signupicon: 'google.svg',
        status: 'inactive',
        action: 'block'
      },
      {
        id: 'U10000002',
        name: 'Priya Ram',
        gender: 'Male',
        age: 'N/A',
        phone: 'N/A',
        email: 'sample@gmail.com',
        city: 'N/A',
        date: '05/10/2024',
        price: '1,200',
        return: '3 : 0',
        rank: '3',
        signupicon: 'google.svg',
        status: 'active',
        action: 'unblock'
      },
      {
        id: 'U10000002',
        name: 'Priya Ram',
        gender: 'Male',
        age: 'N/A',
        phone: 'N/A',
        email: 'sample@gmail.com',
        city: 'N/A',
        date: '05/10/2024',
        price: '1,200',
        return: '3 : 0',
        rank: '3',
        signupicon: 'google.svg',
        status: 'inactive',
        action: 'block'
      }
    ]
  };

  const [openModal, setOpenModal] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('');
  const handleOpenModal = (status) => {
    setSelectedStatus(status);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
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
    <div className='customer-table'>
      <TableFilter />
      <div className='data-table-wrapped'>
        <div className='data-table-container'>
          <table>
            <thead>
              <tr>
                <th>
                  <div className="checkcontainer">
                    <input type="checkbox" />
                    <label>User ID</label>
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
              <tr><td colSpan={15} style={{backgroundColor:'#F4F7F9'}}></td></tr>
              {paginatedData?.map((td, index) => (
                <tr key={index}>
                  <td>
                    <div className="checkcontainer">
                      <input type="checkbox" id="html" />
                      <label>{td.id}</label>
                    </div>
                  </td>
                  <td>
                    <div className='profile'>
                      <div className='profile-pic'>
                        <img src={images['profile1.svg']} alt='profile' />
                      </div>
                      {td.name}
                    </div>
                  </td>
                  <td>{td.gender} </td>
                  <td>{td.age}</td>
                  <td>{td.phone}</td>
                  <td>{td.email}</td>
                  <td>{td.city}</td>
                  <td>{td.date}</td>
                  <td>{td.price}</td>
                  <td>{td.return}</td>
                  <td>{td.rank}</td>
                  <td>
                    <div className='icons'>
                      <img src={Icons[`${td.signupicon}`]} alt='signupicon' />
                    </div>
                  </td>
                  <td>
                    <div className='status'>
                      <button type='button' className={`${td.status === 'active' ? 'active' : ''} status`}>
                        {td.status === 'active' ? 'Active' : 'Inactive'}
                      </button>

                    </div>
                  </td>
                  <td>
                    <div className="action">
                      <button type='button' onClick={() => handleOpenModal(td.status)}>
                        {td.action === 'block' ? 'Block' : 'Unblock'}
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="view">
                      <Link to="/customers/detail">View</Link>
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
      {/* =========modals============== */}
      {/* for developement you need to send status for opening different modals on block and unblock */}
      <BlockUnblockModal openModal={openModal} closeModal={handleCloseModal} status={selectedStatus} />
    </div>
  )
}

export default CustomerTable;
