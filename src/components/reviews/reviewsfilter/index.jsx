import { Autocomplete, TextField } from '@mui/material';
import React from 'react'
import { IconDropDown } from '../../../icons/icons';

const ReviewsFilter = () => {

    const options = [
        { title: 'Tracking Number' },
        { title: 'Shop SKU' },
        { title: 'FairBay SKU ID' },
        { title: 'FairBay SKU Name' },
        { title: 'Customer ID' }
    ];
    const starts = [    
        { title: '1 Star' },
        { title: '2 Star' },
        { title: '3 Star' },
        { title: '4 Star' },
        { title: '5 Star' }
    ]
    const contain = [
        { title: 'Comment Only' },
        { title: 'Images Only' },
        { title: 'Stars Only' },
    ]
    const sortby = [
        {title:'Newest to Oldest Cases'},
        {title:'Oldest Reviews to Newest Reviews'}
    ]
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
                            options={options.map(option => option)}
                            getOptionLabel={(option) => option.title}
                            disableClearable
                            renderInput={(params) => (
                                <TextField {...params} placeholder='Order Number' sx={{minWidth:'160px'}}/>
                            )}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                    {option.title}
                                </li>
                            )}
                            popupIcon={<IconDropDown />}

                        />
                        <input type='text' className='input' placeholder='Search for a Review' />
                    </div>
                </div>
                <div className='single-input'>
                    <div className='input-main-data select-mui-vs '>
                        <Autocomplete
                            fullWidth
                            className='automcomplete_select_info'
                            autoComplete={false}
                            id='free-solo-demo'
                            options={starts.map(option => option)}
                            getOptionLabel={(option) => option.title}
                            disableClearable
                            renderInput={(params) => (
                                <TextField {...params} placeholder='All' />
                            )}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                    {option.title}
                                </li>
                            )}
                            popupIcon={<IconDropDown />}
                        />
                    </div>
                </div>
                <div className='single-input contain-Contain'>
                    <div className='input-main-data select-mui-vs '>
                        <Autocomplete
                            fullWidth
                            className='automcomplete_select_info'
                            autoComplete={false}
                            id='free-solo-demo'
                            options={contain.map(option => option)}
                            getOptionLabel={(option) => option.title}
                            disableClearable
                            renderInput={(params) => (
                                <TextField {...params} placeholder='All' />
                            )}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                    {option.title}
                                </li>
                            )}
                            popupIcon={<IconDropDown />}
                        />
                    </div>
                </div>
                <div className='reset'>
                    <button type='button' className='orange_border_btn'>Reset</button>
                </div>
            </div>
            <div className='right-side'>
                <div className='single-select-with-button'>
                    <div className='input-main-data select-mui-vs'>
                        <Autocomplete
                            sx={{ minWidth: '300px', display: 'flex' }}
                            className='automcomplete_select_info'
                            autoComplete={false}
                            id='free-solo-demo'
                            options={sortby.map(option => option)}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                                <>
                                    <button type='button' className='main-text'>Sort By</button>
                                    <TextField {...params} placeholder='Select' />
                                </>
                            )}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                    {option.title}
                                </li>
                            )}
                            popupIcon={<IconDropDown />}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsFilter;
