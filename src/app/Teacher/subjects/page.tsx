import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const subjects = [
  {
    title: "Mathematics",
    description: "The intriguing world of numbers and arithmetics",
    imageSrc: "/assets/subjects/maths.jpg",
    enrolled: 24
  },
  {
    title: "English Language",
    description: "The intriguing world of numbers and arithmetics",
    imageSrc: "/assets/subjects/english.jpg",
    enrolled: 24
  },
  {
    title: "Creative Arts",
    description: "The intriguing world of numbers and arithmetics",
    imageSrc: "/assets/subjects/creative.jpg",
    enrolled: 24
  },
  {
    title: "Social Studies",
    description: "The intriguing world of numbers and arithmetics",
    imageSrc: "/assets/subjects/socialstudies.jpg",
    enrolled: 24
  },
  {
    title: "Integrated Science",
    description: "The intriguing world of numbers and arithmetics",
    imageSrc: "/assets/subjects/science.jpg",
    enrolled: 24
  },
]

const page = () => {
  return (
    <div className="w-full h-full rounded-md flex gap-5">
      <div className='w-2/3 h-full flex flex-col gap-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-200 rounded-md h-full gap-3 p-5'>
          {subjects.map((subject, index) => (
            <Link href="#" key={index}>
            <div className='flex flex-col gap-3 bg-white rounded-md border-2 border-gray-500  px-3 py-2 h-full' >
              <div className="w-full h-[60%]">
                <Image height={1000} width={1000} alt='Subject Cover' src={subject.imageSrc} className='w-full h-full rounded-md object-contain'/>
              </div>
              <div className='w-full flex flex-col items-start gap-1'>
                <span className='font-bold text-[12px] text-gray-700 truncate'>{subject.title}</span>
                <span className='font-semibold text-[11px] text-gray-400'>{subject.description}</span>
              </div>
              <div className='w-full flex items-center justify-between'>
                <span className='font-semibold text-[11px] text-gray-400'>Enrolled:</span>
                <span className='font-bold text-[12px] text-gray-700 truncate'>{subject.enrolled}</span>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page