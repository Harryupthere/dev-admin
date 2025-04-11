import React, { useState } from 'react'
import { Icons } from '../../../utils/customFn'
import { IconDropDown } from '../../../icons/icons';
import './tablefilter.scss'
import FilterModal from '../filtermodal';
import { Autocomplete, TextField } from '@mui/material';

const options = [
    { title: 'item1' }, { title: 'item2' }
]
const TableFilter = () => {
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    return (
            <div className='common-filter-design action-card customer-filter'>
                <div className='left-side'>
                    <div className='filter-button'>
                        <button type='button' className='filter-btn' onClick={handleOpenModal}>
                            <span>Filter</span>
                            <img src={Icons['filtericon.svg']} alt='filter' />
                        </button>
                    </div>
                    <div className='select-with-search-custome'>
                        <div className='input-main-data select-mui-vs '>
                            <Autocomplete
                                autoComplete={false}
                                options={options.map(option => option)}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                renderInput={(params) => (
                                    <TextField {...params} placeholder='Name' sx={{ minWidth: '90px' }} />
                                )}
                                renderOption={(props, option) => (
                                    <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                        {option.title}
                                    </li>
                                )}
                                popupIcon={<IconDropDown/>}

                            />
                            <input type='text' className='input' placeholder='Search for a user' />
                        </div>
                    </div>
                    <button type='button' className='orange_border_btn'>Reset</button>
                </div>
                <div className='right-side'>
                    <button type='button' className='blue_button'>Export</button>
                </div>
                <FilterModal openModal={openModal} closeModal={handleCloseModal} />
            </div>
    )
}

export default TableFilter;
