import React from "react";
import "./customerdetails.scss";
import DashboardHeader from "../dasboardheader";
import { AddressCard, CommonCards, OrderHistoryTable, ProfileCard, ProfileForm, ReviewsTable } from "../../components";
const CustomerDetails = () => {
  const breadcrumbdata = [
    {
      name: "Customers",
      links: "/customers",
    },
    {
      name: "Customer Details",
      links: "/customers/detail",
    },
  ];

  const cardsData = [
    {
      title: "Total Sales",
      price: "Rs. 2,012,050",
      icon: "walletgreen.svg",
    },
    {
      title: "Total Profit",
      price: "Rs. 100,000",
      icon: "profitred.svg",
  
    },
    {
      title: "Total Orders",
      price: "7",
      icon: "order.svg",
    },
    {
      title: "Total Reveiws",
      price: "4",
      icon: "reviewicon.svg",
    },
   
  ];



  return (
    <>
      <DashboardHeader
        heading="Customer Details"
        breadcrumbdata={breadcrumbdata}
      />

      <div className="main">
        <div className="vs-data-flex">
          <div className="right-data">
            <ProfileCard/>
            <ProfileForm/>
            <AddressCard/>
          </div>
          <div className="left-data">
            <div className="data-cards-layout">
              {cardsData.map((card, index) => (
                <div
                  key={index}  className="card-rows">
                  <CommonCards data={card} />
                </div>
              ))}
            </div>
            
            <OrderHistoryTable/>
            <ReviewsTable/>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;
