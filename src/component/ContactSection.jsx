import React from "react";
import { FaDiscord, FaEnvelope } from "react-icons/fa";
import DotPattern from "./DotPattern";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ContactSection = React.memo(() => {
  const [ref, isVisible] = useScrollAnimation({
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className={`relative mt-20 md:mt-28 px-4 sm:px-6 lg:pl-24 lg:pr-24 fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold text-white">
          <span className="text-[#C778DD]">#</span>contacts
        </h2>
        <div className="hidden sm:block h-px w-[120px] sm:w-[100px] md:w-[160px] bg-[#C778DD]" />
      </div>

      <div className="mt-8 md:mt-[45px] flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 lg:gap-0">
        {/* Left Text */}
        <div
          className={`relative w-full lg:w-[505px] slide-in-left ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="absolute -left-[58px] top-[26px] hidden lg:block">
            <DotPattern count={12} className="grid-cols-3" />
          </div>

          <p
            className={`text-sm sm:text-base leading-[26px] text-[#ABB2BF] stagger-item ${
              isVisible ? "visible" : ""
            }`}
          >
            I’m interested in freelance opportunities. However, if you have
            any other request or question, don’t hesitate to contact me.
          </p>
        </div>

        {/* Message Box */}
        <div
          className={`w-full lg:w-[300px] border border-[#ABB2BF] p-3 sm:p-4 hover:border-[#C778DD] transition-colors slide-in-right ${
            isVisible ? "visible" : ""
          }`}
        >
          <p
            className={`text-sm sm:text-base font-semibold text-white stagger-item ${
              isVisible ? "visible" : ""
            }`}
          >
            Message me here
          </p>

          <div className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-[#ABB2BF]">
            <div
              className={`flex items-center gap-2 stagger-item ${
                isVisible ? "visible" : ""
              }`}
            >
              <FaDiscord className="text-xs sm:text-sm" />
              <span className="truncate">Yogithakur078</span>
            </div>

            <div
              className={`flex items-center gap-2 stagger-item ${
                isVisible ? "visible" : ""
              }`}
            >
              <FaEnvelope className="text-xs sm:text-sm" />
              <span className="truncate">yogithakur078@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;