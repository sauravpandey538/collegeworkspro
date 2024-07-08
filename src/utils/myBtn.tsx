import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";
import { Button } from "@/components/ui/moving-border";

interface NoteTextProps {
    className?: string,
    children: ReactNode,
    onClick?: () => void
}

export const MyAnimatedBtn: React.FC<NoteTextProps> = ({ className, children, onClick }) => {
    return (
        <Button
            onClick={onClick}
            className="bg-black text-white border-slate-800 text-lg  "
        >
            {children}
        </Button>
    );
};
