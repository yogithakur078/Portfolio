import React from "react";
import { FiDownload } from "react-icons/fi";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      category: "Styling",
      items: ["Tailwind CSS", "Bootstrap", "Responsive Web Design", "UI Components"],
    },
    {
      category: "State Management",
      items: ["Redux", "React Context API", "Component-Based Architecture", "API Integration"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Vercel", "VS Code"],
    },
  ];

  return (
    <div className="bg-[#1f242d] min-h-screen pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-purple-400 text-sm">#</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Bio Section */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Hi, I'm Yogesh 👋
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  I'm a frontend developer based in Chandigarh, India. I build
                  responsive and user-friendly web interfaces using React.js,
                  JavaScript, Tailwind CSS, and Bootstrap.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">My Journey</h3>
                <p className="text-gray-400 leading-relaxed">
                  I started my journey with a strong interest in web development
                  and have worked on multiple frontend projects including
                  e-commerce, tourism, event, and organic farm websites. I enjoy
                  creating clean, modern, and responsive user interfaces.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">What I Do</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">→</span>
                    <span>Build responsive and interactive frontend websites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">→</span>
                    <span>Create reusable UI components with React.js</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">→</span>
                    <span>Manage application state using Redux and Context API</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">→</span>
                    <span>Integrate REST APIs and improve user experience</span>
                  </li>
                </ul>
              </div>

              {/* Resume Download */}
              <div>
                <a
                  href="/resume-yogesh-thakur.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  <FiDownload size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#2a2f3a] to-[#1f242d] rounded-lg border border-purple-500/20 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-3xl font-bold text-purple-400">4+</p>
                  <p className="text-gray-400 text-sm">Frontend Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-400">12+</p>
                  <p className="text-gray-400 text-sm">Reusable React Components</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-400">2+</p>
                  <p className="text-gray-400 text-sm">REST APIs Integrated</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-400">100%</p>
                  <p className="text-gray-400 text-sm">Frontend Focused</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#2a2f3a] to-[#1f242d] rounded-lg border border-purple-500/20 p-6"
              >
                <h3 className="text-lg font-bold text-purple-400 mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <li
                      key={skillIdx}
                      className="text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            Want to collaborate or have any questions?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;