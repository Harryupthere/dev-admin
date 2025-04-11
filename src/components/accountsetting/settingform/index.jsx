import React from 'react'
import { CameraIcon } from '../../../icons/icons';
import useAccountSettingUtils from '../accountsettingUtils';
import './settingform.scss'
import ChangeEmailModal from '../changeemailmodal';
import ChangePhoneModal from '../changephone_modal';

const AccountSettingForm = () => {

    const { handleImageUpload,
        image,
        showEdit,
        handleOpenEdit,
        handleHideEdit,
        handleOpenEmailModal,
        openEmailModal,
        handleCloseEmailModal,
        handleOpenChangePhoneModal,
        handleCloseChangePhoneModal,
        openChangePhone
    } = useAccountSettingUtils()
    return (
        <div className='account-setting-form'>
            <div className='create-new-user add-user-form'>
                <div className='flex-equal-box'>
                    <div className='right-content'>
                        <div className='theme-card'>
                            <form>
                                <div className='upload-image-wrapped'>
                                    <div className={`${image ? 'remove-boder' : ''}  image-upload-box`}
                                        onClick={() => document.getElementById('file-input').click()}>
                                        {image ? (
                                            <>
                                                <img className="image-preview" src={image} alt="Uploaded Preview" />
                                                <button type='button' className='camera-button'><CameraIcon /></button>
                                            </>
                                        ) : (
                                            <div className='camera'><CameraIcon /></div>
                                        )}
                                        <input
                                            type="file"
                                            id="file-input"
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            onChange={handleImageUpload}
                                        />
                                    </div>
                                    <p className='profile-label'>Profile Picture</p>
                                </div>
                                <div className='two-grid'>
                                    <div className='input-main-data'>
                                        <label>First Name<span className='asterisk'>*</span></label>
                                        <input type='text' placeholder='Enter the first name' value="Afrar" />
                                    </div>
                                    <div className='input-main-data'>
                                        <label>Last Name<span className='asterisk'>*</span></label>
                                        <input type='text' placeholder='Enter the last name' value="Mohammed" />
                                    </div>
                                </div>
                                <div className='two-grid modifying'>
                                    <div className='input-main-data'>
                                        <label>Password<span className='asterisk'>*</span></label>
                                        <input type='password' placeholder='Password' value="78905263" />
                                    </div>
                                    {showEdit &&
                                        <div className='modify'>
                                            <button type='button' className='blue_button' >Modify</button>
                                        </div>
                                    }
                                </div>
                                <div className='two-grid modifying'>
                                    <div className='input-main-data'>
                                        <label>Email<span className='asterisk'>*</span></label>
                                        <input type='text' placeholder='sample@fairbay.lk   ' />
                                    </div>
                                    {showEdit &&
                                        <div className='modify'>
                                            <button type='button' className='blue_button' onClick={handleOpenEmailModal}>Change</button>
                                        </div>
                                    }
                                </div>
                                <div className='two-grid modifying'>
                                    <div className='input-main-data'>
                                        <label>Phone Number<span className='asterisk'>*</span></label>
                                        <input type='text' placeholder='Add phone number' />
                                    </div>
                                    {showEdit &&
                                        <div className='modify'>
                                            <button type='button' className='blue_button' onClick={handleOpenChangePhoneModal}>Change</button>
                                        </div>
                                    }
                                </div>
                            </form>
                        </div>
                        <div className='theme-card theme-card-action'>
                            <div className='action-btn'>
                                {showEdit &&
                                    <button type='button' className='orange_border_btn' onClick={handleHideEdit}>Cancel</button>
                                }
                                <button type='button' className='orange_button' onClick={handleOpenEdit}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ChangeEmailModal openEmailModal={openEmailModal} closeEmailModal={handleCloseEmailModal}/>
            <ChangePhoneModal openChangePhoneModal={openChangePhone} closeChangePhoneModla={handleCloseChangePhoneModal}/>
        </div>
    )
}

export default AccountSettingForm;
