import React from 'react'
// import { EyeIcon } from '../../icons/icons';

const ResetPasswordForm = () => {
    return (
        <div className='reset_password'>
            <div className='form_card'>
                <div className='main_heading'>
                    <h2>Reset password</h2>
                </div>
                <div className='form_control'>
                    <label>Email Address</label>
                    <input placeholder='Enter your Email' />
                </div>
      {/* ============================= use these fields for creating new password ========*/}
                {/* <div className='form_control'>
                    <label>Enter new password</label>
                    <input placeholder='Password' />
                    <div className='eyeicon'>
                        <EyeIcon />
                    </div>
                </div>
                <div className='form_control'>
                    <label>Confirm Password</label>
                    <input placeholder='Password' />
                    <div className='eyeicon'>
                        <EyeIcon />
                    </div>
                </div> */}
                <div className='submit_button'>
                    <button type='submit' className='btn_primary'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordForm;
