import React from "react";

import { AccountSetting, AddBrand, AddCategories, AddNewUser, AddProduct, AppNotifications, AttributeList, Barcodes, BrandList, BulkAddEdit, Campaigns, CampaignsOnboarding, Categories, Charges, CreateCampaigns, CreateExpense, CreateFairDealCampaigns, CreateNewUser, CreateRole, Customer, CustomerDetails, EditUser, Exchange, ExchangeReview, FairDeal, FairdealOnboarding, Finance, HelpCenter, Home, Insight, Logistics, ManageOrders, OrderDetails, OrderListing, ProductListing, RateCard, Reconciliation, RefundListing, ReturnOrder, ReturnReview, Reviews, SendAppNotifications, SendSmsNotification, SmsNotificaions, Users, ViewRoles } from "../pages";

const RouteArr = [
  {
    name: "Customers",
    path: "/customers",
    key: "customers",
    route: "/customers",
    element: <Customer />,
  },
  {
    name: "Home",
    path: "/",
    key: "home",
    route: "/home",
    element: <Home />,
  },
  {
    name: "CustomerDetails",
    path: "/customers/detail",
    key: "customers-detail",
    route: "/customers/detail",
    element: <CustomerDetails />,
  },
  {
    name: "ManageOrders",
    path: "/manage-orders",
    key: "manage-orders",
    route: "/manage-orders",
    element: <ManageOrders />,
  },
  // ==========orders==============
  {
    name: "OrderDetails",
    path: "/orders/detail",
    key: "orders-detail",
    route: "/orders-detail",
    element: <OrderDetails />,
  },


  //Insight
  {
    name: "Insight",
    path: "/insight",
    key: "insight",
    route: "/insight",
    element: <Insight />,
  },
  //users
  {
    name: "Users",
    path: "/users",
    key: "users",
    route: "/users",
    element: <Users />,
  },
  //add users
  {
    name: "Add Users",
    path: "/users/add-users",
    key: "add-users",
    route: "/users/add-users",
    element: <AddNewUser />,
  },

  //create new user
  {
    name: "Create New User",
    path: "/users/create-user",
    key: "create-user",
    route: "/users/create-user",
    element: <CreateNewUser />,
  },
  //Edit user
  {
    name: "Edit User",
    path: "/users/edit-user",
    key: "edit-user",
    route: "/users/edit-user",
    element: <EditUser />,
  },
  //create new role
  {
    name: "Create Role",
    path: "/users/create-role",
    key: "create-role",
    route: "/users/create-role",
    element: <CreateRole />,
  },
  //account setting
  {
    name: "Account Setting",
    path: "/users/account-setting",
    key: "account-setting",
    route: "/users/account-setting",
    element: <AccountSetting />,
  },
  //View Roles
  {
    name: "Finance",
    path: "/users/view-roles",
    key: "view-roles",
    route: "/users/view-roles",
    element: <ViewRoles />,
  },
  //account setting
  {
    name: "Finance",
    path: "/finance",
    key: "finance",
    route: "/finance",
    element: <Finance />,
  },
  //fianance charges
  {
    name: "Charges",
    path: "/finance/charges",
    key: "charges",
    route: "/finance/charges",
    element: <Charges />,
  },
  //fianance expense
  {
    name: "Create Expense",
    path: "/finance/create-expense",
    key: "create-expense",
    route: "/finance/create-expense",
    element: <CreateExpense />,
  },
  //Reconcilition
  {
    name: "Reconciliation",
    path: "/finance/reconciliation",
    key: "reconciliation",
    route: "/finance/reconciliation",
    element: <Reconciliation />,
  },
  //App notifications
  {
    name: "App Notifications",
    path: "notifications/app-notification",
    key: "app-notification",
    route: "notifications/app-notification",
    element: <AppNotifications />,
  },
  //Sms notifications
  {
    name: "Sms Notifications",
    path: "notifications/sms-notification",
    key: "sms-notification",
    route: "notifications/sms-notification",
    element: <SmsNotificaions />,
  },
  //Send app notifications
  {
    name: "Send App Notifications",
    path: "notifications/send-app-notification",
    key: "send-app-notification",
    route: "notifications/send-app-notification",
    element: <SendAppNotifications />,
  },
  //send sms notifications
  {
    name: "Send SMS Notifications",
    path: "notifications/send-sms-notification",
    key: "send-sms-notification",
    route: "notifications/send-sms-notification",
    element: <SendSmsNotification />,
  },
  //Help Center
  {
    name: "Help Center",
    path: "help",
    key: "help",
    route: "help",
    element: <HelpCenter />,
  },
  //Campaigns
  {
    name: "Manage Campaigns",
    path: "/campaigns",
    key: "campaigns",
    route: "/campaigns",
    element: <Campaigns />,
  },
  //Create Campaigns
  {
    name: "Create Campaigns",
    path: "/campaigns/create-campaigns",
    key: "create-campaigns",
    route: "/campaigns/create-campaigns",
    element: <CreateCampaigns />,
  },
  //Fair deal
  {
    name: "Fair Deal",
    path: "/campaigns/fairdeal",
    key: "fairdeal",
    route: "/campaigns/fairdeal",
    element: <FairDeal />,
  },
  // Fairdeal create Campaigns
  {
    name: "Fair Deal Create Campaigns",
    path: "/campaigns/fairdeal/create-campaigns",
    key: "fairdeal-create-campaigns",
    route: "/campaigns/fairdeal/create-campaigns",
    element: <CreateFairDealCampaigns />,
  },
  // Campaigns Onboarding
  {
    name: "Campaigns Onboarding",
    path: "/campaigns/campaign-onboarding",
    key: "Campaigns-Onboarding",
    route: "/campaigns/campaign-onboarding",
    element: <CampaignsOnboarding />,
  },
  // Fairdeal Onboarding
  {
    name: "Fairdeal Onboarding",
    path: "/campaigns/fairdeal/onboarding",
    key: "Fairdeal-Onboarding",
    route: "/campaigns/fairdeal/onboarding",
    element: <FairdealOnboarding />,
  },
  // Reviews
    {
    name: "Reviews",
    path: "/reviews",
    key: "reviews",
    route: "/reviews",
    element: <Reviews />,
  },
//  Logistics
  {
    name: "Logistics",
    path: "/logistics/inventory",
    key: "inventory",
    route: "/logistics/inventory",
    element: <Logistics />,
  },
  //Rate Card
  {
    name: "Rate Card",
    path: "/logistics/rate-card",
    key: "ratecard",
    route: "/logistics/rate-card",
    element: <RateCard />,
  },
  //Barcodes
  {
    name: "Barcodes",
    path: "/logistics/barcodes",
    key: "barcodes",
    route: "/logistics/barcodes",
    element: <Barcodes />,
  },
// Product Listing
{
  name: "Product Listing",
  path: "/products",
  key: "products",
  route: "/products",
  element: <ProductListing />,
},
//bulk add and edit products
{
  name: "Add and Edit Products",
  path: "/products/add-edit",
  key: "bulk-add-edit",
  route: "/products/add-edit",
  element: <BulkAddEdit />,
},
//Add products
{
  name: "Add Products",
  path: "/products/add",
  key: "add-products",
  route: "/products/add",
  element: <AddProduct />,
},
//categories
{
  name: "Categories",
  path: "/products/categories",
  key: "categories",
  route: "/products/categories",
  element: <Categories />,
},
//add categories
{
  name: "add-categories",
  path: "/products/categories/add",
  key: "categories-add",
  route: "/products/categories/add",
  element: <AddCategories />,
},
// brand listing
{
  name: "brands",
  path: "/products/brands",
  key: "brands",
  route: "/products/brands",
  element: <BrandList />,
},
//add brands
{
  name: "add-brands",
  path: "/products/brands/add",
  key: "brands-add",
  route: "/products/brands/add",
  element: <AddBrand />,
},
//attributes
{
  name: "attributes",
  path: "/products/attributes",
  key: "attributes",
  route: "/products/attributes",
  element: <AttributeList />,
},
//order listing
{
  name: "orders",
  path: "/orders",
  key: "orders",
  route: "/orders",
  element: <OrderListing />,
},
//return orders
{
  name: "return",
  path: "/orders/returns",
  key: "returns",
  route: "/orders/returns",
  element: <ReturnOrder />,
},
//return review form
{
  name: "return-review",
  path: "/orders/returns/form",
  key: "return-review",
  route: "/orders/returns/form",
  element: <ReturnReview />,
},
//exchange
{
  name: "exchange",
  path: "/orders/exchange",
  key: "exchange",
  route: "/orders/exchange",
  element: <Exchange />,
},
//exchange review form
{
  name: "exchange-review",
  path: "/orders/exchange/form",
  key: "exchange-review",
  route: "/orders/exchange/form",
  element: <ExchangeReview />,
},
//refund
{
  name: "refund",
  path: "/orders/refund",
  key: "refund",
  route: "/orders/refund",
  element: <RefundListing />,
},

];
export default RouteArr;
