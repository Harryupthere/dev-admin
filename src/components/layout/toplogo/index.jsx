import React from 'react'
import { images } from '../../../utils/customFn'
import './toplogo.scss'
import { Link } from 'react-router-dom'
const TopLogo = () => {
  return (
    <div className='top_logo'>
      <Link to="/">
        <img src={images['logo.svg']} alt='logo'/>
        </Link>
    </div>
  )
}

export default TopLogo;
