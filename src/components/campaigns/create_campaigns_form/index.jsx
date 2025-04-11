import React, { useState } from 'react'
import { IconDropDown, TranshIcon } from '../../../icons/icons';
import { images } from '../../../utils/customFn';
import UserProfilePicAndName from '../../layout/user_profile_and_name';
import './create_form.scss'
import { Autocomplete, TextField } from '@mui/material';
import { DateRangePicker } from 'rsuite';
const CreateCampaignsForm = () => {
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
        <div className='create-form-wrapped'>
            <div className='two-section-form'>
                <div className='theme-card'>
                    <div className='input-main-data'>
                        <label>Campaign Name<span className='asterisk'>*</span></label>
                        <input type="text" placeholder='Enter the notification title to be displayed' />
                    </div>
                    <div className='input-main-data select-mui-vs'>
                        <label>Campaign Type <span className='asterisk'>*</span></label>
                        <div className='input_field'>
                            <Autocomplete
                                fullWidth
                                className='automcomplete_select_info'
                                autoComplete={false}
                                id='free-solo-demo'
                                options={[{ title: "Sales Discount" }, { title: "Free Shipping" }]}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder='Select' />
                                )}
                                renderOption={(props, option) => (
                                    <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                        {option.title}
                                    </li>
                                )}
                                popupIcon={<IconDropDown />} />
                        </div>
                    </div>
                    <div className='input-main-data select-mui-vs'>
                        <label>Campaign Channel <span className='asterisk'>*</span></label>
                        <div className='input_field'>
                            <Autocomplete
                                fullWidth
                                className='automcomplete_select_info'
                                autoComplete={false}
                                id='free-solo-demo'
                                options={[{ title: 'Free Shipping' }]}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder='Select' />
                                )}
                                renderOption={(props, option) => (
                                    <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                        {option.title}
                                    </li>
                                )}
                                popupIcon={<IconDropDown />} />
                        </div>
                    </div>
                    <div className='input-main-data'>
                        <label>Campaign Period<span className='asterisk'>*</span></label>
                        <div className='checkcontainer'>
                            <label>Specific Period</label>
                            <input type='checkbox' />
                        </div>
                        <div className='checkcontainer'>
                            <label>Long Term</label>
                            <input type='checkbox' />
                        </div>
                    </div>
                    <div className='input-main-data'>
                        <label>Campaign Channel <span className='asterisk'>*</span></label>
                        <div className='input-with-select'>
                            <DateRangePicker showOneCalendar className='right-date-picker' placement='autoVerticalEnd' />
                        </div>
                        <span className='insturction'>Automatically start time 12:00 and ending time 23:59 applies</span>
                    </div>
                    <div className='input-main-data'>
                        <label>Apply to<span className='asterisk'>*</span></label>
                        <div className='checkcontainer'>
                            <label>Profit More than</label>
                            <input type='checkbox' />
                            <input type='text' value="Rs.2,000" placeholder='Rs' className='textbox'/>
                        </div>
                        <div className='checkcontainer'>
                            <label>Entire Shop</label>
                            <input type='checkbox' />
                        </div>
                    </div>
                    <div className='input-main-data'>
                        <label>Payment method<span className='asterisk'>*</span></label>
                        <div className='checkcontainer'>
                            <label>COD</label>
                            <input type='checkbox' />
                        </div>
                        <div className='checkcontainer'>
                            <label>PayHere</label>
                            <input type='checkbox' />
                        </div>
                    </div>
                </div>



                <div className='theme-card'>
                    <div className='heading'>
                        <h3>Mobile Banner Images</h3>
                    </div>
                    <div className='input-main-data upload-section'>
                        <label>Slider Banner - 390 x 275 pixels</label>
                        <div className='upload-image-wrapped'>
                            <div onClick={() => document.getElementById('file-input-icon').click()}>
                                {icons ? (
                                    <>
                                        <img className="image-preview" src={icons} alt="Uploaded Preview" />
                                    </>
                                ) : (
                                    <div className='camera image-upload-box'><img src={images['add-gallery.svg']} alt='upload' /></div>
                                )}
                                <input
                                    type="file"
                                    id="file-input-icon"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleIconUpload}
                                />
                            </div>
                            {icons && <button type='button' className='camera-button'><TranshIcon /></button>}
                        </div>
                    </div>
                    <div className='input-main-data upload-section'>
                        <label>Main Campaign page banner - 390 x 270 pixels</label>
                        <div className='upload-image-wrapped'>
                            <div onClick={() => document.getElementById('file-input').click()}>
                                {image ? (
                                    <>
                                        <img className="image-preview" src={image} alt="Uploaded Preview" />
                                    </>
                                ) : (
                                    <div className='camera image-upload-box'><img src={images['add-gallery.svg']} alt='upload' /></div>
                                )}
                                <input
                                    type="file"
                                    id="file-input"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleImageUpload}
                                />
                            </div>
                            {image && <button type='button' className='camera-button'><TranshIcon /></button>}
                        </div>
                    </div>
                    <div className='input-main-data upload-section'>
                        <label>Main Campaign page banner - 390 x 270 pixels</label>
                        <div className='upload-image-wrapped'>
                            <div onClick={() => document.getElementById('file-input').click()}>
                                {image ? (
                                    <>
                                        <img className="image-preview" src={image} alt="Uploaded Preview" />
                                    </>
                                ) : (
                                    <div className='camera image-upload-box'><img src={images['add-gallery.svg']} alt='upload' /></div>
                                )}
                                <input
                                    type="file"
                                    id="file-input"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleImageUpload}
                                />
                            </div>
                            {image && <button type='button' className='camera-button'><TranshIcon /></button>}
                        </div>
                    </div>
                    <div className='input-main-data upload-section'>
                        <label>Main Campaign page banner - 390 x 270 pixels</label>
                        <div className='upload-image-wrapped'>
                            <div onClick={() => document.getElementById('file-input').click()}>
                                {image ? (
                                    <>
                                        <img className="image-preview" src={image} alt="Uploaded Preview" />
                                    </>
                                ) : (
                                    <div className='camera image-upload-box'><img src={images['add-gallery.svg']} alt='upload' /></div>
                                )}
                                <input
                                    type="file"
                                    id="file-input"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleImageUpload}
                                />
                            </div>
                            {image && <button type='button' className='camera-button'><TranshIcon /></button>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='action-card'>
                <UserProfilePicAndName />
                <div className='action-btn ms-auto'>
                    <button type='button' className='orange_border_btn'>Cancel</button>
                    <button type='button' className='orange_button'>Create</button>
                </div>
            </div>
        </div>
    )
}

export default CreateCampaignsForm;
