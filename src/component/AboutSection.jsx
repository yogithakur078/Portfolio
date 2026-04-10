import React from "react";
import DotPattern from "./DotPattern";

const AboutSection = React.memo(() => {
  return (
    <section className="relative mt-30 pl-6 lg:pl-24 pr-6 lg:pr-0">
      <div className="flex flex-col lg:flex-row items-start justify-between lg:pr-24 gap-8">
        {/* Left Content */}
        <div className="w-full lg:w-129">
          <div className="flex items-center gap-4">
            <h2 className="text-xl md:text-2xl lg:text-[24px] font-semibold text-white">
              <span className="text-[#C778DD]">#</span>about-me
            </h2>
            <div className="hidden sm:block h-px w-37.5 md:w-60 bg-[#C778DD]" />
          </div>

          <div className="mt-6 text-[16px] leading-6.5 text-[#ABB2BF]">
            <p>Hello, i’m Yogesh!</p>

            <p className="mt-6">
              I'm a self-taught front-end developer based in Chandigarh, India. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>

            <p className="mt-6">
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
          </div>

          <button className="mt-6.75 border border-[#C778DD] px-4 py-2 text-[16px] font-medium text-white hover:bg-[#C778DD] hover:text-black transition-colors">
            Read more {"->"}
          </button>
        </div>

        {/* Right Image Area */}
        <div className="relative mr-0 lg:mr-11 h-105 w-full lg:w-90 hidden lg:block">
          <div className="absolute left-11 top-11.5 z-3">
            <DotPattern count={15} className="grid-cols-5" />
          </div>

          <div className="absolute -right-2.5 top-37.5 z-3">
            <DotPattern count={15} className="grid-cols-5" />
          </div>

          <div className="absolute left-19 top-58 z-3">
            <DotPattern count={12} className="grid-cols-4" />
          </div>

          <img
            src="/about.png"
            alt="about"
            loading="lazy"
            className="absolute bottom-0 left-14 z-2 h-105 w-65 object-contain"
          />

          <div className="absolute bottom-0 left-14.5 h-px w-68 bg-[#C778DD]" />
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;