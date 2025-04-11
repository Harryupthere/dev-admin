import React from 'react'
import { CrossIcon } from '../../../icons/icons';
import { Modal } from 'react-bootstrap';

const RejectClaimModal = ({ openModal, closeModal }) => {

    return (
        <Modal show={openModal} className='fairbay_modals' centered>
            <div className='modal_header'>
                <div className='main_heading'><h2>Confirm rejection of the claim</h2></div>
                <button type='button' onClick={closeModal} className='cancel-btn'><CrossIcon /></button>
            </div>
            <div className='modal_body py_10px'>
                <span style={{color:'var(--color_647C9B)'}}>Action is irreversible once rejected.</span>
            </div>
            <div className='modal_footer'>
                <div className='action_btn'>
                    <button type='button' className='orange_border_btn' onClick={closeModal}>
                        Cancel
                    </button>
                    <button type='button' className='orange_button' onClick={closeModal}>
                    Confirm
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default RejectClaimModal;
