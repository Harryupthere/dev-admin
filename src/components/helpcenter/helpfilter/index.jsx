import { Autocomplete, TextField } from '@mui/material';
import React from 'react'
import { IconDropDown } from '../../../icons/icons';
import './helpfilter.scss'
const HelpFilter = () => {

    const options = [
        { title: 'Admin - Full Access' },
        { title: 'Manager' },
        { title: 'Catalog Access - Manage Products, Add / Edit, Delete Products, Manage Brands, Bulk upload' },
        { title: 'Catalog Access - Manage Products, Add / Edit, Bulk upload' },
        { title: 'Order Access - Manage orders' }
    ];
    const sortby = [
        {title:'Newest to Oldest Cases'}
    ]
    return (
        <div className='helpfilter common-filter-design action-card'>
            <div className='left-side'>
                <div className='select-and-search'>
                    <div className='input-main-data select-mui-vs'>
                        <Autocomplete
                            sx={{ minWidth: '400px', display: 'flex' }}
                            className='automcomplete_select_info'
                            autoComplete={false}
                            id='free-solo-demo'
                            options={options.map(option => option)}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                                <>
                                    <button type='button' className='main-text'>Issue Type</button>
                                    <TextField {...params} placeholder='Select the user role access' />
                                </>
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
                <div className='reset'>
                    <button type='button' className='orange_border_btn'>Reset</button>
                </div>
            </div>
            <div className='right-side'>
            <div className='select-and-search'>
                    <div className='input-main-data select-mui-vs'>
                        <Autocomplete
                            sx={{minWidth:'300px', display: 'flex' }}
                            className='automcomplete_select_info'
                            autoComplete={false}
                            id='free-solo-demo'
                            options={sortby.map(option => option)}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                                <>
                                    <button type='button' className='main-text'>Sort By</button>
                                    <TextField {...params} placeholder='Newest to Oldest Cases' />
                                </>
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
            </div>
        </div>
    )
}

export default HelpFilter;
