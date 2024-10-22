'use client'
import axios from 'axios';
import MySimpleBtn from '@/utils/mySimpleBtn';
import React, { useState } from 'react';
import { SiMinutemailer } from 'react-icons/si';
import { BiSolidHappyAlt } from "react-icons/bi";
import { Button } from './moving-border';
import { motion, AnimatePresence } from 'framer-motion';
import { NoteText } from '@/utils/note';
import { Topic } from '@/utils/topic';
import { MyAnimatedBtn } from '@/utils/myBtn';
interface Form {
  email: string;
  plan: string;
  description: string;
}

const Footer: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [form, setForm] = useState<Form>({
    email: '',
    plan: '',
    description: '',
  });

  const [error, setError] = useState<Form>({
    email: '',
    plan: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasError = false;

    if (form.email.trim() === '') {
      setError(prevError => ({ ...prevError, email: 'Enter an email' }));
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        setError(prevError => ({ ...prevError, email: 'Enter a valid email' }));
        hasError = true;
      } else {
        setError(prevError => ({ ...prevError, email: '' }));
      }
    }

    if (!form.plan.trim()) {
      setError(prevError => ({ ...prevError, plan: 'Enter a plan' }));
      hasError = true;
    } else {
      setError(prevError => ({ ...prevError, plan: '' }));
    }

    if (!form.description.trim()) {
      setError(prevError => ({ ...prevError, description: 'Enter a description' }));
      hasError = true;
    } else {
      setError(prevError => ({ ...prevError, description: '' }));
    }

    if (!hasError) {

      try {
        const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL ?? '';
        // console.log( "url: ",webhookUrl)

        await axios.post('/api/sendMessage', {
          content: `New request from ${form.email}:\n${form.plan}:\n${form.description}\n\n`,
        });

        // alert('Feedback submitted successfully!');
        setIsSubmitted(true)
        setForm({
          email: '',
          plan: '',
          description: '',
        });

        console.log(form);
      } catch (error: any) {
        console.error('Error submitting feedback:', error.message);
        alert('An error occurred while submitting feedback. Please try again later.');
      }
    }
  };

  return (
    <div className='min-h-svh w-full bg-black flex flex-col flex-wrap justify-center items-center py-20'>

      <Topic>
        PLEASE PROVIDE A DETAILED DESCRIPTION OF YOUR ASSIGNMENT NEEDS.

      </Topic>

      <NoteText className='py-4'> @Note: Make sure to enter your email correctly! </NoteText>
      <div className='flex items-center justify-center sm:gap-6 max-w-lg w-full p-3 md:p-12 h-auto'>

        <form onSubmit={handleFormClick} className='w-full'>
          <input
            value={form.email}
            name='email'
            onChange={handleChange}
            placeholder='Enter your validate email'
            className='border-gray-600 border-b-2 bg-black p-2 mt-10 w-full focus:outline-none focus:bg-transparent'
          />
          {error.email && <p className='text-red-500 text-sm'>{error.email}</p>}

          <input
            value={form.plan}
            name='plan'
            onChange={handleChange}
            placeholder='Enter your plan'
            className='border-gray-600 border-b-2 bg-black p-2 mt-10 w-full focus:outline-none'
          />
          {error.plan && <p className='text-red-500 text-sm'>{error.plan}</p>}

          <textarea
            value={form.description}
            name='description'
            onChange={handleChange}
            placeholder='Enter your description kindly'
            className='border-gray-600 border-b-2 bg-black p-2 max-h-96 w-full mt-10 focus:outline-none'
          ></textarea>
          {error.description && <p className='text-red-500 text-sm'>{error.description}</p>}

          {/* <MySimpleBtn text='Send' LeftIcon={SiMinutemailer} className='text-black w-full mt-15' type='submit' /> */}
          <div
            className=' flex justify-center items-center w-full mt-6'
          >

            <Button
              className="bg-black text-white border-slate-800 text-lg  w-full "

            > Send</Button>
          </div>

        </form>
      </div>



      <div className='flex flex-col justify-evenly w-full  '>
        <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-md  text-center  py-3 '>
          PROUDLY MADE BY{' '}
          <span className='text-md md:text-2xl font-bold text-gray-200 tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center pl-2'>
            IMPOSTER
          </span>
        </h1>
      </div>
      <div className='flex justify-center items-center flex-col w-full '>

        <NoteText className='text-center'>
          © 2024 Copyright : collegeworkspro.vercel.app
        </NoteText>
        <NoteText className=' text-center'>
          For inquiries, please contact us at  collegeworkspro@gmail.com !

        </NoteText>
      </div>





      <AnimatePresence initial={false} mode='wait'>
        {isSubmitted &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ background: "rgba(34, 34, 34, 0.75)", opacity: 1 }}
            exit={{ opacity: 0 }}

            className='fixed inset-0 flex justify-center items-center '>
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}

              className='max-w-md w-full p-8 bg-black border-gray-50 border-1 text-white rounded-xl'>
              <p className='text-center'>
                Thank you for getting in touch with us. We'll send you an email with further details once we've confirmed your request.
              </p>
              <div className='flex justify-center mt-4'>

                <MyAnimatedBtn
                  onClick={() => setIsSubmitted(false)}
                >Done</MyAnimatedBtn>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </div>


  );
};

export default Footer;
//bg-gray-900 bg-opacity-75