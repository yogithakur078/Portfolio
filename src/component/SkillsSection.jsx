import React from "react";
import DotPattern from "./DotPattern";

const SkillsSection = React.memo(() => {
  return (
    <section className="mt-30 pl-6 lg:pl-24 relative">
      {/* Header */}
      <div className="flex items-center gap-4">
        <h2 className="text-white text-xl md:text-2xl lg:text-[24px] font-semibold">
          <span className="text-[#C778DD]">#</span>skills
        </h2>
        <div className="hidden sm:block h-px w-50 md:w-75 bg-[#C778DD]" />
      </div>

      <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:gap-20">
        
        {/* Left Graphics - Hidden on mobile */}
        <div className="relative w-full lg:w-100 h-50 lg:h-75 hidden lg:block">
          {/* dots */}
          <div className="absolute left-0 top-5">
            <DotPattern count={30} className="grid-cols-6" />
          </div>

          <div className="absolute left-30 top-0 w-21.5 h-21.5 border border-[#ABB2BF]" />

          <div className="absolute left-55 top-20">
            <DotPattern count={30} className="grid-cols-6" />
          </div>

          {/* purple squares */}
          <div className="absolute left-20 bottom-10">
            <div className="relative w-21.5 h-21.5 border border-[#C778DD]">
              <div className="absolute left-10 -top-5 w-21.5 h-21.5 border border-[#C778DD]" />
            </div>
          </div>

          <div className="absolute right-5 bottom-5 w-10 h-10 border border-[#ABB2BF]" />
        </div>

        {/* Right Skills Boxes */}
        <div className="flex flex-col md:flex-row gap-4 lg:gap-4 w-full lg:w-auto">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4 lg:gap-4">
            <div className="border border-[#ABB2BF] w-full md:w-44.5">
              <p className="border-b border-[#ABB2BF] px-2 py-1 text-white">
                Languages
              </p>
              <p className="px-2 py-2 text-[#ABB2BF] text-sm">
                JavaScript
              </p>
            </div>

            <div className="border border-[#ABB2BF] w-full md:w-44.5">
              <p className="border-b border-[#ABB2BF] px-2 py-1 text-white">
                Other
              </p>
              <p className="px-2 py-2 text-[#ABB2BF] text-sm">
                HTML5 CSS3
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 lg:gap-4">
            <div className="border border-[#ABB2BF] w-full md:w-44.5">
              <p className="border-b border-[#ABB2BF] px-2 py-1 text-white">
                CSS Framework
              </p>
              <p className="px-2 py-2 text-[#ABB2BF] text-sm">
                Bootstrap <br />
                Tailwind
              </p>
            </div>

            <div className="border border-[#ABB2BF] w-full md:w-44.5">
              <p className="border-b border-[#ABB2BF] px-2 py-1 text-white">
                Frameworks
              </p>
              <p className="px-2 py-2 text-[#ABB2BF] text-sm">
                React
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="border border-[#ABB2BF] w-full md:w-44.5 h-fit">
            <p className="border-b border-[#ABB2BF] px-2 py-1 text-white">
              Tools
            </p>
            <p className="px-2 py-2 text-[#ABB2BF] text-sm">
              VSCode <br />
              Figma <br />
              Git
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;