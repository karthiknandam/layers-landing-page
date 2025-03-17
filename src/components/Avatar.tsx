import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Avatar = (props: { className?: string; children: ReactNode }) => {
    const { children, className } = props;
    return (
        <div
            className={twMerge(
                "border-4 rounded-full size-20 overflow-hidden bg-neutral-900",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Avatar;
