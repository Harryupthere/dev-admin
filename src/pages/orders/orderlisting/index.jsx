import React from 'react'
import DashboardHeader from '../../dasboardheader'
import { CustomTabs,OrdersData,OrdersFilter,TabTitle } from '../../../components';

const OrderListing = () => {
    const breadcrumbdata = [
        {
            name: 'Orders',
            links: '/orders'
        },
    ]

    const pendingtabs = [
        { eventKey: 'first', title: <TabTitle title="To Print" count={6} />, content: < OrdersData /> },
        { eventKey: 'second', title: <TabTitle title="To Pack" count={2} />, content: <OrdersData /> },
        { eventKey: 'third', title: <TabTitle title="Ready to Ship" count={2} />, content: <OrdersData /> },
    ]
    const All = () => {
        return (
            <>
                <OrdersFilter />
                <OrdersData/>
            </>
        )
    }
    const Pending = () => {
        return (
            <>
                <OrdersFilter />
                <div className='child-tabs'>
                    <CustomTabs tabsData={pendingtabs} defaultActiveKey="first" />
                </div>
            </>
        )
    }
    const tabsData = [
        { eventKey: 'All', title: <TabTitle title="All" count={6} />, content: < All /> },
        { eventKey: 'Pending', title: <TabTitle title="Pending" count={2} />, content: < Pending /> },
        { eventKey: 'Shipped', title: <TabTitle title="Shipped" count={6} />, content: < All /> },
        { eventKey: 'Delivered', title: <TabTitle title="Delivered" count={6} />, content: < All /> },
        { eventKey: 'Delivery Failed', title: <TabTitle title="Delivery Failed" count={6} />, content: < All /> },
        { eventKey: 'Cancelled', title: <TabTitle title="Cancelled" count={6} />, content: < All /> },
        { eventKey: 'Return & Exchange', title: <TabTitle title="Return & Exchange" count={6} />, content: < All /> },
    ];


    return (
        <div className='orderlisting-wrapped'>
            <DashboardHeader heading="Manage Orders" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CustomTabs tabsData={tabsData} defaultActiveKey="All" />
            </div>
        </div>
    )
}

export default OrderListing;
