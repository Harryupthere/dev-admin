import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CreateCampaignsForm } from '../../components'

const CreateCampaigns = () => {
    const breadcrumbdata = [
        {
            name: 'Campaigns',
            links: '/campaigns'
        },
        {
            name: 'Create campaign',
            links: '/campaigns/create-campaigns'
        },
    ]


    // main return
    return (
        <div className='campaigns-wrapped'>
            <DashboardHeader heading="Create New Campaign" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CreateCampaignsForm />
            </div>
        </div>
    )
}

export default CreateCampaigns;
