import React from 'react'
import DashboardHeader from '../dasboardheader'
import { AddName, ProductDescriptions, UploadMainImg, UserProfilePicAndName, Variants, WarrantyInfo } from '../../components'
import './addproducts.scss'
import "quill/dist/quill.core.css";
// import { SuccessMessage } from '../../components';

const AddCategories = () => {
    const breadcrumbdata = [
        {
            name: 'Products',
            links: '/products'
        },
        {
            name: 'Categories',
            links: '/products/categories'
        },
        {
            name: 'Add New Category',
            links: '/products/categories/add'
        }
    ]
    return (
        <div className='add-products'>
            <DashboardHeader heading="Add New Product" breadcrumbdata={breadcrumbdata} />
            <div className='main'>
                <AddName />
                <div className='upload-main-img theme-card'>
                    <div className='input-main-data'>
                        <label>Main Images</label>
                    </div>
                    <UploadMainImg/>
                </div>
                <ProductDescriptions />
                <Variants/>
                <WarrantyInfo/>
                <div className='user-action action-card'>
                    <UserProfilePicAndName/>
                    <div className='action-btns'>
                        <button type='button' className='orange_border_btn'>Cancel</button>
                        <button type='button' className='orange_button'>Publish</button>
                    </div>
                </div>
                {/* <SuccessMessage message="Product Published Successfully"/> */}
            </div>
        </div>
    )
}

export default AddCategories;
