import React from "react";
 
import HeroSection from "../component/Hero";
import ProjectsSection from "../component/ProjectsSection";
import SkillsSection from "../component/SkillsSection";
import AboutSection from "../component/AboutSection";
import ContactSection from "../component/ContactSection";
import Footer from "../component/Footer";

const Home = React.memo(() => {
  return (
    <div className="bg-[#1f242d] min-h-screen">
      
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
});

Home.displayName = "Home";

export default Home;