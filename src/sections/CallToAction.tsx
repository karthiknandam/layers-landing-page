"use client";
import { useAnimate, motion, AnimationPlaybackControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const animation = useRef<AnimationPlaybackControls>();
    const [mouseEnter, setMouseEnter] = useState<boolean>(false);
    const [scope, animate] = useAnimate();
    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 30, ease: "linear", repeat: Infinity }
        );
    }, []);
    useEffect(() => {
        if (animation.current) {
            if (mouseEnter) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, []);
    return (
        <section className="py-24">
            <div className="flex overflow-hidden p-4">
                <motion.div
                    ref={scope}
                    onMouseEnter={() => setMouseEnter(true)}
                    onMouseLeave={() => setMouseEnter(false)}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl cursor-pointer group"
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div
                            className="flex gap-16 justify-center items-center"
                            key={i}
                        >
                            <div className="text-lime-500 md:text-7xl">
                                &#10038;
                            </div>
                            <p className="font-medium group-hover:text-lime-500 transition delay-75">
                                Try it for free
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
