import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Work = () => {
  const [ref, isVisible] = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "Tour to Tuscany",
      description: "Travel website for Tour to Tuscany",
      tech: ["Bootstrap", "JavaScript"],
      image: "🏢",
      github: "https://github.com/yogithakur078",
      live: "https://bootstrap-project-liard-nine.vercel.app",
    },
    {
      id: 2,
      title: "Monks Event",
      description: "Event website for Monks Event Management",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "🌐",
      github: "https://github.com/yogithakur078",
      live: "https://monksenvents.vercel.app",
    },
    {
      id: 3,
      title: "Tantulika",
      description: "E-commerce website for fashion brand Tantulika",
      tech: ["React", "Tailwind CSS", "Redux", "API Integration"],
      image: "🛒",
      github: "https://github.com/yogithakur078",
      live: "https://tantulika-store.vercel.app/",
    },
    {
      id: 4,
      title: "Green Valley",
      description: "Organic & Handmade Products 🌱",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "🌱",
      github: "https://github.com/yogithakur078",
      live: "https://green-velley-kamrunag.vercel.app/",
    },
  ];

  return (
    <div className="bg-[#1f242d] min-h-screen pt-16 sm:pt-20 pb-16 sm:pb-20 overflow-x-hidden">
      <div className="w-screen overflow-x-hidden max-w-[100vw]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-purple-400 text-sm">#</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            My Work
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 ${
            isVisible ? "visible" : ""
          }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-[#2a2f3a] to-[#1f242d] rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="p-4 sm:p-6 h-full flex flex-col">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{project.image}</div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 sm:gap-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600/80 hover:bg-purple-600 text-white rounded text-xs sm:text-sm transition-all duration-300"
                  >
                    <FiGithub size={14} className="sm:w-4 sm:h-4" />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-purple-500/50 hover:border-purple-500 text-purple-300 hover:text-purple-200 rounded text-xs sm:text-sm transition-all duration-300"
                  >
                    <FiExternalLink size={14} className="sm:w-4 sm:h-4" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            Want to see more of my work?
          </p>
          <a
            href="/contact"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 text-sm sm:text-base"
          >
            Get In Touch
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Work;