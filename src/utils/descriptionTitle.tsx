import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";

interface DescriptionTitleProps {
    className?: string;
    children: ReactNode
}

export const DescriptionTitle: React.FC<DescriptionTitleProps> = ({ className, children }) => {
    return (
        <p className={twMerge("text-base sm:text-xl  mt-4 mb-2 text-neutral-200", className)}>
            {children}
        </p>
    );
};
