import React from 'react'
import DashboardHeader from '../dasboardheader'
import { ReturnReviewForm } from '../../components';

const ReturnReview = () => {
    const breadcrumbdata = [
        {
            name: 'Orders',
            links: '/orders'
        },
        {
            name: 'Returns',
            links: '/orders/returns'
        },
        {
            name: 'Form',
            links: '/orders/returns/form'
        },
    ]

    return (
        <div className='Help-wrapped'>
            <DashboardHeader heading="Review Request" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <ReturnReviewForm/>
            </div>
        </div>
    )
}

export default ReturnReview;
