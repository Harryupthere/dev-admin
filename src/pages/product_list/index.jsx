import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CustomTabs, ProductListData, TabTitle } from '../../components';

const ProductListing = () => {
    const breadcrumbdata = [
        {
            name: 'Products',
            links: '/products'
        },
        {
            name: 'Product List',
            links: '/products'
        }
    ]

 

    const tabsData = [
        { eventKey: 'all', title: <TabTitle title="All" />, content: <ProductListData /> },
        { eventKey: 'active', title: <TabTitle title="Active" />, content: <ProductListData /> },
        { eventKey: 'outofstock', title: <TabTitle title="Out Of stock" />, content: <ProductListData /> },
        { eventKey: 'inactive', title: <TabTitle title="Inactive" />, content: <ProductListData /> },
        { eventKey: 'deleted', title: <TabTitle title="Deleted" />, content: <ProductListData /> },
    ];

    return (
        <div className='product-wrapped'>
            <DashboardHeader heading="Manage Products" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <CustomTabs tabsData={tabsData} defaultActiveKey="all" />
            </div>
        </div>
    )
}

export default ProductListing;
