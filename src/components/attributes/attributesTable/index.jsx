import React from 'react'
import CustomPagination from '../../layout/paginations';
import { useCustomePagination } from '../..';
import { IconDropDown, IconEditInput, TranshIcon } from '../../../icons/icons';
import { Autocomplete, TextField } from '@mui/material';
const tabledata = [
    { name: 'Variant' },
    { name: 'Colour' },
    { name: 'Capacity' },
    { name: 'Storage' },
    { name: 'Size' }
]
const options = [
{title:'Class Name'}
]
const AttributeTable = () => {
    const {
        paginatedData,
        page,
        rowsPerPage,
        rowsPerPageOptions,
        handlePageChange,
        handleRowsPerPageChange,
        totalItems,
    } = useCustomePagination(tabledata);
    return (
        <div className='attribute-table'>
            <div className='common-filter-design action-card'>
                <div className='left-side'>
                    <div className='select-with-search-custome'>
                        <div className='input-main-data select-mui-vs '>
                            <Autocomplete
                                autoComplete={false}
                                options={options.map(option => option)}
                                getOptionLabel={(option) => option.title}
                                disableClearable
                                renderInput={(params) => (
                                    <TextField {...params} placeholder='Attribute Name' sx={{ minWidth: '160px' }} />
                                )}
                                renderOption={(props, option) => (
                                    <li {...props} style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                                        {option.title}
                                    </li>
                                )}
                                popupIcon={<IconDropDown/>}
                            />
                            <input type='text' className='input' placeholder='Search for an attribute' />
                        </div>
                    </div>
                    <button type='button' className='orange_border_btn'>Reset</button>
                </div>
            </div>
            <div className="data-table-wrapped">
                <div className="data-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th style={{width:'80%'}}>Attribute Name</th>
                                <th style={{width:'180px'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>
                                        <div className='action-btns'>
                                            <button type='button' className='edit'>Edit<IconEditInput /></button>
                                            <button type='button' className='bg-transparent'><TranshIcon /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <CustomPagination
                        totalItems={totalItems}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={rowsPerPageOptions}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default AttributeTable;
