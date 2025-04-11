import React from 'react'
import './aboutus.scss'
import { images } from '../../utils/customFn'

const AboutUs = () => {
  return (
    <>
      <div className='aboutus-main-vs'>
        <div className='main-content'>
          <div className='image-data'>
            <img src={images["new_logo.png"]} alt='logo_abt' />
          </div>
          <div className='text-data'>
            <p> <span className='fair'>Fair</span><span className='bay'>Bay</span> is an eCommerce platform based in Sri Lanka. We operate web and mobile market in retail trade. Our name <span className='fair'>“Fair” </span> indicates quality products and services for <span className='res'>reasonable</span> prices whereas <span className='bay'>“Bay”</span>  indicates the place in which it is <span className='ava'> available at </span>. In a nutshell the place at which quality products and services could be bought at a reasonable price.
            </p>
          </div>
        </div>
        <div className='appversion'>App version: v1.0.1</div>
      </div>
    </>
  )
}

export default AboutUs