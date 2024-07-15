import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";

interface TopicProps {
    className?: string;
    children: ReactNode
}

export const Topic: React.FC<TopicProps> = ({ className, children }) => {
    return (
        <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-xl md:text-3xl text-center items-center px-6'>
            {children}</h1>
    );
};
