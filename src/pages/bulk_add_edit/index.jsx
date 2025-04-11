import React from 'react'
import DashboardHeader from '../dasboardheader'
import { AddEditTabs, AddUploadFiles, CustomTabs, DownloadTemplate, EditDownloadFile, EditUploadFiles, TabTitle } from '../../components'
import './bulk_add_edit.scss'
const BulkAddEdit = () => {
  const breadcrumbdata = [
    {
      name: 'Products',
      links: '/products'
    },
    {
      name: 'Bulk Add & Edit',
      links: '/products/add-edit'
    },
  ]
  const addTabs = [
    { eventKey: 'download', title: <TabTitle title="Download Template" />, content: <DownloadTemplate /> },
    { eventKey: 'upload', title: <TabTitle title="Upload File" />, content: <AddUploadFiles /> },
  ];
  const editTabs = [
    { eventKey: 'download', title: <TabTitle title="Download File" />, content: <EditDownloadFile /> },
    { eventKey: 'upload', title: <TabTitle title="Upload File" />, content: <EditUploadFiles /> },
  ];

  const AddProduct = () => {
    return (
      <>
        <CustomTabs tabsData={addTabs} defaultActiveKey="download" />
      </>
    )
  }
  const EditProduct = () => {
    return (
      <>
        <CustomTabs tabsData={editTabs} defaultActiveKey="download" />
      </>
    )
  }
  return (
    <div className='bulk-add-wrapped'>
      <DashboardHeader heading="Bulk Add/ Edit Products" breadcrumbdata={breadcrumbdata} />
      <div className='inner-content'>
        <div className='main'>
          <AddEditTabs addtab={<AddProduct />} edittab={<EditProduct />} />
        </div>
      </div>
    </div>
  )
}

export default BulkAddEdit;
