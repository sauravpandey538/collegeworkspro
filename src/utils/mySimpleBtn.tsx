"use client"
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge'

interface ComponentNameProps {
  LeftIcon?: IconType,
  RightIcon?: IconType,
  text?: string,
  onClick?: ()=> void;
  useHover?: boolean
  className?:string
}

const MySimpleBtn: React.FC<ComponentNameProps> = ({ text, LeftIcon, RightIcon, onClick,useHover, className}) => {
  const [open, setOpen] = useState(false)
  
  return (
    <div className='relative'>
    <button  
    onClick={onClick} 
    onMouseEnter={()=> setOpen(true)}
    onMouseLeave={()=> setOpen(false)}
    className={twMerge(' flex gap-1 justify-center items-center p-2 bg-slate-300 rounded-xl my-4 hover:bg-slate-200 font-semibold',className)}>
       { LeftIcon && <LeftIcon />}
    <span>  {text}</span>
      { RightIcon && <RightIcon/>}

    </button>
  { (open && useHover)  && <div 
    onMouseEnter={()=> setOpen(true)}
    onMouseLeave={()=> setOpen(false)}  
    className='absolute top-12 size-32 bg-gray-500 z-10 rounded-lg'>
    </div>}

    </div>
  );
};

export default MySimpleBtn;