import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal';
import { CrossIcon } from "../../../icons/icons";
import './update_exel_modal.scss'
import { images } from '../../../utils/customFn'
function UpdateByExelModal({ openUpdateModal, closeUpdateModal }) {
    const [filename, setFilename] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFilename(file)
        }
    };
    return (
        <>
            <Modal show={openUpdateModal} onHide={closeUpdateModal} className='fairbay_modals changesetting update_exel'>
                <div className='modal_header'>
                    <div className='main_heading'><h2>Update by excel</h2></div>
                    <button type='button' onClick={closeUpdateModal} className='cancel-btn'><CrossIcon /></button>
                </div>
                <div className='modal_body'>
                    <div className='content'>
                        <div className="steps">
                            <div className="item">
                                <div className="data-label">
                                    <div className="check_box">1</div>
                                    <div className="label">Download File</div>
                                </div>
                                <div className="action-btn">
                                    <button type="button" className="blue_button" >Download Excel</button>
                                </div>
                            </div>
                        </div>
                        <div className="steps">
                            <div className="item">
                                <div className="data-label">
                                    <div className="check_box">2</div>
                                    <div className="label">Upload edited excel</div>
                                </div>
                                <div className='upload-image-wrapped'>
                                    <div className="upload-box"
                                        onClick={() => document.getElementById('file-input').click()}>
                                        <img src={images['upload.svg']} alt="upload"  className="upload-icon"/>
                                        <h3>Click here or drag to Upload file</h3>
                                        {filename &&
                                            <p>{filename.name}</p>
                                        }
                                        <input
                                            type="file"
                                            id="file-input"
                                            style={{ display: 'none' }}
                                            onChange={handleImageUpload}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='modal_footer'>
                    <div className='action_btn'>
                        <button type='button' className='orange_border_btn' onClick={closeUpdateModal}>
                            Close
                        </button>
                        <button type='button' className='orange_button' onClick={closeUpdateModal} disabled>
                            Confirm
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default UpdateByExelModal;