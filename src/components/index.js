// =====================common layouts================
export { default as SideImg } from "./layout/side_img";
export { default as Sidebar } from "./layout/sidebar";
export { default as MenuItems } from "./layout/menuitems";
export { default as Breadcrumbs } from "./layout/breadcrumb";
export { default as CommonCards } from "./layout/commoncards";
export { default as CustomTabs } from "./layout/customtabs";
export { default as TabTitle } from "./layout/customtabs_title";
export { default as CustomDatePicker } from "./layout/customedatepicker";
export { default as CustomCheckList } from "./layout/customchecklists";
export { default as CustomPagination } from "./layout/paginations";
export { default as useCustomePagination } from "./layout/paginations/paginationUtils";
export { default as UserProfilePicAndName } from "./layout/user_profile_and_name";
export { default as SuccessMessage } from "./layout/successpage";





// ==================login pages===============
export { default as LoginForm } from "./login/loginform";
export { default as ResetPasswordForm } from "./resetpasswordform";
export { default as UnableLoginModal } from "./login/unable_login_modal";
export { default as Toplogo } from "./layout/toplogo";

// ================Dashboard header=================
export { default as Title } from "./layout/dashboardheader/title";
export { default as ProfileAndSetting } from "./layout/dashboardheader/profileandsetting";

//customer
export { default as CustomerTable } from "./customer/customertable";
export { default as TableFilter } from "./customer/tablefilters";
export { default as BlockModal } from "./customer/block_unblock_modal";


//Home
export { default as SaleChart } from "./home/salechart";
export { default as TopProducts } from "./home/topproducts";

// Customer Details
export { default as ProfileCard } from "./customerdetails/profilecard";
export { default as ProfileForm } from "./customerdetails/profileform";
export { default as AddressCard } from "./customerdetails/addresscard";
export { default as OrderHistoryTable } from "./customerdetails/orderhistorytable";
export { default as ReviewsTable } from "./customerdetails/reviewstable";

//Orders 
export { default as DeliveryDetails } from "./ordersdetails/deliverydetails";
export { default as OrderDetailList } from "./ordersdetails/detail_list";
export { default as OrderTotal } from "./ordersdetails/ordertotal";
export { default as OrderSummery } from "./ordersdetails/summery";
export { default as PaymentDetails } from "./ordersdetails/paymentdetails";
export { default as OrderHistory } from "./ordersdetails/orderhistory";


//insight
export { default as DeviceProgress } from "./insight/deviceprogress";
export { default as InsightProducts } from "./insight/insightproducts";
export { default as InsightFilter } from "./insight/insightfilter";

//my account // users
export { default as AllUsers } from "./users/allusertable";
export { default as UserFilter } from "./users/userfilter";
export { default as UserRoleTable } from "./users/user_roles";

//add new user
export { default as AddUserForm } from "./addnewuser";
//create new user
export { default as CreateUserForm } from "./createnewuser";

//edit user
export { default as EditUserForm } from "./edituser";

//account setting
export { default as AccountSettingForm } from "./accountsetting/settingform";

//finace
export { default as FinanceSummary } from "./finance/summary";
export { default as Transactionsfilter } from "./finance/transactionfilter";
export { default as TotalTransactionCards } from "./finance/total_tansactions_cards";
export { default as FinanceTransactionTable } from "./finance/transactions_table";
export { default as TotalPaymentCards } from "./finance/total_payment";
export { default as PaymentTable } from "./finance/payment_table";

//Charges
export { default as Chargestable } from "./charges";

//Create Expense
export { default as CreateExpenseForm } from "./createexpense/expenseform";

//Reconcilition
export { default as TotalReconcilitionCards } from "./reconciliation/total_reconciliation_cards";
export { default as ReconsilitionFilter } from "./reconciliation/reconcilitionfilter";
export { default as ReconcilitionTable } from "./reconciliation/reconcilitiontable";


//Notifications
export { default as AppNotificationData } from "./notifications/app_notifications";
export { default as SmsNotificationData } from "./notifications/sms_notifications";
export { default as SendAppNotificacationForm } from "./notifications/send_app_notification";
export { default as SendSmsNotificationForm } from "./notifications/send_sms_notification";


//Help center
export { default as HelpFilter } from "./helpcenter/helpfilter";
export { default as PendingHelpData } from "./helpcenter/help_pending_data";
export { default as BugReportData } from "./helpcenter/bugreport";
export { default as CustomercareData } from "./helpcenter/customercare";

//Campaigns
export { default as CampaignsData } from "./campaigns/campaigns_data";
export { default as CreateCampaignsForm } from "./campaigns/create_campaigns_form";
export { default as OnboardingFilter } from "./campaigns/onboarding_filter";
export { default as CampaignOnboardingData } from "./campaigns/onboardingdata";
export { default as WelcomeCard } from "./campaigns/welcomedeal";


//Fair deal
export { default as FairDealData } from "./fairdeals/fairdeals_data";
export { default as CreateFairdealCampaigns } from "./fairdeals/fairdeal_create_campaigns";

//Reviews
export { default as ReviewsData } from "./reviews/reviews_data";

//Logistic data
export { default as LogisticData } from "./logistics/logisticsdata";

//Rate card
export { default as RateFilter } from "./ratecard/ratefilter";
export { default as RateCardTable } from "./ratecard/ratetable";

//Borcodes
export { default as BarcodesForm } from "./barcodes_form";

//Products listing
export { default as ProductListData } from "./products/productlistdata";

//Bulk add and edit
export { default as AddEditTabs } from "./bulkadd/add_edit_tabs";
export { default as DownloadTemplate } from "./bulkadd/addproduct/download.jsx";
export { default as AddUploadFiles } from "./bulkadd/addproduct/add_uploadfiles.jsx";
export { default as EditDownloadFile } from "./bulkadd/editproduct/edit_download.jsx";
export { default as EditUploadFiles } from "./bulkadd/editproduct/edit_upload.jsx";

//Add products
export { default as AddName } from "./addproducts/addname";
export { default as UploadMainImg } from './addproducts/uploadMultiImg'
export { default as ProductDescriptions } from "./addproducts/product_descriptions";
export { default as Variants } from "./addproducts/variants";
export { default as WarrantyInfo } from "./addproducts/warrantyInfo";

//categories 
export { default as RecursiveAccordion } from "./categories/recursiveAccordion";
export { default as CategoryFilter } from "./categories/categoryFilter";
export { default as CategoriesTable } from "./categories/categoryTable";
export { default as AddCategoryForm } from "./categories/addcategories";

//brands
export { default as BrandListTable } from "./brands/brandstable";
export { default as BrandFilter } from "./brands/brandfilter";
export { default as AddBrandForm } from "./brands/addbrands";

// attributes
export { default as AttributeTable } from "./attributes/attributesTable";
export { default as AddAttribute } from "./attributes/addAttributes";


//orders
export { default as OrdersFilter } from "./orderlisting/ordersfilter";
export { default as OrdersData } from "./orderlisting/ordersData";

//return
export { default as ReturnData } from "./return/returndata";
export { default as ReturnReviewForm } from "./return/review_form";

//exchange
export { default as ExchangeData } from "./exchange/exchangeData";
export { default as ExchangeFilter } from "./exchange/exchangefilter";
export { default as ExchangeReviewForm } from "./exchange/exchange_form";

//refund 
export { default as RefundData } from "./refund/refundData";
export { default as RefundFilter } from "./refund/refundfilter";

















