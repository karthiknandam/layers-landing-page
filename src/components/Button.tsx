import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

const classes = cva("border px-6 h-12 font-medium rounded-full", {
    variants: {
        variant: {
            primary: "bg-lime-400 border-lime-400 text-neutral-950",
            secondary: "border-white text-white bg-transparent",
        },
        size: {
            sm: "h-10",
        },
    },
});

const Button = (
    props: {
        variant: "primary" | "secondary";
        children: ReactNode;
        className?: string;
        size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
    const { variant, className, children, size, ...rest } = props;

    return (
        <button
            className={`${classes({ variant, size })} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
