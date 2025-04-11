import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CustomTabs, LogisticData,TabTitle } from '../../components';
import LogisticsFilter from '../../components/logistics/logistics_filter';

const Logistics = () => {
    const breadcrumbdata = [
        {
            name: 'Logistics',
            links: '/logistics'
        },
        {
            name: 'Inventory',
            links: '/logistics/inventory'
        },
    ]

    const shippedtabs = [
        { eventKey: 'all', title: <TabTitle title="All" count={6} />, content: < LogisticData /> },
        { eventKey: '30days', title: <TabTitle title="Shipped More than 30 Days" count={2} />, content: <LogisticData /> },
        { eventKey: 'return', title: <TabTitle title="Return to Warehouse Requested" count={2} />, content: <LogisticData /> },
        { eventKey: '60days', title: <TabTitle title="Shipped More than 60 Days" count={2} />, content: <LogisticData /> },

    ]
    const deliverytabs = [
        { eventKey: 'first', title: <TabTitle title="Delivery Failed item yet to receive" count={6} />, content: < LogisticData /> },
        { eventKey: 'second', title: <TabTitle title="Didn’t receive the item More than 30 Days" count={2} />, content: <LogisticData /> },
        { eventKey: 'third', title: <TabTitle title="Didn’t receive the item More than 60 Days" count={2} />, content: <LogisticData /> },
    ]
    const Shipped = () => {
        return (
            <>
                <LogisticsFilter />
                <div className='child-tabs'>
                    <CustomTabs tabsData={shippedtabs} defaultActiveKey="all" />
                </div>
            </>
        )
    }
    const DeliveryFaild = () => {
        return (
            <>
                <LogisticsFilter />
                <div className='child-tabs'>
                    <CustomTabs tabsData={deliverytabs} defaultActiveKey="first" />
                </div>
            </>
        )
    }
    const tabsData = [
        { eventKey: 'shipped', title: <TabTitle title="Shipped" count={6} />, content: < Shipped /> },
        { eventKey: 'failed', title: <TabTitle title="Delivery Failed" count={2} />, content: < DeliveryFaild /> },
    ];


    return (
        <div className='logistics-wrapped'>
            <DashboardHeader heading="Manage Logistics" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CustomTabs tabsData={tabsData} defaultActiveKey="shipped" />
            </div>
        </div>
    )
}

export default Logistics;
