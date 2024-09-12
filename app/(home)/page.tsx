import Experience from "@/components/home/Experience";
import Intro from "@/components/home/Intro";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import SocialAccounts from "@/components/home/SocialAccounts";

export default function page() {
  return (
    <main className="container mx-auto mt-6">
      <Intro />
      <SocialAccounts />
      <Projects />
      {/* Experience */}
      <Experience />
      {/* Skills */}
      <Skills />
      {/* Testimonials */}
    </main>
  );
}
