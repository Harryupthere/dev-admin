import React,{useState} from 'react'
import './onboardingdata.scss'
import OnboardingFilter from '../onboarding_filter';
import { images } from '../../../utils/customFn';
import { CheckIcon, TranshIcon } from '../../../icons/icons';
import CustomPagination from '../../layout/paginations';
import { useCustomePagination } from '../..';
import AddToCampaignsModal from '../addtocampaigns_modal';


const tabledata = [
    {
        name: 'HDMI Cable'
    },
    {
        name: 'HDMI Cable'
    },
    {
        name: 'HDMI Cable'
    },
    {
        name: 'HDMI Cable'
    }
]
const CampaignOnboardingData = () => {
    const[openAddModal,setOpenModal] =useState(false)
    const handleOpenAddModal = () =>{
        setOpenModal(true)
    }
    const handleCloseAddModal = () =>{
        setOpenModal(false)
    }
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
        <div className='onboarding-data'>
            <OnboardingFilter />
            <div className='data-table-wrapped'>
                <div className='data-table-container'>
                    <table className='heading-table child-table'>
                        <thead>
                            <tr>
                                <th>
                                    <div className="checkcontainer">
                                        <input type="checkbox" />
                                        <label>Details</label>
                                    </div>
                                </th>
                                <th>Current Price</th>
                                <th>Campaign Price</th>
                                <th>Profit</th>
                                <th>Current Stocks</th>
                                <th>Item Cost</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={{padding:'10px',backgroundColor:'#F4F7F9',border:'none'}} colSpan={7}></td></tr>
                            <tr className='heaing-data'>
                                <td colSpan={7}>
                                    <div className='detail-td ps-md-5'>
                                        <div className='product-img'><img src={images['hdmi.png']} alt='product' /></div>
                                        <div className='detail'>
                                            <h2>HDMI Cable</h2>
                                            <span>ID: 100000002</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {paginatedData?.map((td, index) => (
                                <tr key={index}>
                                    <td className='xl-td'>
                                        <div className="checkcontainer">
                                            <input type="checkbox" />
                                            <div className='detail-td'>
                                                <div className='product-img'><img src={images['hdmi.png']} alt='product' /></div>
                                                <div className='detail'>
                                                    <h2>{td.name}</h2>
                                                    <span>ID: 100000002</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Rs. 250</td>
                                    <td className='text-end'>
                                        <div className='input-main-data'>
                                            <input type='text' value="Rs.200" />
                                            <CheckIcon />
                                        </div>
                                    </td>
                                    <td>Rs. 50</td>
                                    <td>1000</td>
                                    <td>Rs. 150</td>
                                    <td><button type='button' className='bg-transparent'><TranshIcon /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='action-card'>
                <button type='button' className='orange_button m-auto' onClick={handleOpenAddModal} >Add Products</button>
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
            </div>
          
            <AddToCampaignsModal openAddModal={openAddModal} closeAddModal={handleCloseAddModal}/>
        </div>
    )
}

export default CampaignOnboardingData;
