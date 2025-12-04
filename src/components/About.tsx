"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-800 px-6">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ y: 40 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-lg leading-relaxed mb-6">
          I’m <span className="font-semibold text-blue-600">Muratcan</span>, a
          Frontend Developer with 4+ years of experience building web projects
          for global brands including Pfizer, AstraZeneca, Peugeot, Vodafone,
          Bezmialem, Viatris, Axa Sigorta and many more.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          My focus is creating clean, scalable and high-quality interfaces using
          modern frontend technologies. I care about speed, usability and visual
          clarity — and I work closely with design teams to deliver polished,
          production-ready experiences.
        </p>

        <p className="text-lg leading-relaxed">
          I also actively use AI-assisted tools in my workflow to code faster,
          reduce errors and maintain a consistent development quality across
          projects.
        </p>
      </motion.div>
    </section>
  );
}
