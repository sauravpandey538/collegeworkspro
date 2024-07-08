'use client'
import React, { useState } from 'react';
import { Spotlight } from './Spotlight';
import { Button } from './moving-border';
import { FaRegLightbulb } from "react-icons/fa6";
import { BsFillLightbulbOffFill } from "react-icons/bs";

import MySimpleBtn from '@/utils/mySimpleBtn';
import Link from 'next/link';
import { NoteText } from '@/utils/note';
import { MainHeader } from '@/utils/mainHeader';
import { SecondaryHeading } from '@/utils/secondaryHeading';
import { DescriptionTitle } from '@/utils/descriptionTitle';
import { MyAnimatedBtn } from '@/utils/myBtn';

const HeroSection: React.FC = () => {
  const [open, setOpen] = useState(true)
  return (

    <div className='relative flex flex-col justify-center items-center  h-screen  w-full text-center overflow-hidden '>
      <MySimpleBtn LeftIcon={open ? BsFillLightbulbOffFill : FaRegLightbulb} onClick={() => setOpen(!open)} className='fixed top-20 left-0 z-50 text-black rounded-full' />
      {open && <Spotlight
        className=" fixed -top-24 left-0 md:left-60 md:-top-20"
        fill="white"
      />}


      <div>
        <MainHeader> EXPERTLY CRAFTED ASSIGNMENTS TAILORED TO YOUR NEEDS</MainHeader>
        <SecondaryHeading> "Welcome to CollegeWorksPro, the ultimate solution for busy students needing assignment help.
          For a reasonable fee, we provide expertly crafted, ready-to-print assignments tailored to your college requirements.
          Save time and ensure quality with our professional services, designed to make your academic life easier."
        </SecondaryHeading>
        <DescriptionTitle className='w-full text-end  px-8 md:px-32 '>- @Admin</DescriptionTitle>
      </div>

      <div className='mt-9 '>
        <Link href={"/confidential"}>

          <MyAnimatedBtn>Read Terms</MyAnimatedBtn>
        </Link>
      </div>


      <NoteText className='mt-6 mb-6'> @Note: Make sure to review the terms and conditions before using any services!</NoteText>

    </div>
  );
};

export default HeroSection;
