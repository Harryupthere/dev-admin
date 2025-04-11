import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CustomerTable, CustomTabs, TabTitle } from '../../components'
import './cutomer.scss'
const Customer = () => {
  const breadcrumbdata = [
    {
      name: 'Customers',
      links: '/customers'
    }
  ]
  const tabsData = [
    { eventKey: 'all', title: <TabTitle title="All" />, content: <CustomerTable /> },
    { eventKey: 'active', title: <TabTitle title="Active" />, content: <CustomerTable /> },
    { eventKey: 'inactive', title: 'Inactive', content: <CustomerTable /> }
  ];

  return (
    <div className='customer'>
      <DashboardHeader heading="Customer Management" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
        <CustomTabs tabsData={tabsData} defaultActiveKey="all" />
      </div>
    </div>
  )
}

export default Customer
