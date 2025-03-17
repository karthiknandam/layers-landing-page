import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        // extend: {
        //     animation: {
        //         marquee: "marquee 5s linear infinite",
        //     },
        //     keyframes: {
        //         marquee: {
        //             from: { transform: "translateX(0%)" },
        //             to: { transform: "translateX(-100%)" }, // Move left, half of duplicated content
        //         },
        //     },
        // },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                md: "2rem",
                lg: "4rem",
            },
        },
        fontFamily: {
            sans: ["var(--font-inter)", "sans-serif"],
        },
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1200px",
        },
    },
    plugins: [],
};
export default config;
