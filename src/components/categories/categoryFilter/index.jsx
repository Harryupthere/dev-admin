import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { IconDropDown } from '../../../icons/icons'
import { Link } from 'react-router-dom'

const options = [
    {title:'Category ID'}
]
const CategoryFilter = () => {
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
                                <TextField {...params} placeholder='Category Name' value="Category Name" sx={{ minWidth: '160px' }} />
                            )}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                   {option.title}
                                </li>
                            )}
                            popupIcon={<IconDropDown/>}
                        />
                        <input type='text' className='input' placeholder='Search for a Category' />
                    </div>
                </div>
                <button type='button' className='orange_border_btn'>Reset</button>
                <button type='button' className='orange_button'>Collapse</button>
            </div>
            <div className='right-side'>
            <button type='button' className='blue_border_btn'>Export</button>
            <Link to='/products/categories/add' className='blue_button'>Add New Category</Link> 
            </div>
        </div>
    )
}

export default CategoryFilter
