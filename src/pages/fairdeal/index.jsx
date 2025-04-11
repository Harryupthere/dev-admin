import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CustomTabs, FairDealData, TabTitle } from '../../components'
const FairDeal = () => {
  const breadcrumbdata = [
    {
      name: 'Campaigns',
      links: '/campaigns'
    },
    {
        name: 'FairDeal',
        links: '/campaigns/fairdeal'
      }
  ]
  const tabsData = [
    { eventKey: 'upcoming', title: <TabTitle title="Upcoming" count={4} />, content: <FairDealData /> },
    { eventKey: 'live', title: <TabTitle title="Live" count={1}/>, content: <FairDealData /> },
    { eventKey: 'ended', title: 'Ended', content: <FairDealData /> },
    { eventKey: 'deleted', title: 'Deleted', content: <FairDealData /> }
  ];

  return (
    <div className='customer'>
      <DashboardHeader heading="Manage FairDeal" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
        <CustomTabs tabsData={tabsData} defaultActiveKey="upcoming" />
      </div>
    </div>
  )
}

export default FairDeal;
