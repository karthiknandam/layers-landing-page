"use client";
import Button from "@/components/Button";
import designExampleImage1 from "@/assets/images/design-example-1.png";
import designExampleImage2 from "@/assets/images/design-example-2.png";
import cursorYourImage from "@/assets/images/cursor-you.svg";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { useEffect, useState } from "react";
import { useAnimate, motion } from "framer-motion";
export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();
    const [cursorStyle, setCursorStyle] = useState("");

    useEffect(() => {
        const updateCursor = () => {
            if (window.innerWidth < 1200) {
                setCursorStyle("auto");
            } else {
                setCursorStyle(`url(${cursorYourImage.src}), auto`);
            }
        };
        updateCursor();
        window.addEventListener("resize", updateCursor);
        return () => window.removeEventListener("resize", updateCursor);
    }, [cursorYourImage]);
    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { x: -100, y: 0 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] }, // -> 0 then goes down then pickit up
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [
                rightDesignScope.current,
                {
                    x: 0,
                    y: 0,
                },
                {
                    duration: 0.5,
                },
            ],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [
                rightPointerScope.current,
                {
                    x: 175,
                    y: 0,
                },
                {
                    duration: 0.5,
                },
            ],
            [
                rightPointerScope.current,
                {
                    x: 0,
                    y: [0, 20, 0],
                },
                {
                    duration: 0.5,
                    ease: "easeInOut",
                },
            ],
        ]);
    }, []);
    return (
        // overflow-x-clip => this is to ensure to not overflow in the x direction
        <section
            id="home"
            className="py-24 overflow-x-hidden scroll-mt-[46px] max-sm:cursor-default md:cursor-default"
            style={{
                cursor: cursorStyle,
            }}
        >
            <div className="container relative">
                {/* These are absolute motion elemts for the large screenn */}
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, x: -100, y: 100 }}
                    className="absolute hidden lg:block -left-32 top-16"
                    drag
                >
                    <Image
                        src={designExampleImage1}
                        alt="Profile Image Example"
                        draggable="false" // ensure that we are only dragging this thing in only one way like copy to off that false
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, x: -200, y: 100 }}
                    className="absolute top-96 left-56 hidden lg:block"
                >
                    <Pointer name="Luffytaro" />
                </motion.div>
                <motion.div
                    drag
                    ref={rightDesignScope}
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    className="absolute hidden lg:block -right-64 -top-16"
                >
                    <Image
                        src={designExampleImage2}
                        alt="Profile Image Example"
                        draggable="false"
                    />
                </motion.div>

                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Zorozuro" color="red" />
                </motion.div>
                <div className="text-center">
                    <div className="inline-flex font-bold text-neutral-900 bg-gradient-to-r from-purple-400 to bg-pink-400 py-1 px-3 rounded-full">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium mt-6 text-center">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-white/50 text-xl mt-8 text-center max-w-2xl mx-auto">
                    Design tools shouldn't slow you down. Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>
                <form className="mt-8 flex border border-white/15 p-2 rounded-full max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 font-medium focus:outline-none flex-1 w-full"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
