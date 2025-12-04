"use client";

import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 relative">
      <div className="container mx-auto px-4 flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
        <div className="space-y-1">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Muratcan. All rights reserved.
          </p>
          <p className="text-xs md:text-sm text-gray-400">
            Open to frontend roles and collaborations.
          </p>
        </div>

        <div className="flex gap-4 text-xs md:text-sm text-gray-400">
          <Link href="#hero" className="hover:text-white">
            Home
          </Link>
          <Link href="#projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </div>

        <div className="text-xs md:text-sm text-gray-400">
          Built with <span className="text-gray-200 font-medium">Next.js</span>{" "}
          & TypeScript
        </div>
      </div>

      <motion.button
        onClick={scrollTop}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg cursor-pointer transition flex items-center justify-center z-[999]"
      >
        <FiArrowUp className="text-xl" />
      </motion.button>
    </footer>
  );
}
