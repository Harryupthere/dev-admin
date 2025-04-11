import React from 'react'
import DashboardHeader from '../dasboardheader'
import { AccountSettingForm } from '../../components'

const AccountSetting = () => {
  const breadcrumbdata = [
    {
      name: 'User Management',
      links: '/users'
    },
    {
        name: 'Account Settings ',
        links: '/users/add-users'
      }
  ]
 


  return (
    <div className='insight-wrapped'>
      <DashboardHeader heading="Account Settings" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
          <AccountSettingForm/>
      </div>
    </div>
  )
}

export default AccountSetting;
