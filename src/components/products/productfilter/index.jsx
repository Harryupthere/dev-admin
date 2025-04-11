import React from 'react'
import { Autocomplete, TextField } from '@mui/material';
import { IconDropDown } from '../../../icons/icons';

const ProductsFilter = () => {

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
                            options={[{ title: 'Product ID' }, { title: 'Shop SKU' },{title:'FairBay SKU ID'},{title:'FairBay SKU Name'}]}
                            getOptionLabel={(option) => option.title}
                            disableClearable
                            renderInput={(params) => (
                                <TextField {...params} placeholder='Product Name' sx={{ minWidth: '140px' }} />
                            )}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                    {option.title}
                                </li>
                            )}
                            popupIcon={<IconDropDown/>}

                        />
                        <input type='text' className='input' placeholder='Search for a product' />
                    </div>
                </div>
                <div className='reset'>
                    <button type='button' className='orange_border_btn'>Reset</button>
                </div>
            </div>
            <div className='right-side'>
                <button type='button' className='blue_button' >Add New Product</button>
            </div>
        </div>
    )
}

export default ProductsFilter;
