import React from 'react'
import DashboardHeader from '../dasboardheader'
import {  SendSmsNotificationForm } from '../../components'

const SendSmsNotification = () => {
    const breadcrumbdata = [
        {
            name: 'Notifications Manager',
            links: '/notifications/sms-notification'
        },
        {
            name: 'SMS Notification',
            links: '/notifications/sms-notification'
        },
        {
            name: 'Send New SMS Notification',
            links: '/notifications/send-sms-notification'
        }
    ]


    // main return
    return (
        <div className='insight-wrapped'>
            <DashboardHeader heading="Send New Notification" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <SendSmsNotificationForm />
            </div>
        </div>
    )
}

export default SendSmsNotification;
