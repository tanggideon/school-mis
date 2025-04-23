import React from 'react'
import StudentDetails from './(components)/StudentDetails'
import { DataTable } from '@/components/table'
import Header from '@/components/Header'

const page = () => {
  return (
    <div className="w-full h-full rounded-md flex gap-5">
      <div className='w-2/3 h-full flex flex-col gap-5'>
        <div className='flex-1 bg-white rounded-md p-5 shadow-md'>
          <Header Title='All Students' Description='Manage Students of your class'/>
          <DataTable />
        </div>
      </div>
        <StudentDetails />
    </div>
  )
}

export default page