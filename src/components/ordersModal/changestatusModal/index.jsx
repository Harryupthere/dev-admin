import React from 'react'
import { CrossIcon, IconDropDown } from '../../../icons/icons';
import { Modal } from 'react-bootstrap';
import { Autocomplete, TextField } from '@mui/material';

const options = [
    {title:'Remove from Return'},{title:'Return Received'},{title:'Refunded'},{title:'Rejected'},{title:'Cancelled'}
]
const ChangeReturnStatusModal = ({ openModal, closeModal }) => {

    return (
        <Modal show={openModal} className='fairbay_modals status-modal' centered>
            <div className='modal_header'>
                <div className='main_heading'><h2>Change the status</h2></div>
                <button type='button' onClick={closeModal} className='cancel-btn'><CrossIcon /></button>
            </div>
            <div className='modal_body'>
                <div className='flex-input'>
                    <div className='input-main-data select-mui-vs'>
                        <label>Change to</label>
                        <Autocomplete
                        sx={{width:'200px'}}
                            autoComplete={false}
                            options={options.map(option => option)}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                                <TextField {...params} placeholder='Select' />
                            )}
                            popupIcon={<IconDropDown/>}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                    {option.title}
                                </li>
                            )}
                        />
                    </div>
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
        </Modal>
    )
}

export default ChangeReturnStatusModal;
