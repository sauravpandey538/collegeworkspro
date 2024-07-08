import React from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import Link from 'next/link';
import { Button } from '@/components/ui/moving-border';
import { Topic } from '@/utils/topic';
import { MyAnimatedBtn } from '@/utils/myBtn';

interface ComponentNameProps {

}
const projects = [
  {
    id: 1,
    title: "WB - A - First Trial",
    description:
      "This offer is available only once. Print your very first trial for just Nrs 4 per page.",
  },
  {
    id: 2,

    title: "WB - B - Second Trial",
    description:
      " This offer is available only once. Print your very first trial for just Nrs 4.5 Per Page count.",
  },
  {
    id: 3,

    title: "WB - C - Regular",
    description:
      " This will be your regular price. Print your very first trial for just Nrs 5 Per Page count.",
  },
  {
    id: 4,
    title: "C - D -Regular",
    description:
      "  Print your single subjects colourful assignment at just Nrs 24 Per Page count.",
  },
  {
    id: 5,

    title: "C - E - Comprehensive Package ",
    description:
      " Print your 5 subjects colourful assignment for just Nrs 21 Per Page count.",
  },
  {
    id: 6,

    title: "C - F - Ultimate Long-Term Package",
    description:
      "  Print your all semister colourful assignment for just Nrs 19 Per Page count.",
  },
];

const PrintHelp: React.FC<ComponentNameProps> = ({ }) => {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-24 md:mt-60 flex flex-col justify-center items-center py-28">

      <Topic> KNOW YOUR BEST PLAN</Topic>
      <HoverEffect items={projects} />
      <Link href={"/"}>
        <MyAnimatedBtn>Go Back</MyAnimatedBtn>
      </Link>
    </div>
  );
};

export default PrintHelp;