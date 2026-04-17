import React from "react";

import HeroSection from "../component/Hero";
import ProjectsSection from "../component/ProjectsSection";
import SkillsSection from "../component/SkillsSection";
import AboutSection from "../component/AboutSection";
import ContactSection from "../component/ContactSection";
import Footer from "../component/Footer";

const Home = React.memo(() => {
  return (
    <div className="bg-[#1f242d] min-h-screen overflow-hidden">
      
       <div className="w-screen overflow-x-hidden max-w-[100vw]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
});

Home.displayName = "Home";

export default Home;