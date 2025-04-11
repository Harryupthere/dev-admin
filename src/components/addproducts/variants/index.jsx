import { Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'
import { IconDropDown, TranshIcon } from '../../../icons/icons';
import UploadMultiImg from '../uploadMultiImg';
import './variant.scss'
import SpecialPricePopup from '../specialPricePopup';
const Variants = () => {

    const variantfamily = [
        { title: 'Variant' }, { title: 'Colour' }, { title: 'Capacity' }, { title: 'Storage' }, { title: 'Size' }
    ]
    const [openSpecialPrice, setOpenSpecialPrice] = useState(false)
    const handleOpenSpecialPrice = () => {
        setOpenSpecialPrice(true)
    }

    const handleCloseSpecialPrice = () => {
        setOpenSpecialPrice(false)
    }

    return (
        <div className='variants theme-card'>
            <div className='main_heading'>
                <h2>Variants, Price & Stocks<span className='asterisk'> *</span></h2>
            </div>
            <div className='blue-card'>
                <div className='parent-variant'>
                    <h4>Parent Variant Family</h4>
                    <div className='action-card'>
                        <div className='input-main-data select-mui-vs'>
                            <label>Variant Family Name</label>
                            <Autocomplete
                            fullWidth
                                autoComplete={false}
                                options={variantfamily.map(option => option)}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder=' Select Variant family' fullWidth/>
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
                <div className='input-main-data variant-damily-check'>
                    <label>Add Variants to the family</label>
                    <div className='checkcontainer'>
                        <input type='checkbox' />
                        <label>Image Variant</label>
                    </div>
                </div>
                <div className='action-card variant-type'>
                    <div className='input-main-data'>
                        <input type='text' placeholder='Type the variant' />
                    </div>
                    <UploadMultiImg />
                    <button className='bg-transparent delete-this'><TranshIcon /></button>
                </div>
            </div>
            <div className='blue-card sub-variant'>
                <div className='checkcontainer'>
                    <input type='checkbox' />
                    <label>Sub Variant Family</label>
                </div>
            </div>
            <div className='variant-table'>
            <div className='filters'>
                <div className='input-main-data rs'><input type='text' placeholder='Price' className='small' /></div>
                <div className='input-main-data rs' onClick={handleOpenSpecialPrice}>
                    <input type='text' placeholder='Special price' className='small'  style={openSpecialPrice ? { border: '1px solid var(--orange-color)' } : undefined} />
                        <SpecialPricePopup closePopup={handleCloseSpecialPrice} openPopup={openSpecialPrice}/>
                </div>
                <div className='input-main-data'><input type='text rs' placeholder='Stocks' className='small' /></div>
                <div className='input-main-data'><input type='text rs' placeholder='Cost' className='small' /></div>
                <div className='input-main-data'><input type='text' placeholder='SKU ID' className='small' /></div>
                <div className='input-main-data'><input type='text' placeholder='SKU Name' /></div>
                <div className='input-main-data select-mui-vs'>
                    <Autocomplete
                        autoComplete={false}
                        options={variantfamily.map(option => option)}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (<TextField {...params} placeholder='Packing Cost Class' />)}
                        renderOption={(props, option) => (
                            <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}> {option.title}</li>
                        )}
                        popupIcon={<IconDropDown />}
                    />
                </div>
                <div className='input-main-data'><input type='text' placeholder='Item Weight' /></div>
                <button type='button' className='orange_button'>Apply to all</button>
            </div>
                <table>
                    <thead>
                        <tr>
                            <th>Variant</th>
                            <th>Price</th>
                            <th>Special Price</th>
                            <th>Stocks</th>
                            <th>Cost</th>
                            <th>FairBay SKU ID</th>
                            <th>FairBay SKU Name</th>
                            <th>Packing</th>
                            <th>Weight</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Black</td>
                            <td><div className='input-main-data rs'><input type='text' placeholder='Price' className='small' defaultValue="250" /></div></td>
                            <td><div className='input-main-data rs'><input type='text' placeholder='Price' className='small' defaultValue="250" /></div></td>
                            <td><div className='input-main-data rs'><input type='text' placeholder='Price' className='small' defaultValue="250" /></div></td>
                            <td><div className='input-main-data rs'><input type='text' placeholder='Price' className='small' defaultValue="250" /></div></td>
                            <td><div className='input-main-data rs'><input type='text' placeholder='Price' className='small' defaultValue="250" /></div></td>
                            <td><div className='input-main-data'><input type='text' placeholder='Price' defaultValue="250" /></div></td>
                            <td><div className='input-main-data'>
                                <select>
                                    <option>1</option>
                                </select>
                            </div></td>
                            <td><div className='input-main-data'><input type='text' placeholder='Price' className=' small' defaultValue="250" /></div></td>
                            <td>
                                <div className='green-switch'>
                                    <input type='checkbox' />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Variants 
