import React from 'react'
import './insightfilter.scss'
import CustomDatePicker from '../../layout/customedatepicker';
import { Autocomplete, TextField } from '@mui/material';
import { IconDropDown } from '../../../icons/icons';

const options = [
    { title: 'Shop SKU' }, { title: 'FairBay SKU Name' }
]
const InsightFilter = () => {

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
                                <TextField {...params} placeholder='Product ID' sx={{ minWidth: '105px' }} />
                            )}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                    {option.title}
                                </li>
                            )}
                            popupIcon={<IconDropDown />}

                        />
                        <input type='text' className='input' placeholder='Search for a product' />
                    </div>
                </div>
                <div className='reset'>
                    <button type='button' className='orange_border_btn'>Reset</button>
                </div>
            </div>
            <div className='right-side'>
                <CustomDatePicker />
            </div>
        </div>
    )
}

export default InsightFilter;
