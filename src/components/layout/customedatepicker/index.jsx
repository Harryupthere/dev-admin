import React from "react";
import { DateRangePicker } from 'rsuite';
import { addDays } from 'date-fns';
import 'rsuite/dist/rsuite.min.css';
import { CalenderIcon } from '../../../icons/icons';
import './customedatepicker.scss'
const predefinedRanges = [
  {
    label: 'Today',
    value: [new Date(), new Date()],
    placement: 'left'
  },
  {
    label: 'Yesterday',
    value: [addDays(new Date(), -1), addDays(new Date(), -1)],
    placement: 'left'
  },
  {
    label: 'Last 7 Days',
    value: [addDays(new Date(), -7), new Date()],
    placement: 'left'
  },
  {
    label: 'Last 30 Days',
    value: [addDays(new Date(), -30), new Date()],
    placement: 'left'
  }
];

const CustomDatePicker = () => (
  <>
    <div className='customdate'>
      <div className='datellabel'>
        <CalenderIcon/>
        <label>Date</label>
      </div>
      <DateRangePicker showOneCalendar ranges={predefinedRanges}  className='right-date-picker' placement='autoVerticalEnd'/>
    </div>
  </>
);
export default CustomDatePicker;