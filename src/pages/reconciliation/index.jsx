import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CustomTabs, ReconcilitionTable, ReconsilitionFilter, TabTitle, TotalReconcilitionCards } from '../../components';

const Reconciliation = () => {
    const breadcrumbdata = [
        {
            name: 'Reconciliation',
            links: '/finance/reconciliation'
        },
    ]

    const FinanceTransactions = () => {
        return (
            <>
                <ReconsilitionFilter />
                <TotalReconcilitionCards />
                <ReconcilitionTable />
            </>
        )
    }

    const tabsData = [
        { eventKey: 'pending', title: <TabTitle title="Pending" />, content: <FinanceTransactions /> },
        { eventKey: 'reconciled', title: <TabTitle title="Reconciled" />, content: <FinanceTransactions /> },
    ];


    return (
        <div className='Finance-wrapped'>
            <DashboardHeader heading="Koombiyo Reconciliation" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CustomTabs tabsData={tabsData} defaultActiveKey="pending" />
            </div>
        </div>
    )
}

export default Reconciliation;
