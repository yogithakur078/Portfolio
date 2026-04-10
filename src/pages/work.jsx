import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Tour to Tuscany",
      description: "Travel website for tour to tuscany",
      tech: ["Bootstrap", "JavaScript"],
      image: "🏢",
      github: "https://github.com/yogithakur078",
      live: "bootstrap-project-liard-nine.vercel.app"
    },
    {
      id: 2,
      title: "Monks Event",
      description: "Event website for monks event management",
      tech: ["html", "css", "js"],
      image: "🌐",
     github: "https://github.com/yogithakur078",
      live: "https://monksenvents.vercel.app"
    },
    {
      id: 3,
      title: "Tantulika",
      description: "E-commerce website for fashion brand tantulika",
      tech: ["React" ,  "Tailwind CSS", "Redux" ,"API Integration"],
      image: "🛒",
      github: "https://github.com/yogithakur078",
      live: "https://tantulika-store.vercel.app/"
    },
    {
      id: 4,
      title: "Green velley",
      description: "Organic & Handmade Products 🌱",
       tech: ["html", "css", "js"],
      image: "🌱",
      github: "https://github.com/yogithakur078",
      live: "https://green-velley-kamrunag.vercel.app/"
    }
  ]

  return (
    <div className="bg-[#1f242d] min-h-screen pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-purple-400 text-sm">#</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Work</h1>
          <div className="w-12 h-1 bg-linear-to-r from-purple-500 to-pink-500"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-linear-to-br from-[#2a2f3a] to-[#1f242d] rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {/* Project Content */}
              <div className="p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="text-5xl mb-4">{project.image}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 grow">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600/80 hover:bg-purple-600 text-white rounded text-sm transition-all duration-300"
                  >
                    <FiGithub size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 border border-purple-500/50 hover:border-purple-500 text-purple-300 hover:text-purple-200 rounded text-sm transition-all duration-300"
                  >
                    <FiExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default Work