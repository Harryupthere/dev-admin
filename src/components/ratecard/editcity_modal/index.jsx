import React from 'react'
import { CrossIcon, IconDropDown } from '../../../icons/icons';
import { Modal } from 'react-bootstrap';
import { Autocomplete, TextField } from '@mui/material';
import './ratecard_modals.scss'
const EditCityModal = ({ openEditModal, closeEditModal }) => {

    const province = [
        {title:'item1'},{title:'item1'}
    ]
    return (
        <Modal show={openEditModal} className='fairbay_modals ratecard-modal' centered>
            <div className='modal_header'>
                <div className='main_heading'><h2>Edit City</h2></div>
                <button type='button' onClick={closeEditModal} className='cancel-btn'><CrossIcon /></button>
            </div>
            <div className='modal_body'>
                <form>
                    <div className='input-main-data select-mui-vs'>
                        <label>Province<span className='asterisk'>*</span></label>
                        <Autocomplete
                            autoComplete={false}
                            id='free-solo-demo'
                            options={province.map(option => option)}
                            getOptionLabel={(option) => option.title}
                            disableClearable
                            renderInput={(params) => (
                                <TextField {...params} placeholder='North Westernr' />
                            )}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                    {option.title}
                                </li>
                            )}
                            popupIcon={<IconDropDown />} />
                    </div>
                    <div className='input-main-data select-mui-vs'>
                        <label>District<span className='asterisk'>*</span></label>
                        <Autocomplete
                            autoComplete={false}
                            id='free-solo-demo'
                            options={province.map(option => option)}
                            getOptionLabel={(option) => option.title}
                            disableClearable
                            renderInput={(params) => (
                                <TextField {...params} placeholder='Puttalam' />
                            )}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                    {option.title}
                                </li>
                            )}
                            popupIcon={<IconDropDown />} />
                    </div>
                    <div className='input-main-data select-mui-vs'>
                        <label>City Name<span className='asterisk'>*</span></label>
                       <input type='text' placeholder='City Name' value="Aalamkulam"/>
                    </div>
                </form>
            </div>
            <div className='modal_footer'>
                <p className='city-id'>City ID: CT10001</p>
                <div className='action_btn'>
                    <button type='button' className='orange_border_btn' onClick={closeEditModal}>
                        Close
                    </button>
                    <button type='button' className='orange_button' onClick={closeEditModal}>
                        Save
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default EditCityModal
