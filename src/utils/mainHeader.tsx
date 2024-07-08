import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";

interface MainHeaderProps {
    className?: string;
    children: ReactNode
}

export const MainHeader: React.FC<MainHeaderProps> = ({ className, children }) => {
    return (
        <h1
            className=' text-4xl md:text-5xl font-bold  tracking-wide  my-10  bg-clip-text text-transparent
    bg-gradient-to-b from-neutral-50 to-neutral-400 max-w-4xl w-full
    '
        >  {children}  </h1>
    );
};
