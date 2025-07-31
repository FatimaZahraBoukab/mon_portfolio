
import Header from './components/Common/Header';
import HeroSection from './components/Sections/HeroSection';
import AboutSection from './components/Sections/AboutSection';
import EducationSection from "./components/Sections/EducationSection"
import SkillsSection from './components/Sections/SkillsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <EducationSection/>
      <SkillsSection/>
    </div>
  );
}