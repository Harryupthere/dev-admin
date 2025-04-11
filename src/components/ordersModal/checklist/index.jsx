import React from 'react'
import { CrossIcon } from '../../../icons/icons';
import { Modal } from 'react-bootstrap';
import { images } from '../../../utils/customFn';
import './checklist.scss'
const StocksChecklistModal = ({ openModal, closeModal }) => {

    return (
        <Modal show={openModal} className='fairbay_modals checklistmodal large-modal' centered >
            <div className='modal_header'>
                <div className='main_heading'><h2>Stocks Checklist</h2></div>
                <button type='button' onClick={closeModal} className='cancel-btn'><CrossIcon /></button>
            </div>
            <div className='modal_body'>
               <table>
                    <thead>
                        <tr>
                        <th>FairBay SKU Name</th>
                        <th>Shop SKU</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Order Number    </th>
                        <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HDMI Cable - Red & Black - 1.5M</td>
                            <td>100000002_100000001</td>
                            <td><img src={images['hdmi.png']} className='product-img' alt='product-img'/></td>
                            <td>HDMI Cable</td>
                            <td>20241019006</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>HDMI Cable - Red & Black - 1.5M</td>
                            <td>100000002_100000001</td>
                            <td><img src={images['samsung.png']} className='product-img' alt='product-img'/></td>
                            <td>HDMI Cable</td>
                            <td>20241019006</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>HDMI Cable - Red & Black - 1.5M</td>
                            <td>100000002_100000001</td>
                            <td><img src={images['mouse.png']} className='product-img' alt='product-img'/></td>
                            <td>HDMI Cable</td>
                            <td>20241019006</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>HDMI Cable - Red & Black - 1.5M</td>
                            <td>100000002_100000001</td>
                            <td><img src={images['hdmi.png']} className='product-img' alt='product-img'/></td>
                            <td>HDMI Cable</td>
                            <td>20241019006</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>HDMI Cable - Red & Black - 1.5M</td>
                            <td>100000002_100000001</td>
                            <td><img src={images['hdmi.png']} className='product-img' alt='product-img'/></td>
                            <td>HDMI Cable</td>
                            <td>20241019006</td>
                            <td>1</td>
                        </tr>
                    </tbody>
               </table>
            </div>
            <div className='modal_footer'>
                <div className='action_btn'>
                    <button type='button' className='orange_border_btn' onClick={closeModal}>
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default StocksChecklistModal;
