import { Button } from '@/components/ui/moving-border';
import { MyAnimatedBtn } from '@/utils/myBtn';
import Link from 'next/link';
import React from 'react';

const dataApi = [
  {
    "id": 1,
    "message": "Please ensure the information you provide is accurate."
  },
  {
    "id": 2,
    "message": "Your privacy is our utmost priority; we do not disclose any information for our benefit."
  },
  {
    "id": 3,
    "message": "We strive to deliver plagiarism-free assignments. Customization options are available for additional requirements."
  },
  {
    "id": 4,
    "message": "Payment must be made upfront, with proof retained by both parties."
  },
  {
    "id": 5,
    "message": "Detailed payment procedures will be provided via email."
  },
  {
    "id": 6,
    "message": "You may receive special offers based on your engagement with us."
  },
  {
    "id": 7,
    "message": "Some offers are available as one-time paid trials."
  },
  {
    "id": 8,
    "message": "The estimated assignment completion time will be communicated via email."
  },
  {
    "id": 9,
    "message": "A confirmation PDF will be sent before your assignment's final submission."
  },
  {
    "id": 10,
    "message": "You can also request a hybrid service, including assignments in both PDF and printed formats."
  },
  {
    "id": 11,
    "message": "If you are completely dissatisfied with our service, you may request a refund."
  },
  {
    "id": 12,
    "message": "We are a reputable service provider dedicated to enhancing this website for the benefit of all students."
  }
]







interface ComponentNameProps {

}

const Confidential: React.FC<ComponentNameProps> = ({ }) => {
  return (
    <div className=' flex justify-center items-center flex-col text-white min-h-screen gap-10 py-32 px-10'>
      <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-xl md:text-3xl border-gray   '>
        Credentials
      </h1>
      <div className='flex flex-col gap-3 '>
        {
          dataApi.map((text) =>
            <p
              key={text.id}
              className=' text-neutral-400'
            > {text.id}. {" "}{text.message}</p>)
        }
      </div>
      <Link href={"/"}>

        <MyAnimatedBtn>Go Back</MyAnimatedBtn>
      </Link>
    </div>
  );
};

export default Confidential;