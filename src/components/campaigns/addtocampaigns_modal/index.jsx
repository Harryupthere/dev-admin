import React from 'react'
import { CrossIcon, SearchIcon } from '../../../icons/icons';
import { Modal } from 'react-bootstrap';
import './addtocampaigns.scss'
import { images } from '../../../utils/customFn';

const AddToCampaignsModal = ({ openAddModal, closeAddModal }) => {

    return (
        <Modal show={openAddModal} className='fairbay_modals add-to-compaign-modal'>
            <div className='modal_header'>
                <div className='main_heading'><h2>Add Products to Campaign</h2></div>
                <button type='button' onClick={closeAddModal} className='cancel-btn'><CrossIcon /></button>
            </div>
            <div className='modal_body'>
                <div className='filter-items'>
                    <div className='input-main-data'><input type='text' placeholder='Category ID' /></div>
                    <div className='input-main-data'><input type='text' placeholder='FairBay SKU Name' /></div>
                    <div className='input-main-data'><input type='text' placeholder='Product Name' /></div>
                    <div className='input-main-data'><input type='text' placeholder='FairBay SKU Name' /></div>
                    <button type='button' className='orange_button'><SearchIcon /></button>
                </div>
                <div className='data-table-wrapped'>
                    <div className='data-table-container'>
                        <table className='heading-table'>
                            <thead>
                                <tr>
                                    <th>
                                        <div className="checkcontainer">
                                            <input type="checkbox" />
                                            <label>Details</label>
                                        </div>
                                    </th>
                                    <th>Campaign Price</th>
                                    <th>Stocks</th>
                                    <th>Cost</th>
                                </tr>
                            </thead>
                        </table>
                        <table className='child-table'>
                            <tr>
                                <td>
                                    <div className="checkcontainer">
                                        <input type="checkbox" />
                                        <div className='detail-td'>
                                            <div className='product-img'><img src={images['hdmi.png']} alt='product' /></div>
                                            <div className='detail'>
                                                <h2>HDMI Cable</h2>
                                                <span>ID: 100000002</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Campaign Price</td>
                                <td>Stocks</td>
                                <td>Cost</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="checkcontainer">
                                        <input type="checkbox" />
                                        <div className='detail-td'>
                                            <div className='product-img'><img src={images['hdmi.png']} alt='product' /></div>
                                            <div className='detail'>
                                                <h2>HDMI Cable</h2>
                                                <span>ID: 100000002</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Campaign Price</td>
                                <td>Stocks</td>
                                <td>Cost</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="checkcontainer">
                                        <input type="checkbox" />
                                        <div className='detail-td'>
                                            <div className='product-img'><img src={images['hdmi.png']} alt='product' /></div>
                                            <div className='detail'>
                                                <h2>HDMI Cable</h2>
                                                <span>ID: 100000002</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Campaign Price</td>
                                <td>Stocks</td>
                                <td>Cost</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="checkcontainer">
                                        <input type="checkbox" />
                                        <div className='detail-td'>
                                            <div className='product-img'><img src={images['hdmi.png']} alt='product' /></div>
                                            <div className='detail'>
                                                <h2>HDMI Cable</h2>
                                                <span>ID: 100000002</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Campaign Price</td>
                                <td>Stocks</td>
                                <td>Cost</td>
                            </tr>
                        </table>
                        <table className='child-table'>
                            <tr>
                                <td>
                                    <div className="checkcontainer">
                                        <input type="checkbox" />
                                        <div className='detail-td'>
                                            <div className='product-img'><img src={images['samsung.png']} alt='product' /></div>
                                            <div className='detail'>
                                                <h2>samsung Cable</h2>
                                                <span>ID: 100000002</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Campaign Price</td>
                                <td>Stocks</td>
                                <td>Cost</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="checkcontainer">
                                        <input type="checkbox" />
                                        <div className='detail-td'>
                                            <div className='product-img'><img src={images['samsung.png']} alt='product' /></div>
                                            <div className='detail'>
                                                <h2>samsung Cable</h2>
                                                <span>ID: 100000002</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Campaign Price</td>
                                <td>Stocks</td>
                                <td>Cost</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="checkcontainer">
                                        <input type="checkbox" />
                                        <div className='detail-td'>
                                            <div className='product-img'><img src={images['samsung.png']} alt='product' /></div>
                                            <div className='detail'>
                                                <h2>samsung Cable</h2>
                                                <span>ID: 100000002</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Campaign Price</td>
                                <td>Stocks</td>
                                <td>Cost</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="checkcontainer">
                                        <input type="checkbox" />
                                        <div className='detail-td'>
                                            <div className='product-img'><img src={images['samsung.png']} alt='product' /></div>
                                            <div className='detail'>
                                                <h2>samsung Cable</h2>
                                                <span>ID: 100000002</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Campaign Price</td>
                                <td>Stocks</td>
                                <td>Cost</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className='modal_footer'>
                <div className='action_btn'>
                    <button type='button' className='orange_button' onClick={closeAddModal}>
                    Add Products
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default AddToCampaignsModal
