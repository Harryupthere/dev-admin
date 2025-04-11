import React from 'react'
import { CrossIcon } from '../../../icons/icons';
import { Modal } from 'react-bootstrap';
import { images } from '../../../utils/customFn';
const MultiInactiveModal = ({ openModal, closeModal }) => {

    return (
        <Modal show={openModal} className='fairbay_modals product-list-modals' centered>
            <div className='modal_header'>
                <div className='main_heading'><h2>Do you want to inactivate these products?</h2></div>
                <button type='button' onClick={closeModal} className='cancel-btn'><CrossIcon /></button>
            </div>
            <div className='modal_body'>
                <div className='one-product'>
                    <div className='product-details'>
                        <div className='item-img main-item-img'><img src={images['samsung.png']} alt='product' /></div>
                        <div className='item-details'>
                            <h3>Samsung Galaxy S24 Ultra</h3>
                            <span>ID: 100000003</span>
                        </div>
                    </div>
                    <div className='product-details'>
                        <div className='item-img main-item-img'><img src={images['hdmi.png']} alt='product' /></div>
                        <div className='item-details'>
                            <h3>HDMI</h3>
                            <span>ID: 100000003</span>
                        </div>
                    </div>
                    <div className='product-details'>
                        <div className='item-img main-item-img'><img src={images['samsung2.png']} alt='product' /></div>
                        <div className='item-details'>
                            <h3>Samsung Galaxy S24 Ultra</h3>
                            <span>ID: 100000003</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal_footer border-0'>
                <div className='action_btn'>
                    <button type='button' className='orange_border_btn' onClick={closeModal}>
                        Close
                    </button>
                    <button type='button' className='orange_button' onClick={closeModal}>
                    Inactivate
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default MultiInactiveModal;
