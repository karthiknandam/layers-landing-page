import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Key = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...other } = props;
    return (
        <div
            className={twMerge(
                "bg-neutral-300 text-neutral-700 font-bold text-lg rounded-xl size-14 inline-flex justify-center items-center",
                className
            )}
            {...other}
        >
            <p className="text-lg">{children}</p>
        </div>
    );
};

export default Key;
