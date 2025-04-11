import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CustomTabs, TabTitle, SmsNotificationData } from '../../components'

const SmsNotificaions = () => {
    const breadcrumbdata = [
        {
            name: 'Notifications Manager',
            links: '/notifications/app-notification'
        },
        {
            name: 'SMS Notification',
            links: '/notifications/sms-notification'
        }
    ]

    const tabsData = [
        { eventKey: 'notification', title: <TabTitle title="Notifications Sent" />, content: <SmsNotificationData /> },
    ];
    // main return
    return (
        <div className='insight-wrapped'>
            <DashboardHeader heading="In SMS Notifications" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CustomTabs tabsData={tabsData} defaultActiveKey="notification" />
            </div>
        </div>
    )
}

export default SmsNotificaions;
