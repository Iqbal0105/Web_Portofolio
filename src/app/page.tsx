import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { getGithubProjects } from "@/lib/github";

export default async function Home() {
  // Fetch projects server-side with Next.js ISR (Incremental Static Regeneration)
  const projects = await getGithubProjects();

  return (
    <div className="flex-grow">
      {/* Hero Intro Section */}
      <Hero />

      {/* About Background Section */}
      <About />

      {/* Skills Grid Section */}
      <Skills />

      {/* Curated Projects (Client-filtered grid) */}
      <Projects initialProjects={projects} />

      {/* Contact Panel & Footer Section */}
      <Contact />
    </div>
  );
}
