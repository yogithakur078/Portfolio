import React from "react";
import DotPattern from "./DotPattern";

const HeroSection = React.memo(() => {
  return (
    <section className="relative mt-15.5 flex flex-col lg:flex-row w-full lg:w-304.5 items-start justify-between pl-6 lg:pl-24 gap-8 lg:gap-0">
      
      {/* Left Content */}
      <div className="mt-8 lg:mt-18.5 w-full lg:w-134.25">
        <h1 className="text-2xl md:text-3xl lg:text-[42px] font-semibold leading-tight md:leading-10 lg:leading-15.75 text-white">
          Yogesh is a <span className="text-[#C778DD]">React Developer</span> and{" "}
          <span className="text-[#C778DD]">front-end developer</span>
        </h1>

        <p className="mt-6 md:mt-8 lg:mt-8 w-full lg:w-115.75 text-base md:text-lg lg:text-[16px] leading-6 lg:leading-6.25 text-[#ABB2BF]">
          He crafts responsive websites where technologies meet creativity
        </p>

        <button className="mt-6 lg:mt-6 border border-[#C778DD] px-4 lg:px-4 py-2 lg:py-2 text-base lg:text-[16px] font-medium text-white hover:bg-[#C778DD] hover:text-black transition-colors">
          Contact me!!
        </button>
      </div>

      {/* Right Image Area */}
      <div className="relative mr-0 lg:mr-8 w-full lg:w-114.25 hidden lg:block">
        {/* purple squares */}
        <div className="absolute left-6 top-24 z-1">
          <div className="relative h-21 w-21 border border-[#C778DD]">
            <div className="absolute left-13 -top-4.5 h-21 w-21 border border-[#C778DD]" />
          </div>
        </div>

        {/* dots */}
        <div className="absolute right-1.5 top-61.25 z-3">
          <DotPattern count={25} className="grid-cols-5" />
        </div>

        {/* main image */}
        <img
          src="/Image.png"
          alt="hero"
          loading="lazy"
          className="relative z-2 h-96.5 w-114.25 object-contain"
        />

        {/* bottom status */}
        <div className="absolute -bottom-2 left-4.25 z-4 flex h-9.25 w-100.5 items-center border border-[#ABB2BF] bg-[#282C33] px-2">
          <span className="mr-2.5 h-4 w-4 bg-[#C778DD]" />
          <p className="text-[16px] text-[#ABB2BF]">
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