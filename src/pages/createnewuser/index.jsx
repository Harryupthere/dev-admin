import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CreateUserForm } from '../../components'

const CreateNewUser = () => {
  const breadcrumbdata = [
    {
      name: 'User Management',
      links: '/users'
    },
    {
        name: 'Create new user ',
        links: '/users/create-user'
      }
  ]
 


  return (
    <div className='insight-wrapped'>
      <DashboardHeader heading="Create new user" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
          <CreateUserForm/>
      </div>
    </div>
  )
}

export default CreateNewUser;
