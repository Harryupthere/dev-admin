import React, { useState } from 'react'
import { images } from '../../../utils/customFn';

const AddBrandForm = () => {
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
                        <label>Brand Name <span className='asterisk'>*</span></label>
                        <input type='text' placeholder='Enter new brand name' />
                    </div>
                    <div className='input-main-data'>
                        <label>Slug</label>
                        <input type='text' placeholder='Enter slug for the brand' />
                    </div>
                    <div className='input-main-data mb-0'>
                        <label>Authorization</label>
                    </div>
                    <div className='green-switch'>
                            <input type='checkbox'/>
                       </div>
                </form>
            </div>
            <div className='theme-card'>
                <div className='input-main-data upload-section'>
                    <label>Brand Image</label>
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

export default AddBrandForm;
