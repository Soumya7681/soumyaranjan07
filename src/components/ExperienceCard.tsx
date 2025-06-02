"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import complogo from "../assets/images/comp.png";
import complogo3 from "../assets/images/hy.png"
import complogo1 from "../assets/images/ql.png";

type ExperienceItem = {
  icon: StaticImageData;
  title: string;
  description: string;
  date: string;
};

const experiences: ExperienceItem[] = [
  {
    icon: complogo3,
    title: "Junior Software Development Engineer at Hyscaler Pvt",
    description: `Assisted in developing and maintaining web applications using the MERN stack, enhancing functionality and user experience. Collaborated with senior developers to identify and fix bugs, ensuring smooth software performance. Actively participated in agile processes, contributing to sprint planning, daily stand-ups, and code reviews for timely project delivery.`,
    date: "Dec 2024 - Present",
  },
  {
    icon: complogo,
    title: "Junior Software Engineer at Technoboot Pvt Ltd",
    description: `Assisted in developing and maintaining web applications using the MERN stack, enhancing functionality and user experience. Collaborated with senior developers to identify and fix bugs, ensuring smooth software performance. Actively participated in agile processes, contributing to sprint planning, daily stand-ups, and code reviews for timely project delivery.`,
    date: "Jul 2023 - Dec 2024",
  },
  {
    icon: complogo,
    title: "Associate Software Engineer at Technoboot Pvt Ltd",
    description: `Developed and optimized software features using the MERN stack to enhance performance and user experience. Collaborated with cross-functional teams to design and maintain scalable applications, ensuring timely delivery. Conducted code reviews, performed debugging, and provided technical support to improve code quality and resolve issues efficiently.`,
    date: "Mar 2023 - Jun 2023",
  },
  {
    icon: complogo1,
    title: "Software Intern at Quantumware Pvt Ltd",
    description: `Assisted in developing and testing software applications, gaining proficiency in MERN. Collaborated with team members on debugging and troubleshooting tasks, contributing to successful project completions.`,
    date: "Mar 2022 - Jun 2022",
  },
];

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const bgColor = index % 2 === 0 ? (isDarkMode ? "#ffffff" : "#000000") : "#27272A";

  return (
    <Card
      className="m-4 p-4 mx-auto shadow-lg border border-gray-700"
      style={{ backgroundColor: bgColor, borderRadius: "10px" }}
    >
      <CardContent>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <h3 className="text-xl font-bold flex items-center text-white dark:text-black mb-2">
            <span className="mr-2">
              <Image
                src={experience.icon}
                alt={experience.title}
                width={48}
                height={48}
                className="object-contain"
              />
            </span>
            {experience.title}
          </h3>
          <p className="text-gray-400 text-sm lg:text-right mt-4 lg:mt-0 whitespace-nowrap px-2">
            {experience.date}
          </p>
        </div>
        <p className="text-gray-300 dark:text-gray-500 text-left mt-2">
          {experience.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function Experience() {
  return (
    <section className="text-center mb-8 bg-black dark:bg-white p-5 md:p-10 lg:p-20">
      <h2 className="text-3xl font-bold text-white dark:text-black">
        My <span className="font-extrabold">Experience</span>
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
