import React from 'react'
import { CrossIcon, IconDropDown } from '../../../icons/icons';
import { Modal } from 'react-bootstrap';
import { Autocomplete, TextField } from '@mui/material';

const CreateCityModal = ({ openModal, closeModal }) => {

    const province = [
        {title:'item1'},{title:'item1'}
    ]
    return (
        <Modal show={openModal} className='fairbay_modals ratecard-modal' centered>
            <div className='modal_header'>
                <div className='main_heading'><h2>Create New City</h2></div>
                <button type='button' onClick={closeModal} className='cancel-btn'><CrossIcon /></button>
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
                <div className='action_btn ms-auto'>
                    <button type='button' className='orange_border_btn' onClick={closeModal}>
                        Close
                    </button>
                    <button type='button' className='orange_button' onClick={closeModal}>
                        Save
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default CreateCityModal
