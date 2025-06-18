"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Brain, Database, Code, Palette, Server, Zap } from "lucide-react";

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
    category: string;
    proficiency: number;
};

type AISkill = {
    name: string;
    icon: React.ComponentType<any>;
    description: string;
    category: string;
};

const skills: Skill[] = [
    { name: "JavaScript", icon: JavaScriptIcon, icon1: JavaScriptIcon1, category: "Frontend", proficiency: 95 },
    { name: "React", icon: ReactIcon, icon1: ReactIcon2, category: "Frontend", proficiency: 92 },
    { name: "Node.js", icon: NodeIcon, icon1: NodeIcon2, category: "Backend", proficiency: 88 },
    { name: "Express", icon: ExpressIcon, icon1: ExpressIcon2, category: "Backend", proficiency: 85 },
    { name: "MongoDB", icon: MongoIcon, icon1: MongoIcon2, category: "Database", proficiency: 80 },
    { name: "Tailwind", icon: TailIcon, icon1: TailIcon2, category: "Frontend", proficiency: 90 },
    { name: "HTML", icon: HtmlIcon, icon1: HtmlIcon2, category: "Frontend", proficiency: 98 },
    { name: "CSS", icon: CssIcon, icon1: CssIcon2, category: "Frontend", proficiency: 95 },
    { name: "Java", icon: JavaIcon, icon1: JavaIcon2, category: "Backend", proficiency: 75 },
    { name: "Vite", icon: ViteIcon, icon1: ViteIcon2, category: "Tools", proficiency: 85 },
];

const aiSkills: AISkill[] = [
    { 
        name: "Agentic AI", 
        icon: Brain, 
        description: "Autonomous AI agents and multi-agent systems",
        category: "AI/ML"
    },
    { 
        name: "RAG Systems", 
        icon: Database, 
        description: "Retrieval-Augmented Generation architectures",
        category: "AI/ML"
    },
    { 
        name: "CAG Architecture", 
        icon: Zap, 
        description: "Context-Aware Generation systems",
        category: "AI/ML"
    },
    { 
        name: "MCP Protocol", 
        icon: Server, 
        description: "Model Context Protocol implementation",
        category: "AI/ML"
    }
];

const categories = [
    { name: "All", icon: Code },
    { name: "Frontend", icon: Palette },
    { name: "Backend", icon: Server },
    { name: "Database", icon: Database },
    { name: "AI/ML", icon: Brain },
    { name: "Tools", icon: Zap }
];

interface SkillCardProps {
    skill: Skill;
}

interface AISkillCardProps {
    skill: AISkill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const { theme } = useTheme();
    const [mouseEnter, setMouseEnter] = useState(false);

    const isDarkMode = theme === "dark";
    const currentIcon = isDarkMode
        ? mouseEnter ? skill.icon : skill.icon1
        : mouseEnter ? skill.icon1 : skill.icon;

    return (
        <div
            className="group transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
        >
            <Card className={`h-full border-2 transition-all duration-300 ${
                theme === "dark"
                    ? mouseEnter
                        ? "bg-white border-white shadow-xl"
                        : "bg-black border-gray-700 hover:border-gray-500"
                    : mouseEnter
                        ? "bg-black border-black shadow-xl"
                        : "bg-white border-gray-300 hover:border-gray-500"
            }`}>
                <CardContent className="flex flex-col items-center justify-center p-6 relative">
                    <div className="relative">
                        <Image 
                            src={currentIcon} 
                            alt={skill.name} 
                            width={60} 
                            height={60}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    
                    {/* Proficiency Bar */}
                    <div className="w-full mt-4">
                        <div className="flex justify-between items-center mb-1">
                            <span className={`text-xs font-medium ${
                                mouseEnter 
                                    ? "text-white dark:text-black" 
                                    : "text-gray-600 dark:text-gray-400"
                            }`}>
                                {skill.proficiency}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                            <div 
                                className={`h-1.5 rounded-full transition-all duration-500 ${
                                    mouseEnter 
                                        ? "bg-gray-800 dark:bg-gray-200" 
                                        : "bg-gray-400 dark:bg-gray-500"
                                }`}
                                style={{ width: `${skill.proficiency}%` }}
                            ></div>
                        </div>
                    </div>
                </CardContent>
                
                <CardFooter className="justify-center pb-4">
                    <div className="text-center">
                        <h6 className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${
                            mouseEnter
                                ? "text-white dark:text-black"
                                : "text-black dark:text-white"
                        }`}>
                            {skill.name}
                        </h6>
                        <span className={`text-xs transition-colors duration-300 ${
                            mouseEnter
                                ? "text-gray-300 dark:text-gray-600"
                                : "text-gray-500 dark:text-gray-400"
                        }`}>
                            {skill.category}
                        </span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

const AISkillCard: React.FC<AISkillCardProps> = ({ skill }) => {
    const { theme } = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = skill.icon;

    return (
        <div
            className="group transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card className={`h-full border-2 transition-all duration-300 ${
                theme === "dark"
                    ? isHovered
                        ? "bg-white border-white shadow-xl"
                        : "bg-black border-gray-700 hover:border-gray-500"
                    : isHovered
                        ? "bg-black border-black shadow-xl"
                        : "bg-white border-gray-300 hover:border-gray-500"
            }`}>
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <IconComponent className={`w-12 h-12 mb-4 transition-all duration-300 ${
                        isHovered 
                            ? "text-white dark:text-black scale-110" 
                            : "text-black dark:text-white scale-110"
                    }`} />
                    
                    <h6 className={`text-sm font-bold uppercase tracking-wide mb-2 transition-colors duration-300 ${
                        isHovered
                            ? "text-white dark:text-black"
                            : "text-black dark:text-white"
                    }`}>
                        {skill.name}
                    </h6>
                    
                    <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                        isHovered
                            ? "text-gray-700 dark:text-gray-300"
                            : "text-gray-500 dark:text-gray-400"
                    }`}>
                        {skill.description}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

const SkillsGrid: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const { theme } = useTheme();

    const filteredSkills = activeCategory === "All" 
        ? skills 
        : skills.filter(skill => skill.category === activeCategory);

    const showAISkills = activeCategory === "All" || activeCategory === "AI/ML";

    return (
        <section className="bg-white dark:bg-black py-16 md:py-20" id="skills">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                        Technical <span className="font-extrabold">Expertise</span>
                    </h2>
                    <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Proficient in multiple programming languages and cutting-edge AI technologies
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <button
                                key={category.name}
                                onClick={() => setActiveCategory(category.name)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    activeCategory === category.name
                                        ? "bg-black dark:bg-white text-white dark:text-black"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                            >
                                <IconComponent className="w-4 h-4" />
                                {category.name}
                            </button>
                        );
                    })}
                </div>

                {/* AI Skills Section */}
                {showAISkills && (
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-8 text-center">
                            AI & Advanced Technologies
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {aiSkills.map((skill, index) => (
                                <AISkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Technical Skills Grid */}
                <div>
                    {activeCategory !== "AI/ML" && (
                        <>
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-8 text-center">
                                {activeCategory === "All" ? "Core Technologies" : activeCategory}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {filteredSkills.map((skill, index) => (
                                    <SkillCard key={index} skill={skill} />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Language Flexibility Statement */}
                <div className="mt-16 text-center">
                    <div className="max-w-4xl mx-auto p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                            Language Agnostic Developer
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            As a versatile developer, I'm comfortable working with <span className="font-semibold text-black dark:text-white">any programming language</span> and 
                            can quickly adapt to new technologies and frameworks. My focus is on solving problems efficiently, 
                            regardless of the tech stack.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsGrid;