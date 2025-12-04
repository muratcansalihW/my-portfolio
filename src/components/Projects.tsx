"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tech: string;
  image: string;
  demo: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "E-commerce",
    subtitle: "React e-commerce application",
    description:
      "A complete e-commerce flow including product listing, detail pages and fake login / register forms. Built with React and custom CSS to practice component structure, state handling and UI layout without external frameworks.",
    tech: "React · JavaScript · CSS",
    image: "/thumb_image/e_commerce_image.png",
    demo: "https://react-ecommerce-seven-eta.vercel.app/products",
    github: "https://github.com/muratcansalihW/react-ecommerce",
  },
  {
    title: "Font Selector",
    subtitle: "Live font preview tool",
    description:
      "A browser-based font playground where users can preview text in dozens of fonts, switch between characters with scroll and track previously tested fonts using a simple history module.",
    tech: "JavaScript · HTML · CSS",
    image: "/thumb_image/font-selector.png",
    demo: "https://font-selector-alpha.vercel.app/",
    github: "https://github.com/muratcansalihW/font_selector",
  },
  {
    title: "List Job",
    subtitle: "Job listing interface",
    description:
      "A job posting UI inspired by LinkedIn. Users can create job listings including title, description and visuals, and then view them on the main page using component-driven rendering and Tailwind styling.",
    tech: "React · Tailwind CSS",
    image: "/thumb_image/list-job.png",
    demo: "https://list-job-six.vercel.app/",
    github: "https://github.com/muratcansalihW/ListJob",
  },
  {
    title: "BMW Landing Clone",
    subtitle: "BMW Türkiye landing page clone",
    description:
      "A React-based recreation of the BMW Türkiye landing page focusing on layout precision, hero structure, responsive design and UI behavior to mirror a real automotive brand’s visual experience.",
    tech: "React · JavaScript · CSS",
    image: "/thumb_image/bmw-clone.png",
    demo: "https://bmwlanding.netlify.app/",
    github: "https://github.com/muratcansalihW/BmwLandingClone",
  },
  {
    title: "OSA Football Landing",
    subtitle: "Football team marketing site",
    description:
      "A landing page built with semantic HTML, CSS and JavaScript for a football organization. Contains hero sections, content blocks, schedules and call-to-action components designed with a clean marketing-oriented layout.",
    tech: "HTML · CSS · JavaScript",
    image: "/thumb_image/osa.png",
    demo: "https://main--muratcan-osa.netlify.app/",
    github: "https://github.com/muratcansalihW/osa",
  },
  {
    title: "Subscription Manager",
    subtitle: "Subscription tracking dashboard",
    description:
      "A modern subscription management dashboard where users can add, remove, toggle and categorize their monthly or yearly subscriptions. Features include LocalStorage persistence, active/passive status, real-time monthly cost calculation, responsive UI and custom design built with pure CSS.",
    tech: "React · Vite · JavaScript · CSS",
    image: "/thumb_image/subscription-manager.png",
    demo: "https://subscription-management-tau.vercel.app/",
    github: "https://github.com/muratcansalihW/subscription_management",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative w-full h-48 md:h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT + BUTTON AREA SPLIT */}
              <div className="p-5 flex flex-col justify-between h-full flex-1">
                {/* Top content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  {project.subtitle && (
                    <p className="text-sm text-gray-500">{project.subtitle}</p>
                  )}

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {project.tech}
                  </p>
                </div>

                {/* Bottom buttons */}
                <div className="mt-5 flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-medium"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition text-sm font-medium"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
