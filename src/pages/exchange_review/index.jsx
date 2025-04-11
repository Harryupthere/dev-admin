import React from 'react'
import DashboardHeader from '../dasboardheader'
import { ExchangeReviewForm } from '../../components';

const ExchangeReview = () => {
    const breadcrumbdata = [
        {
            name: 'Orders',
            links: '/orders'
        },
        {
            name: 'Exchange',
            links: '/orders/exchange'
        },
        {
            name: 'Form',
            links: '/orders/exchange/form'
        },
    ]

    return (
        <div className='Help-wrapped'>
            <DashboardHeader heading="Review Request" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <ExchangeReviewForm/>
            </div>
        </div>
    )
}

export default ExchangeReview;
