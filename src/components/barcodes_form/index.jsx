import React from 'react'
import './barcodeform.scss'
const BarcodesForm = () => {
    return (
        <div className='barcodes_form'>
            <div className='action-card detail-header'>
                <div className='header-item'>Current Barcode: 0000156</div>
                <div className='header-item'>Last ending Barcode: 0010000</div>
                <div className='header-item'>Barcodes left: 9844</div>
            </div>
            <div className='theme-card'>
                <form>
                    <div className='input-main-data'>
                        <label>Barcode Starting Number<span className='asterisk'>*</span></label>
                        <input type='text' placeholder='Enter the first starting number'/>
                    </div>
                    <div className='input-main-data'>
                        <label>Barcode Ending Number<span className='asterisk'>*</span></label>
                        <input type='text' placeholder='Enter the last barcode number'/>
                    </div>
                    <div className='input-main-data'>
                        <label>Prefix (if available only)</label>
                        <input type='text' placeholder='Enter the letter if starting before barcode number'/>
                    </div>
                    <div className='input-main-data'>
                        <label>Reminder Count</label>
                        <input type='text' placeholder='Remind if the allocated barcode about to finish/ 250 default if this blank'/>
                    </div>
                    <div className='show-label'>Next AWB Barcode will be like this after Saving:</div>
                </form>
            </div>
            <div className='action-card'>
                <button type='button' className='orange_border_btn ms-auto'>Cancel</button>
                <button type='button' className='orange_button'>Save</button>
            </div>
        </div>
    )
}

export default BarcodesForm;
