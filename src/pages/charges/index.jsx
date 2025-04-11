import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CustomTabs, TabTitle,Chargestable } from '../../components'

const Charges = () => {
    const breadcrumbdata = [
        {
            name: 'Finance',
            links: '/finance'
        },
        {
            name: 'Charges',
            links: '/finance/charges'
        }
    ]

    const tabsData = [
        { eventKey: 'payhere', title: <TabTitle title="PayHere" />, content: <Chargestable /> },
    ];
    // main return
    return (
        <div className='insight-wrapped'>
            <DashboardHeader heading="Charges" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CustomTabs tabsData={tabsData} defaultActiveKey="payhere" />
            </div>
        </div>
    )
}

export default Charges;
