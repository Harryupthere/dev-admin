import React, { useState } from 'react'
import './profileform.scss'
import { IconDropDown, IconEditInput } from '../../../icons/icons'
import { Autocomplete, TextField } from "@mui/material";
const ProfileForm = () => {


    const genders = [
        { title: 'Female' },
        { title: 'Male' },
        { title: 'Other' },
      ];
      const [isEditing, setIsEditing] = useState(false);
      const [formData, setFormData] = useState({
        name: 'Priya Ram',
        gender: 'Female',
        birthDay: '20 June 2007',
        phoneNumber: '071 123 4567',
        email: 'hi@sample.com',
        address: 'Address',
        city: 'Kollupitiya',
        district: 'Colombo',
        province: 'Province',
      });
    
      const handleInputChange = (event, newValue) => {
        if (newValue) {
          setFormData((prevData) => ({
            ...prevData,
            gender: newValue.title,
          }));
        }
      };
    
      const handleEdit = () => {
        setIsEditing(!isEditing);
      };
    
      const handleCancel = () => {
        setIsEditing(false);
      };


   


  return (
    <div className='profile-form-main'>
     
      <div className='input-main-data'>
        <label>Name</label>
        <div className='icon-input-bth'>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
        {isEditing && (
          <div className='btn-edit-input'> 
              <IconEditInput />
      
          </div>
        )}
        </div>
      
      </div>

   
      <div className='input-main-data select-mui-vs'>
        <label>Gender</label>
        {isEditing ? (
          <Autocomplete
            fullWidth
            className='automcomplete_select_info'
            autoComplete={false}
            id='free-solo-demo'
            options={genders}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField {...params} placeholder='Select Gender' />
            )}
            popupIcon={<IconDropDown />}
            value={genders.find((g) => g.title === formData.gender) || null}
            onChange={handleInputChange}
          />
        ) : (
          <input
            type='text'
            name='gender'
            value={formData.gender}
            disabled
          />
        )}
      </div>


 
   
      <div className='input-main-data'>
        <label>Birth Day</label>
        <div className='icon-input-bth'>
        <input
          type='text'
          name='birthDay'
          value={formData.birthDay}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      {isEditing && (
          <div className='btn-edit-input'> 
              <IconEditInput />
      
          </div>
        )}
        </div>
       
      </div>

     
      <div className='input-main-data'>
        <label>Phone Number</label>
        <div className='icon-input-bth'>
        <input
          type='text'
          name='phoneNumber'
          value={formData.phoneNumber}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
        {isEditing && (
          <div className='btn-edit-input'> 
              <IconEditInput />
      
          </div>
        )}
        </div>
      </div>

    
      <div className='input-main-data'>
        <label>Email</label>
        <div className='icon-input-bth'>
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
       {isEditing && (
          <div className='btn-edit-input'> 
              <IconEditInput />
      
          </div>
        )}
        </div>
      </div>

    
      <div className='input-main-data'>
        <label>Address</label>
        <div className='icon-input-bth'>
        <input
          type='text'
          name='address'
          value={formData.address}
          onChange={handleInputChange}
          disabled={!isEditing}
     
        />
        {isEditing && (
          <div className='btn-edit-input'> 
              <IconEditInput />
          </div>
        )}
        </div>
      </div>

      <div className='input-main-data'>
        <label>City</label>
        <div className='icon-input-bth'>
        <input
          type='text'
          name='city'
          value={formData.city}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
        {isEditing && (
          <div className='btn-edit-input'> 
              <IconEditInput />
      
          </div>
        )}
        </div>
      </div>

 
      <div className='input-main-data'>
        <label>District</label>
        <div className='icon-input-bth'>
        <input
          type='text'
          name='district'
          value={formData.district}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      {isEditing && (
          <div className='btn-edit-input'> 
              <IconEditInput />
      
          </div>
        )}
        </div>
      </div>

    
      <div className='input-main-data'>
        <label>Province</label>
        <div className='icon-input-bth'>
        <input
          type='text'
          name='province'
          value={formData.province}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
       {isEditing && (
          <div className='btn-edit-input'> 
              <IconEditInput />
      
          </div>
        )}
        </div>
      </div>

      {/* Edit and Cancel Buttons */}
      <div className='btn-edit'>
      {isEditing && (
          <button className='orange_border_btn btn-cancel-data' onClick={handleCancel}>
            Cancel
          </button>
        )}
        <button  className={`orange_button ${isEditing ? 'save-btn' : ''}`} onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      
      </div>
    </div>
  )
}

export default ProfileForm