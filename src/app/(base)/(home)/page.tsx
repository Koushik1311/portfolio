import AboutMe from "@/components/Home/AboutMe";
import Experience from "@/components/Home/Experience";
import Hero from "@/components/Home/Hero";
import Project from "@/components/Home/Project";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <AboutMe />

      {/* Experience Section */}
      <Experience />

      {/* Project Section */}
      <Project />

      {/* Get in Touch Section */}
    </main>
  );
}
