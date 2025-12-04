"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiAdobexd,
  SiWordpress,
  SiGit,
  SiGithub,
  SiOpenai,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
      ],
    },
    {
      category: "UI Styling",
      items: [
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
    },
    {
      category: "Design Tools",
      items: [
        { name: "Figma", icon: <SiFigma /> },
        { name: "Adobe XD", icon: <SiAdobexd /> },
      ],
    },
    {
      category: "CMS Experience",
      items: [{ name: "WordPress", icon: <SiWordpress /> }],
    },
    {
      category: "Version Control",
      items: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
      ],
    },
    {
      category: "AI-Assisted Tools",
      items: [
        { name: "ChatGPT", icon: <SiOpenai /> },
        { name: "AI Workflows", icon: <SiOpenai /> },
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ y: 40 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gray-100 text-gray-800 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            initial={false} // SSR'den gelen görünümü başlangıç kabul et → flash yok
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="p-6 bg-white rounded-xl shadow min-h-[260px] flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-4 text-left">
              {group.category}
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {group.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium text-base">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
