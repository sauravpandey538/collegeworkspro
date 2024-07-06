import { Button } from '@/components/ui/moving-border';
import Link from 'next/link';
import React from 'react';

const dataApi = [
  {
    "id": 1,
    "message": "Please ensure that the details you provide are valid."
  },
  {
    "id": 2,
    "message": "We prioritize your privacy."
  },
  {
    "id": 3,
    "message": "The student has requested that the assignment be free of plagiarism and properly cited."
  },
  
  {
    "id": 4,
    "message": "Payment must be completed first, and payment proof should be retained by both parties."
  },
  {
    "id": 5,
    "message": "All payment procedures will be explained via email."
  },
  {
    "id": 6,
    "message": "We are offering a special discount for the first three lucky students."
  },
  {
    "id": 7,
    "message": "If you apply for the lucky student offer, you will receive an email if you are chosen."
  },
  {
    "id": 8,
    "message": "We will notify you of the time required to complete your assignment via email."
  },
  {
    "id": 9,
    "message": "A confirmation PDF will be sent to you before the actual submission of your assignment."

  },
  {
    "id": 10,
    "message": "We can upload the PDF to your SchoolWorksPro account if you prefer."

  },
  {
    "id": 11,
    "message": "You can request a refund if you are completely dissatisfied with our service."
  },
  {
    "id": 12,
    "message": "We are not scammers. Let's make this website useful for all students."
  }
];





interface ComponentNameProps {
  
}

const Confidential: React.FC<ComponentNameProps> = ({  }) => {
  return (
    <div className=' flex justify-center items-center flex-col text-white min-h-screen gap-10 py-32 px-10'>
      <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-xl md:text-3xl border-gray   '>
      Credentials
</h1>
      <div className='flex flex-col gap-3 '>
        {
          dataApi.map((text)=> 
          <p 
          key={text.id}
          className=' text-neutral-400'
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