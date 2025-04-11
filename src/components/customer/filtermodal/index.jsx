import React, { useState } from 'react'
import { CrossIcon, IconDropDown } from '../../../icons/icons';
import { Autocomplete, TextField } from "@mui/material";
import { Modal } from 'react-bootstrap';
import './filtermodal.scss'
const FilterModal = ({ openModal, closeModal }) => {
    const genders = [
        { title: 'Female' },
        { title: 'Male' },
        { title: 'Other' },
    ];
    const [formData, setFormData] = useState({
        gender: '',
        age: '',
        phone: 'All',
        email: '',
        city: '',
        sales: '',
        radio: '',
        signupwith: '',
    });
    const handleInputChange = (event, newValue) => {
        if (newValue) {
            setFormData((prevData) => ({
                ...prevData,
                gender: newValue.title,
            }));
        }
    };
    return (
        <Modal show={openModal} centered className='fairbay_modals'>
            <div className='filtermodal'>
                <div className='modal_header'>
                    <div className='main_heading'><h2>Filter</h2></div>
                    <button type='button' onClick={closeModal} className='cancel-btn'><CrossIcon /></button>
                </div>
                <div className='modal_body'>
                    <div className='content'>
                        <form>
                            <div className='input-main-data select-mui-vs'>
                            <div className='label_fieild'>
                                <label>Gender</label>
                                </div>
                                <div className='input_field'>
                                    <Autocomplete
                                        fullWidth
                                        className='automcomplete_select_info'
                                        autoComplete={false}
                                        id='free-solo-demo'
                                        options={genders}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => (
                                            <TextField {...params} placeholder='All' />
                                        )}
                                        renderOption={(props, option) => (
                                            <li {...props} style={{fontSize: '14px', fontFamily: 'Quicksand'}}>
                                                {option.title}
                                            </li>
                                        )}
                                        popupIcon={<IconDropDown />}
                                        value={genders.find((g) => g.title === formData.gender) || null}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className='input-main-data'>
                            <div className='label_fieild'>
                                <label>Age</label>
                                </div>
                                <div className='input_field'>
                                    <input
                                        type='text'
                                        name='age'
                                        value={formData.age}
                                        placeholder='Enter Age'
                                    />
                                </div>
                            </div>
                            <div className='input-main-data select-mui-vs'>
                            <div className='label_fieild'>
                                <label>Phone Number</label>
                                </div>
                                <div className='input_field'>
                                    <Autocomplete
                                        fullWidth
                                        className='automcomplete_select_info'
                                        autoComplete={false}
                                        id='free-solo-demo'
                                        options={[{ title: 'Added' }, { title: 'Not Added' }]}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => (
                                            <TextField {...params} placeholder='All' />
                                        )}
                                        renderOption={(props, option) => (
                                            <li {...props} style={{fontSize: '14px', fontFamily: 'Quicksand'}}>
                                                {option.title}
                                            </li>
                                        )}
                                        popupIcon={<IconDropDown />}
                                    />
                                </div>
                            </div>
                            <div className='input-main-data select-mui-vs'>
                            <div className='label_fieild'>
                                <label>Email</label>
                                </div>
                                <div className='input_field'>
                                    <Autocomplete
                                        fullWidth
                                        className='automcomplete_select_info'
                                        autoComplete={false}
                                        id='free-solo-demo'
                                        options={[{ title: 'Added' }, { title: 'Not Added' }]}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => (
                                            <TextField {...params} placeholder='All' />
                                        )}
                                        renderOption={(props, option) => (
                                            <li {...props} style={{fontSize: '14px', fontFamily: 'Quicksand'}}>
                                                {option.title}
                                            </li>
                                        )}
                                        popupIcon={<IconDropDown />}
                                    />
                                </div>
                            </div>
                            <div className='input-main-data select-mui-vs'>
                            <div className='label_fieild'>
                                <label>City</label>
                                </div>
                                <div className='input_field'>
                                    <Autocomplete
                                        fullWidth
                                        className='automcomplete_select_info'
                                        autoComplete={false}
                                        id='free-solo-demo'
                                        options={[{ title: 'Added' }, { title: 'Not Added' }]}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => (
                                            <TextField {...params} placeholder='All' />
                                        )}
                                        renderOption={(props, option) => (
                                            <li {...props} style={{fontSize: '14px', fontFamily: 'Quicksand'}}>
                                                {option.title}
                                            </li>
                                        )}
                                        popupIcon={<IconDropDown />}
                                    />
                                </div>
                            </div>
                            <div className='input-main-data select-mui-vs'>
                            <div className='label_fieild'>
                                <label>Sales</label>
                                </div>
                                <div className='input_field'>
                                    <Autocomplete
                                        fullWidth
                                        className='automcomplete_select_info'
                                        autoComplete={false}
                                        id='free-solo-demo'
                                        options={[{ title: '0' }, { title: '0-10,000' }]}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => (
                                            <TextField {...params} placeholder='All' />
                                        )}
                                        renderOption={(props, option) => (
                                            <li {...props} style={{fontSize: '14px', fontFamily: 'Quicksand'}}>
                                                {option.title}
                                            </li>
                                        )}
                                        popupIcon={<IconDropDown />}
                                    />
                                </div>
                            </div>
                            <div className='input-main-data select-mui-vs'>
                                <div className='label_fieild'>
                                <label>Return Ratio</label>
                                </div>
                                <div className='input_field'>
                                    <Autocomplete
                                        fullWidth
                                        className='automcomplete_select_info'
                                        autoComplete={false}
                                        id='free-solo-demo'
                                        options={[{ title: '1:0' }, { title: '1:1' }]}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => (
                                            <TextField {...params} placeholder='All' />
                                        )}
                                        renderOption={(props, option) => (
                                            <li {...props} style={{fontSize: '14px', fontFamily: 'Quicksand'}}>
                                                {option.title}
                                            </li>
                                        )}
                                        popupIcon={<IconDropDown />}
                                    />
                                </div>
                            </div>
                            <div className='input-main-data select-mui-vs'>
                            <div className='label_fieild'>
                                <label>Signed up with</label>
                                </div>
                                <div className='input_field'>
                                    <Autocomplete
                                        fullWidth
                                        className='automcomplete_select_info'
                                        autoComplete={false}
                                        id='free-solo-demo'
                                        options={[{ title: 'Phone' }, { title: 'Email'},{title:'Google'},{title:'Facebook'}]}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => (
                                            <TextField {...params} placeholder='All' />
                                        )}
                                        renderOption={(props, option) => (
                                            <li {...props} style={{fontSize: '14px', fontFamily: 'Quicksand'}}>
                                                {option.title}
                                            </li>
                                        )}
                                        popupIcon={<IconDropDown />}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='modal_footer'>
                    <div className='action_btn'>
                        <button type='button' className='orange_border_btn' onClick={closeModal}>
                            Cancel
                        </button>
                        <button type='button' className='orange_button' onClick={closeModal}>
                            Ok  
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default FilterModal
