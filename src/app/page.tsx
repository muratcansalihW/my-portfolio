import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* EXPERIENCE */}
      <Experience />

      {/* SKILLS */}
      <Skills />

      {/* PROJECTS */}
      <Projects />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
