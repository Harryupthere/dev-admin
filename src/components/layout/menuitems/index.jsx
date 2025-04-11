import React from "react";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { images } from "../../../utils/customFn";
import './menuitems.scss'
import { 
  //CampaignsIcon,
   CustomerIcon, FinanceIcon, HelpIcon, InsightIcon, LockIcon, 
  //LogisticIcon,
   NotificationsIcon, OrdersIcon, 
 // ProductsIcon, 
  ReviewsIcon } from "../../../icons/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileAndSetting from "../dashboardheader/profileandsetting";

const MenuItems = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const SidebarItems = [
    {
      name: 'Customers',
      submenu: [{ name: 'Manage Customers', link: '/customers' }],
      link: '/',
      imagepath: <CustomerIcon />
    },
    // {
    //   name: 'Products',
    //   submenu: [{ name: 'Manage Products', link: '/products' }, { name: 'Add New Product', link: '/products/add' },
    //   { name: 'Bulk Add/ Edit', link: '/products/add-edit' }, { name: 'Categories', link: '/products/categories' },
    //   { name: 'Brands', link: '/products/brands' }, { name: 'Attributes', link: '/products/attributes' }
    //   ],
    //   link: '/',
    //   imagepath: <ProductsIcon />
    // },
    {
      name: 'Orders',
      submenu: [{ name: 'Orders', link: '/orders' }, { name: 'Returns', link: '/orders/returns' }, { name: 'Exchanges', link: '/orders/exchange' }, { name: 'Refunds', link: '/orders/refund' }],
      link: '/',
      imagepath: <OrdersIcon />
    },
    {
      name: 'Reviews',
      submenu: [{ name: 'Manage Reviews', link: '/reviews' }],
      link: '/',
      imagepath: <ReviewsIcon />
    },
    // {
    //   name: 'Logistics',
    //   submenu: [{ name: 'Manage Logistics', link: '/logistics/inventory' }, { name: 'Rate Card', link: '/logistics/rate-card' }, { name: 'AWB Barcodes', link: '/logistics/barcodes' }],
    //   link: '/',
    //   imagepath: <LogisticIcon />
    // },
    // {
    //   name: 'Campaigns',
    //   submenu: [{ name: 'Campaigns', link: '/campaigns' }, { name: 'FairDeal', link: '/campaigns/fairdeal' }],
    //   link: '/',
    //   imagepath: <CampaignsIcon />
    // },
    {
      name: 'Notifications',
      submenu: [{ name: 'In App Notification', link: '/notifications/app-notification' }, { name: 'In SMS Notification', link: '/notifications/sms-notification' }],
      link: '/',
      imagepath: <NotificationsIcon />
    },
    {
      name: 'Help Desk',
      submenu: [{ name: 'Help Desk', link: '/help' }],
      link: '/',
      imagepath: <HelpIcon />
    },
    {
      name: 'Finance',
      submenu: [{ name: 'Finance', link: '/finance' }, { name: 'Charges', link: '/finance/charges' }, { name: 'New Expense', link: '/finance/create-expense' }, { name: 'Reconciliation', link: '/finance/reconciliation' }],
      link: '/finance',
      imagepath: <FinanceIcon />
    },
    {
      name: 'Insight',
      submenu: [{ name: 'Data Analysis', link: '/insight' }],
      link: '/',
      imagepath: <InsightIcon />
    },
    {
      name: 'My Account',
      submenu: [{ name: 'Users', link: '/users' }, { name: 'Settings', link: '/users/account-setting' }],
      link: '/',
      imagepath: <LockIcon />
    },
  ]

  function handleNavigate(to) {
    navigate(to)
  }
  return (
    <div className="sidebar-menus">
      <Link to="/">
        <div className="sidebarlogo">
        <div className="icon">
            <img src={images['logo1.png']} alt="logo vector" />
          </div>
          {/* <div className="icon">
            <img src={images['logosymbol.svg']} alt="logo vector" />
          </div> */}
          {/* <div className="name">
            <img src={images['logotext.svg']} alt="logo name" />
          </div> */}
        </div>
      </Link>
      <div className="show-in-mobile">
        <ProfileAndSetting />
      </div>
      <Menu className="sidebar_icon_list ">
        {SidebarItems.map((item, index) => {
          // Check if the parent or any submenu link matches the current location
          const isActiveParent = item.submenu.some(submenu => location.pathname.includes(submenu.link));

          return (
            <SubMenu
              key={index}
              className={`${isActiveParent ? 'active' : ''} main-menu-tab`}
              label={
                <div className="sidebar_label">
                  <div className="icon">
                    {item.imagepath}
                  </div>
                  <div className="name">
                    {item.name}
                  </div>
                </div>
              }
            >
              {item?.submenu.map((submenu, subIndex) => {
                const isActiveChild = location.pathname === submenu.link;

                return (
                  <MenuItem
                    key={subIndex}
                    className={`submenus-items ${isActiveChild ? 'active' : ''}`}
                    onClick={() => handleNavigate(submenu.link)}
                  >
                    <div className="submenus name">
                      <div className="sidebar_label">
                        <div className="name">
                          {submenu.name}
                        </div>
                      </div>
                    </div>
                  </MenuItem>
                );
              })}
            </SubMenu>
          );
        })}

      </Menu>
    </div>
  );
};

export default MenuItems;
