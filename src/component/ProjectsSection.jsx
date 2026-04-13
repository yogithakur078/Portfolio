import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
  {
    title: "Tour to Tuscany",
    tech: "Bootstrap CSS JavaScript",
    desc: "Travel website for Tour to Tuscany, with beautiful destinations and travel packages.",
    img: "/bg-img1.jpg",
    live: "https://bootstrap-project-liard-nine.vercel.app",
    code: "https://github.com/yogithakur078",
  },
  {
    title: "Tantulika",
    tech: "React Tailwind Node.js",
    desc: "E-commerce website for fashion brand Tantulika.",
    img: "/raj.png",
    live: "https://tantulika-store.vercel.app/",
    code: "https://github.com/yogithakur078",
  },
  {
    title: "Monks Event",
    tech: "HTML CSS JavaScript",
    desc: "Event website for Monks Event Management.",
    img: "/talking.jpg",
    live: "https://monksenvents.vercel.app",
    code: "https://github.com/yogithakur078",
  },
];

const ProjectsSection = React.memo(() => {
  const [ref, isVisible] = useScrollAnimation({
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className={`mt-20 md:mt-[120px] px-4 sm:px-6 lg:pl-24 fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 pr-4 sm:pr-6 lg:pr-24">
        <div className="flex items-center gap-4">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold">
            <span className="text-[#C778DD]">#</span>projects
          </h2>
          <div className="hidden sm:block h-px w-40 sm:w-[200px] md:w-[300px] bg-[#C778DD]" />
        </div>

        <span
          className={`text-[#ABB2BF] text-xs sm:text-[14px] cursor-pointer hover:text-white transition-colors stagger-item ${
            isVisible ? "visible" : ""
          }`}
        >
          View all {">"}
        </span>
      </div>

      {/* Cards */}
      <div className="mt-8 md:mt-12 flex gap-3 sm:gap-4 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#C778DD] scrollbar-track-[#282C33]">
        {projects.map((item, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[330px] border border-[#ABB2BF] bg-[#282C33] transition-all duration-300 hover:border-[#C778DD] hover:shadow-lg hover:shadow-purple-500/20 snap-center stagger-item ${
              isVisible ? "visible" : ""
            }`}
          >
            {/* Image with Link */}
            <a href={item.live} target="_blank" rel="noopener noreferrer">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="h-40 sm:h-[180px] w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>

            {/* Tech */}
            <div className="border-t border-[#ABB2BF] px-2 sm:px-3 py-1.5 sm:py-2 text-xs text-[#ABB2BF]">
              {item.tech}
            </div>

            {/* Content */}
            <div className="px-2 sm:px-3 py-2 sm:py-3">
              <h3 className="text-white text-base sm:text-lg md:text-xl font-medium">
                {item.title}
              </h3>
              <p className="mt-1.5 sm:mt-2 text-[#ABB2BF] text-xs sm:text-sm md:text-base leading-5">
                {item.desc}
              </p>

              {/* Buttons */}
              <div className="mt-2 sm:mt-3 flex gap-1.5 sm:gap-2">
                <a href={item.live} target="_blank" rel="noopener noreferrer">
                  <button className="border border-[#C778DD] px-2 sm:px-3 py-1 text-white text-xs hover:bg-[#C778DD] hover:text-black transition-colors">
                    Live
                  </button>
                </a>

                <a href={item.code} target="_blank" rel="noopener noreferrer">
                  <button className="border border-[#ABB2BF] px-2 sm:px-3 py-1 text-[#ABB2BF] text-xs hover:bg-[#ABB2BF] hover:text-black transition-colors">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;