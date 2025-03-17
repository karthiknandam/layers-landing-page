import React, { HTMLAttributes, memo, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Tag = memo(
    (
        props: {
            children: ReactNode;
            className?: string;
        } & HTMLAttributes<HTMLDivElement>
    ) => {
        const { className, children } = props;
        return (
            <div>
                <div
                    className={twMerge(
                        "inline-flex items-center font-medium border border-lime-500 text-lime-500 rounded-full px-3 py-1 gap-2",
                        className
                    )}
                >
                    <span>&#10038;</span>
                    <span className="text-sm uppercase">{children}</span>
                </div>
            </div>
        );
    }
);
Tag.displayName = "Tag";
export default Tag;
