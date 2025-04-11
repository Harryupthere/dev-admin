import React from "react"
import Modal from 'react-bootstrap/Modal';
import './changeemailmodal.scss'
import { CrossIcon } from "../../../icons/icons";
import useChangeEmailUtils from "./changeemailUtils";

function ChangeEmailModal({ openEmailModal, closeEmailModal }) {
    const { handleShowError, showerror } = useChangeEmailUtils()
    return (
        <>
            <Modal show={openEmailModal} onHide={closeEmailModal} className='fairbay_modals changesetting'>
                <div className='modal_header'>
                    <div className='main_heading'><h2>Change email address</h2></div>
                    <button type='button' onClick={closeEmailModal} className='cancel-btn'><CrossIcon /></button>
                </div>
                <div className='modal_body'>
                    <div className='content'>
                        <div className="steps">
                            <div className="item">
                                <div className="data-label">
                                    <div className="check_box">1</div>
                                    <div className="label">Enter verification sent to <b>afrar@gmail.com</b></div>
                                </div>
                                <div className="action-btn">
                                    <input type="input" className="blue-order-input otpbox" placeholder="Enter OTP" />
                                    <button type="button" className="orange_button" onClick={handleShowError}>Verify</button>
                                </div>
                                {showerror &&
                                    <div className="error">
                                        <span>Invalid OTP, Enter the correct OTP</span>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="steps">
                            <div className="item">
                                <div className="data-label">
                                    <div className="check_box">2</div>
                                    <div className="label">Enter new email address</div>
                                </div>
                                <div className="action-btn">
                                    <input type="input" className="blue-order-input" placeholder="New email address" />
                                    <button type="button" className="orange_button">Ok</button>
                                </div>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="item">
                                <div className="data-label">
                                    <div className="check_box">3</div>
                                    <div className="label">Verify new email address</div>
                                </div>
                                <div className="action-btn">
                                    <input type="input" className="blue-order-input otpbox" placeholder="Enter OTP" />
                                    <button type="button" className="orange_button">Verify</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='modal_footer'>
                    <div className='action_btn'>
                        <button type='button' className='orange_border_btn' onClick={closeEmailModal}>
                            Close
                        </button>
                        <button type='button' className='orange_button' onClick={closeEmailModal}>
                            save
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ChangeEmailModal;