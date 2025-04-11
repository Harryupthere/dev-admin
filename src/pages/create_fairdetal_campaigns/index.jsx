import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CreateFairdealCampaigns } from '../../components'

const CreateFairDealCampaigns = () => {
    const breadcrumbdata = [
        {
            name: 'Campaigns',
            links: '/campaigns'
        },
        {
            name: 'FairDeal',
            links: '/campaigns/fairdeal'
        },
        {
            name: 'Create campaign',
            links: '/campaigns/fairdeal/create-campaigns'
        },
    ]


    // main return
    return (
        <div className='campaigns-wrapped'>
            <DashboardHeader heading="Create New Campaign" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CreateFairdealCampaigns />
            </div>
        </div>
    )
}

export default CreateFairDealCampaigns;
