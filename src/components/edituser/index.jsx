import React, { useState } from 'react'
import { Autocomplete, TextField } from "@mui/material";
import { CameraIcon, EyeIcon, EyeoffIcon, IconDropDown } from '../../icons/icons';
import { images } from '../../utils/customFn';

const options = [
    { title: 'Admin - Full Access' },
    { title: 'Manager' },
    { title: 'Catalog Access - Manage Products, Add / Edit, Delete Products, Manage Brands, Bulk upload' },
    { title: 'Catalog Access - Manage Products, Add / Edit, Bulk upload' },
    { title: 'Order Access - Manage orders' }
];

const EditUserForm = () => {
    const [image, setImage] = useState(images['avatar.png']);

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

    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    return (
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
                                    <input type='text' placeholder='Enter the first name' value="Afrar"/>
                                </div>
                                <div className='input-main-data'>
                                    <label>Last Name<span className='asterisk'>*</span></label>
                                    <input type='text' placeholder='Enter the last name' value="Mohammed" />
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
                            <div className='input-main-data'>
                                <label>Position Title <span className='asterisk'>*</span></label>
                                <input type='text' placeholder='Enter the position' />
                            </div>
                            <div className='input-main-data select-mui-vs'>
                                <label>User Role <span className='asterisk'>*</span></label>
                                <div className='input_field'>
                                    <Autocomplete
                                        fullWidth
                                        className='automcomplete_select_info'
                                        autoComplete={false}
                                        id='free-solo-demo'
                                        options={options.map(option => option)}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => (
                                            <TextField {...params} placeholder='Select the user role access' />
                                        )}
                                        popupIcon={<IconDropDown />}
                                        renderOption={(props, option) => (
                                            <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                                {option.title}
                                            </li>
                                        )}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='theme-card theme-card-action'>
                        <div className='action-btn'>
                        <button type='button' className='blue_button'>Send Password Reset link</button>
                            <button type='button' className='orange_border_btn ms-auto'>Cancel</button>
                            <button type='button' className='orange_button '>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUserForm;
