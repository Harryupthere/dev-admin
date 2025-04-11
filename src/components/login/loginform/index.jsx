import React from 'react'
import { Link } from 'react-router-dom'
import { EyeIcon } from '../../../icons/icons'
import useLoginUtils from '../loginUtils'
import UnableLoginModal from '../unable_login_modal'

const LoginForm = () => {
    const {openUnableLoginModal,
        handleCloseUnableLoginModal,
        handleOpenUnableLoginModal} = useLoginUtils()

    return (
        <div className='login'>
            <div className='form_card'>
                <div className='main_heading'>
                    <h2>Sign In</h2>
                </div>
                <div className='form_control'>
                    <label>Email Address</label>
                    <input placeholder='Enter your Email' />
                </div>
                <div className='form_control'>
                    <label>Password</label>
                    <input placeholder='Password' />
                    <div className='eyeicon'>
                        <EyeIcon />
                    </div>
                </div>
                <div className='links'>
                    <Link to="/reset">Forgot password</Link>
                </div>
                <div className='submit_button'>
                    <button type='submit' className='btn_primary' onClick={handleOpenUnableLoginModal}>
                        Sign in
                    </button>
                </div>
                <div className='instructions'>
                    <span>Don’t have an account? Contact admin for account creation</span>
                </div>
            </div>
            <UnableLoginModal openModal={openUnableLoginModal} closeModal={handleCloseUnableLoginModal}/>
        </div>
    )
}

export default LoginForm
