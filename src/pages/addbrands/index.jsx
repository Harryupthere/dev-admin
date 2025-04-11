import React from 'react'
import DashboardHeader from '../dasboardheader'
import { AddBrandForm } from '../../components'

const AddBrand   = () => {
    const breadcrumbdata = [
        {
            name: 'Products',
            links: '/products'
        },
        {
            name: 'Brands',
            links: '/products/brands'
        },
        {
            name: 'Add New Brand',
            links: '/products/brands/add'
        }
    ]

    return (
        <div className='add-wrapped'>
            <DashboardHeader heading="Add New Brand" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <AddBrandForm />
            </div>
        </div>
    )
}

export default AddBrand ;
