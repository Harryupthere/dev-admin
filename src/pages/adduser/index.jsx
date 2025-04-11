import React from 'react'
import DashboardHeader from '../dasboardheader'
import { AddUserForm } from '../../components'

const AddNewUser = () => {
  const breadcrumbdata = [
    {
      name: 'User Management',
      links: '/users'
    },
    {
        name: 'Add new user ',
        links: '/users/add-users'
      }
  ]
 


  return (
    <div className='insight-wrapped'>
      <DashboardHeader heading="Add new user" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
          <AddUserForm/>
      </div>
    </div>
  )
}

export default AddNewUser;
