import React from 'react'
import DashboardHeader from '../../dasboardheader'
import { CustomTabs,ReturnData,TabTitle } from '../../../components';

const ReturnOrder = () => {
    const breadcrumbdata = [
        {
            name: 'Orders',
            links: '/orders'
        },
        {
            name: 'Returns',
            links: '/orders/return'
        }
    ]

    const tabsData = [
        { eventKey: 'All', title: <TabTitle title="All" count={6} />, content: < ReturnData /> },
        { eventKey: 'Return Initiated', title: <TabTitle title="Pending" count={2} />, content: < ReturnData /> },
        { eventKey: 'Return Received', title: <TabTitle title="Shipped" count={6} />, content: < ReturnData /> },
        { eventKey: 'Refunded', title: <TabTitle title="Delivered" count={6} />, content: < ReturnData /> },
        { eventKey: 'Rejected', title: <TabTitle title="Delivery Failed" count={6} />, content: < ReturnData /> },
        { eventKey: 'Cancelled', title: <TabTitle title="Cancelled" count={6} />, content: < ReturnData /> },
    ];


    return (
        <div className='orderlisting-wrapped'>
            <DashboardHeader heading="Manage Returns" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CustomTabs tabsData={tabsData} defaultActiveKey="All" />
            </div>
        </div>
    )
}

export default ReturnOrder;
