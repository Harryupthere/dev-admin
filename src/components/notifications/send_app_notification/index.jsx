import React, { useState } from 'react'
import {TranshIcon } from '../../../icons/icons';
import { images } from '../../../utils/customFn';
import UserProfilePicAndName from '../../layout/user_profile_and_name';

const SendAppNotificacationForm = () => {
    const [image, setImage] = useState(null);
    const [icons, setIcons] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleIconUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setIcons(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className='notification-wrapped notificationform'>
            <div className='two-section-form'>
                <div className='theme-card'>
                    <div className='input-main-data'>
                        <label>Notification Title<span className='asterisk'>*</span></label>
                        <input type="text" placeholder='Enter the notification title to be displayed' />
                    </div>
                    <div className='input-main-data'>
                        <label>Notification Title<span className='asterisk'>*</span></label>
                        <textarea rows={5} placeholder='Enter the notification description' />
                    </div>
                    <div className='input-main-data'>
                        <label>Link<span className='asterisk'>*</span></label>
                        <input type="text" placeholder='Enter the link to redirect to a campaign/ product' />
                    </div>
                </div>
                <div className='theme-card'>
                    <div className='heading'>
                        <h3>Notification Images</h3>
                    </div>
                    <div className='input-main-data upload-section'>
                        <label>Notification Icon</label>
                        <div className='upload-image-wrapped'>
                            <div onClick={() => document.getElementById('file-input-icon').click()}>
                                {icons ? (
                                    <>
                                        <img className="image-preview" src={icons} alt="Uploaded Preview" />
                                    </>
                                ) : (
                                    <div className='camera image-upload-box'><img src={images['add-gallery.svg']} alt='upload'/></div>
                                )}
                                <input
                                    type="file"
                                    id="file-input-icon"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleIconUpload}
                                />
                            </div>
                            {icons && <button type='button' className='camera-button bg-transparent'><TranshIcon/></button>}
                        </div>
                    </div>
                    <div className='input-main-data upload-section'>
                        <label>Notification Image</label>
                        <div className='upload-image-wrapped'>
                            <div onClick={() => document.getElementById('file-input').click()}>
                                {image ? (
                                    <>
                                        <img className="image-preview" src={image} alt="Uploaded Preview" />
                                    </>
                                ) : (
                                    <div className='camera image-upload-box'><img src={images['add-gallery.svg']} alt='upload'/></div>
                                )}
                                <input
                                    type="file"
                                    id="file-input"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleImageUpload}
                                />
                            </div>
                            {image && <button type='button' className='camera-button bg-transparent'><TranshIcon/></button>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='action-card'>
                <UserProfilePicAndName/>
                <div className='action-btn ms-auto'>
                    <button type='button' className='orange_border_btn'>Cancel</button>
                    <button type='button' className='orange_button'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default SendAppNotificacationForm
