"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
// Image imports
import JavaScriptIcon from "../assets/images/javascript.png";
import JavaScriptIcon1 from "../assets/images/javascript2.png";
import NodeIcon from "../assets/images/node.png";
import NodeIcon2 from "../assets/images/node2.png";
import ExpressIcon from "../assets/images/express.png";
import ExpressIcon2 from "../assets/images/express2.png";
import MongoIcon from "../assets/images/mongo.png";
import MongoIcon2 from "../assets/images/mongo2.png";
import ReactIcon from "../assets/images/react.png";
import ReactIcon2 from "../assets/images/react2.png";
import TailIcon from "../assets/images/tail.png";
import TailIcon2 from "../assets/images/tail2.png";
import ViteIcon from "../assets/images/vite.png";
import ViteIcon2 from "../assets/images/vite2.png";
import HtmlIcon from "../assets/images/html.png";
import HtmlIcon2 from "../assets/images/html2.png";
import CssIcon from "../assets/images/css.png";
import CssIcon2 from "../assets/images/css2.png";
import JavaIcon from "../assets/images/java.png";
import JavaIcon2 from "../assets/images/java2.png";
import type { StaticImageData } from "next/image";
type Skill = {
    name: string;
    icon: StaticImageData;
    icon1: StaticImageData;
};

const skills: Skill[] = [
    { name: "JavaScript", icon: JavaScriptIcon, icon1: JavaScriptIcon1 },
    { name: "Node", icon: NodeIcon, icon1: NodeIcon2 },
    { name: "Express", icon: ExpressIcon, icon1: ExpressIcon2 },
    { name: "Mongo", icon: MongoIcon, icon1: MongoIcon2 },
    { name: "React", icon: ReactIcon, icon1: ReactIcon2 },
    { name: "Tailwind", icon: TailIcon, icon1: TailIcon2 },
    { name: "Vite", icon: ViteIcon, icon1: ViteIcon2 },
    { name: "Html", icon: HtmlIcon, icon1: HtmlIcon2 },
    { name: "Css", icon: CssIcon, icon1: CssIcon2 },
    { name: "Java", icon: JavaIcon, icon1: JavaIcon2 },
];

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const { theme } = useTheme();
    const [mouseEnter, setMouseEnter] = useState(false);

    const isDarkMode = theme === "dark";
    const currentIcon = isDarkMode
        ? mouseEnter
            ? skill.icon
            : skill.icon1
        : mouseEnter
            ? skill.icon1
            : skill.icon;

    return (
        <div
            className={` transition-all duration-300 text-center hover:shadow-lg cursor-pointer
        `}
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
        >
            <Card
                className={`${theme === "dark"
                    ? mouseEnter
                        ? "bg-white border-white"
                        : "bg-black border-white"
                    : mouseEnter
                        ? "bg-black border-black"
                        : "bg-white border-black"
                    }`}
            >
                <CardContent className="flex flex-col items-center justify-cente">
                    <Image src={currentIcon} alt={skill.name} width={90} height={90} />
                </CardContent>
                <CardFooter className="justify-center">
                    <h6
                        className={`text-sm font-bold uppercase tracking-wide font-sora ${mouseEnter
                            ? "text-white dark:text-black"
                            : "text-black dark:text-white"
                            }`}
                    >
                        {skill.name}
                    </h6>
                </CardFooter>
            </Card>
        </div>
    );
};

const SkillsGrid: React.FC = () => {
    return (
        <section className="text-center mb-12 bg-white dark:bg-black py-12" id="skills">
            <h2 className="text-3xl font-light mb-10 dark:text-white">
                My <span className="font-bold font-sora text-shadow-custom">Skills</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </section>
    );
};

export default SkillsGrid;
