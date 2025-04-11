import React from 'react'
import { IconDropDown } from '../../../icons/icons';
import UserProfilePicAndName from '../../layout/user_profile_and_name';
import { Autocomplete, TextField } from '@mui/material';
import { DateRangePicker } from 'rsuite';
const CreateFairdealCampaigns = () => {

    return (
        <div className='create-form-wrapped one-card-box'>
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
                    <div className='input-main-data'>
                        <label>Campaign Date <span className='asterisk'>*</span></label>
                        <div className='input-with-select'>
                            <DateRangePicker showOneCalendar className='right-date-picker' placement='autoVerticalEnd' />
                        </div>
                        <span className='insturction'>Automatically start time 12:00 and ending time 23:59 applies</span>
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

export default CreateFairdealCampaigns;
