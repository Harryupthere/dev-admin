import React, { useState } from 'react'
import { images } from '../../../utils/customFn';
import { CrossIcon } from '../../../icons/icons';
// import { IconDropDown } from '../../../icons/icons';
const BlockUser = ({ closeModal }) => {
    const [gender, setGender] = useState()

    const handleInputChange = (event) => {
        setGender(event.target.value);
    };
    return (
        <div className='blockmodal'>
            <div className='modal_header'>
                <div className='main_heading'><h2>Block User</h2></div>
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
                        <div className='input-main-data'>
                            <select
                                value={gender}
                                label="select"
                                onChange={handleInputChange}>
                                <option value="" disabled hidden>Select</option>
                                <option value="15 Days">15 Days</option>
                                <option value="1 Month">1 Month</option>
                                <option value="3 Months">3 Months</option>
                                <option value="6 Months">6 Months</option>
                                <option value="1 Year">1 Year</option>
                                <option value="Permanent">Permanent</option>
                            </select>
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

export default BlockUser
