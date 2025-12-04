"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [shrink, setShrink] = useState(false);

  // Shrink + background toggle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setShrink(true);
      else setShrink(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlight (scroll ile)
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // 🔽 biraz düşürdük ki Projects daha rahat yakalansın
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300
        ${
          shrink
            ? "py-3 bg-gray-900/90 backdrop-blur border-b border-white/10"
            : "py-6 bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          onClick={() => {
            setActive("hero");
            closeMenu();
          }}
          className="flex items-center gap-3"
        >
          <span className="text-2xl font-extrabold text-white tracking-wide">
            Muratcan
          </span>
          <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-blue-300 border border-white/20">
            Frontend Dev
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg text-gray-200">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setActive(id)} // 🔹 tıklayınca da aktif yap
                  className={`
                    transition relative pb-1
                    ${isActive ? "text-blue-400" : "hover:text-white"}
                  `}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden text-3xl text-gray-100"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden text-gray-100 bg-black/60 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = active === id;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActive(id); // 🔹 mobilde de tıklayınca aktif yap
                      closeMenu();
                    }}
                    className={`
                      text-lg py-2 border-b border-white/10 last:border-b-0
                      ${isActive ? "text-blue-400" : ""}
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
