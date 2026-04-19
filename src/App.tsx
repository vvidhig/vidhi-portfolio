import React from 'react';
import Nav from './components/Nav';
import HeroSection from './sections/HeroSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import EducationSection from './sections/EducationSection';
import HobbiesSection from './sections/HobbiesSection';

function App() {
  return (
    <div className="relative min-h-screen bg-wine">
      <Nav />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <HobbiesSection />
      </main>
    </div>
  );
}

export default App;
