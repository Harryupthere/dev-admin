import React from 'react'
import { LoginForm, SideImg, Toplogo } from '../../components'

const Login = () => {
  return (
    <div className='blue-bg front_pages'>
      <Toplogo/>
      <div className='container'>
        <div className='two_flex_items'>
          <div className='left_content'>
            <SideImg />
          </div>
          <div className='right_content'>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
