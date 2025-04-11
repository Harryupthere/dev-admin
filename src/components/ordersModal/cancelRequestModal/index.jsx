import React from 'react'
import { CrossIcon} from '../../../icons/icons';
import { Modal } from 'react-bootstrap';

const CancelRequestModal = ({ openModal, closeModal }) => {
    return (
        <Modal show={openModal} className='fairbay_modals status-modal' centered>
            <div className='modal_header mb-2'>
                <div className='main_heading'><h2>Do you want to cancel the return request? </h2></div>
                <button type='button' onClick={closeModal} className='cancel-btn'><CrossIcon /></button>
            </div>
            <div className='modal_body'>
                    <div className='input-main-data'>
                    <textarea rows={3} placeholder='Enter the reason for the cancellation'/>
                </div>
            </div>
            <div className='modal_footer border-0'>
                <div className='action_btn'>
                    <button type='button' className='orange_border_btn' onClick={closeModal}>Cancel</button>
                    <button type='button' className='orange_button' onClick={closeModal}>Ok </button>
                </div>
            </div>
        </Modal>
    )
}

export default CancelRequestModal;
