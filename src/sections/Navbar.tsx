"use client";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();
    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full  bg-neutral-950/50 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3  p-2 px-4 md:pr-2">
                            <div
                                className="cursor-pointer"
                                onClick={() => router.push("/")}
                            >
                                <Image
                                    src={Logo}
                                    alt="Logo"
                                    className="h-9 w-auto md:h-auto cursor-pointer"
                                />
                            </div>
                            <div className="max-lg:hidden flex justify-center items-center">
                                <nav className="font-medium text-white/80 flex gap-6">
                                    {navLinks.map((link) => (
                                        <a
                                            href={link.href}
                                            className="hover:text-white transition duration-75"
                                            key={link.label}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end items-center gap-4">
                                <svg
                                    onClick={() => setIsOpen(!isOpen)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu text-white md:hidden cursor-pointer"
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left",
                                            isOpen &&
                                                "rotate-45 -translate-y-1 transition"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "hidden"
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left",
                                            isOpen &&
                                                "-rotate-45 translate-y-1 transition"
                                        )}
                                    ></line>
                                </svg>

                                <Button
                                    variant="secondary"
                                    className="hidden md:block"
                                >
                                    Log In
                                </Button>
                                <Button
                                    variant="primary"
                                    className="hidden md:block"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden md:hidden"
                                >
                                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                                        {navLinks.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                                onClick={() =>
                                                    setTimeout(() => {
                                                        setIsOpen(false);
                                                    }, 700)
                                                }
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <Button
                                            onClick={() => {
                                                setIsOpen(false);
                                            }}
                                            variant={"secondary"}
                                        >
                                            Log in
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                setIsOpen(false);
                                            }}
                                            variant={"primary"}
                                        >
                                            Sign up
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb[98px]"></div>
        </>
    );
}
