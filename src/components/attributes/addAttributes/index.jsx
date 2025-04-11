import React from 'react'

const AddAttribute = () => {
    return (
        <div className='add-attributes'>
            <div className='theme-card'>
                <div className='main_heading'>
                    <h2>Add new Attribute</h2>
                </div>
                <div className='input-main-data'>
                    <label>Attribute Name</label>
                    <input placeholder='Enter a new attribute name' />
                </div>
            </div>
            <div className='action-card'>
                <button type='button' className='orange_border_btn ms-auto'>Cancel</button>
                <button type='button' className='orange_button'>Add Attribute</button>
            </div>
        </div>
    )
}

export default AddAttribute
