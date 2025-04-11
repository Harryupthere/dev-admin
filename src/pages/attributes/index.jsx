import React from 'react'
import DashboardHeader from '../dasboardheader'
import { AddAttribute, AttributeTable, CustomTabs, TabTitle } from '../../components'
import './attributes.scss'
const AttributeList = () => {
    const breadcrumbdata = [
        {
            name: 'Products',
            links: '/products'
        },
        {
            name: 'Attributes List',
            links: '/products/attributes'
        }
    ]
    const tabsData = [
        { eventKey: 'variants', title: <TabTitle title="Product Variants" />, content: <AttributeTable /> },
        { eventKey: 'cost', title: <TabTitle title="Packing Cost" />, content: <AttributeTable /> },
        { eventKey: 'warranty', title: <TabTitle title="Warranty" />, content: <AttributeTable /> },
    ];

    return (
        <div className='attribute-list'>
            <DashboardHeader heading="Manage Attributes" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <div className='flex-box'>
                    <div className='listing'>
                        <CustomTabs tabsData={tabsData} defaultActiveKey="variants" />
                    </div>
                    <div className='add'>
                        <AddAttribute/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttributeList;
