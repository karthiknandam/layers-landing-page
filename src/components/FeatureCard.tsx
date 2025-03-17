import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const FeatureCard = (props: {
    title: string;
    description: string;
    children: ReactNode;
    className?: string;
}) => {
    const { children, description, className, title, ...other } = props;
    return (
        <div
            className={twMerge(
                "bg-neutral-900 border border-white/10 rounded-3xl flex flex-col p-6 ",
                className
            )}
            {...other}
        >
            <div className="aspect-video">{children}</div>
            <div className="mt-6">
                <h3 className="text-3xl text-white font-medium">{title}</h3>
                <p className="text-white/45 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
