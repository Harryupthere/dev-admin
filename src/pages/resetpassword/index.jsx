import React from 'react'
import {  ResetPasswordForm, SideImg, Toplogo } from '../../components'

const ResetPassword = () => {
  return (
    <div className='blue-bg front_pages'>
      <Toplogo/>
      <div className='container'>
        <div className='two_flex_items'>
          <div className='left_content'>
            <SideImg />
          </div>
          <div className='right_content'>
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword;
