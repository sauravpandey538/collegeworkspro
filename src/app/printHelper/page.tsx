import React from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import Link from 'next/link';
import { Button } from '@/components/ui/moving-border';

interface ComponentNameProps {
  
}
const projects = [
    {
      title: "WB - A - First Trial",
      description:
        "Print your very first trial at just Nrs 4 Per Page count.",
    //   price: "Free.",
    },
    {
      title: "WB - B - Already Connected",
      description:
        " Print your very first trial at just Nrs 4.5 Per Page count.",
    //   price: "199.",
    },
    {
      title: "WB - C - Obessed With CollegeWorksPro",
      description:
        " Print your very first trial at just Nrs 5 Per Page count.",
    //   price: "300.",
    },
    {
      title: "C - D - A Package",
      description:
        "  Print your single subjects colourful assignment at just Nrs 24 Per Page count.",
    //   price: "1200.",
    },
    {
      title: "C - E - Long-Package ",
      description:
        " Print your 5 subjects colourful assignment at just Nrs 21 Per Page count.",
    //   price: "2199.",
    },
    {
      title: "C - F - Very Good Long Package",
      description:
        "  Print your all semister colourful assignment at just Nrs 19 Per Page count.",
    //   price: "Negotiable.",
    },
  ];

const PrintHelp: React.FC<ComponentNameProps> = ({  }) => {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-24 md:mt-60 flex flex-col justify-center items-center">
        <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-xl md:text-3xl   '>
          KNOW YOUR BEST PLAN  
        </h1>  
    <HoverEffect items={projects} />
    <Link href={"/"}>
      <Button
        className="bg-black text-white border-slate-800 text-lg  "

      >Go Back</Button>
      </Link>
  </div>
  );
};

export default PrintHelp;