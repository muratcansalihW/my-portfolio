"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        pt-24 pb-20 
        flex flex-col items-center justify-center 
        min-h-screen text-center 
        bg-gradient-to-b from-gray-900 via-slate-900 to-gray-800
        text-white px-6
        overflow-hidden
      "
    >
      {/* ARKA PLAN BLUR LİGHTLAR */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-blue-500/25 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-40 -right-24 w-80 h-80 rounded-full bg-indigo-500/25 blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/15 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ÖN PLAN İÇERİK */}
      <motion.div
        initial={{ y: 40 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Hi, I’m <span className="text-blue-400">Muratcan</span> 👋
        </h1>

        <p className="text-lg md:text-2xl max-w-3xl mb-4 text-gray-200 leading-relaxed mx-auto">
          Frontend Developer crafting fast, modern and user-focused web
          interfaces using <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">TypeScript</span> and{" "}
          <span className="font-semibold">Tailwind CSS</span>.
        </p>

        <p className="text-base md:text-xl max-w-2xl mb-8 text-gray-300 leading-relaxed mx-auto">
          I also use AI-assisted workflows to work faster, improve accuracy and
          deliver cleaner, more reliable frontend experiences.
        </p>

        <div className="flex gap-4 justify-center mt-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full transition font-medium text-base"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white px-7 py-3 rounded-full transition font-medium text-base"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
