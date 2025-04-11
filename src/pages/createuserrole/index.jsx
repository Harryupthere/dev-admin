import React from 'react'
import { CustomCheckList } from '../../components'
import DashboardHeader from '../dasboardheader';
import './createuserrole.scss'
const accordionData = [
  {
    header: 'Home',
    checkboxes: [
      { label: 'View Home', value: 'view_home' },
    ],
  },
  {
    header: 'Customers',
    checkboxes: [
      { label: 'View Users', value: 'view_users' },
      { label: 'Block Users', value: 'block_users' },
      { label: 'Unblock Users', value: 'unblock_users' },
      { label: 'Export', value: 'export' },
      { label: 'Edit Customer Details', value: 'edit_customer_details' },
    ],
  },
  {
    header: 'Products',
    checkboxes: [
      { label: 'Add New Product', value: 'add_new_product' },
      { label: 'View Product List [Manage Products]', value: 'view_product_list' },
      { label: 'Inactivate Product', value: 'inactivate_product' },
      { label: 'Activate Product', value: 'activate_product' },
      { label: 'Delete Product - All', value: 'delete_product_all' },
      { label: 'Delete Product - Created by the user', value: 'delete_product_user' },
      { label: 'Permanently Delete Product', value: 'permanently_delete_product' },
      { label: 'Edit Product - All', value: 'edit_product_all' },
      { label: 'Edit Product - Created by the user', value: 'edit_product_user' },
      { label: 'Edit Price - From Product list', value: 'edit_price_product_list' },
      { label: 'Edit Stocks - From Product list', value: 'edit_stocks_product_list' },
      { label: 'Edit Product Cost - From Product list', value: 'edit_product_cost_product_list' },
    ],
  },
  {
    header: 'Bulk Add/ Edit',
    checkboxes: [
      { label: 'Download Template - Add Product', value: 'download_template_add_product' },
      { label: 'Download Category List - Add Product', value: 'download_category_list_add_product' },
      { label: 'Upload File - Add Product', value: 'upload_file_add_product' },
      { label: 'All Segments - Edit Product', value: 'all_segments_edit_product' },
      { label: 'Basic Information Segment - Edit Product', value: 'basic_info_segment_edit_product' },
      { label: 'Price and Stocks Segment - Edit Product', value: 'price_stocks_segment_edit_product' },
      { label: 'Variant Images - Edit Product', value: 'variant_images_edit_product' },
      { label: 'Weight Segment - Edit Product', value: 'weight_segment_edit_product' },
      { label: 'Download File - Edit Product', value: 'download_file_edit_product' },
      { label: 'Upload File - Edit Product', value: 'upload_file_edit_product' },
    ],
  },
  {
    header: 'Categories',
    checkboxes: [
      { label: 'Add New Category', value: 'add_new_category' },
      { label: 'Export Categories', value: 'export_categories' },
      { label: 'Edit Category', value: 'edit_category' },
      { label: 'Delete Category', value: 'delete_category' },
    ],
  },
  {
    header: 'Brands',
    checkboxes: [
      { label: 'Add New Brand', value: 'add_new_brand' },
      { label: 'Edit Brand', value: 'edit_brand' },
      { label: 'Delete Brand', value: 'delete_brand' },
      { label: 'Switch Brands - Authorized/ Non Authorized', value: 'switch_brands_auth_non_auth' },
    ],
  },
  {
    header: 'Attributes',
    checkboxes: [
      { label: 'Add New Variant - Product Variants', value: 'add_new_variant_product_variants' },
      { label: 'Edit Variant - Product Variants', value: 'edit_variant_product_variants' },
      { label: 'Delete Variant - Product Variants', value: 'delete_variant_product_variants' },
      { label: 'Add New Class - Packing Cost', value: 'add_new_class_packing_cost' },
      { label: 'Edit Class - Packing Cost', value: 'edit_class_packing_cost' },
    ],
  },
];
const breadcrumbdata = [
  {
    name: 'User Management',
    links: '/users'
  },
  {
      name: 'Create Permissions ',
      links: '/users/create-role'
    }
]
const CreateRole = () => {
  return (
    <div className='create-role-wrapped'>
      <DashboardHeader heading="Create User Roles & Permissions" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
        <div className='role-content-wrap'>
          <div className='theme-card'>
            <div className='input-main-data'>
              <label>User Role Title<span className='asterisk'>*</span></label>
              <input type='text' placeholder='Manager' />
            </div>
            <div className='input-main-data'>
              <label>Permissions<span className='asterisk'>*</span></label>
            </div>
            <CustomCheckList items={accordionData} headercheck={true}/>
          </div>
          <div className='actionbtn'>
            <button type='button' className='orange_border_btn'>Cancel</button>
            <button type='button' className='orange_button'>Save</button>
          </div>
      </div>
      </div>
    </div>

  )
}

export default CreateRole
