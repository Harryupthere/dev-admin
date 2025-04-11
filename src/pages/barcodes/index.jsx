import React from 'react'
import DashboardHeader from '../dasboardheader'
import { BarcodesForm } from '../../components'

const Barcodes = () => {
    const breadcrumbdata = [
        {
            name: 'Logistics',
            links: '/logistics/inventory'
        },
        {
            name: 'Barcodes',
            links: '/logistics/barcodes'
        }
    ]

    // main return
    return (
        <div className='barcodes-wrapped'>
            <DashboardHeader heading="AWB Barcodes" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <div className='width_50_1920'>
                <BarcodesForm/>
                </div>
            </div>
        </div>
    )
}

export default Barcodes;
