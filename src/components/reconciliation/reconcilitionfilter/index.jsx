import React, { useState } from 'react'
import './reconcilitionfilter.scss'
import UpdateByExelModal from '../update_exel_modal'

const ReconsilitionFilter = () => {
const [openUpdateModal,setUpdateModal] = useState(false)

const handleOpenUpdateModal = () =>{
    setUpdateModal(true)
}   
const handleCloseUpdateModal = () =>{
    setUpdateModal(false)
}   
    return (
        <div className='filter-wrapper-transaction reconcilitionfilter'>
            <div className='common-filter-design action-card mb-0'>
                <div className='left-side'>
                    <div className='input-with-select'>
                        <button type='button'>Order Number</button>
                        <input type='text' placeholder='Search by order number' />
                    </div>
                    <div className='input-with-select'>
                        <button type='button'>Order Status</button>
                        <input type='text' placeholder='Search by order Status' />
                    </div>
                    <div className='reset'>
                        <button type='button' className='orange_border_btn'>Reset</button>
                    </div>
                </div>
                <div className='right-side'>
                    <button type='button' className='blue_button' onClick={handleOpenUpdateModal}>Update by Excel</button>
                </div>
            </div>
            <UpdateByExelModal closeUpdateModal={handleCloseUpdateModal} openUpdateModal={openUpdateModal}/>
        </div>
    )
}

export default ReconsilitionFilter;
