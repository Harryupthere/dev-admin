import React, { useState } from 'react'
import { Autocomplete, TextField } from "@mui/material";
import { IconDropDown } from '../../../icons/icons';
import './addcategories.scss'
import { images } from '../../../utils/customFn';
const options = [
    { title: 'Parent' },
    { title: 'Sub Category' },
];


const AddCategoryForm = () => {
    const [icons, setIcons] = useState(null);
const handleIconUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            setIcons(reader.result);
        };
        reader.readAsDataURL(file);
    }
};
    return (
        <div className='card-size-50 add-user-form'>
            <div className='theme-card'>
                <form>
                    <div className='input-main-data'>
                        <label>Category Name <span className='asterisk'>*</span></label>
                        <input type='text' placeholder='Enter new category name' />
                    </div>
                    <div className='input-main-data select-mui-vs'>
                        <label>Category Type <span className='asterisk'>*</span></label>
                        <div className='input_field'>
                            <Autocomplete
                                autoComplete={false}
                                options={options.map(option => option)}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder='Parent' />
                                )}
                                renderOption={(props, option) => (
                                    <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                        {option.title}
                                    </li>
                                )}
                                popupIcon={<IconDropDown />} />
                        </div>
                    </div>
                    <div className='input-main-data'>
                        <label>Slug</label>
                        <input type='text' placeholder='Enter slug for the category' />
                    </div>
                    <div className='input-main-data'>
                        <label>Parent Category ID <span className='asterisk'>*</span></label>
                        <input type='text' placeholder='Enter category ID' />
                    </div>
                </form>
            </div>
            <div className='theme-card'>
                <div className='input-main-data upload-section'>
                    <label>Category Image</label>
                    <div className='upload-image-wrapped'>
                        <div onClick={() => document.getElementById('file-input-icon').click()}>
                            {icons ? (
                                <>
                                    <img className="image-preview" src={icons} alt="Uploaded Preview" />
                                </>
                            ) : (
                                <div className='camera image-upload-box'><img src={images['add-gallery.svg']} alt='upload' /></div>
                            )}
                            <input
                                type="file"
                                id="file-input-icon"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleIconUpload}
                            />
                        </div>
                        {/* {icons && <button type='button' className='camera-button bg-transparent'><TranshIcon/></button>} */}
                    </div>
                </div>
            </div>
            <div className='action-card'>
                    <button type='button' className='orange_border_btn ms-auto'>Cancel</button>
                    <button type='button' className='orange_button'>Publish</button>
            </div>
        </div>
    )
}

export default AddCategoryForm;
