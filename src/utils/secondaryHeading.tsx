import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";

interface Props {
    className?: string;
    children: ReactNode
}

export const SecondaryHeading: React.FC<Props> = ({ className, children }) => {
    return (
        <p className='tracking-wide  mt-10  bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-50 to-neutral-400  font-normal text-base md:text-lg max-w-lg mx-auto px-3'>
            {children}
        </p>
    );
};
