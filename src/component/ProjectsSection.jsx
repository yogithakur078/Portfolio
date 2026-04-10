import React from "react";

const projects = [
  {
    title: "Tour to Tuscany",
    tech: "Bootstrap CSS JavaScript",
    desc: "   Travel website for tour to tuscany, beautiful destinations and travel packages.",
    img: "/bg-img1.jpg",
    live: "bootstrap-project-liard-nine.vercel.app",
    code: "https://github.com/yogithakur078",
  },
  {
    title: "Tantulika",
    tech: "React Tailwind Node.js",
    desc: "E-commerce website for fashion brand tantulika",
    img: "/raj.png",
    live: "https://tantulika-store.vercel.app/",
    code: "https://github.com/yogithakur078",
  },
  {
    title: "Monks Event",
    tech: "html css js",
    desc: "Event website for monks event management",
    img: "/talking.jpg",
    live: "https://monksenvents.vercel.app",
    code: "https://github.com/yogithakur078",
  },
];

const ProjectsSection = React.memo(() => {
  return (
    <section className="mt-30 pl-6 lg:pl-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 pr-6 lg:pr-24">
        <div className="flex items-center gap-4">
          <h2 className="text-white text-xl md:text-2xl lg:text-[24px] font-semibold">
            <span className="text-[#C778DD]">#</span>projects
          </h2>
          <div className="hidden sm:block h-px w-50 md:w-75 bg-[#C778DD]" />
        </div>

        <span className="text-[#ABB2BF] text-[14px] cursor-pointer">
          View all {">"}
        </span>
      </div>

      {/* Cards */}
      <div className="mt-12 flex gap-4 overflow-x-auto pb-4">
        {projects.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full sm:w-[330px] border border-[#ABB2BF] bg-[#282C33] transition-transform hover:scale-105"
          >
            {/* Image with Link */}
            <a href={item.live} target="_blank" rel="noopener noreferrer">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="h-45 w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>

            {/* Tech */}
            <div className="border-t border-[#ABB2BF] px-3 py-2 text-xs text-[#ABB2BF]">
              {item.tech}
            </div>

            {/* Content */}
            <div className="px-3 py-3">
              <h3 className="text-white text-lg md:text-xl font-medium">
                {item.title}
              </h3>
              <p className="mt-2 text-[#ABB2BF] text-sm md:text-base">
                {item.desc}
              </p>

              {/* Buttons */}
              <div className="mt-3 flex gap-2">
                <a href={item.live} target="_blank" rel="noopener noreferrer">
                  <button className="border border-[#C778DD] px-3 py-1 text-white text-xs md:text-sm hover:bg-[#C778DD] hover:text-black transition-colors">
                    Live {"≥"}
                  </button>
                </a>

                <a href={item.code} target="_blank" rel="noopener noreferrer">
                  <button className="border border-[#ABB2BF] px-3 py-1 text-[#ABB2BF] text-xs md:text-sm hover:bg-[#ABB2BF] hover:text-black transition-colors">
                    Cached {"≥"}
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