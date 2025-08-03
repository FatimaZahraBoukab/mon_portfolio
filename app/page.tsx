
import Header from './components/Common/Header';
import HeroSection from './components/Sections/HeroSection';
import AboutSection from './components/Sections/AboutSection';
import EducationSection from "./components/Sections/EducationSection"
import SkillsSection from './components/Sections/SkillsSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import ContactSection from './components/Sections/ContactSection';
import FooterSection from './components/Sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <EducationSection/>
      <SkillsSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}