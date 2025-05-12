import React from 'react'
import DashboardCards from './(components)/DashCards'
import Events from './(components)/Events'
import { PopulationChart } from './(components)/PopulationChart'
import { PerformanceChart } from './(components)/PerformanceChart'

const Dashboard = () => {
  return (
    <div className="w-full h-full rounded-md flex gap-5">
      <div className='w-2/3 h-full flex flex-col gap-5'>
        <DashboardCards />
        <div className='flex-1 bg-gray-200 rounded-md'>
          <div className='w-full bg-white flex gap-5'>
            <div className='w-1/3 h-full'>
              <PopulationChart />
            </div>
            <div className='w-2/3 h-full'>
              <PerformanceChart />
            </div>
          </div>
        </div>
      </div>
      <Events />
    </div>
  )
}

export default Dashboard