import React from 'react'
import DashboardHeader from '../dasboardheader'
import { BugReportData, CustomercareData, CustomTabs, HelpFilter, PendingHelpData, TabTitle } from '../../components';
const HelpCenter = () => {
    const breadcrumbdata = [
        {
            name: 'Help Desk',
            links: '/help'
        },
    ]
    const bugreportTabs = [
        { eventKey: 'action', title: <TabTitle title="To be take action" count={2}/>, content: <BugReportData /> },
        { eventKey: 'solve', title: <TabTitle title="Solved" />, content: <BugReportData /> },
        { eventKey: 'close', title: <TabTitle title="Closed" />, content: <BugReportData /> },
    ];
    const customercareTabs = [
        { eventKey: 'pending', title: <TabTitle title="Pending" count={1}/>, content: <CustomercareData /> },
        { eventKey: 'close', title: <TabTitle title="Closed" />, content: <CustomercareData /> },
    ];

    const BugReport = () => {
        return (
            <>
                <HelpFilter />
                <div className='child-tabs'>
                    <CustomTabs tabsData={bugreportTabs} defaultActiveKey="action" />
                </div>
            </>
        )
    }
    const CustomerCare = () => {
        return (
            <>
                <HelpFilter />
                <div className='child-tabs'>
                    <CustomTabs tabsData={customercareTabs} defaultActiveKey="pending" />
                </div>
            </>
        )
    }
    const tabsData = [
        { eventKey: 'pending', title: <TabTitle title="Pending Review" count={3} />, content: < PendingHelpData /> },
        { eventKey: 'buy', title: <TabTitle title="Bug Report" count={2} />, content: < BugReport /> },
        { eventKey: 'customercare', title: <TabTitle title="Customer Care" count={1} />, content: <CustomerCare /> }
    ];


    return (
        <div className='Help-wrapped'>
            <DashboardHeader heading="Help Desk" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CustomTabs tabsData={tabsData} defaultActiveKey="pending" />
            </div>
        </div>
    )
}

export default HelpCenter;
