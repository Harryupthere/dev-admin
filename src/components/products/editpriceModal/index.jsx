import React from 'react'
import { CrossIcon } from '../../../icons/icons';
import { Modal } from 'react-bootstrap';
import { DateRangePicker } from 'rsuite';
import './productListModals.scss'
import { images } from '../../../utils/customFn';
const EditPriceModal = ({ openModal, closeModal }) => {

    return (
        <Modal show={openModal} className='fairbay_modals product-list-modals large-modal' >
            <div className='modal_header'>
                <div className='main_heading'><h2>Edit Price</h2></div>
                <button type='button' onClick={closeModal} className='cancel-btn'><CrossIcon /></button>
            </div>
            <div className='modal_body'>
                <div className='common-filter-design'>
                    <div className='left-side'>
                        <div className='input-main-data'><input placeholder='Rs. Enter Price ' /></div>
                        <div className='input-main-data'><input placeholder='Rs. Enter Special Price' /></div>
                        <div className='input-with-select '>
                            <DateRangePicker showOneCalendar className='right-date-picker' placement='autoVerticalEnd' placeholder='Start Date   -    End Date' />
                        </div>
                    </div>
                    <div className='right-side'>
                        <button type='button' className='orange_button'>Apply to All</button>
                    </div>
                </div>
                <div className='price-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Variant Details</th>
                                <th>Price</th>
                                <th>Special Price</th>
                                <th>Profit</th>
                                <th>Special Price period</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className='product-details'>
                                        <div className='item-img main-item-img'><img src={images['hdmi.png']} alt='product' /></div>
                                        <div className='item-details'>
                                            <h3>1.5 Meter</h3>
                                            <span>HDMI Cable - Red & Black - 1.5M</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='input-main-data price'>
                                        <input type='text' placeholder='Enter Price' defaultValue="250" />
                                    </div>
                                </td>
                                <td>
                                    <div className='input-main-data price'>
                                        <input type='text' placeholder='Enter Price' defaultValue="250" />
                                    </div>
                                </td>
                                <td><span style={{color:'#647C9B'}}>Rs.</span> 85</td>
                                <td>
                                    <div className='input-with-select '>
                                        <DateRangePicker showOneCalendar className='right-date-picker' placement='autoVerticalEnd' placeholder='Start Date   -    End Date' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='product-details'>
                                        <div className='item-img main-item-img'><img src={images['hdmi.png']} alt='product' /></div>
                                        <div className='item-details'>
                                            <h3>1.5 Meter</h3>
                                            <span>HDMI Cable - Red & Black - 1.5M</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='input-main-data price'>
                                        <input type='text' placeholder='Enter Price' defaultValue="250" />
                                    </div>
                                </td>
                                <td>
                                    <div className='input-main-data price'>
                                        <input type='text' placeholder='Enter Price' defaultValue="250" />
                                    </div>
                                </td>
                                <td><span style={{color:'#647C9B'}}>Rs.</span> 85</td>
                                <td>
                                    <div className='input-with-select '>
                                        <DateRangePicker showOneCalendar className='right-date-picker' placement='autoVerticalEnd' placeholder='Start Date   -    End Date' />
                                    </div>
                                </td>
                            </tr>  <tr>
                                <td>
                                    <div className='product-details'>
                                        <div className='item-img main-item-img'><img src={images['hdmi.png']} alt='product' /></div>
                                        <div className='item-details'>
                                            <h3>1.5 Meter</h3>
                                            <span>HDMI Cable - Red & Black - 1.5M</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='input-main-data price'>
                                        <input type='text' placeholder='Enter Price' defaultValue="250" />
                                    </div>
                                </td>
                                <td>
                                    <div className='input-main-data price'>
                                        <input type='text' placeholder='Enter Price' defaultValue="250" />
                                    </div>
                                </td>
                                <td><span style={{color:'#647C9B'}}>Rs.</span> 85</td>
                                <td>
                                    <div className='input-with-select '>
                                        <DateRangePicker showOneCalendar className='right-date-picker' placement='autoVerticalEnd' placeholder='Start Date   -    End Date' />
                                    </div>
                                </td>
                            </tr>
                              <tr>
                                <td>
                                    <div className='product-details'>
                                        <div className='item-img main-item-img'><img src={images['hdmi.png']} alt='product' /></div>
                                        <div className='item-details'>
                                            <h3>1.5 Meter</h3>
                                            <span>HDMI Cable - Red & Black - 1.5M</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='input-main-data price'>
                                        <input type='text' placeholder='Enter Price' defaultValue="250" />
                                    </div>
                                </td>
                                <td>
                                    <div className='input-main-data price'>
                                        <input type='text' placeholder='Enter Price' defaultValue="250" />
                                    </div>
                                </td>
                                <td><span style={{color:'#647C9B'}}>Rs.</span> 85</td>
                                <td>
                                    <div className='input-with-select '>
                                        <DateRangePicker showOneCalendar className='right-date-picker' placement='autoVerticalEnd' placeholder='Start Date   -    End Date' />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='modal_footer'>
                <div className='action_btn'>
                    <button type='button' className='orange_border_btn' onClick={closeModal}>
                         Cancel
                    </button>
                    <button type='button' className='orange_button' onClick={closeModal}>
                        Save
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default EditPriceModal
