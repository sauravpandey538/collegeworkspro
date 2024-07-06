import { Button } from '@/components/ui/moving-border';
import Link from 'next/link';
import React from 'react';

 const dataApi = [
  {
    "id": 1,
    "message": "The student has requested that the economics assignment be completely free of any plagiarism and properly cited."
  },
  {
    "id": 2,
    "message": "Please make sure that the final draft of the literature review is submitted before the end of this week to meet the deadline."
  },
  {
    "id": 3,
    "message": "All personal information of our clients should remain confidential and must not be shared with any third parties."
  },
  {
    "id": 4,
    "message": "The client has specified that the psychology paper needs to be formatted in strict APA style with all necessary citations."
  },
  {
    "id": 5,
    "message": "We are offering a special discount for students who submit multiple assignments at once during this promotional period."
  },
  {
    "id": 6,
    "message": "There is an urgent request for a computer science project that must be completed within the next 48 hours due to a tight deadline."
  },
  {
    "id": 7,
    "message": "Payment has been successfully processed for the biology assignment, and the receipt has been emailed to the client."
  },
  {
    "id": 8,
    "message": "The student has asked for a comprehensive revision of their essay to improve the quality and meet the instructor's feedback."
  },
  {
    "id": 9,
    "message": "Confidential feedback has been provided for the marketing assignment, highlighting the strengths and areas for improvement."
  },
  {
    "id": 10,
    "message": "Please ensure that the assignment meets all the criteria outlined in the rubric provided by the instructor to avoid any deductions."
  },
  {
    "id": 11,
    "message": "The client has requested to receive weekly progress updates on their research paper to stay informed about the development."
  },
  {
    "id": 12,
    "message": "It is important to confirm the assignment topic with the student before proceeding to ensure that all requirements are met."
  }
]




interface ComponentNameProps {
  
}

const Confidential: React.FC<ComponentNameProps> = ({  }) => {
  return (
    <div className=' flex justify-center items-center flex-col text-white min-h-screen gap-10 pt-32 px-10'>
      <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-xl md:text-3xl border-gray   '>
      Credentials
</h1>
      <div className='flex flex-col gap-3 '>
        {
          dataApi.map((text)=> 
          <p 
          key={text.id}
          className=' text-neutral-600'
          > {text.id}. {" "}{text.message}</p>)
        }
      </div>
      <Link href={"/"}>
      <Button
        className="bg-black text-white border-slate-800 text-lg  "

      >Go Back</Button>
      </Link>
    </div>
  );
};

export default Confidential;