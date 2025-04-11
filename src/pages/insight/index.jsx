import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CommonCards, CustomDatePicker, CustomTabs, DeviceProgress, InsightProducts, SaleChart, TabTitle, TopProducts } from '../../components'
import './insight.scss'
const Insight = () => {
  const breadcrumbdata = [
    {
      name: 'Data Analysis',
      links: '/customer'
    }
  ]
  const cardsData = [
    { title: 'Total Visitors', price: '5,571', icon: 'visitors.svg', total: ' Since yesterday', scale: 'up' },
    { title: 'Total Page Views', price: '5,571', icon: 'views.svg', total: 'Total 5', scale: 'down' },
    { title: 'Total Orders', price: '2,124', icon: 'power.svg', total: 'Total 5', scale: 'up' },
    { title: 'Total Sales', price: '5,571', icon: 'walletgreen.svg', total: 'Total 5', scale: 'up' },
    { title: 'Total Registered Users', price: '5,571', icon: 'userpurple.svg', total: 'Total 5', scale: 'up' },
  ];


  const Dashboard = () => {
    return (
      <>
        <div className='date-card'>
        <CustomDatePicker/>
        </div>
        <div className="card-grid">
          {cardsData.map((card, index) => (
            <div key={index} className='card-box' >
              <CommonCards data={card} />
            </div>
          ))}
        </div>
        <div className='graph-flex-box'>
          <div className='right-box'>
            <SaleChart />
          </div>
          <div className='left-box'>
            <DeviceProgress />
          </div>
        </div>
        <div className='theme-card'>
          <TopProducts />
        </div>
      </>
    )
  }
  const tabsData = [
    { eventKey: 'dashboard', title: <TabTitle title="Dashboard" />, content: <Dashboard /> },
    { eventKey: 'products', title: <TabTitle title="Products" />, content: <InsightProducts /> },
  ];
  // main return
  return (
    <div className='insight-wrapped'>
      <DashboardHeader heading="Customer Management" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
        <CustomTabs tabsData={tabsData} defaultActiveKey="dashboard" />
      </div>
    </div>
  )
}

export default Insight;
