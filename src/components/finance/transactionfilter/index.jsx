import React from 'react'
import { DateRangePicker } from 'rsuite';
import { Autocomplete, TextField } from '@mui/material';
import { IconDropDown } from '../../../icons/icons';

const options = [
    { title: 'item1' }
]
const Transactionsfilter = () => {

    return (
        <div className='filter-wrapper-transaction'>
            <div className='common-filter-design action-card'>
                <div className='left-side'>
                    <div className='input-with-select'>
                        <button type='button'>Date Range</button>
                        <DateRangePicker showOneCalendar className='right-date-picker' placement='autoVerticalEnd' />
                    </div>
                    <div className='select-with-search-custome'>
                        <div className='input-main-data select-mui-vs '>
                            <Autocomplete
                                autoComplete={false}
                                options={options.map(option => option)}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                renderInput={(params) => (
                                    <TextField {...params} placeholder='Order Number' className='order-number-input' />
                                )}
                                renderOption={(props, option) => (
                                    <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                        {option.title}
                                    </li>
                                )}
                                popupIcon={<IconDropDown/>}

                            />
                            <input type='text' className='input' placeholder='Search Product' />
                        </div>
                    </div>
                    <div className='select-with-search-custome'>
                        <div className='input-main-data select-mui-vs '>
                            <Autocomplete
                                autoComplete={false}
                                options={options.map(option => option)}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                renderInput={(params) => (
                                    <TextField {...params} placeholder='Type' sx={{ minWidth: '80px' }} />
                                )}
                                renderOption={(props, option) => (
                                    <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                        {option.title}
                                    </li>
                                )}
                                popupIcon={<IconDropDown />}

                            />
                            <input type='text' className='input' placeholder='Search Product' />
                        </div>
                    </div>
                    <div className='reset'>
                        <button type='button' className='orange_border_btn'>Reset</button>
                    </div>
                </div>
                <div className='right-side'>
                    <button type='button' className='blue_button'>Download Excel</button>
                </div>
            </div>
        </div>
    )
}

export default Transactionsfilter;
