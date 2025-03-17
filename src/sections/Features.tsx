import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";

import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Avatar from "@/components/Avatar";
import Image from "next/image";
import { div, span } from "framer-motion/client";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section id="features" className="py-24 scroll-mt-2">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <div>
                    <h2 className="text-6xl font-medium text-center mt-6">
                        <span>Where power meets</span>
                        <span className="block text-lime-500">simplicity</span>
                    </h2>
                </div>
                {/* //*Feature Cards Components  */}
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
                    <FeatureCard
                        className="md:col-span-2 lg:col-span-1 group"
                        title={"Real-time Collaboration"}
                        description={
                            "Work together seamlessly with conflict-free team editing"
                        }
                    >
                        <div className="flex justify-center items-center aspect-video">
                            <Avatar className="z-40  border-blue-500">
                                <Image
                                    src={avatar1}
                                    className="p-1 rounded-full"
                                    alt="Profile"
                                />
                            </Avatar>
                            <Avatar className="border-indigo-500 -ml-6 z-30">
                                <Image
                                    src={avatar2}
                                    className="p-1 rounded-full"
                                    alt="Profile"
                                />
                            </Avatar>

                            <Avatar className="border-yellow-500 -ml-6 z-20">
                                <Image
                                    src={avatar3}
                                    className="p-1 rounded-full"
                                    alt="Profile"
                                />
                            </Avatar>
                            <Avatar className="border-transparent group-hover:border-green-500 transition relative z-10 -ml-6 p-1 duration-500">
                                <div className="bg-neutral-700 size-full rounded-full inline-flex items-center justify-center gap-1">
                                    <Image
                                        src={avatar4}
                                        width={50}
                                        height={50}
                                        className="rounded-full size-full p-1 absolute opacity-0  group-hover:opacity-100 transition duration-500"
                                        alt="my-Image"
                                    />
                                    {Array.from({ length: 3 }).map((_, i) => {
                                        return (
                                            <span
                                                key={i}
                                                className="size-1.5 rounded-full bg-white"
                                            />
                                        );
                                    })}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        className="cursor-default md:col-span-2 lg:col-span-1 group"
                        title={"Interactive Prototyping"}
                        description={
                            "Engage your clients with prototypes that react to user actions"
                        }
                    >
                        <div className="aspect-video flex justify-center items-center">
                            <p className="text-white/20 text-4xl font-extrabold group-hover:text-white/15 text-center transition duration-500">
                                We've achieved{" "}
                                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                    <span>incredible</span>
                                    <video
                                        muted
                                        playsInline
                                        autoPlay
                                        loop
                                        className="absolute bottom-5 scale-75 -translate-x-1/2 left-1/2 rounded-2xl duration-500 transition opacity-0 group-hover:opacity-100 pointer-events-none" // ponter-events-ensure that we cannot modify the video hover to the gif
                                        src="/assets/gif-incredible.mp4"
                                    />
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 group"
                        title={"Keyboard Quick Actions"}
                        description={
                            "Powerful commands to help group you create designs more quickly"
                        }
                    >
                        <div className="aspect-video flex justify-center items-center gap-4">
                            <Key className="transition-all duration-500 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-300 group-hover:translate-y-1  delay w-28">
                                shift
                            </Key>
                            <Key className="transition-all duration-500 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-300 group-hover:translate-y-1 delay-100 ">
                                alt
                            </Key>
                            <Key className="transition-all duration-500 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-300 group-hover:translate-y-1 delay-150 ">
                                C
                            </Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="flex flex-wrap justify-center mt-8 gap-3">
                    {features.map((f_name) => (
                        <div
                            className="hover:scale-105 cursor-default group duration-200 transition-all inline-flex justify-center items-center gap-3 bg-neutral-900 border border-white/15 rounded-2xl px-3 py-1.5 md:px-5 md:py-2"
                            key={f_name}
                        >
                            <span className="inline-flex group-hover:rotate-90 duration-500 text-neutral-950 bg-lime-500 rounded-full justify-center items-center size-5 text-xl">
                                &#10038;
                            </span>
                            <span className="font-medium  md:text-lg">
                                {f_name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
