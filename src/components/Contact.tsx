"use client";

import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiDownload } from "react-icons/fi";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-[#0f172a] text-white flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <p className="text-gray-300 max-w-xl text-center mb-10">
        I’m open to roles, collaborations and project discussions. Feel free to
        reach out — I’ll respond as soon as possible.
      </p>

      <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
        <div className="flex flex-col gap-3 md:flex-row">
          <a
            href="mailto:muratcansalih3@hotmail.com.com"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium"
          >
            Send an Email
          </a>

          <a
            href="/cv/cv_muratcansalih.pdf"
            download
            className="px-6 py-3 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white transition font-medium flex items-center justify-center gap-2"
          >
            <FiDownload />
            Download CV
          </a>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/muratcansalihW"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muratcan-salih-8076a31a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-400 transition"
          >
            <SiLinkedin />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
