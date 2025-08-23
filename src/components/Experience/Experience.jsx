import React from "react";
import { Briefcase, Github, Code } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Open Source Contributor – GitHub",
    duration: "2023 – Present",
    description: [
      "Contributed to open-source repositories by fixing bugs and improving documentation.",
      "Created and published a custom NPM package for email validation.",
      "Regularly share projects and collaborate with developers on GitHub.",
    ],
    icon: <Github className="w-6 h-6 text-purple-500" />,
  },
  {
    id: 2,
    title: "Academic & Personal Projects",
    duration: "2024 – Present",
    description: [
      "Welth – A personal finance dashboard built with Next.js, Prisma, Supabase, and Clerk.",
      "Job Hiring Portal – A full-stack job portal with role-based authentication using Supabase + Clerk.",
      "Password Manager – A React.js app with localStorage persistence for secure credential management.",
    ],
    icon: <Code className="w-6 h-6 text-purple-500" />,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg">
          Hands-on experience through{" "}
          <span className="text-purple-400 font-semibold">
            open source contributions
          </span>{" "}
          and{" "}
          <span className="text-purple-400 font-semibold">
            academic projects
          </span>{" "}
          that demonstrate practical skills in full-stack development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full"></div>

        {/* Entries */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Icon */}
              <div className="z-10 bg-gray-900 border-2 border-purple-500 p-3 rounded-full shadow-lg sm:mx-6">
                {exp.icon}
              </div>

              {/* Content */}
              <div className="bg-white/10 backdrop-blur-md border border-gray-600 rounded-2xl shadow-lg p-6 w-full sm:w-5/12">
                <h3 className="text-xl font-semibold text-purple-400">
                  {exp.title}
                </h3>
                <span className="text-sm text-gray-400">{exp.duration}</span>
                <ul className="mt-3 space-y-2 text-gray-300 text-sm">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
