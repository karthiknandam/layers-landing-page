"use client";
import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");
export default function Introduction() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end end"],
    });
    const [newWord, setNewWord] = useState<number>(0);

    const wordchange = useTransform(scrollYProgress, [0, 1], [0, words.length]);
    useEffect(() => {
        wordchange.on("change", (latest) => {
            setNewWord(latest);
        });
    }, [wordchange]);
    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="top-20 lg:top-40 md:top-28 sticky">
                    <div className="flex justify-center">
                        <Tag>introducing layers</Tag>
                    </div>
                    <div className="text-center text-4xl md:text-6xl lg:text-7xl font-medium mt-10">
                        <span>Your creative process deserves better.</span>{" "}
                        <span className="">
                            {words.map((word, i) => (
                                <span
                                    key={i}
                                    className={twMerge(
                                        "text-white/15 transition duration-500",
                                        i < newWord && "text-white"
                                    )}
                                >
                                    {word}{" "}
                                </span>
                            ))}
                        </span>
                        <span className="block text-lime-500">
                            That's why we built Layers.
                        </span>
                    </div>
                </div>
                <div ref={scrollRef} className="h-[150vh] duration-300"></div>
            </div>
        </section>
    );
}
