import React from 'react'
import { images } from '../../../utils/customFn';
import { CrossIcon } from '../../../icons/icons';

const UnblockUser = ({ closeModal }) => {

    return (
        <div className='blockmodal unblock'>
            <div className='modal_header'>
                <div className='main_heading'><h2>Unblock User</h2></div>
                <button type='button' onClick={closeModal} className='cancel-btn'><CrossIcon/></button>
            </div>
            <div className='modal_body'>
                <div className='content'>
                    <div className='userinfo'>
                        <div className='userprofile'>
                            <div className='profile-img'>
                                <img src={images['profile2.png']} alt='profile' />
                            </div>
                            <div className='name'><h3>Kevin Joseph</h3></div>
                        </div>
                        <div className='userid'>
                            <span>ID: 1000002</span>
                        </div>
                    </div>
                    <div className='suspend-wrapped'>
                        <div className='susp-label'>
                            <span>Suspension Period</span>
                        </div>
                        <div className='susp-label'>
                            <span>15 Days</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal_footer'>
                <div className='action_btn'>
                    <button type='button' className='orange_border_btn' onClick={closeModal}>
                        Cancel
                    </button>
                    <button type='button' className='orange_button' onClick={closeModal} disabled>
                        Block
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UnblockUser;
