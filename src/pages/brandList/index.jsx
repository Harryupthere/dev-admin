import React from 'react'
import DashboardHeader from '../dasboardheader'
import { BrandListTable, CustomTabs, TabTitle } from '../../components'
// import './insight.scss'
const BrandList = () => {
  const breadcrumbdata = [
    {
      name: 'Products',
      links: '/products'
    },
    {
        name: 'Brand List',
        links: '/products/brands'
      }
  ]
 
  const tabsData = [
    { eventKey: 'all', title: <TabTitle title="All" />, content: <BrandListTable /> },
    { eventKey: 'authorized', title: <TabTitle title="Authorized" />, content: <BrandListTable /> },
    { eventKey: 'non-authorized', title: <TabTitle title="Non - Authorized" />, content: <BrandListTable /> },
  ];

  return (
    <div className='brand-wrapped'>
      <DashboardHeader heading="Manage Brands" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
        <CustomTabs tabsData={tabsData} defaultActiveKey="all" />
      </div>
    </div>
  )
}

export default BrandList;
