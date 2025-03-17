"use client";
import React, { memo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
const FaqComponent = memo((props: { title: string; description: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { title, description } = props;
    return (
        <div className="bg-neutral-900 border rounded-2xl border-white/15 w-full">
            <div className="flex flex-col p-6">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setIsOpen((val) => !val)}
                >
                    <h4 className="font-medium">{title}</h4>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={twMerge(
                            "feather feather-plus cursor-pointer transition duration-300 text-lime-500 flex-shrink-0",
                            isOpen && "rotate-45 transition-all"
                        )}
                    >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, marginTop: 0 }}
                            animate={{ height: "auto", marginTop: 24 }}
                            exit={{ height: 0, marginTop: 0 }}
                            className="overflow-hidden"
                        >
                            <p className="text-white/50">{description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
});
FaqComponent.displayName = "Faq Component";
export default FaqComponent;
