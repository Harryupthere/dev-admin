import React from "react"
import Modal from 'react-bootstrap/Modal';
import { Icons } from '../../../utils/customFn';
import './unableloginmodal.scss'

function UnableLoginModal({ openModal, closeModal }) {

  return (
    <>
      <Modal show={openModal} onHide={closeModal} centered className='fairbay_modals unablelogin'>
        <div className='modal_header'>
          <div className='modal_heaing'>
            <div className='warning_icon'>
              <img src={Icons['warning.svg']} alt='warning' />
            </div>
            <div className='main_heading'>
              <h2>Unable to Login!</h2>
            </div>
          </div>
        </div>
        <div className='modal_body'>
          <div className='content'>
            <p>Account deactivated or suspended! Please contact company to retrieve your account!</p>
          </div>
        </div>
        <div className='modal_footer'>
          <div className='action_btn'>
            <button type='button' className='orange_button' onClick={closeModal}>
              ok
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default UnableLoginModal;