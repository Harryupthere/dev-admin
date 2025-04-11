import React from 'react';
import './user_profile_and_name.scss'
import { images } from '../../../utils/customFn';

const UserProfilePicAndName = () => {
    return (
        <div className='user-profile-wrapped'>
            <div className='profile-section'>
                <div className='profile-img'>
                    <img src={images['profile-boy.svg']} alt='profile' />
                </div>
                <div className='details'>
                    <h2>Arc Super Admin</h2>
                    <h3>Admin</h3>
                </div>
            </div>
        </div>
    )
}

export default UserProfilePicAndName
