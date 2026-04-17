import React from "react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = React.memo(() => {
  return (
    <footer className="mt-28 md:mt-36 border-t border-[#ABB2BF] px-4 sm:px-6 lg:px-12 pt-6 sm:pt-8 pb-4 sm:pb-6 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-8 min-w-0">

        {/* Left */}
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap min-w-0">
            <img
              src="/logo.png"
              alt="logo"
              loading="lazy"
              className="h-3 sm:h-4 w-3 sm:w-4 object-contain shrink-0"
            />

            <span className="text-sm sm:text-base font-medium text-white shrink-0">
              Yogesh
            </span>

            <span className="text-xs sm:text-base text-[#ABB2BF] break-all">
              yogithaku078@gmail.com
            </span>
          </div>

          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-white">
            Front-end developer
          </p>
        </div>

        {/* Right */}
        <div className="min-w-0">
          <p className="text-lg sm:text-2xl font-medium text-white">
            Media
          </p>

          <div className="mt-2 sm:mt-3 flex items-center gap-3 sm:gap-4 text-[#ABB2BF] flex-wrap">
            
            <a
              href="https://github.com/yogithakur078"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithub className="text-base sm:text-lg" />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <FaYoutube className="text-base sm:text-lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/yogeshthakur078"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="text-base sm:text-lg" />
            </a>

          </div>
        </div>
      </div>

      <p className="mt-6 sm:mt-12 text-center text-xs sm:text-base text-[#ABB2BF] break-words">
        © Copyright 2026. Made by Yogesh
      </p>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;