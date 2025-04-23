import React from 'react'
import DashboardCards from './(components)/DashCards'
import Events from './(components)/Events'

const Dashboard = () => {
  return (
    <div className="w-full h-full rounded-md flex gap-5">
      <div className='w-2/3 h-full flex flex-col gap-5'>
        <DashboardCards />
        <div className='flex-1 bg-gray-200 rounded-md'></div>
      </div>
      <Events />
    </div>
  )
}

export default Dashboard