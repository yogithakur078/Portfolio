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
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`mt-20 md:mt-[120px] px-4 sm:px-6 lg:px-12 overflow-x-hidden fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 min-w-0">
        <div className="flex items-center gap-4 min-w-0 w-full sm:w-auto">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold shrink-0">
            <span className="text-[#C778DD]">#</span>projects
          </h2>
          <div className="hidden sm:block h-px flex-1 max-w-[300px] bg-[#C778DD]" />
        </div>

        <span
          className={`text-[#ABB2BF] text-xs sm:text-[14px] cursor-pointer hover:text-white transition-colors whitespace-nowrap stagger-item ${
            isVisible ? "visible" : ""
          }`}
        >
          View all {">"}
        </span>
      </div>

      {/* Cards */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 min-w-0">
        {projects.map((item, i) => (
          <div
            key={i}
            className={`w-full min-w-0 overflow-hidden border border-[#ABB2BF] bg-[#282C33] transition-all duration-300 hover:border-[#C778DD] hover:shadow-lg hover:shadow-purple-500/20 stagger-item ${
              isVisible ? "visible" : ""
            }`}
          >
            <a href={item.live} target="_blank" rel="noopener noreferrer">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="block h-40 sm:h-[180px] w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>

            <div className="border-t border-[#ABB2BF] px-3 py-2 text-xs text-[#ABB2BF] break-words">
              {item.tech}
            </div>

            <div className="px-3 py-3 min-w-0">
              <h3 className="text-white text-base sm:text-lg md:text-xl font-medium break-words">
                {item.title}
              </h3>

              <p className="mt-2 text-[#ABB2BF] text-xs sm:text-sm md:text-base leading-5 break-words">
                {item.desc}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <a href={item.live} target="_blank" rel="noopener noreferrer">
                  <button
                    type="button"
                    className="border border-[#C778DD] px-3 py-1 text-white text-xs hover:bg-[#C778DD] hover:text-black transition-colors"
                  >
                    Live
                  </button>
                </a>

                <a href={item.code} target="_blank" rel="noopener noreferrer">
                  <button
                    type="button"
                    className="border border-[#ABB2BF] px-3 py-1 text-[#ABB2BF] text-xs hover:bg-[#ABB2BF] hover:text-black transition-colors"
                  >
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