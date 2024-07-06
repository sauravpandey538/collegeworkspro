'use client'
import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';
import Image from "next/image";
import { FaChessKing } from "react-icons/fa6";
import Link from 'next/link';

interface ComponentNameProps {

}
const services = [
  {
    "id": 1,
    "name": "Cisco Assignment",
    "url": "ciscoAssignment",

    "initialCost": 399,
    "about": " This package is for Netacad or CISCO assignment. We'll do all your assignment including both MCQS and PTSA. Just for Nrs 399 per module."

  },
  {
    "id": 2,
    "name": "Assignment Helper",
    "url": "assignmentHelper",
    'initialCost': 199,
    "about": 'Welcome to CollegeWorksPro, your reliable partner for high-quality, plagiarism-free assignments. We understand the importance of clean, well-researched work, and our team of experts is dedicated to delivering just that. For a small fee, we provide meticulously crafted, ready-to-print assignments, helping busy students meet their college requirements effortlessly and with confidence.'
  },
  {
    "id": 3,
    "name": "Print Helper",
    "url": "printHelper",

    "initialCost": 4,
    "about": "Welcome to CollegeWorksPro, your trusted source for high-quality, plagiarism-free assignments. We ensure clean, well-researched work tailored to your college requirements. For a small fee, we provide meticulously crafted, ready-to-print PDF assignments. Conveniently delivered at your preferred time, our service helps busy students meet deadlines effortlessly and confidently."

  },

]

const FeaturedCourse: React.FC<ComponentNameProps> = ({ }) => {
  return (
    <div className=' min-h-screen bg-slate-900 flex flex-col w-screen  justify-evenly items-center overflow-hidden py-20'  >
      <div className='flex flex-col w-full text-center'>
        <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-xl md:text-3xl   '>
          CHOOSE YOUR BEST PLAN <span className='inline-flex text-white items-center pl-3'><FaChessKing /> </span>
        </h1>
        <p className="text-sm text-neutral-600  py-3">
          @Note : Event's are not clickable
        </p>
      </div>

      <div className=' flex justify-evenly w-full flex-wrap px-5 gap-14'>

        {
          services.map((service) => {
            const content =

              <BackgroundGradient
                className=" relative rounded-[22px] max-w-sm p-4 sm:p-10  bg-zinc-900 " >

                <p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
                  {service.name}
                </p>

                <p className="text-sm  text-neutral-400">
                  {service.about}
                </p>
                {service.id !== 1 &&

                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1  mt-4 text-xs font-bold bg-zinc-800">
                    <span>Starter Package --{">"} </span>
                    <span className="bg-zinc-700 rounded-full text-[0.8rem] px-2 py-0 text-white">
                      Nrs {service.initialCost}
                    </span>
                  </button>
                }
                {service.id === 1 &&
                  <p className='absolute w-fit bg-red-500 -top-3 -left-3 p-3 rounded-2xl transform -rotate-45 font-bold border-white border-2'>
                    Event
                  </p>
                }

              </BackgroundGradient>

            return <div key={service.id}>
              {
                service.id > 1 ?
                  <Link href={`/${service.url}`}
                  >
                    {content}
                  </Link>
                  : content
              }
            </div>

          }

          )
        }

      </div>
    </div>
  );
};

export default FeaturedCourse;