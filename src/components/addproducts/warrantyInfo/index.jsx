import React from 'react'
import { IconDropDown } from '../../../icons/icons'
import { Autocomplete, TextField } from '@mui/material'

const warranty = [
    { title: '7 Days checking warranty' },
    { title: '7 Days checking warranty' },
    { title: '7 Days checking warranty' }

]
const WarrantyInfo = () => {
    return (
        <div className='warranty-info theme-card'>
            <div className='main_heading'>
                <h2>Warranty Information</h2>
            </div>
            <div className='input-main-data select-mui-vs'>
                <label>Warranty Information</label>
                <Autocomplete
                    autoComplete={false}
                    options={warranty.map(option => option)}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (<TextField {...params} placeholder='Select' />)}
                    renderOption={(props, option) => (
                        <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}> {option.title}</li>
                    )}
                    popupIcon={<IconDropDown />}
                />
            </div>
            <div className='input-main-data'>
                <label>Warranty Information</label>
                <div className='bordered_text_box'>
                    Change of mind is not acceptable for returns.Warranty not available for Sales/ discount price.
                </div>
            </div>
        </div>
    )
}

export default WarrantyInfo
