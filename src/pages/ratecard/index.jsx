import React from 'react'
import DashboardHeader from '../dasboardheader'
import { RateCardTable, RateFilter } from '../../components'

const RateCard = () => {
  const breadcrumbdata = [
    {
      name: 'Logistics',
      links: '/logistics/inventory'
    },
    {
      name: 'Rate Card',
      links: '/logistics/rate-card'
    }
  ]

  return (
    <div className='customer'>
      <DashboardHeader heading="Rate Card" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
        <div className='width_80_1920'>
          <RateFilter />
          <RateCardTable />
        </div>
      </div>
    </div>
  )
}

export default RateCard
