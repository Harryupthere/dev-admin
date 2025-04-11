import React from 'react'
import {images} from     '../../../utils/customFn'
import './success.scss'
const SuccessMessage = ({message}) => {
  return (
    <div className='succes-message'>
        <div className='theme-card'>
            <img src={images['success.png']} alt='success' className='check-img'/>
            <h3 className='title'>{message}</h3>
        </div>
    </div>
  )
}

export default SuccessMessage
