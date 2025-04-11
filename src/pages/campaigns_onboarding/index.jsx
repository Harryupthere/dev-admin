import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CustomTabs, TabTitle,CampaignOnboardingData, WelcomeCard } from '../../components'
import './campaigns_onboarding.scss'

const CampaignsOnboarding = () => {
    const breadcrumbdata = [
        {
            name: 'Campaigns',
            links: '/campaigns'
        },
        {
            name: 'Campaign Onboarding',
            links: '/campaigns/campaign-onboarding'
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
                <WelcomeCard/>
                <CustomTabs tabsData={tabsData} defaultActiveKey="register" />
            </div>
        </div>
    )
}

export default CampaignsOnboarding;
