import React from "react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = React.memo(() => {
  return (
    <footer className="mt-36 border-t border-[#ABB2BF] px-4 md:px-6 lg:px-24 pt-8 pb-6">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">

        {/* Left */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="logo"
              loading="lazy"
              className="h-4 w-4 object-contain"
            />
            <span className="text-base font-medium text-white">Yogesh</span>
            <span className="text-base text-[#ABB2BF]">
              Yogithaku078@gmail.com
            </span>
          </div>

          <p className="mt-4 text-base text-white">
            Front-end developer
          </p>
        </div>

        {/* Right */}
        <div>
          <p className="text-2xl font-medium text-white">Media</p>

          <div className="mt-3 flex items-center gap-4 text-[#ABB2BF]">

            {/* GitHub */}
            <a
              href="https://github.com/yogithakur078"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg hover:text-white transition" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-lg hover:text-red-500 transition" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yogeshthakur078"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-lg hover:text-blue-500 transition" />
            </a>

          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-base text-[#ABB2BF]">
        © Copyright 2026. Made by Yogesh
      </p>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;