import AboutMe from "@/components/Home/AboutMe";
import ContactMe from "@/components/Home/ContactMe";
import Experiences from "@/components/Home/Experiences";
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
      <Experiences />

      {/* Project Section */}
      <Project />

      {/* Get in Touch Section */}
      <ContactMe />
    </main>
  );
}
