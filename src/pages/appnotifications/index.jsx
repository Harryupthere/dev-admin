import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CustomTabs, TabTitle, AppNotificationData } from '../../components'

const AppNotifications = () => {
    const breadcrumbdata = [
        {
            name: 'Notifications Manager',
            links: '/notifications/app-notification'
        },
        {
            name: 'In App Notification',
            links: '/notifications/app-notification'
        }
    ]

    const tabsData = [
        { eventKey: 'notification', title: <TabTitle title="Notifications Sent" />, content: <AppNotificationData /> },
    ];
    // main return
    return (
        <div className='insight-wrapped'>
            <DashboardHeader heading="In App Notifications" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CustomTabs tabsData={tabsData} defaultActiveKey="notification" />
            </div>
        </div>
    )
}

export default AppNotifications;
