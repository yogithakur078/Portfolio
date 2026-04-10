import React from "react";
import { FaDiscord, FaEnvelope } from "react-icons/fa";
import DotPattern from "./DotPattern";

const ContactSection = React.memo(() => {
  return (
    <section className="relative mt-28 pl-6 lg:pl-24 pr-6 lg:pr-24">
      <div className="flex items-center gap-4">
        <h2 className="text-xl md:text-2xl lg:text-[24px] font-semibold text-white">
          <span className="text-[#C778DD]">#</span>contacts
        </h2>
        <div className="hidden sm:block h-px w-25 md:w-40 bg-[#C778DD]" />
      </div>

      <div className="mt-11.25 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0">
        {/* Left Text */}
        <div className="relative w-full lg:w-126.25">
          <div className="absolute -left-14.5 top-6.5 hidden lg:block">
            <DotPattern count={12} className="grid-cols-3" />
          </div>

          <p className="text-base leading-6.5 text-[#ABB2BF]">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>

        {/* Message Box */}
        <div className="mr-0 lg:mr-17 w-full lg:w-75 border border-[#ABB2BF] p-4">
          <p className="text-base font-semibold text-white">Message me here</p>

          <div className="mt-4 space-y-2 text-base text-[#ABB2BF]">
            <div className="flex items-center gap-[8px]">
              <FaDiscord className="text-xs md:text-sm" />
              <span>Yogithakur078</span>
            </div>

            <div className="flex items-center gap-[8px]">
              <FaEnvelope className="text-xs md:text-sm" />
              <span>Yogithakur078@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;