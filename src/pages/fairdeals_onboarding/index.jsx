import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CustomTabs, TabTitle,CampaignOnboardingData } from '../../components'
import { images } from '../../utils/customFn'

const FairdealOnboarding = () => {
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
            name: 'Product Onboarding',
            links: '/campaigns/fairdeal/onboarding'
        }
    ]

    
    const tabsData = [
        { eventKey: 'register', title: <TabTitle title="Register Products to campaign" />, content: <CampaignOnboardingData /> },
        { eventKey: 'registered', title: <TabTitle title="Products registered to campaign " />, content: <CampaignOnboardingData /> },

    ];
    // main return
    return (
        <div className='campaigns-onboarding-wrapped'>
            <DashboardHeader heading="Manage Campaigns" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <div className='action-card fairdeal-product-img'>
                    <img src={images['fairdeal.png']} alt='product'/>
                </div>
                <CustomTabs tabsData={tabsData} defaultActiveKey="register" />
            </div>
        </div>
    )
}

export default FairdealOnboarding;
