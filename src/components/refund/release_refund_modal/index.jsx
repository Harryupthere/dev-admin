import React from 'react'
import { CrossIcon } from '../../../icons/icons';
import { Modal } from 'react-bootstrap';
import './refund_modal.scss'
const ReleaseRefundModal = ({ openModal, closeModal }) => {

    return (
        <Modal show={openModal} className='fairbay_modals refund_modal' centered>
            <div className='modal_header'>
                <div className='main_heading'><h2>Are you sure want to release refund?</h2></div>
                <button type='button' onClick={closeModal} className='cancel-btn'><CrossIcon /></button>
            </div>
            <div className='modal_body py_10px'>
             <table style={{width:'100%'}}>
                <tr>
                    <th>Order Number</th>
                    <td>20241019004</td>
                </tr>
                <tr>
                    <th>Amount</th>
                    <td>Rs. 1,200</td>
                </tr>
                <tr>
                    <th>Order Status</th>
                    <td>Cancelled</td>
                </tr>
             </table>
            </div>
            <div className='modal_footer border-0'>
                <div className='action_btn'>
                    <button type='button' className='orange_border_btn' onClick={closeModal}>
                        Cancel
                    </button>
                    <button type='button' className='orange_button' onClick={closeModal}>
                    Release
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default ReleaseRefundModal;
