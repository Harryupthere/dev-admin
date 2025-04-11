import React from 'react'
import DashboardHeader from '../dasboardheader'
import {  CustomTabs, ReviewsData, TabTitle } from '../../components';

const Reviews = () => {
    const breadcrumbdata = [
        {
            name: 'Reviews',
            links: '/reviews'
        },
    ]

    const tabsData = [
        { eventKey: 'all', title: <TabTitle title="All" />, content: < ReviewsData /> },
        { eventKey: 'pending', title: <TabTitle title="Pending Approval" count={2} />, content: < ReviewsData /> },
        { eventKey: 'published', title: <TabTitle title="Published" count={1} />, content: <ReviewsData /> },
        { eventKey: 'rejected', title: <TabTitle title="Rejected" count={1} />, content: <ReviewsData /> }
    ];


    return (
        <div className='Help-wrapped'>
            <DashboardHeader heading="Manage Reviews" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CustomTabs tabsData={tabsData} defaultActiveKey="all" />
            </div>
        </div>
    )
}

export default Reviews;
