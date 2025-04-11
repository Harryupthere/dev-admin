import React from "react";
import "./orderdetails.scss";
import DashboardHeader from "../../dasboardheader";
import { DeliveryDetails, OrderDetailList, OrderHistory, OrderSummery, OrderTotal, PaymentDetails, ProfileCard } from "../../../components";
const OrderDetails = () => {
  const breadcrumbdata = [
    { name: "Orders", links: "/orders"},
    { name: "Order Details", links: "/orders/detail", },
  ];


  return (
    <>
      <DashboardHeader
        heading="Order Details"
        breadcrumbdata={breadcrumbdata}
      />

      <div className="main order-details">
        <div className="vs-data-flex">
          <div className="left-data">
            <div>
            <ProfileCard />
            <DeliveryDetails />
            </div>
            <OrderHistory/>
          </div>
          <div className="right-data">
            <OrderDetailList />
            <div className="right-flex-data">
              <div className="right-content-table">
                <OrderTotal />
                <PaymentDetails/>
              </div>
              <div className="left-content-table">
                <OrderSummery />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
