'use client'
import React, { useState } from 'react';
import { Spotlight } from './Spotlight';
import { Button } from './moving-border';
import { FaRegLightbulb } from "react-icons/fa6";
import { BsFillLightbulbOffFill } from "react-icons/bs";

import MySimpleBtn from '@/utils/mySimpleBtn';
import Link from 'next/link';
interface ComponentNameProps {
  
}

const HeroSection: React.FC<ComponentNameProps> = ({  }) => {
  const [open,setOpen] = useState(true)
  return (

    <div className='relative flex flex-col justify-evenly items-center  h-screen  w-full text-center overflow-hidden'>
      <MySimpleBtn  LeftIcon={open ? BsFillLightbulbOffFill : FaRegLightbulb} onClick={()=> setOpen(!open)} className='fixed top-20 left-0 z-50 text-black rounded-full'/>
      {open &&   <Spotlight
        className=" fixed -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> }
    

<div 
   >
 <h1
    className=' text-4xl md:text-7xl font-bold  tracking-wide  my-10  bg-clip-text text-transparent
    bg-gradient-to-b from-neutral-50 to-neutral-400 
    '
> Master the Art of Cheating  </h1>
  
  
        <p className='text-neutral-600 mt-4 font-normal text-base md:text-lg max-w-lg mx-auto px-3'>

        "Welcome to CollegeWorksPro, the ultimate solution for busy students needing assignment help. For a reasonable fee, we provide expertly crafted, ready-to-print assignments tailored to your college requirements. Save time and ensure quality with our professional services, designed to make your academic life easier."  
        </p>
        <p className='text-neutral-600 mt-4 font-normal text-base md:text-lg max-w-lg mx-auto px-3 text-end'>
          - Website Designer 
</p>

  
  </div>
  

  <div className='mt-9 '>
  <Link href={"/confidential"}>
     <Button
        borderRadius="10.75rem"
        className="bg-white dark:bg-black text-neutral-300 dark:text-white border-neutral-200 dark:border-slate-800 text-lg  "
      >
       Conditions 
         
      </Button>
      </Link>
</div>


    
     </div>
  );
};

export default HeroSection;
//    className='border-white border-2 h-auto md:h-[40rem]'
