import React, { useState } from 'react'
import useCustomePagination from '../../layout/paginations/paginationUtils';
import CustomPagination from '../../layout/paginations';
import { IconEditInput, TranshIcon } from '../../../icons/icons';
import './ratecardtable.scss'
import EditCityModal from '../editcity_modal';
const RateCardTable = () => {
    const tabledata = [
        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },
        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },
        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },
        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },
        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },
        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },
        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },
        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },
        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },
        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },
        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },
        {
            id:'CT10001',
            cityname:'Aalamkulam',
            district:'Puttalam',
            province:'North Western',
            rate:'Rs. 350',
            additionkg:'Rs. 80',
        },
    ]


  //pagination
  const {
    paginatedData,
    page,
    rowsPerPage,
    rowsPerPageOptions,
    handlePageChange,
    handleRowsPerPageChange,
    totalItems,
  } = useCustomePagination(tabledata);
  
  const [openCityEditModal,setOpenCityEditModal] = useState(false)
  const handleOpenCityEdit = () =>{
    setOpenCityEditModal(true)
  }
  const handleCloseCityEdit = () =>{
    setOpenCityEditModal(false)
  }
  return (
    <div className='rate-card-table'>
      <div className='data-table-wrapped'>
        <div className='data-table-container'>
          <table>
            <thead>
              <tr>
                <th>City ID</th>
                <th>City Name</th>
                <th>District</th>
                <th>Province</th>
                <th>Rate</th>
                <th>Additional KG</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData?.map((td, index) => (
                <tr key={index}>
                    <td>{td.id}</td>    
                    <td>{td.cityname}</td>
                    <td>{td.district}</td>
                    <td>{td.province}</td>
                    <td>{td.rate}</td>
                    <td>{td.additionkg}</td>
                    <td>
                        <div className='action-btns'>
                            <button type='button' className='edit' onClick={handleOpenCityEdit}>Edit <IconEditInput/></button>
                            <button type='button' className='bg-transparent'><TranshIcon/></button>
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
      <EditCityModal openEditModal={openCityEditModal} closeEditModal={handleCloseCityEdit}/>
    </div>
  )
}

export default RateCardTable;
