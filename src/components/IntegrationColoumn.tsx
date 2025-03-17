"use client";
import React from "react";
import { IntegrationType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// If any one has better approach just feel free to pull request

const IntegrationColoumn = (props: {
    className?: string;
    integrations: IntegrationType;
    repeat?: boolean;
}) => {
    const { integrations, className, repeat, ...other } = props;
    return (
        //^ make sure use two motion.divs here to ensure proper scroll animation effect here
        <div className="flex flex-col">
            <motion.div
                initial={{ y: repeat ? "-50%" : 0 }}
                animate={{ y: repeat ? 0 : "-50%" }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className={twMerge("flex flex-col gap-4 pb-4", className)}
                {...other}
            >
                {Array.from({ length: 2 }).map((_, i) => (
                    <React.Fragment key={i}>
                        {integrations.map((integration) => (
                            <div
                                key={integration.name}
                                className="bg-neutral-900 rounded-3xl border border-white/15 p-6"
                            >
                                <div className="flex justify-center items-center">
                                    <Image
                                        src={integration.icon}
                                        alt={integration.name}
                                        className="size-24"
                                    />
                                </div>
                                <h3 className="text-3xl text-center mt-6 font-medium">
                                    {integration.name}
                                </h3>
                                <p className="text-white/50 mt-2 text-center font-medium">
                                    {integration.description}
                                </p>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
            <motion.div
                initial={{ y: repeat ? "-50%" : 0 }}
                animate={{ y: repeat ? 0 : "-50%" }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className={twMerge("flex flex-col gap-4 pb-4", className)}
            >
                {Array.from({ length: 2 }).map((_, i) => (
                    <React.Fragment key={i}>
                        {integrations.map((integration) => (
                            <div
                                key={integration.name}
                                className="bg-neutral-900 rounded-3xl border border-white/15 p-6"
                            >
                                <div className="flex justify-center items-center">
                                    <Image
                                        src={integration.icon}
                                        alt={integration.name}
                                        className="size-24"
                                    />
                                </div>
                                <h3 className="text-3xl text-center mt-6 font-medium">
                                    {integration.name}
                                </h3>
                                <p className="text-white/50 mt-2 text-center font-medium">
                                    {integration.description}
                                </p>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

export default IntegrationColoumn;
