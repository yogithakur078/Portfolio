import React from "react";
import DotPattern from "./DotPattern";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const AboutSection = React.memo(() => {
  const [ref, isVisible] = useScrollAnimation({
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className={`relative overflow-x-hidden mt-20 md:mt-[120px] px-4 sm:px-6 lg:pl-24 lg:pr-0 fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="flex flex-col lg:flex-row items-start justify-between lg:pr-24 gap-6 sm:gap-8 lg:gap-8">
        {/* Left Content */}
        <div
          className={`w-full lg:w-[516px] slide-in-left ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center gap-4">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold text-white">
              <span className="text-[#C778DD]">#</span>about-me
            </h2>
            <div className="hidden sm:block h-px w-40 sm:w-[150px] md:w-60 bg-[#C778DD]" />
          </div>

          <div className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-[16px] leading-6 lg:leading-[26px] text-[#ABB2BF]">
            <p className={`stagger-item ${isVisible ? "visible" : ""}`}>
              Hello, I'm Yogesh!
            </p>

            <p className={`mt-4 sm:mt-6 stagger-item ${isVisible ? "visible" : ""}`}>
              I'm a self-taught front-end developer based in Chandigarh, India.
              I can develop responsive websites from scratch and turn them into
              modern, user-friendly web experiences.
            </p>

            <p className={`mt-4 sm:mt-6 stagger-item ${isVisible ? "visible" : ""}`}>
              Transforming my creativity and knowledge into websites has been my
              passion for over a year. I have worked on various frontend
              projects to build modern and responsive user interfaces.
            </p>
          </div>

          <button
            className={`mt-4 sm:mt-[27px] border border-[#C778DD] px-3 sm:px-4 py-2 text-sm sm:text-[16px] font-medium text-white hover:bg-[#C778DD] hover:text-black transition-all duration-300 transform hover:scale-105 stagger-item ${
              isVisible ? "visible" : ""
            }`}
          >
            Read more →
          </button>
        </div>

        {/* Right Image Area */}
        <div
          className={`relative overflow-hidden w-full max-w-[360px] mx-auto lg:mx-0 h-[260px] sm:h-[320px] lg:h-[420px] slide-in-right ${
            isVisible ? "visible" : ""
          }`}
        >
          {/* dots */}
          <div className="absolute left-4 sm:left-11 top-4 sm:top-[46px] z-[3]">
            <DotPattern count={10} className="grid-cols-4 sm:grid-cols-5" />
          </div>

          <div className="absolute right-2 sm:right-0 top-[90px] sm:top-[150px] z-[3]">
            <DotPattern count={10} className="grid-cols-4 sm:grid-cols-5" />
          </div>

          <div className="absolute left-[40px] sm:left-[76px] top-[150px] sm:top-[232px] z-[3]">
            <DotPattern count={8} className="grid-cols-4" />
          </div>

          {/* image */}
          <img
            src="/about.png"
            alt="about"
            loading="lazy"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-14 lg:translate-x-0 z-[2] w-[200px] sm:w-[240px] lg:w-[260px] h-auto object-contain"
          />

          {/* line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-[58px] lg:translate-x-0 h-px w-[200px] sm:w-[240px] lg:w-[272px] bg-[#C778DD]" />
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;