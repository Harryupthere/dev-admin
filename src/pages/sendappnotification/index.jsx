import React from 'react'
import DashboardHeader from '../dasboardheader'
import { SendAppNotificacationForm } from '../../components'

const SendAppNotifications = () => {
    const breadcrumbdata = [
        {
            name: 'Notifications Manager',
            links: '/notifications/app-notification'
        },
        {
            name: 'In App Notification',
            links: '/notifications/app-notification'
        },
        {
            name: 'Send New in App Notification',
            links: '/notifications/send-app-notification'
        }
    ]


    // main return
    return (
        <div className='insight-wrapped'>
            <DashboardHeader heading="Send New Notification" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <SendAppNotificacationForm />
            </div>
        </div>
    )
}

export default SendAppNotifications;
