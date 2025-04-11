import React from 'react'
import { Link } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';
import { IconDropDown } from '../../../icons/icons';

const options = [
    { title: 'item1' }, { title: 'item2' }
]
const UserFilter = () => {

    return (
        <div className='common-filter-design action-card'>
                <div className='left-side'>
                    <div className='select-with-search-custome'>
                        <div className='input-main-data select-mui-vs '>
                            <Autocomplete
                                autoComplete={false}
                                options={options.map(option => option)}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                renderInput={(params) => (
                                    <TextField {...params} placeholder='Name' sx={{ minWidth: '90px' }} />
                                )}
                                renderOption={(props, option) => (
                                    <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                        {option.title}
                                    </li>
                                )}
                                popupIcon={<IconDropDown />}

                            />
                            <input type='text' className='input' placeholder='Search for a user' />
                        </div>
                    </div>
                        <button type='button' className='orange_border_btn'>Reset</button>
                </div>
                <div className='right-side'>
                    <Link className='orange_button' to='/users/create-user'>Create New user</Link>
                    <Link className='blue_button' to='/users/add-users'>Add New User</Link>
                </div>
        </div>
    )
}

export default UserFilter;
