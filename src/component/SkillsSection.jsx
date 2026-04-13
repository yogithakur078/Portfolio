import React from "react";
import DotPattern from "./DotPattern";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SkillsSection = React.memo(() => {
  const [ref, isVisible] = useScrollAnimation({
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className={`mt-20 md:mt-[120px] px-4 sm:px-6 lg:pl-24 relative fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold">
          <span className="text-[#C778DD]">#</span>skills
        </h2>
        <div className="hidden sm:block h-px w-40 sm:w-[200px] md:w-[300px] bg-[#C778DD]" />
      </div>

      <div className="mt-8 md:mt-12 flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-12">
        {/* Left Graphics */}
        <div
          className={`relative w-full lg:w-[320px] h-[200px] sm:h-[250px] lg:h-[300px] slide-in-left ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="absolute left-2 sm:left-0 top-2 sm:top-5">
            <DotPattern count={20} className="grid-cols-5 sm:grid-cols-6" />
          </div>

          <div className="absolute left-[80px] sm:left-[120px] top-0 w-[60px] h-[60px] sm:w-[86px] sm:h-[86px] border border-[#ABB2BF]" />

          <div className="absolute left-[140px] sm:left-[220px] top-[60px] sm:top-20">
            <DotPattern count={20} className="grid-cols-5 sm:grid-cols-6" />
          </div>

          <div className="absolute left-[40px] sm:left-[80px] bottom-[20px] sm:bottom-[40px]">
            <div className="relative w-[60px] h-[60px] sm:w-[86px] sm:h-[86px] border border-[#C778DD]">
              <div className="absolute left-[25px] sm:left-[40px] -top-3 sm:-top-5 w-[60px] h-[60px] sm:w-[86px] sm:h-[86px] border border-[#C778DD]" />
            </div>
          </div>

          <div className="absolute right-2 sm:right-5 bottom-2 sm:bottom-5 w-8 h-8 sm:w-10 sm:h-10 border border-[#ABB2BF]" />
        </div>

        {/* Right Skills Boxes */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 justify-items-start">
            <div
              className={`border border-[#ABB2BF] w-full max-w-[178px] hover:border-[#C778DD] transition-colors stagger-item ${
                isVisible ? "visible" : ""
              }`}
            >
              <p className="border-b border-[#ABB2BF] px-2 py-1.5 text-white text-sm">
                Languages
              </p>
              <p className="px-2 py-2 text-[#ABB2BF] text-xs sm:text-sm">
                JavaScript
              </p>
            </div>

            <div
              className={`border border-[#ABB2BF] w-full max-w-[178px] hover:border-[#C778DD] transition-colors stagger-item ${
                isVisible ? "visible" : ""
              }`}
            >
              <p className="border-b border-[#ABB2BF] px-2 py-1.5 text-white text-sm">
                Other
              </p>
              <p className="px-2 py-2 text-[#ABB2BF] text-xs sm:text-sm">
                HTML5 CSS3
              </p>
            </div>

            <div
              className={`border border-[#ABB2BF] w-full max-w-[178px] hover:border-[#C778DD] transition-colors stagger-item ${
                isVisible ? "visible" : ""
              }`}
            >
              <p className="border-b border-[#ABB2BF] px-2 py-1.5 text-white text-sm">
                CSS Framework
              </p>
              <p className="px-2 py-2 text-[#ABB2BF] text-xs sm:text-sm">
                Bootstrap <br />
                Tailwind
              </p>
            </div>

            <div
              className={`border border-[#ABB2BF] w-full max-w-[178px] hover:border-[#C778DD] transition-colors stagger-item ${
                isVisible ? "visible" : ""
              }`}
            >
              <p className="border-b border-[#ABB2BF] px-2 py-1.5 text-white text-sm">
                Frameworks
              </p>
              <p className="px-2 py-2 text-[#ABB2BF] text-xs sm:text-sm">
                React
              </p>
            </div>

            <div
              className={`border border-[#ABB2BF] w-full max-w-[178px] hover:border-[#C778DD] transition-colors stagger-item ${
                isVisible ? "visible" : ""
              }`}
            >
              <p className="border-b border-[#ABB2BF] px-2 py-1.5 text-white text-sm">
                Tools
              </p>
              <p className="px-2 py-2 text-[#ABB2BF] text-xs sm:text-sm">
                VS Code <br />
                Figma <br />
                Git
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;