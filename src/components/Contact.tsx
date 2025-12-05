"use client";

import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Click outside to close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  const handleDownload = (lang: "tr" | "en") => {
    const file =
      lang === "tr"
        ? "/cv/cv_muratcansalih.pdf"
        : "/cv/cv_muratcansalih_eng.pdf";

    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop() || "cv.pdf";
    link.click();
    setOpen(false);
  };

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
        {/* Email + CV */}
        <div className="flex flex-col gap-3 md:flex-row">
          <a
            href="mailto:muratcansalih3@hotmail.com"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium"
          >
            Send an Email
          </a>

          {/* Download CV - Language Selector */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((prev) => !prev);
              }}
              className="px-6 py-3 rounded-full border border-blue-400 text-blue-300 
              hover:bg-blue-500 hover:text-white transition font-medium flex items-center gap-2"
            >
              <FiDownload />
              Download CV
            </button>

            {open && (
              <div
                className="
                  absolute left-1/2 -translate-x-1/2 
                  bottom-full mb-2
                  w-44 bg-[#1e293b] border border-blue-400 
                  rounded-xl overflow-hidden shadow-xl
                  text-sm
                "
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => handleDownload("en")}
                  className="w-full px-4 py-2 hover:bg-blue-500 hover:text-white transition text-left"
                >
                  English
                </button>
                <button
                  onClick={() => handleDownload("tr")}
                  className="w-full px-4 py-2 hover:bg-blue-500 hover:text-white transition text-left"
                >
                  Türkçe
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Social Icons */}
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
