import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CommonCards, SaleChart, TopProducts } from '../../components'
import './home.scss'
import AnnualChart from '../../components/home/annualchart'
const Home = () => {

  const cardsData1 = [
    { title: 'Registered Users', price: '298,198', icon: 'users.svg', total: 'Total Registered users' },
    { title: 'Active Users', price: '178,982', icon: 'appinstall.svg', total: 'Total Users with active account' },
    { title: 'Todays signup', price: '3500', icon: 'share.svg', total: 'Total users signed up today' },
  ];
  const cardsData2 = [
    { title: 'Total Sales', price: '1,892,298 $', icon: 'walletgreen.svg', total: 'Total 5', scale: 'up' },
    { title: 'Total Registered Users', price: '35,000', icon: 'userpurple.svg', total: 'Total 5', scale: 'up' },
    { title: 'Total Affiliate Comission', price: '11,871', icon: 'visitors.svg', total: ' Since yesterday', scale: 'up' },
    { title: 'Total Page Visits', price: '19,209', icon: 'views.svg', total: 'Total 5', scale: 'down' },
   // { title: 'Total Orders', price: '2,124', icon: 'power.svg', total: 'Total 5', scale: 'up' },
   
  ];

  return (
    <div className='home-wrapped'>
      <DashboardHeader heading="Home" />
      <div className='main'>
        <div className='data-cards'>
          {cardsData1.map((card, index) => (
            <div key={index} className='card-rows row-1'>
              <CommonCards data={card} range={false} />
            </div>
          ))}
        </div>
        <div className='data-cards'>
          {cardsData2.map((card, index) => (
            <div key={index} className='card-rows row-2'>
              <CommonCards data={card} range={false} />
            </div>
          ))}
        </div>
        <div className='third-row'>
          <div className='chart-wrapped'>
            <SaleChart />
          </div>
          <div className='chart-wrapped'>
            <AnnualChart />
          </div>
          <div className='products-wrapped theme-card'>
            <TopProducts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
