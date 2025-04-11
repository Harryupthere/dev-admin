import React from "react"
import Modal from 'react-bootstrap/Modal';
import { CrossIcon } from "../../../icons/icons";
import useChangePhoneUtils from "./changephonUtils";

function ChangePhoneModal({ openChangePhoneModal, closeChangePhoneModla }) {
    const { handleShowError, showerror } = useChangePhoneUtils()
    return (
        <>
            <Modal show={openChangePhoneModal} onHide={closeChangePhoneModla} className='fairbay_modals changesetting'>
                <div className='modal_header'>
                    <div className='main_heading'><h2>Change phone number</h2></div>
                    <button type='button' onClick={closeChangePhoneModla} className='cancel-btn'><CrossIcon /></button>
                </div>
                <div className='modal_body'>
                    <div className='content'>
                        <div className="steps">
                            <div className="item">
                                <div className="data-label">
                                    <div className="check_box">1</div>
                                    <div className="label">Enter verification sent to <b>+94 77 611 3438</b></div>
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
                                    <div className="label">Enter new phone number</div>
                                </div>
                                <div className="action-btn">
                                    <input type="input" className="blue-order-input" placeholder="New phone number" />
                                    <button type="button" className="orange_button">Ok</button>
                                </div>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="item">
                                <div className="data-label">
                                    <div className="check_box">3</div>
                                    <div className="label">Enter OTP Sent to new phone number +94 70 343 5420</div>
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
                        <button type='button' className='orange_border_btn' onClick={closeChangePhoneModla}>
                            Close
                        </button>
                        <button type='button' className='orange_button' onClick={closeChangePhoneModla}>
                            save
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ChangePhoneModal;