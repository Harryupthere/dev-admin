import React from 'react'
import { Autocomplete, TextField } from "@mui/material";
import { IconDropDown } from '../../icons/icons';
import './adduserform.scss'
import CustomCheckList from '../layout/customchecklists';

const options = [
    { title: 'Admin - Full Access' },
    { title: 'Manager' },
    { title: 'Catalog Access - Manage Products, Add / Edit, Delete Products, Manage Brands, Bulk upload' },
    { title: 'Catalog Access - Manage Products, Add / Edit, Bulk upload' },
    { title: 'Order Access - Manage orders' }
];


const accordionData = [
    {
        header: 'Home',
        checkboxes: [
            { label: 'View Home', value: 'option1' },
        ],
    },
    {
        header: 'Customers',
        checkboxes: [
            { label: 'View Users', value: 'option1' },
            { label: 'Block Users', value: 'option2' },
            { label: 'Unblock Users', value: 'option3' },
        ],
    },
    {
        header: 'Products',
        checkboxes: [
            { label: 'Add New Product', value: 'option1' },
            { label: 'View Product List [Manage Products]', value: 'option2' },
            { label: 'Inactivate Product', value: 'option3' },
            { label: 'Activate Product', value: 'option1' },
            { label: 'Delete Product Product - All', value: 'option2' },
            { label: 'Delete Product Product - Created by the user', value: 'option3' },
        ],
    },
    {
        header: 'Bulk Add/ Edit',
        checkboxes: [
            { label: 'Download Template - Add Product', value: 'option1' },
            { label: 'Download Category List - Add Product', value: 'option2' },
            { label: 'Upload File - Add Product', value: 'option3' },
        ],
    },
];
const AddUserForm = () => {
    return (
        <div className='add-user-form'>
            <div className='flex-equal-box'>
                <div className='right-content'>
                    <div className='theme-card'>
                        <form>
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
                                        renderOption={(props, option) => (
                                            <li {...props} style={{fontSize: '14px', fontFamily: 'Quicksand'}}>
                                                {option.title}
                                            </li>
                                        )}
                                        popupIcon={<IconDropDown />}

                                    />
                                </div>
                            </div>
                            <div className='input-main-data'>
                                <label>Position Title <span className='asterisk'>*</span></label>
                                <input type='text' placeholder='Enter the position' />
                            </div>
                            <div className='input-main-data'>
                                <label>User Email <span className='asterisk'>*</span></label>
                                <input type='text' placeholder='Enter the email address' />
                            </div>
                        </form>
                    </div>
                    <div className='theme-card theme-card-action'>
                        <div className='action-btn'>
                            <button type='button' className='orange_border_btn ms-auto'>Cancel</button>
                            <button type='button' className='orange_button'>Send sign up link</button>
                        </div>
                    </div>
                </div>
                <div className='left-content'>
                    <div className='theme-card'>
                        <div className='input-main-data'>
                            <label>User Role Title </label>
                            <p className='selected-item'>Select to vieiw</p>
                        </div>  
                        <div className='input-main-data'>
                            <label>Permissions </label>
                        </div>
                        <CustomCheckList items={accordionData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUserForm;
