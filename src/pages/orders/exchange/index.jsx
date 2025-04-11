import React from 'react'
import DashboardHeader from '../../dasboardheader'
import { CustomTabs,ExchangeData,ExchangeFilter,TabTitle } from '../../../components';

const Exchange = () => {
    const breadcrumbdata = [
        {
            name: 'Orders',
            links: '/orders'
        },
        {
            name: 'Exchanges',
            links: '/orders/exchange'
        },
    ]

    const assignedtabs = [
        { eventKey: 'first', title: <TabTitle title="To Print" count={6} />, content: < ExchangeData /> },
        { eventKey: 'second', title: <TabTitle title="To Pack" count={2} />, content: <ExchangeData /> },
        { eventKey: 'third', title: <TabTitle title="Ready to Ship" count={2} />, content: <ExchangeData /> },
    ]
    const All = () => {
        return (
            <>
                <ExchangeFilter />
                <ExchangeData/>
            </>
        )
    }
    const Assigned = () => {
        return (
            <>
                <ExchangeFilter/>
                <div className='child-tabs'>
                    <CustomTabs tabsData={assignedtabs} defaultActiveKey="first" />
                </div>
            </>
        )
    }
    const tabsData = [
        { eventKey: 'All', title: <TabTitle title="All" count={6} />, content: < All /> },
        { eventKey: 'Exchange-Initiated ', title: <TabTitle title="Exchange Initiated" count={2} />, content: < All /> },
        { eventKey: 'Exchange-Received', title: <TabTitle title="Exchange Received" count={6} />, content: < All /> },
        { eventKey: 'Assigned', title: <TabTitle title="Assigned" count={6} />, content: < Assigned /> },
        { eventKey: 'Exchanged', title: <TabTitle title="Exchanged" count={6} />, content: < All /> },
        { eventKey: 'Rejected', title: <TabTitle title="Rejected" count={6} />, content: < All /> },
        { eventKey: 'Cancelled', title: <TabTitle title="Cancelled" count={6} />, content: < All /> },
    ];


    return (
        <div className='exchange-wrapped'>
            <DashboardHeader heading="Manage Exchanges" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CustomTabs tabsData={tabsData} defaultActiveKey="All" />
            </div>
        </div>
    )
}

export default Exchange;
