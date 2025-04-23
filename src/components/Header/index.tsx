import React from 'react'

interface HeaderProps {
    Title: string,
    Description: string,
}

const Header = ({Title, Description} : HeaderProps) => {
  return (
    <div className='w-full flex flex-col gap-2 items-start justify-start'>
        <span className='text-gray-700 font-bold text-2xl'>{Title}</span>
        <span className='text-gray-500 font-semibold text-sm'>{Description}</span>
    </div>
  )
}

export default Header