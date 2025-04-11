import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CustomTabs, FinanceSummary, FinanceTransactionTable, PaymentTable, TabTitle, TotalPaymentCards, TotalTransactionCards, Transactionsfilter } from '../../components';
import './finance.scss'

const Finance = () => {
    const breadcrumbdata = [
        {
            name: 'Finance',
            links: '/finance'
        },
    ]
    const paymenttabs = [
        { eventKey: 'delivery', title: <TabTitle title="Koombiyo Delivery" />, content: <PaymentTable /> },
        { eventKey: 'payhere', title: <TabTitle title="PayHere" />, content: <PaymentTable /> },
    ];
    const FinanceTransactions = () => {
        return (
            <>
                <Transactionsfilter />
                <TotalTransactionCards />
                <FinanceTransactionTable />
            </>
        )
    }
    const Payments = () => {
        return (
            <>
                <Transactionsfilter />
                <TotalPaymentCards />
                <div className='child-tabs'>
                <CustomTabs tabsData={paymenttabs} defaultActiveKey="delivery" />
                </div>
            </>
        )
    }
    const tabsData = [
        { eventKey: 'summery', title: <TabTitle title="Summary" />, content: <FinanceSummary /> },
        { eventKey: 'transactions', title: <TabTitle title="Transaction Details" />, content: <FinanceTransactions /> },
        { eventKey: 'payment', title: 'Payments', content: <Payments /> }
    ];


    return (
        <div className='Finance-wrapped'>
            <DashboardHeader heading="Finance" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CustomTabs tabsData={tabsData} defaultActiveKey="summery" />
            </div>
        </div>
    )
}

export default Finance;
