import React from "react"
import Modal from 'react-bootstrap/Modal';
import { CrossIcon } from "../../../icons/icons";

function RevokeReviewModal({ openModal, closeModal }) {

    return (
        <>
            <Modal show={openModal} onHide={closeModal} centered className='fairbay_modals'>
                <div className='modal_header'>
                    <div className='main_heading margin_bottom_10'>
                        <h2>Do you want to revoke review?</h2>
                    </div>
                    <button type='button' onClick={closeModal} className='cancel-btn'><CrossIcon /></button>
                </div>
                <div className='modal_body'>
                   <p className="margin_bottom_10" style={{color:'var(--color_647C9B)'}}>
                    Review is approved and published . Currently visible for everyone.</p>
                </div>
                <div className='modal_footer'>
                    <div className='action_btn'>
                        <button type="button" className="orange_border_btn" onClick={closeModal}>Cancel</button>
                        <button type="button" className="orange_button">Confirm</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default RevokeReviewModal;