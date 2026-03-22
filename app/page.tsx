import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import JobFocusSection from "./components/JobFocusSection";
import HighlightsSection from "./components/HighlightsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ResearchSection from "./components/ResearchSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <JobFocusSection />
        <HighlightsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ResearchSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
