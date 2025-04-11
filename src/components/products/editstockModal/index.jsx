import React from 'react'
import { CrossIcon } from '../../../icons/icons';
import { Modal } from 'react-bootstrap';
import { images } from '../../../utils/customFn';

const EditStockModal = ({ openModal, closeModal }) => {

    return (
        <Modal show={openModal} className='fairbay_modals product-list-modals large-modal' centered >
            <div className='modal_header'>
                <div className='main_heading'><h2>Edit Stocks</h2></div>
                <button type='button' onClick={closeModal} className='cancel-btn'><CrossIcon /></button>
            </div>
            <div className='modal_body'>
                <div className='common-filter-design'>
                    <div className='left-side'>
                        <div className='input-main-data'><input placeholder='Enter Stocks' /></div>
                        <button type='button' className='orange_button'>Apply to All</button>
                    </div>
                </div>
                <div className='price-table'>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: '50%' }}>Variant Details</th>
                                <th>Sellable Stocks</th>
                                <th>Reserved</th>
                                <th>Withholding</th>
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
                                        <input type='text' placeholder='Enter Price' value="250" />
                                    </div>
                                </td>
                                <td>-2</td>
                                <td><span style={{ color: '#647C9B' }}>Rs.</span> 85</td>
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
                                        <input type='text' placeholder='Enter Price' value="250" />
                                    </div>
                                </td>
                                <td>-2</td>
                                <td><span style={{ color: '#647C9B' }}>Rs.</span> 85</td>
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
                                        <input type='text' placeholder='Enter Price' value="250" />
                                    </div>
                                </td>
                                <td>-2</td>
                                <td><span style={{ color: '#647C9B' }}>Rs.</span> 85</td>
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
                                        <input type='text' placeholder='Enter Price' value="250" />
                                    </div>
                                </td>
                                <td>-2</td>
                                <td><span style={{ color: '#647C9B' }}>Rs.</span> 85</td>
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

export default EditStockModal;
