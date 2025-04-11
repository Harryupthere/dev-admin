import React, { useState } from 'react'
import { IconDropDown } from '../../../icons/icons';
import { Autocomplete, TextField } from '@mui/material';
import Cascader from '../custom_cascader';


const categories = [
    { title: 'item1' }, { title: 'item2' }
]
const AddName = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showCascader, setShowCascader] = useState(false);

    const handleCategorySelect = (categoryName) => {
        setSelectedCategory(categoryName);
    };
    const handleCloseCascader = () => {
        setShowCascader(false)
    }
    return (
        <div className='addname theme-card'>
            <div className='input-main-data'>
                <label>Product Name<span className='asterisk'> *</span></label>
                <input type='text' placeholder='Enter a new product name' />
            </div>
            <div className='input-main-data '>
                <label>Category<span className='asterisk'> *</span></label>
                <div className='category-input'>
                    <input
                        type="text"
                        value={selectedCategory}
                        placeholder="Select a category"
                        readOnly
                        onClick={() => setShowCascader((prev) => !prev)}
                        className="category-input"
                        style={showCascader ? { border: '1px solid var(--orange-color)' } : undefined}
                    />
                    {showCascader && <Cascader onCategorySelect={handleCategorySelect} closeCascader={handleCloseCascader} />}
                </div>
            </div>
            <div className='input-main-data select-mui-vs'>
                <label>Brand<span className='asterisk'> *</span></label>
                <Autocomplete
                    fullWidth
                    className='automcomplete_select_info'
                    autoComplete={false}
                    id='free-solo-demo'
                    options={categories.map(option => option)}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                        <TextField {...params} placeholder='Select the user role access' />
                    )}
                    renderOption={(props, option) => (
                        <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                            {option.title}
                        </li>
                    )}
                    popupIcon={<IconDropDown />}
                />
            </div>
        </div>
    )
}

export default AddName;
