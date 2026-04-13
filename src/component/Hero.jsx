import React from "react";
import { Link } from "react-router-dom";
import DotPattern from "./DotPattern";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const HeroSection = React.memo(() => {
  const [ref, isVisible] = useScrollAnimation({
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className={`relative mt-10 md:mt-[62px] flex flex-col lg:flex-row w-full items-start justify-between px-4 sm:px-6 lg:pl-24 gap-6 sm:gap-8 lg:gap-0 fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Left Content */}
      <div className="mt-6 sm:mt-8 lg:mt-[74px] w-full lg:w-auto">
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold leading-snug sm:leading-tight md:leading-10 lg:leading-[63px] text-white stagger-item ${
            isVisible ? "visible" : ""
          }`}
        >
          Yogesh is a <span className="text-[#C778DD]">React Developer</span> and{" "}
          <span className="text-[#C778DD]">Front-End Developer</span>
        </h1>

        <p
          className={`mt-4 sm:mt-6 md:mt-8 lg:mt-8 w-full text-sm sm:text-base lg:text-[16px] leading-6 lg:leading-[25px] text-[#ABB2BF] stagger-item ${
            isVisible ? "visible" : ""
          }`}
        >
          He builds responsive and user-friendly websites where technology meets creativity.
        </p>

        <Link
          to="/contact"
          className={`inline-block mt-4 sm:mt-6 lg:mt-6 border border-[#C778DD] px-3 sm:px-4 py-2 text-sm sm:text-base lg:text-[16px] font-medium text-white hover:bg-[#C778DD] hover:text-black transition-all duration-300 transform hover:scale-105 stagger-item ${
            isVisible ? "visible" : ""
          }`}
        >
          Contact me
        </Link>
      </div>

      {/* Right Image Area */}
      <div
        className={`relative w-full max-w-[457px] mt-8 sm:mt-10 lg:mt-0 mx-auto lg:mx-0 slide-in-right ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="absolute left-4 sm:left-6 top-16 sm:top-24 z-[1] hidden sm:block">
          <div className="relative h-[60px] w-[60px] sm:h-[84px] sm:w-[84px] border border-[#C778DD]">
            <div className="absolute left-[35px] sm:left-[52px] -top-[12px] sm:-top-[18px] h-[60px] w-[60px] sm:h-[84px] sm:w-[84px] border border-[#C778DD]" />
          </div>
        </div>

        <div className="absolute right-[6px] top-[180px] sm:top-[245px] z-[3] hidden sm:block">
          <DotPattern count={25} className="grid-cols-5" />
        </div>

        <img
          src="/Image.png"
          alt="hero"
          loading="lazy"
          className="relative z-[2] w-full h-auto max-h-[300px] sm:max-h-[386px] object-contain"
        />

        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-[17px] lg:translate-x-0 z-[4] flex min-h-[37px] w-[90%] sm:w-fit items-center border border-[#ABB2BF] bg-[#282C33] px-2 py-2">
          <span className="mr-[10px] h-4 w-4 shrink-0 bg-[#C778DD]" />
          <p className="text-[13px] sm:text-[16px] text-[#ABB2BF]">
            Currently working on{" "}
            <span className="font-semibold text-white">Portfolio</span>
          </p>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;