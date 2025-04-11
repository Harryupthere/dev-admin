import React from 'react'
import { CrossIcon } from '../../../icons/icons';
import { DateRangePicker } from 'rsuite';

const SpecialPricePopup = ({ closePopup, openPopup }) => {
  return (
    <>
      {openPopup &&
        <div className='special-price-popup'>
          <div className='main_heading'>
            <h2>Special Price</h2>
            <button type='button' className='bg-transparent' onClick={(e) => {e.stopPropagation();closePopup()}}><CrossIcon /></button>
          </div>
          <div className='input-main-data'>
            <label>Special Price</label>
            <input type='input' placeholder='Rs. Enter Price' />
          </div>
          <div className='input-main-data'>
            <label>Set the special price  period - Blank to long term</label>
            <div className='input-with-select'>
              <DateRangePicker showOneCalendar className='right-date-picker' placement='autoVerticalEnd' placeholder='Start Date   -    End Date' />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default SpecialPricePopup
