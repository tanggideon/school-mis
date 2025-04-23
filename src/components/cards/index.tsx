import React from 'react'

interface CardProps {
  Title: string;
  Count: number;
}

const Card = ({Title, Count} : CardProps) => {
  return (
    <div className="bg-gray-200 w-1/3 rounded-md h-[130px] px-5 flex flex-col justify-between items-end py-5">
      <span className="font-bold text-6xl text-gray-500">{Count}</span>
      <span className="font-bold text-2xl text-gray-400">{Title}</span>
    </div>
  )
}

export default Card