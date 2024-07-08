import React from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import Link from 'next/link';
import { Button } from '@/components/ui/moving-border';
import { NoteText } from '@/utils/note';
import { Topic } from '@/utils/topic';
import { MyAnimatedBtn } from '@/utils/myBtn';

interface ComponentNameProps {

}
const projects = [
  {
    "title": "Plan A - First Trial",
    "description": "New to CollegeWorksPro? No worries, we're offering our very first service at a minimal price.",
    "price": "99."
  },
  {
    "title": "Plan B - Second Trial",
    "description": "Since you've already tried our first trial, enjoy a second-phase trial. This offer is available only once.",
    "price": "199."
  },
  {
    "title": "Plan C - Regular",
    "description": "If you've become a fan of our services after trying Plan B, this will be your regular price.",
    "price": "299."
  },
  {
    "title": "Plan D - Package Deal",
    "description": "Got a lot on your plate? We'll tackle all your college assignments for 5 subjects.",
    "price": "1199."
  },
  {
    "title": "Plan E - Comprehensive Package",
    "description": "Focus on your job and enhance your CV with valuable job experience while we handle all your semester assignments.",
    "price": "2199."
  },
  {
    "title": "Plan F - Ultimate Long-Term Package",
    "description": "Never worry about assignments again. We'll manage every assignment throughout your student life.",
    "price": "Negotiable."
  }
]


const AssignmentHelp: React.FC<ComponentNameProps> = ({ }) => {
  return (
    <div className="max-w-5xl mx-auto px-8 my-24 md:mt-60 flex flex-col justify-center items-center">

      <Topic>KNOW YOUR BEST PLAN</Topic>

      <NoteText className='py-3'>@Note: The first trial and second trial  is available for the single time use only. So, you cant use those service for multiple times. For any queries, we'll explain via email!
      </NoteText>
      <HoverEffect items={projects} />
      <Link href={"/"}>
        <MyAnimatedBtn>Go Back</MyAnimatedBtn>
      </Link>
    </div>
  );
};

export default AssignmentHelp;