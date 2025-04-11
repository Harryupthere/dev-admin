import React from 'react'
import { IconDropDown } from '../../../icons/icons';
import './onboardingfilter.scss'
import { Autocomplete, TextField } from '@mui/material';

const options = [
    { title: 'item1' }
]
const OnboardingFilter = () => {

    return (
        <div className='filter-wrapper-onboarding'>
            <div className='filter-container mb-0'>
                <div className='left-side'>
                    <div className='selected'>
                        <div className='selected-data'>0 Selected</div>
                        <button type='button' className='orange_button' disabled>Accept</button>
                    </div>
                </div>
                <div className='right-side'>
                     <div className='select-with-search-custome'>
                                      <div className='input-main-data select-mui-vs '>
                                          <Autocomplete
                                              autoComplete={false}
                                              options={options.map(option => option)}
                                              getOptionLabel={(option) => option.title}
                                              disableClearable
                                              renderInput={(params) => (
                                                  <TextField {...params} placeholder='FairBay SKU'   sx={{minWidth:'120px'}}/>
                                              )}
                                              renderOption={(props, option) => (
                                                  <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                                      {option.title}
                                                  </li>
                                              )}
                                              popupIcon={<IconDropDown />}
                  
                                          />
                                          <input type='text' className='input' placeholder='Search Product' />
                                      </div>
                                  </div>
                    <button type='button' className='orange_border_btn'>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default OnboardingFilter;
