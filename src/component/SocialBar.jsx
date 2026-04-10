import React from "react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

const SocialBar = () => {
  return (
    <div className="absolute left-[17px] top-[0px] flex flex-col items-center">
      
      <div className="h-[191px] w-[1px] bg-[#ABB2BF]" />

      <div className="mt-[8px] flex flex-col gap-[14px] text-[#ABB2BF]">

        {/* GitHub */}
        <a
          href="https://github.com/yogithakur078"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer text-[18px] hover:text-white hover:scale-110 transition" />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/"  // apna channel link daal
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="cursor-pointer text-[18px] hover:text-red-500 hover:scale-110 transition" />
        </a>

        {/* LinkedIn */}
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