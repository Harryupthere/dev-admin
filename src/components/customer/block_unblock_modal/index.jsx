import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './blockmodal.scss'
import BlockUser from './block';
import UnblockUser from './unblock';
function BlockUnblockModal({ openModal, closeModal, status }) {

    return (
        <>
            <Modal show={openModal} centered className='fairbay_modals'>
                <div className='block_unblock'>
                    {status === 'active' ?
                        <BlockUser closeModal={closeModal} />
                        :
                        <UnblockUser closeModal={closeModal} />
                    }
                </div>
            </Modal>
        </>
    );
}

export default BlockUnblockModal;