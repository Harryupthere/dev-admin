import React from 'react'
import './manageorders.scss'
import DashboardHeader from "../dasboardheader";
import { Tabs, Tab } from 'react-bootstrap';
const ManageOrders = () => {

  const breadcrumbdata = [
    {
      name: "Manage ",
      links: "",
    },
    {
      name: "Orders",
      links: "",   
    },
   
    
    


    
  ];


  return (
   <>
    <DashboardHeader
        heading="Manage Orders"
        breadcrumbdata={breadcrumbdata}
      />

     <div className='main'>
        <div className='commontabs tab-new-data-vs'>
          <Tabs
            defaultActiveKey="all"
            id="uncontrolled-tab-example" > 
            <Tab eventKey="all" title="All">
             
            </Tab>
            <Tab eventKey="pending" title="Pending">
           
            </Tab>
            <Tab eventKey="shipped" title="Shipped">
         
            </Tab>
            <Tab eventKey="delivered" title="Delivered">
         
            </Tab>
            <Tab eventKey="delivery_failed" title="Delivery Failed">
            
            </Tab>
            <Tab eventKey="Cancelled" title="Cancelled">
            
            </Tab>
            <Tab eventKey="return_exchange" title="Return & Exchange">
            
            </Tab>
          </Tabs>
        </div>
      </div>
   </>
  )
}

export default ManageOrders