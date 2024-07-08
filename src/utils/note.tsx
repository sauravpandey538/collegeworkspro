import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";

interface NoteTextProps {
    className?: string;
    children: ReactNode
}

export const NoteText: React.FC<NoteTextProps> = ({ className, children }) => {
    return (
        <p className={twMerge('text-sm text-neutral-600 py-1', className)}>
            {children}        </p>
    );
};
