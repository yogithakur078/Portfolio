import React from "react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

const SocialBar = () => {
  return (
    <div className="static md:absolute md:left-[17px] md:top-0 flex flex-row md:flex-col items-center gap-3 md:gap-0">
      {/* Line */}
      <div className="hidden md:block h-[191px] w-[1px] bg-[#ABB2BF]" />

      {/* Icons */}
      <div className="flex flex-row md:flex-col items-center gap-3 md:mt-[8px] md:gap-[14px] text-[#ABB2BF]">
        <a
          href="https://github.com/yogithakur078"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer text-[18px] hover:text-white hover:scale-110 transition" />
        </a>

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="cursor-pointer text-[18px] hover:text-red-500 hover:scale-110 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/yogeshthakur078"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="cursor-pointer text-[18px] hover:text-blue-500 hover:scale-110 transition" />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;