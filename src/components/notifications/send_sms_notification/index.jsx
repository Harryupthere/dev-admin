import React from 'react'
import UserProfilePicAndName from '../../layout/user_profile_and_name';

const SendSmsNotificationForm = () => {

    return (
        <div className='notification-wrapped notificationform'>
            <div className='two-section-form'>
                <div className='left-side'>
                    <div className='theme-card'>
                        <div className='input-main-data'>
                            <label>Deliver notification to<span className='asterisk'>*</span></label>
                            <div className='checkcontainer'>
                                <input type='checkbox'/><label>Active Users</label>
                            </div>
                            <div className='checkcontainer'>
                                <input type='checkbox'/><label>Suspended Users</label>
                            </div>
                            <div className='checkcontainer'>
                                <input type='checkbox'/><label>All Users</label>
                            </div>
                        </div>
                        <div className='input-main-data'>
                            <label>Notification Title<span className='asterisk'>*</span></label>
                            <input type="text" placeholder='Black Friday Promo' />
                        </div>
                        <div className='input-main-data'>
                            <label>Notification Message<span className='asterisk'>*</span></label>
                            <textarea rows={5} placeholder='📣  Up to 90% off on selected products! ⏱ Grab the deal now and enjoy! 💝' />
                        </div>
                    </div>
                    <div className='action-card'>
                        <UserProfilePicAndName />
                        <div className='action-btn ms-auto'>
                            <button type='button' className='orange_border_btn'>Cancel</button>
                            <button type='button' className='orange_button'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendSmsNotificationForm
