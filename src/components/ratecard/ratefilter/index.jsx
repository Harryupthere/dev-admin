import React, { useState } from 'react'
import { Autocomplete, TextField } from '@mui/material';
import { IconDropDown } from '../../../icons/icons';
import CreateCityModal from '../createcity_modal';
import EditDistrictModal from '../editdistrict_modal';

const RateFilter = () => {
    const [openCreateCityModal,setOpenCreateCityModal] = useState(false)
    const [openDistrictModal,setOpenDistrictModal] = useState(false)

    const handleOpenCreateCityModal = () =>{
        setOpenCreateCityModal(true)
    }
    const handleCloseCreateCityModal = () =>{
        setOpenCreateCityModal(false)
    }

    const handleOpenDistrictModal = () =>{
        setOpenDistrictModal(true)
    }
    const handleCloseDistrictModal = () =>{
        setOpenDistrictModal(false)
    }
    
    return (
        <div className='common-filter-design action-card'>
            <div className='left-side'>
                <div className='select-with-search-custome'>
                    <div className='input-main-data select-mui-vs '>
                        <Autocomplete
                            fullWidth
                            className='automcomplete_select_info'
                            autoComplete={false}
                            id='free-solo-demo'
                            options={[{ title: 'item1' }, { title: 'item2' }]}
                            getOptionLabel={(option) => option.title}
                            disableClearable
                            renderInput={(params) => (
                                <TextField {...params} placeholder='City Name'  sx={{minWidth:'130px'}}/>
                            )}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                    {option.title}
                                </li>
                            )}
                            popupIcon={<IconDropDown />}

                        />
                        <input type='text' className='input' placeholder='Search for a City' />
                    </div>
                </div>
                <button type='button' className='orange_border_btn'>Reset</button>
                <button type='button' className='orange_button'>Edit Rates</button>
                <button type='button' className='blue_border_btn' onClick={handleOpenDistrictModal}>Edit by District</button>
            </div>
            <div className='right-side'>
                <button type='button' className='blue_button' onClick={handleOpenCreateCityModal}>Add New City</button>
            </div>
            <CreateCityModal openModal={openCreateCityModal} closeModal={handleCloseCreateCityModal}/>
            <EditDistrictModal openModal={openDistrictModal} closeModal={handleCloseDistrictModal}/>
        </div>
    )
}

export default RateFilter;
