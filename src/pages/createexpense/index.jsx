import React from 'react'
import DashboardHeader from '../dasboardheader'
import { CreateExpenseForm } from '../../components'

const CreateExpense = () => {
  const breadcrumbdata = [
    {
      name: 'Finance',
      links: '/finance'
    },
    {
        name: 'Create new expense',
        links: '/finance/create-expense'
      }
  ]
 


  return (
    <div className='insight-wrapped'>
      <DashboardHeader heading="Create New Expense" breadcrumbdata={breadcrumbdata} />
      <div className='main'>
          <CreateExpenseForm/>
      </div>
    </div>
  )
}

export default CreateExpense;
