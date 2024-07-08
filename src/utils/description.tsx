import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";

interface DescriptionProps {
    className?: string;
    children: ReactNode
}

export const Description: React.FC<DescriptionProps> = ({ className, children }) => {
    return (
        <p className="text-sm  text-neutral-400">
            {children}
        </p>
    );
};
