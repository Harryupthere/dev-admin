import { Autocomplete, TextField } from '@mui/material';
import React from 'react'
import { IconDropDown } from '../../../icons/icons';
import './expenseform.scss'
import { DatePicker } from 'rsuite';
import UserProfilePicAndName from '../../layout/user_profile_and_name';
const options = [
    { title: 'Cost of Sales' }, { title: 'Total Refunded' }, { title: 'Loss & Damages - Returned Orders' }, { title: 'Loss & Damages - Exchanged Orders' }
]
const paymemtmethod = ['Bank', 'Pay Here'];
const CreateExpense = () => {

    return (
        <div className='create-expense-wrapped'>
            <div className='theme-card'>
                <form>
                    <div className='input-main-data select-mui-vs'>
                        <label>Expense Type <span className='asterisk'>*</span></label>
                        <div className='input_field'>
                            <Autocomplete
                                fullWidth
                                className='automcomplete_select_info'
                                autoComplete={false}
                                id='free-solo-demo'
                                options={options.map(option => option)}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder='Enter the expense type' />
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
                        <label>Expense Description <span className='asterisk'>*</span></label>
                        <input type='text' placeholder='Enter the expense description' />
                    </div>
                    <div className='input-main-data width_50'>
                        <label>Expense Date <span className='asterisk'>*</span></label>
                        <DatePicker format="MM/dd/yyyy" />

                    </div>
                    <div className='input-main-data select-mui-vs width_50'>
                        <label>Payment method<span className='asterisk'>*</span></label>
                        <div className='input_field'>
                            <Autocomplete
                                fullWidth
                                className='automcomplete_select_info'
                                autoComplete={false}
                                id='free-solo-demo'
                                options={paymemtmethod}
                                getOptionLabel={(option) => option}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder='Select' />
                                )}
                                renderOption={(props, option) => (
                                    <li {...props} style={{fontSize: '14px', fontFamily: 'Quicksand'}}>
                                        {option}
                                    </li>
                                )}
                                popupIcon={<IconDropDown />}

                            />
                        </div>
                    </div>
                    <div className='input-main-data width_50'>
                        <label>Amount<span className='asterisk'>*</span></label>
                        <input type='text' placeholder='Rs. Enter Amount' />
                    </div>
                </form>
            </div>
            <div className='theme-card theme-card-action'>
              <UserProfilePicAndName/>
                <div className='action-btn'>
                    <button type='button' className='orange_border_btn ms-auto'>Cancel</button>
                    <button type='button' className='orange_button '>Add User</button>
                </div>
            </div>
        </div>
    )
}

export default CreateExpense;
