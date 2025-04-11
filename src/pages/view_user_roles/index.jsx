import React from 'react'
import { CustomCheckList } from '../../components'
import DashboardHeader from '../dasboardheader';
import './view_user_roles.scss'
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
];
const breadcrumbdata = [
  {
    name: 'User Management',
    links: '/users'
  },
  {
      name: 'View user role ',
      links: '/users/view-roles'
    }
]
const ViewRoles = () => {
  return (
    <div className='create-role-wrapped view-roles'>
      <DashboardHeader heading="Create User Roles & Permissions" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
        <div className='role-content-wrap'>
          <div className='theme-card'>
           <div className='user-role'>
            <label>User Role Title</label>
            <p>Manager</p>
           </div>
            <div className='input-main-data'>
              <label>Permissions<span className='asterisk'>*</span></label>
            </div>
            <CustomCheckList items={accordionData} headercheck={true}/>
          </div>
          <div className='actionbtn'>
            {/* <button type='button' className='orange_border_btn'>Cancel</button> */}
            <button type='button' className='orange_button'>Edit</button>
          </div>
      </div>
      </div>
    </div>

  )
}

export default ViewRoles
