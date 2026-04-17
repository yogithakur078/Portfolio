import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FiDownload } from "react-icons/fi";

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

const About = () => {
  const [ref, isVisible] = useScrollAnimation({
    triggerOnce: true,
  });

  return (
    <div className="bg-[#1f242d] overflow-x-hidden pt-16 sm:pt-20 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mb-12 sm:mb-16">
          <span className="text-purple-400 text-sm">#</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            About Me
          </h1>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 fade-in ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className={`lg:col-span-2 slide-in-left ${isVisible ? "visible" : ""}`}>
            <div className="space-y-4 sm:space-y-6">
              <div className={`stagger-item ${isVisible ? "visible" : ""}`}>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Hi, I'm Yogesh 👋
                </h2>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  I'm a frontend developer based in Chandigarh, India. I build
                  responsive and user-friendly web interfaces using React.js,
                  JavaScript, Tailwind CSS, and Bootstrap.
                </p>
              </div>

              <div className={`stagger-item ${isVisible ? "visible" : ""}`}>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  I enjoy creating clean, modern, and responsive interfaces.
                  I have worked on multiple frontend projects including e-commerce,
                  tourism, and event websites.
                </p>
              </div>

              <div className={`stagger-item ${isVisible ? "visible" : ""}`}>
                <a
                  href="/resume_yogesh_thakur.pdf"
                  download
                  className="inline-flex items-center gap-2 border border-purple-500 px-4 py-2 text-white hover:bg-purple-500 hover:text-black transition-all duration-300"
                >
                  <FiDownload size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-1 slide-in-right ${isVisible ? "visible" : ""}`}>
            <div className="bg-gradient-to-br from-[#2a2f3a] to-[#1f242d] rounded-lg border border-purple-500/20 p-6 sm:p-8">
              <h3 className={`text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 stagger-item ${isVisible ? "visible" : ""}`}>
                Quick Facts
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className={`stagger-item ${isVisible ? "visible" : ""}`}>
                  <p className="text-2xl sm:text-3xl font-bold text-purple-400">4+</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Frontend Projects</p>
                </div>

                <div className={`stagger-item ${isVisible ? "visible" : ""}`}>
                  <p className="text-2xl sm:text-3xl font-bold text-purple-400">12+</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Reusable Components</p>
                </div>

                <div className={`stagger-item ${isVisible ? "visible" : ""}`}>
                  <p className="text-2xl sm:text-3xl font-bold text-purple-400">100%</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Frontend Focused</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mb-12 sm:mb-16 fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className={`text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 stagger-item ${isVisible ? "visible" : ""}`}>
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-[#2a2f3a] to-[#1f242d] rounded-lg border border-purple-500/20 p-4 sm:p-6 stagger-item ${
                  isVisible ? "visible" : ""
                }`}
              >
                <h3 className="text-base sm:text-lg font-bold text-purple-400 mb-3 sm:mb-4">
                  {skillGroup.category}
                </h3>

                <ul className="space-y-2 sm:space-y-3">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <li
                      key={skillIdx}
                      className="text-xs sm:text-sm text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500 shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;