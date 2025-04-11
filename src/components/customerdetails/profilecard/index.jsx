import React from 'react'
import './profilecard.scss'
import { images } from '../../../utils/customFn'
import { IconPhone } from '../../../icons/icons'

const ProfileCard = () => {
  return (
    <div className='profile-card-main'>
        <div className='card-flex-data'>
            <div className='user-image'>
              <img src={images["user-profile.png"]} alt=""/>
            </div>
            <div className='user-data'>
                <div className='data-list-flex user-name'>
                    <h2>Priya Ram</h2>
                    <span className='tag'>#5</span>
                </div>
                <div className='data-list-flex user-data-comman'>
                    <h2>Account ID:</h2>
                    <p>1000001</p>
                </div>
                <div className='data-list-flex user-data-comman'>
                    <h2>Account Created on:</h2>
                    <p>05/10/2024</p>
                </div>
                <div className='data-list-flex user-data-comman'>
                    <h2>Account Created with:</h2>
                     <spna><IconPhone/></spna>
                </div>
                <div className='data-list-flex user-data-comman'>
                    <h2>Age:</h2>
                    <p>17</p>
                </div>
                <div className='data-list-flex user-btn-data'>
                    <button className='btn-active'>Active</button>
                    <button className='orange_border_btn'>Block</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard