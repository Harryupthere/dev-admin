import React from 'react'
import DashboardHeader from '../../dasboardheader'
import { CustomTabs,RefundData,RefundFilter,TabTitle } from '../../../components';

const RefundListing = () => {
    const breadcrumbdata = [
        {
            name: 'Orders',
            links: '/orders'
        },
        {
            name: 'Refunds',
            links: '/orders/refunds'
        },
    ]

    const pendingtabs = [
        { eventKey: 'first', title: <TabTitle title="Cancelled" count={6} />, content: < RefundData /> },
        { eventKey: 'second', title: <TabTitle title="To Pack" count={2} />, content: <RefundData /> },
        { eventKey: 'third', title: <TabTitle title="Delivery Failed" count={2} />, content: <RefundData /> },
    ]
    const All = () => {
        return (
            <>
                <RefundFilter />
                <RefundData/>
            </>
        )
    }
    const Pending = () => {
        return (
            <>
                <RefundFilter />
                <div className='child-tabs'>
                    <CustomTabs tabsData={pendingtabs} defaultActiveKey="first" />
                </div>
            </>
        )
    }
    const tabsData = [
        { eventKey: 'All', title: <TabTitle title="All" count={6} />, content: < All /> },
        { eventKey: 'Pending', title: <TabTitle title="Pending Refunds" count={2} />, content: < Pending /> },
        { eventKey: 'Refunded', title: <TabTitle title="Refunded" count={6} />, content: < All /> },
    ];


    return (
        <div className='refund-wrapped'>
            <DashboardHeader heading="Refunds" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CustomTabs tabsData={tabsData} defaultActiveKey="All" />
            </div>
        </div>
    )
}

export default RefundListing;
