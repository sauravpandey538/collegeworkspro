import React from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import Link from 'next/link';
import { Button } from '@/components/ui/moving-border';

interface ComponentNameProps {
  
}
const projects = [
    {
      title: "Plan A - Free Trial",
      description:
        "New to collegeWorksPro ? No worries, we're here to serve you free service for your very first time.",
      price: "Free.",
    },
    {
      title: "Plan B - Already Connected",
      description:
        " Since you got free trial, enjoy a friendly budget service with us.",
      price: "199.",
    },
    {
      title: "Plan C - Obessed With CollegeWorksPro",
      description:
        " Looks like you are obessed with our services. ThankYou, let's make this project more sucessfull together.",
      price: "300.",
    },
    {
      title: "Plan D - A Package",
      description:
        "You got a task to do ? We will write down all your complete 5 subject's college assignment problem.",
      price: "1200.",
    },
    {
      title: "Plan E - Long-Package ",
      description:
        "Enjoy you job and make your CV better with good job experience. We will do all your semister assignment",
      price: "2199.",
    },
    {
      title: "Plan F - Very Good Long Package",
      description:
        " College for degree, you don't need to think about any assignment in your student life. We'll do every single assignment for you.",
      price: "Negotiable.",
    },
  ];

const AssignmentHelp: React.FC<ComponentNameProps> = ({  }) => {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-24 md:mt-60 flex flex-col justify-center items-center">
        <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-xl md:text-3xl   '>
          KNOW YOUR BEST PLAN  
        </h1>  
    <HoverEffect items={projects} />
    <Link href={"/"}>
      <Button
              className="bg-white dark:bg-black text-neutral-300 dark:text-white border-neutral-200 dark:border-slate-800 text-lg  "

      >Go Back</Button>
      </Link>
  </div>
  );
};

export default AssignmentHelp;