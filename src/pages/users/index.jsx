import React from 'react'
import DashboardHeader from '../dasboardheader'
import { AllUsers, CustomTabs, TabTitle, UserRoleTable } from '../../components'
// import './insight.scss'
const Users = () => {
  const breadcrumbdata = [
    {
      name: 'User Management',
      links: '/users'
    }
  ]
 
  const tabsData = [
    { eventKey: 'allusers', title: <TabTitle title="All Users" />, content: <AllUsers /> },
    { eventKey: 'roles', title: <TabTitle title="User Roles" />, content: <UserRoleTable /> },
  ];

  return (
    <div className='insight-wrapped'>
      <DashboardHeader heading="User Management" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
        <CustomTabs tabsData={tabsData} defaultActiveKey="allusers" />
      </div>
    </div>
  )
}

export default Users;
