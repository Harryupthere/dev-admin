import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { IconDropDown } from '../../../icons/icons'
import { Link } from 'react-router-dom'

const options = [
    {title:'Brand ID'}
]
const BrandFilter = () => {
    return (
        <div className='category-filter action-card common-filter-design'>
            <div className='left-side'>
                <div className='select-with-search-custome'>
                    <div className='input-main-data select-mui-vs '>
                        <Autocomplete
                            autoComplete={false}
                            options={options.map(option => option)}
                            getOptionLabel={(option) => option.title}
                            disableClearable
                            renderInput={(params) => (
                                <TextField {...params} placeholder='Brand Name' sx={{ minWidth: '160px' }} />
                            )}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                   {option.title}
                                </li>
                            )}
                            popupIcon={<IconDropDown/>}
                        />
                        <input type='text' className='input' placeholder='Search for a Brand'/>
                    </div>
                </div>
                <button type='button' className='orange_border_btn'>Reset</button>
            </div>
            <div className='right-side'>
            <Link to='/products/brands/add' className='blue_button'>Add New Brand</Link> 
            </div>
        </div>
    )
}

export default BrandFilter
