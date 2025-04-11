import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CampaignsData,CustomTabs, TabTitle } from '../../components'
const Campaigns = () => {
  const breadcrumbdata = [
    {
      name: 'Campaigns',
      links: '/campaigns'
    }
  ]
  const tabsData = [
    { eventKey: 'upcoming', title: <TabTitle title="Upcoming" count={4} />, content: <CampaignsData /> },
    { eventKey: 'live', title: <TabTitle title="Live" count={1}/>, content: <CampaignsData /> },
    { eventKey: 'ended', title: 'Ended', content: <CampaignsData /> },
    { eventKey: 'deleted', title: 'Deleted', content: <CampaignsData /> }
  ];

  return (
    <div className='customer'>
      <DashboardHeader heading="Manage Campaigns" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
        <CustomTabs tabsData={tabsData} defaultActiveKey="upcoming" />
      </div>
    </div>
  )
}

export default Campaigns;
