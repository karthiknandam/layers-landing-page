import figmaLogo from "@/assets/images/figma-logo.svg";
import notionLogo from "@/assets/images/notion-logo.svg";
import slackLogo from "@/assets/images/slack-logo.svg";
import relumeLogo from "@/assets/images/relume-logo.svg";
import framerLogo from "@/assets/images/framer-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";
import Tag from "@/components/Tag";
import { div } from "framer-motion/client";
import Image from "next/image";
import IntegrationColoumn from "@/components/IntegrationColoumn";
const integrations = [
    {
        name: "Figma",
        icon: figmaLogo,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notionLogo,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slackLogo,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: relumeLogo,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framerLogo,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: githubLogo,
        description: "GitHub is the leading platform for code collaboration.",
    },
];
export type IntegrationType = typeof integrations;
export default function Integrations() {
    return (
        <section id="integrations" className="py-24 scroll-mt-2">
            <div className="container">
                <div className="lg:grid-cols-2 grid lg:gap-16 items-center">
                    <div className="">
                        <Tag>integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Plays well with{" "}
                            <span className="text-lime-500">others</span>
                        </h2>
                        <p className="text-white/50 text-lg mt-4">
                            Layers seamlessly connects with your favorite tools,
                            making it easy to plug into any workflow and
                            collaborate accross platforms
                        </p>
                    </div>
                    <div>
                        <div className="mt-8 h-[400px] lg:h-[800px] lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:flex md:gap-4">
                            <IntegrationColoumn integrations={integrations} />
                            <IntegrationColoumn
                                repeat
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
