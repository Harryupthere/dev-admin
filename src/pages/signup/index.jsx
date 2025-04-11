import React, { useState } from 'react'
import './signup.scss'
import { images } from '../../utils/customFn'
import { CameraIcon, EyeIcon, EyeoffIcon } from '../../icons/icons';
const SignUp = () => {
  const [image, setImage] = useState(null);

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
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)

  const toggleShowPass = () => {
    setShowPass(!showPass)
  }
  const toggleConfirmPass = () => {
    setShowConfirmPass(!showConfirmPass)
  }
  return (
    <div className='signup-wrappped'>
      <div className='two-flex-box'>
        <div className='signup-banner'>
          <img src={images['signup.png']} alt='banner' />
        </div>
        <div className='signup-form'>
          <form>
            <div className='upload-image-wrapped'>
              <div className={`${image ? 'remove-boder' : ''}  image-upload-box`}
                onClick={() => document.getElementById('file-input').click()}>
                {image ? (
                  <>
                    <img className="image-preview" src={image} alt="Uploaded Preview" />
                    {/* <button type='button' className='camera-button'><CameraIcon /></button> */}
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
                <input type='text' placeholder='Enter the first name' />
              </div>
              <div className='input-main-data'>
                <label>Last Name<span className='asterisk'>*</span></label>
                <input type='text' placeholder='Enter the last name' />
              </div>
            </div>
            <div className='two-grid'>
              <div className='input-main-data'>
                <label>Password<span className='asterisk'>*</span></label>
                <div className={!showPass ? 'password-style' : ''}>
                  <input type={showPass ? 'text' : 'password'} placeholder='Enter password' />
                </div>
                <button type='button' className='eyeicon' onClick={toggleShowPass}>
                  {showPass ? <EyeoffIcon /> : <EyeIcon />}
                </button>
              </div>
              <div className='input-main-data'>
                <label>Confirm Password<span className='asterisk'>*</span></label>
                <div className={!showConfirmPass ? 'password-style' : ''}>
                  <input type={showConfirmPass ? 'text' : 'password'} placeholder='Enter password' />
                </div>
                <button type='button' className='eyeicon' onClick={toggleConfirmPass}>
                  {showConfirmPass ? <EyeoffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>
            <div className='two-grid'>
              <div className='input-main-data'>
                <label>Email<span className='asterisk'>*</span></label>
                <input type='text' placeholder='sample@fairbay.lk   ' />
              </div>
              <div className='input-main-data'>
                <label>Phone Number<span className='asterisk'>*</span></label>
                <input type='text' placeholder='Add phone number' />
              </div>
            </div>
            <div className='two-grid'>
              <button type='submit' className='blue_button'>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
