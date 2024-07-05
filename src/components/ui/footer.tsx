'use client';
import MySimpleBtn from '@/utils/mySimpleBtn';
import React from 'react';
import { SiMinutemailer } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";

interface ComponentNameProps {}

const Footer: React.FC<ComponentNameProps> = ({}) => {
  return (
    <div className='h-svh w-full bg-black flex flex-wrap justify-center items-center'>
      <div className='flex flex-col justify-center sm:gap-6 max-w-96 w-full p-4'>

      <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-xl md:text-3xl text-center inline-flex items-center'>
          LET'S CONNECT <span className='inline-flex text-gray-200 items-center pl-3'><FaUserFriends/> </span>
        </h1>       
        
         <input placeholder='Enter your email' className='border-gray-600 border-b-2 bg-black p-2 my-10' />
        <textarea placeholder='Enter your message kindly' className='border-gray-600 border-b-2 bg-black p-2 max-h-96'></textarea>
        <MySimpleBtn text='Send' LeftIcon={SiMinutemailer} className='text-black w-full mt-5' />
      </div>
      
      <div className='flex flex-col justify-evenly w-full  p-4'>
        <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-md md:text-xl text-center border py-3 rounded-2xl'>
          SPECIAL THANKS TO 
        <span className='text-md md:text-2xl font-bold text-gray-200 tracking-wide  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center pl-2'>
          Saurav Pandey
        </span>
        </h1>

      </div>
    </div>
  );
};

export default Footer;
