import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";
import { Certifications } from "../components/Certifications";
import { ResumeSection } from "../components/ResumeSection";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navyatha Hegde — Java Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Navyatha Hegde, a Java Full Stack Developer building scalable Spring Boot backends, RESTful APIs, and full-stack React applications.",
      },
      {
        property: "og:title",
        content: "Navyatha Hegde — Java Full Stack Developer",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Navyatha Hegde, a Java Full Stack Developer building scalable Spring Boot backends, RESTful APIs, and full-stack React applications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const scrollToResume = () => {
    const el = document.getElementById("resume");
    if (el) {
      const navHeight = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c16] text-[#e2e8f0] font-sans antialiased overflow-x-hidden flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenResumeModal={scrollToResume} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with dynamic typewriter & developer illustration */}
        <Hero onOpenResume={scrollToResume} />

        {/* 2. Biography & Core Engineering Pillars */}
        <About />

        {/* 3. Work & Internship Experience */}
        <Experience />

        {/* 4. Projects Showcase & Deep Dive Modals */}
        <Projects />

        {/* 5. Categorized & Searchable Skills Matrix */}
        <Skills />

        {/* 6. Education & Academic Distinction */}
        <Education />

        {/* 7. Verified Certifications & Badges */}
        <Certifications />

        {/* 8. Downloadable Resume Section with Print & ATS preview */}
        <ResumeSection />

        {/* 9. Contact Form & Inquiries */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
