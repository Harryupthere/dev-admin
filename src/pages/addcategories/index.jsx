import React from 'react'
import DashboardHeader from '../dasboardheader'
import { AddCategoryForm } from '../../components'

const AddCategories = () => {
    const breadcrumbdata = [
        {
            name: 'Products',
            links: '/products'
        },
        {
            name: 'Add New Product',
            links: '/products/categories'
        },
        {
            name: 'Add New Product',
            links: '/products/categories/add'
        }
    ]

    return (
        <div className='add-wrapped'>
            <DashboardHeader heading="Add New Category" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <AddCategoryForm />
            </div>
        </div>
    )
}

export default AddCategories;
