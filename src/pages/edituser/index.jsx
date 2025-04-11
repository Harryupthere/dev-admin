import React from 'react'
import DashboardHeader from '../dasboardheader'
import { EditUserForm } from '../../components'

const EditUser = () => {
  const breadcrumbdata = [
    {
      name: 'User Management',
      links: '/users'
    },
    {
        name: 'Edit User ',
        links: '/users/edit-user'
      }
  ]
 


  return (
    <div className='insight-wrapped'>
      <DashboardHeader heading="Edit User" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
          <EditUserForm/>
      </div>
    </div>
  )
}

export default EditUser;
